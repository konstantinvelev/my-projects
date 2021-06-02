﻿using SeedAPI.Commons;
using System;
using System.ComponentModel.DataAnnotations;

namespace SeedAPI.Models
{
    public class Homework:BaseModel
    {
        [Required]
        [StringLength(400, ErrorMessage = "Description" + ErrorMessages.LongerText)]
        public string Description { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime DateTime { get; set; }
        public bool IsPassed { get; set; } = false;
        public Grade? Grade { get; set; }
        public string CourseId { get; set; }
        public Course Course { get; set; }
        public string UserId { get; set; }
        public User User { get; set; }
    }
}