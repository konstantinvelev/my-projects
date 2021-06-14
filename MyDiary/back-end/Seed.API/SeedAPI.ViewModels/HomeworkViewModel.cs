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
        public DateTime DateTime { get; set; }
        public bool IsPassed { get; set; } = false;
        public Grade? Grade { get; set; }
    }
}
