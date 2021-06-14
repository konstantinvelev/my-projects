using AutoMapper;
using SeedAPI.Maps.UserMaps;
using SeedAPI.Models;
using SeedAPI.Services.UserServices;
using SeedAPI.ViewModels;
using System.Collections.Generic;

namespace SeedAPI.Maps.UserMaps
{
    public class UserMap : IUserMap
    {
        private IUserService userService;
        private IMapper mapper;

        public UserMap(IUserService service)
        {
            userService = service;
            this.mapper = GetMap();
        }
        public UserViewModel Create(UserViewModel viewModel)
        {
            User user = ViewModelToDomain(viewModel);
            return DomainToViewModel(this.userService.Create(user));
        }
        public bool Update(UserViewModel viewModel)
        {
            User user = ViewModelToDomain(viewModel);
            return userService.Update(user);
        }
        public UserViewModel LogInUser(LoginViewModel userInfo)
        {
            return DomainToViewModel(this.userService.LogInUser(userInfo));
        }
        public bool Delete(string id)
        {
            return userService.Delete(id);
        }
        public IEnumerable<UserViewModel> GetAll()
        {
            return DomainToViewModel(userService.GetAll());
        }
        public UserViewModel DomainToViewModel(User user)
        {
            var viewModel = this.mapper.Map<User, UserViewModel>(user);
            return viewModel;
        }
        public List<UserViewModel> DomainToViewModel(List<User> domain)
        {
            List<UserViewModel> model = new List<UserViewModel>();
            foreach (User of in domain)
            {
                model.Add(DomainToViewModel(of));
            }
            return model;
        }
        public User ViewModelToDomain(UserViewModel officeViewModel)
        {
            var user = this.mapper.Map<UserViewModel, User>(officeViewModel);
            return user;
        }

        private static IMapper GetMap()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<User, UserViewModel>();
                cfg.CreateMap<UserViewModel, User>();
            });

            var maper = config.CreateMapper();
            return maper;
        }

    }
}
