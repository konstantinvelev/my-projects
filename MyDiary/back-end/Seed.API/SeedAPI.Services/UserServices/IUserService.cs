using System;
using System.Collections.Generic;
using System.Text;
using SeedAPI.Models;
using SeedAPI.ViewModels;

namespace SeedAPI.Services.UserServices
{
   public interface IUserService
    {
        User Create(User domain);
        bool Update(User domain);
        List<User> GetAll();
        bool Delete(string id);
    }
}
