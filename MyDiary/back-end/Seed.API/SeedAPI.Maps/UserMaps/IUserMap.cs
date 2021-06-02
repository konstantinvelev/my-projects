using SeedAPI.Models;
using SeedAPI.ViewModels;
using System.Collections.Generic;

namespace SeedAPI.Web.API.App_Start
{
    public interface IUserMap
    {
        UserViewModel Create(UserViewModel viewModel);
         bool Update(UserViewModel viewModel);
         bool Delete(string id);
        IEnumerable<UserViewModel> GetAll();
    }
}