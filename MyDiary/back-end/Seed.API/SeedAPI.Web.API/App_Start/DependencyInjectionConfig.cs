using Microsoft.Extensions.DependencyInjection;
using SeedAPI.Models.Context;
using SeedAPI.Repositories.UserRepositories;
using SeedAPI.Services.UserServices;
namespace SeedAPI.Web.API.App_Start
{
    public class DependencyInjectionConfig
    {
        public static void AddScope(IServiceCollection services)
        {
            //services.AddScoped<IApplicationContext, ApplicationContext>();
            services.AddScoped<IUserMap, UserMap>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IUserRepository, UserRepository>();
        }
    }
}
