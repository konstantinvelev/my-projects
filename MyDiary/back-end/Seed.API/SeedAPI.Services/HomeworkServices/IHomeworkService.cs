using SeedAPI.Models;
using System.Collections.Generic;

namespace SeedAPI.Services.HomeworkServices
{
    public interface IHomeworkService
    {
        Homework Create(Homework domain);
        bool Delete(string id);
        List<Homework> GetAll();
        bool Update(Homework homework);
        Homework GetById(string id);
    }
}