using Microsoft.Extensions.DependencyInjection;
using SeedAPI.Maps.CourseMaps;
using SeedAPI.Maps.ExamMaps;
using SeedAPI.Maps.HomeworkMaps;
using SeedAPI.Maps.UserMaps;
using SeedAPI.Models.Context;
using SeedAPI.Repositories;
using SeedAPI.Repositories.CourseRepository;
using SeedAPI.Repositories.ExamRepository;
using SeedAPI.Repositories.HomeworkRepository;
using SeedAPI.Repositories.UserRepositories;
using SeedAPI.Services.CourseServices;
using SeedAPI.Services.ExamServices;
using SeedAPI.Services.HomeworkServices;
using SeedAPI.Services.UserServices;
namespace SeedAPI.Web.API.App_Start
{
    public class DependencyInjectionConfig
    {
        public static void AddScope(IServiceCollection services)
        {
            services.AddScoped<IApplicationContext, ApplicationContext>();

            services.AddScoped<IUserMap, UserMap>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IUserRepository, UserRepository>();

            services.AddScoped<ICourseMap, CourseMap>();
            services.AddScoped<ICourseService, CourseService>();
            services.AddScoped<ICourseRepository, CourseRepository>();

            services.AddScoped<IExamMap, ExamMap>();
            services.AddScoped<IExamService, ExamService>();
            services.AddScoped<IExamRepository, ExamRepository>();

            services.AddScoped<IHomeworkMap, HomeworkMap>();
            services.AddScoped<IHomeworkService, HomeworkService>();
            services.AddScoped<IHomeworkRepository, HomeworkRepository>();
        }
    }
}
