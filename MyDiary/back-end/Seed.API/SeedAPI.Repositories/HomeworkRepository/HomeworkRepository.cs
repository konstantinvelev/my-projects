using SeedAPI.Models;
using SeedAPI.Models.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SeedAPI.Repositories.HomeworkRepository
{
    public class HomeworkRepository : IHomeworkRepository
    {
        private readonly ApplicationContext context;

        public HomeworkRepository(ApplicationContext context)
        {
            this.context = context;
        }

        public bool Delete(string id)
        {
            try
            {
                var courseForDelete = this.context.Homeworks.FirstOrDefault(s => s.Id == id);
                courseForDelete.IsDeleted = true;
                this.context.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                //Exception
                throw;
            }
        }

        public List<Homework> GetAll()
        {
            return this.context.Homeworks
                .OrderByDescending(s => s.CreatedOn)
                .ToList();
        }

        public async Task<Homework> Save(Homework homework)
        {
            try
            {
                var newHomework = CreateHomework(homework);
                newHomework.CreatedOn = DateTime.UtcNow;
                await this.context.Homeworks.AddAsync(homework);
                await this.context.SaveChangesAsync();
                return homework;
            }
            catch (Exception)
            {
                //error
                throw;
            }
        }

        public async Task<bool> Update(Homework homework)
        {
            try
            {
                var courseForUpdate = context.Homeworks.FirstOrDefault(s => s.Id == homework.Id);
                var updatedCourse = CreateHomework(homework);

                if (courseForUpdate == null && updatedCourse == null)
                {
                    throw new Exception("The update was not successfully!");
                }
                courseForUpdate = updatedCourse;
                courseForUpdate.CreatedOn = DateTime.UtcNow;
                context.Homeworks.Update(courseForUpdate);
                await context.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                throw;
            }
        }

        private Homework CreateHomework(Homework homework)
        {
            var newCourse = new Homework
            {
                Title = homework.Title,
                Description = homework.Description,
                DateTime = homework.DateTime,
                Grade = homework.Grade,
                IsDeleted = homework.IsDeleted,
                IsPassed = homework.IsPassed,
                CourseId = homework.CourseId,
                UserId = homework.UserId,
            };
            return newCourse;
        }
    }
}
