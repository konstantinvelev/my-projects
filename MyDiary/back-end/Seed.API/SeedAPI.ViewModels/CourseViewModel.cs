using SeedAPI.Commons;
using System;

namespace SeedAPI.ViewModels
{
    public class CourseViewModel
    {
        public string id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string dateTime { get; set; }
        public string grade { get; set; }
        public bool isPassed { get; set; }
        public string userId { get; set; }
    }
}
