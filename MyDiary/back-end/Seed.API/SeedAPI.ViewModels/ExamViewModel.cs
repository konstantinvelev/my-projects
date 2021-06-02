using SeedAPI.Commons;
using System;

namespace SeedAPI.ViewModels
{
    public class ExamViewModel
    {
        public DateTime DateTime { get; set; }
        public bool IsPassed { get; set; } = false;
        public Grade? Grade { get; set; }
    }
}
