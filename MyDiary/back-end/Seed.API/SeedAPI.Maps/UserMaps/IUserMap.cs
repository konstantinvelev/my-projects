using SeedAPI.ViewModels;
using System.Collections.Generic;

namespace SeedAPI.Maps.UserMaps
{
    public interface IUserMap
    {
        UserViewModel Create(UserViewModel viewModel);
        bool Update(UserViewModel viewModel);
        bool Delete(string id);
        UserViewModel LogInUser(LoginViewModel userInfo);
        IEnumerable<UserViewModel> GetAll();
    }
}