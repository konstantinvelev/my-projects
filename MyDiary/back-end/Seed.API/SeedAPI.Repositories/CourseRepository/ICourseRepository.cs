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
        bool Delete(string id);
        List<Course> GetAll();
    }
}
