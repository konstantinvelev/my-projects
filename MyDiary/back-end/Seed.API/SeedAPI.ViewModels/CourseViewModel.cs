using SeedAPI.Commons;
using System;
using System.Collections.Generic;

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
        public string createdOn { get; set; }
        public IEnumerable<HomeworkViewModel> homeworks { get; set; } = new List<HomeworkViewModel>();
        public IEnumerable<ExamViewModel> exams { get; set; } = new List<ExamViewModel>();
    }
}
