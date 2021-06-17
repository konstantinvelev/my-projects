using SeedAPI.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SeedAPI.Repositories.CourseRepository
{
    public interface ICourseRepository 
    {
        Task<Course> Save(Course domain);
        Task<bool> Update(Course domain);
        Task<bool> Delete(string id);
        Task<List<Course>> GetAll();
        Task<Course> GetByName(string courseName);
        Task<Course> GetById(string id);
    }
}
