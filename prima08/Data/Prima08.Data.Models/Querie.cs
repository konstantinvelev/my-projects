namespace Prima08.Data.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    using Prima08.Data.Common.Models;

    public class Querie : BaseDeletableModel<string>
    {
        public Querie()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        [Required]
        public string Number { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        public string Question { get; set; }
    }
}
