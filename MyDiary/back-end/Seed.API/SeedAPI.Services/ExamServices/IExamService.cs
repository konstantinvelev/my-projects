using SeedAPI.Models;
using SeedAPI.ViewModels;
using System.Collections.Generic;

namespace SeedAPI.Services.ExamServices
{
    public interface IExamService
    {
        Exam Create(Exam domain);
        bool Delete(string id);
        List<Exam> GetAll();
        bool Update(Exam exam);
        Exam GetById(string id);
    }
}