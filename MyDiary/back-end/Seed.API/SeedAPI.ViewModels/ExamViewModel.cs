using SeedAPI.Commons;
using System;
using System.Collections.Generic;

namespace SeedAPI.ViewModels
{
    public class ExamViewModel
    {
        public string id { get; set; }
        public string title { get; set; }
        public string courseName { get; set; }
        public string dateTime { get; set; }
        public bool isPassed { get; set; } = false;
        public string grade { get; set; }
        public string userId { get; set; }
        public string? courseId { get; set; }
        public string createdOn { get; set; }
        public CourseViewModel course { get; set; }
        public UserViewModel user { get; set; }
    }
}
