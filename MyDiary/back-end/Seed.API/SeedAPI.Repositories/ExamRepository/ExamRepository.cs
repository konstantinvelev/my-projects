using SeedAPI.Models;
using SeedAPI.Models.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SeedAPI.Repositories.ExamRepository
{
    public class ExamRepository : IExamRepository
    {
        private readonly ApplicationContext context;

        public ExamRepository(ApplicationContext context)
        {
            this.context = context;
        }

        public bool Delete(string id)
        {
            try
            {
                var courseForDelete = this.context.Exams.FirstOrDefault(s => s.Id == id);
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

        public List<Exam> GetAll()
        {
            return this.context.Exams
                .OrderByDescending(s => s.CreatedOn)
                .ToList();
        }

        public async Task<Exam> Save(Exam exam)
        {
            try
            {
                var newExam = CreateExam(exam);
                newExam.CreatedOn = DateTime.UtcNow;
                await this.context.Exams.AddAsync(newExam);
                await this.context.SaveChangesAsync();
                return exam;
            }
            catch (Exception)
            {
                //error
                throw;
            }
        }

        public async Task<bool> Update(Exam exam)
        {
            try
            {
                var courseForUpdate = context.Exams.FirstOrDefault(s => s.Id == exam.Id);
                var updatedCourse = CreateExam(exam);

                if (courseForUpdate == null && updatedCourse == null)
                {
                    throw new Exception("The update was not successfully!");
                }
                courseForUpdate = updatedCourse;

                courseForUpdate.UpdatedOn = DateTime.UtcNow;
                context.Exams.Update(courseForUpdate);
                await context.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                throw;
            }
        }

        private Exam CreateExam(Exam exam)
        {
            var newCourse = new Exam
            {
                Title = exam.Title,
                DateTime = exam.DateTime,
                Grade = exam.Grade,
                IsDeleted = exam.IsDeleted,
                IsPassed = exam.IsPassed,
                CourseId = exam.CourseId,
                UserId = exam.UserId,
            };
            return newCourse;
        }
    }
}
