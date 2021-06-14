using SeedAPI.Models;
using SeedAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SeedAPI.Services.CourseServices
{
    public interface ICourseService
    {
        Course Create(Course domain);
        bool Update(Course domain);
        List<Course> GetAll();
        Task<bool> Delete(string id);
        Course GetByName(string courseName);
    }
}
