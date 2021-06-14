using System;

namespace SeedAPI.Models
{
    public interface IBaseModel
    {
        string Id { get; set; }
        DateTime? CreatedOn { get; set; }
        DateTime? UpdatedOn { get; set; }
        bool IsDeleted { get; set; }
    }
}