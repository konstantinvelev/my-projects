
using SeedAPI.Commons;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SeedAPI.Models
{
    public class Course : BaseModel
    {
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
        [Required]
        public string UserId { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<Exam> Exams { get; set; } = new List<Exam>();
        public virtual ICollection<Homework> Homeworks { get; set; } = new List<Homework>();
    }
}