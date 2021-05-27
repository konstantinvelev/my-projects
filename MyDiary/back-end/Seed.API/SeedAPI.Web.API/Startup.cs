using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SeedAPI.Web.API.App_Start;
using Microsoft.Extensions.Configuration;
using System;

namespace SeedAPI.Web.API
{
    public class Startup
    {
        private readonly IConfiguration configuration;
        private MvcOptions mvcOptions;

        public Startup(IConfiguration configuration)
        {
            this.mvcOptions = new MvcOptions();
            this.configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            // MvcOptions.EnableEndpointRouting = false;
            DependencyInjectionConfig.AddScope(services);
            JwtTokenConfig.AddAuthentication(services, configuration);
            DBContextConfig.Initialize(services, configuration);

            services.AddMvc(x => x.EnableEndpointRouting = false);

            services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                    builder.SetIsOriginAllowed(_ => true)
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });

          
        }

        [Obsolete]
        public void Configure(IApplicationBuilder app, Microsoft.AspNetCore.Hosting.IHostingEnvironment env, IServiceProvider svp)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            DBContextConfig.Initialize(configuration, env, svp);

            app.UseStaticFiles();
            app.UseRouting();
            app.UseCors("CorsPolicy");

            app.UseAuthentication();
            app.UseMvc();
        }
    }
}
