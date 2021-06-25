using SeedAPI.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SeedAPI.Repositories.HomeworkRepository
{
    public interface IHomeworkRepository
    {
        Task<Homework> Save(Homework homework);
        Task<bool> Update(Homework homework);
        bool Delete(string id);
         Task<List<Homework>> GetAll();
        Task<Homework> GetById(string id);
    }
}