using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SeedAPI.Web.API.App_Start;
using Microsoft.Extensions.Configuration;
using System;
using SeedAPI.Models.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;
using SeedAPI.Services.UserServices;
using AutoMapper;
using SeedAPI.Repositories.CourseRepository;
using SeedAPI.Maps.CourseMaps;
using SeedAPI.Services.CourseServices;
using SeedAPI.Repositories;

namespace SeedAPI.Web.API
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {

            DependencyInjectionConfig.AddScope(services);
            JwtTokenConfig.AddAuthentication(services, Configuration);
            DBContextConfig.Initialize(services, Configuration);
            services.AddMvc();

            services.AddDbContext<ApplicationContext>(
            options => options.UseSqlServer(this.Configuration.GetConnectionString("DefaultConnection")));

            services.AddSingleton(Configuration);

            services.AddScoped(typeof(IDeletableEntityRepository<>), typeof(EfDeletableEntityRepository<>));
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));

            // Application services
            //services.AddTransient<ICourseService, CourseService>();
            //services.AddTransient<ICourseRepository, CourseRepository>();

        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var dbContext = serviceScope.ServiceProvider.GetRequiredService<ApplicationContext>();

                if (env.IsDevelopment())
                {
                    dbContext.Database.Migrate();
                }

            }

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            
            app.UseCors(x => x
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());
            app.UseHttpsRedirection();

            app.UseAuthentication();
            app.UseRouting();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute("default", "{controller=Home}/{action=Index}");
            });

        }
    }
}

