using SeedAPI.Models;
using SeedAPI.Repositories.CourseRepository;
using SeedAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SeedAPI.Services.CourseServices
{
    public class CourseService : ICourseService
    {
        private readonly ICourseRepository courseRepository;

        public CourseService(ICourseRepository courseRepository)
        {
            this.courseRepository = courseRepository;
        }
       public Course Create(Course domain)
        {
            return this.courseRepository.Save(domain).Result;
        }

        public async Task<bool> Delete(string id)
        {
            return await this.courseRepository.Delete(id);
        }

        public List<Course> GetAll()
        {
            return this.courseRepository.GetAll().Result;
        }

        public bool Update(Course course)
        {
            return this.courseRepository.Update(course).Result;
        }
    }
}
