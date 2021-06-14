using SeedAPI.Commons;
using System;

namespace SeedAPI.ViewModels
{
    public class ExamViewModel
    {
        public string Title { get; set; }
        public string CourseName { get; set; }
        public string DateTime { get; set; }
        public bool IsPassed { get; set; } = false;
        public string Grade { get; set; }
        public string UserId { get; set; }
        public string CourseId { get; set; }
    }
}
