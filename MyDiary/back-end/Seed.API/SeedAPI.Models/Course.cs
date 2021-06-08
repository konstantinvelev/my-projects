
using SeedAPI.Commons;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SeedAPI.Models
{
    public class Course : BaseModel
    {
        public Course()
        {
            this.Homeworks = new List<Homework>();
            this.Exams = new List<Exam>();
        }

        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Name" + ErrorMessages.BetweenThreeAndFifty)]
        public string Name { get; set; }

        [StringLength(400, ErrorMessage = "Description" + ErrorMessages.LongerText)]
        public string Description { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime DateTime { get; set; }
        public Grade? Grade { get; set; }
        public bool IsPassed { get; set; }
        public string UserId { get; set; }
        public User User { get; set; }
        public ICollection<Exam> Exams { get; set; }
        public ICollection<Homework> Homeworks { get; set; }
    }
}