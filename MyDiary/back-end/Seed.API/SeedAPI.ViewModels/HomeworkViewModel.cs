using SeedAPI.Commons;
using System;
using System.Collections.Generic;
using System.Text;

namespace SeedAPI.ViewModels
{
    public class HomeworkViewModel
    {
        public string id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string dateTime { get; set; }
        public bool isPassed { get; set; } = false;
        public string grade { get; set; }
        public string userId { get; set; }
        public UserViewModel user { get; set; }
        public string courseId { get; set; }
        public CourseViewModel course { get; set; }
    }
}
