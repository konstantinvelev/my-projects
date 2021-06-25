using SeedAPI.Models;
using SeedAPI.Repositories.HomeworkRepository;
using System;
using System.Collections.Generic;
using System.Text;

namespace SeedAPI.Services.HomeworkServices
{
    public class HomeworkService : IHomeworkService
    {
        private readonly IHomeworkRepository homeworkRepository;

        public HomeworkService(IHomeworkRepository homeworkRepository)
        {
            this.homeworkRepository = homeworkRepository;
        }
        public Homework Create(Homework homework)
        {
            return this.homeworkRepository.Save(homework).Result;
        }

        public bool Delete(string id)
        {
            return this.homeworkRepository.Delete(id);
        }

        public List<Homework> GetAll()
        {
            return this.homeworkRepository.GetAll().Result;
        }

        public Homework GetById(string id)
        {
            return this.homeworkRepository.GetById(id).Result;
        }

        public bool Update(Homework homework)
        {
            return this.homeworkRepository.Update(homework).Result;
        }
    }
}
