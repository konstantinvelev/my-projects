using SeedAPI.Commons;
using System;
using System.ComponentModel.DataAnnotations;

namespace SeedAPI.Models
{
    public class Exam : BaseModel
    {
        [StringLength(30, MinimumLength = 3, ErrorMessage = "Title" + ErrorMessages.BetweenThreeAndThirty)]
        public string Title { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime DateTime { get; set; }
        public bool IsPassed { get; set; } = false;
        public Grade? Grade { get; set; }
        [Required]
        public string CourseId { get; set; }
        public virtual Course Course { get; set; }
        [Required]
        public string UserId { get; set; }
        public virtual User User { get; set; }
    }
}