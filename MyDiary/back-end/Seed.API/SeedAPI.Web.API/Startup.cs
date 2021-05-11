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
        private static MvcOptions mvcOptions;
        private readonly IConfiguration configuration;

        public void ConfigureServices(IServiceCollection services)
        {
            mvcOptions.EnableEndpointRouting = false;
            DependencyInjectionConfig.AddScope(services);
            JwtTokenConfig.AddAuthentication(services, configuration);
            DBContextConfig.Initialize(services, configuration);
            services.AddMvc();
        }

        [Obsolete]
        public void Configure(IApplicationBuilder app, Microsoft.AspNetCore.Hosting.IHostingEnvironment env, IServiceProvider svp)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            DBContextConfig.Initialize(configuration, env, svp);
            app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());
            app.UseAuthentication();
            app.UseMvc();
        }
    }
}
