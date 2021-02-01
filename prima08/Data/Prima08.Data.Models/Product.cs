namespace Prima08.Data.Models
{
    using System.ComponentModel.DataAnnotations;

    using Prima08.Data.Common.Models;

    public class Product : BaseDeletableModel<int>
    {
        [Required]
        [MaxLength(60)]
        public string Title { get; set; }

        [Required]
        public string ImageUrl { get; set; }

        [Required]
        [MaxLength(int.MaxValue)]
        public string Description { get; set; }
    }
}
