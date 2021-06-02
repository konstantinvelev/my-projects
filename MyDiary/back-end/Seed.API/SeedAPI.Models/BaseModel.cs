using System;
using System.Collections.Generic;
using System.Text;

namespace SeedAPI.Models
{
    public class BaseModel
    {
        public string Id { get; set; }
        public DateTime? CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public bool IsDeleted { get; set; }
    }
}
