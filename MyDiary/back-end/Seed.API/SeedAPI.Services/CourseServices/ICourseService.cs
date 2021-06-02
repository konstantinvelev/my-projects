using SeedAPI.Models;
using SeedAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace SeedAPI.Services.CourseServices
{
    public interface ICourseService
    {
        Course Create(Course domain);
        bool Update(Course domain);
        List<Course> GetAll();
        bool Delete(string id);
    }
}
