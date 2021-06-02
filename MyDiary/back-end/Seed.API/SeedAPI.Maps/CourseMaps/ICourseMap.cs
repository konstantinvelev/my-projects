using SeedAPI.ViewModels;
using System.Collections.Generic;

namespace SeedAPI.Maps.CourseMaps
{
    public interface ICourseMap
    {
        CourseViewModel Create(CourseViewModel viewModel);
        bool Update(CourseViewModel viewModel);
        bool Delete(string id);
        IEnumerable<CourseViewModel> GetAll();
    }
}