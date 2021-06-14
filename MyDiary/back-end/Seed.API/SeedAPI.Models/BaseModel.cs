using System;
using System.ComponentModel.DataAnnotations;

namespace SeedAPI.Models
{
    public abstract class BaseModel : IBaseModel
    {
        [Required]
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public DateTime? CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public bool IsDeleted { get; set; } = false;
    }
}
