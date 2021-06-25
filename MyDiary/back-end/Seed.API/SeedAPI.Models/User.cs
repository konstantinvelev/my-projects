
using SeedAPI.Commons;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SeedAPI.Models
{
    public class User : BaseModel
    {
        [Required]
        [StringLength(30, MinimumLength = 3, ErrorMessage = "Username" + ErrorMessages.BetweenThreeAndThirty)]
        public string Username { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Email" + ErrorMessages.BetweenThreeAndFifty)]
        [EmailAddress(ErrorMessage = "Email" + ErrorMessages.ValidInput)]
        public string Email { get; set; }

        public string UserInfo { get; set; }

        [Required]
        public string Password { get; set; }

        public virtual ICollection<Course> Courses { get; set; } = new List<Course>();
        public virtual ICollection<Homework> Homeworks { get; set; } = new List<Homework>();
        public virtual ICollection<Exam> Exams { get; set; } = new List<Exam>();
    }
}
