using System;

namespace SeedAPI.Models
{
    public abstract class BaseModel : IBaseModel
    {
        public string Id { get; set; }
        public DateTime? CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public bool IsDeleted { get; set; }
    }
}
