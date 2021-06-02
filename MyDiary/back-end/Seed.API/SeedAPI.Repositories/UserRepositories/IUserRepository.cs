using SeedAPI.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SeedAPI.Repositories.UserRepositories
{
    public interface IUserRepository
    {
        Task<User> Save(User domain);
        Task<bool> Update(User domain);
        Task<bool> Delete(string id);
        List<User> GetAll();
    }
}
