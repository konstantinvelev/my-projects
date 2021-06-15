using SeedAPI.Commons;
using System;
using System.Collections.Generic;
using System.Text;

namespace SeedAPI.ViewModels
{
    public class HomeworkViewModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string DateTime { get; set; }
        public bool IsPassed { get; set; } = false;
        public string Grade { get; set; }
        public string UserId { get; set; }
        public string CourseId { get; set; }
    }
}
