using SeedAPI.Commons;
using System;

namespace SeedAPI.ViewModels
{
    public class CourseViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string DateTime { get; set; }
        public string Grade { get; set; }
        public bool IsPassed { get; set; }
        public string UserId { get; set; }
        public string CourseId { get; set; }
    }
}
