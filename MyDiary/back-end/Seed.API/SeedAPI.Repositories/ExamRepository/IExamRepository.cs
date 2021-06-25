using SeedAPI.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SeedAPI.Repositories.ExamRepository
{
    public interface IExamRepository
    {
        Task<Exam> Save(Exam course);
        Task<bool> Update(Exam course);
         bool Delete(string id);
        Task<List<Exam>> GetAll();
        Task<Exam> GetById(string id);
    }
}