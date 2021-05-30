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

            //services.AddTransient<IUserService, UserService>();

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

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute("default", "{controller=Home}/{action=Index}");
            });

        }
    }
}
//private readonly IConfiguration configuration;
//private MvcOptions mvcOptions;

//public Startup(IConfiguration configuration)
//{
//    this.mvcOptions = new MvcOptions();
//    this.configuration = configuration;
//}

//public void ConfigureServices(IServiceCollection services)
//{
//    // MvcOptions.EnableEndpointRouting = false;
//    DependencyInjectionConfig.AddScope(services);
//    JwtTokenConfig.AddAuthentication(services, configuration);
//    DBContextConfig.Initialize(services, configuration);

//    services.AddMvc(x => x.EnableEndpointRouting = false);

//    services.AddCors(options =>
//    {
//        options.AddDefaultPolicy(builder =>
//            builder.SetIsOriginAllowed(_ => true)
//            .AllowAnyMethod()
//            .AllowAnyHeader()
//            .AllowCredentials());
//    });

//    services.AddDbContext<ApplicationContext>(
//        options => options.UseSqlServer(this.configuration.GetConnectionString("DefaultConnection")));

//    services.Configure<CookiePolicyOptions>(
//        options =>
//        {
//            options.CheckConsentNeeded = context => true;
//            options.MinimumSameSitePolicy = SameSiteMode.None;
//        });

//    services.AddControllersWithViews();
//    services.AddRazorPages();

//    services.AddSingleton(this.configuration);


//}
//public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
//{

//    // Seed data on application startup
//    using (var serviceScope = app.ApplicationServices.CreateScope())
//    {
//        var dbContext = serviceScope.ServiceProvider.GetRequiredService<ApplicationContext>();

//        if (env.IsDevelopment())
//        {
//            dbContext.Database.Migrate();
//        }

//    }

//    if (env.IsDevelopment())
//    {
//        app.UseDeveloperExceptionPage();
//    }
//    else
//    {
//        app.UseExceptionHandler("/Home/Error");
//        app.UseHsts();
//    }

//    app.UseStatusCodePagesWithReExecute("/Home/Unfound");

//    app.UseHttpsRedirection();

//    app.UseRouting();
//}



