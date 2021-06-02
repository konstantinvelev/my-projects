
using SeedAPI.Commons;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SeedAPI.Models
{
    public class User : BaseModel
    {
        public User()
        {
            this.Courses = new List<Course>();
            this.Homeworks = new List<Homework>();
            this.Exams = new List<Exam>();
        }

        [Required]
        [StringLength(30,MinimumLength = 3,ErrorMessage = "Username" + ErrorMessages.BetweenThreeAndThirty)]
        public string Username { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 3 , ErrorMessage = "Email" + ErrorMessages.BetweenThreeAndFifty)]
        [EmailAddress(ErrorMessage = "Email" + ErrorMessages.ValidInput)]
        public string Email { get; set; }

        [StringLength(250)]
        public string UserInfo { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Password" + ErrorMessages.BetweenThreeAndFifty)]
        public string Password { get; set; }

        public ICollection<Course> Courses { get; set; }
        public ICollection<Homework> Homeworks { get; set; }
        public ICollection<Exam> Exams{ get; set; }
    }
}
