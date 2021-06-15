using System;
using System.ComponentModel.DataAnnotations;

namespace SeedAPI.Models
{
    public interface IBaseModel
    {
        [Required]
        string Id { get; set; }
        DateTime? CreatedOn { get; set; }
        DateTime? UpdatedOn { get; set; }
        bool IsDeleted { get; set; }
    }
}