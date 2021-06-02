using System;
using System.Collections.Generic;
using System.Text;

namespace SeedAPI.Models.EntityBase
{
    public abstract class BaseModel
    {
        public DateTime? Created { get; set; }
        public DateTime? Updated { get; set; }
        public bool Deleted { get; set; }
        public BaseModel()
        {
            Deleted = false;
        }
        public virtual int IdentityID()
        {
            return 0;
        }
        public virtual object[] IdentityID(bool dummy = true)
        {
            return new List<object>().ToArray();
        }
    }
}
