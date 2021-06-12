using SeedAPI.Commons;
using System;

namespace SeedAPI.ViewModels
{
    public class CourseViewModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime DateTime { get; set; }
        public Grade? Grade { get; set; }
        public bool IsPassed { get; set; }
    }
}
