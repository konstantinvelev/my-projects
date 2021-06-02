using SeedAPI.Models;
using SeedAPI.Repositories.ExamRepository;
using System;
using System.Collections.Generic;
using System.Text;

namespace SeedAPI.Services.ExamServices
{
    public class ExamService : IExamService
    {
        private readonly IExamRepository examRepository;

        public ExamService(IExamRepository examRepository)
        {
            this.examRepository = examRepository;
        }
        public Exam Create(Exam exam)
        {
            return this.examRepository.Save(exam).Result;
        }

        public bool Delete(string id)
        {
            return this.examRepository.Delete(id);
        }

        public List<Exam> GetAll()
        {
            return this.examRepository.GetAll();
        }

        public bool Update(Exam exam)
        {
            return this.examRepository.Update(exam).Result;
        }
    }
}
