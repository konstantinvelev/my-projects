using SeedAPI.Models;
using SeedAPI.Repositories.UserRepositories;
using SeedAPI.ViewModels;
using System.Collections.Generic;

namespace SeedAPI.Services.UserServices
{
    public class UserService : IUserService
    {
        private IUserRepository repository;
        public UserService(IUserRepository userRepository)
        {
            repository = userRepository;
        }
        public User Create(User domain)
        {
            return repository.Save(domain).Result;
        }
        public bool Update(User domain)
        {
            return repository.Update(domain).Result;
        }
        public bool Delete(string id)
        {
            return repository.Delete(id).Result;
        }
        public List<User> GetAll()
        {
            return repository.GetAll();
        }
        public User LogInUser(LoginViewModel domain)
        {
            return repository.CheckAndLogIn(domain);
        }
    }
}

