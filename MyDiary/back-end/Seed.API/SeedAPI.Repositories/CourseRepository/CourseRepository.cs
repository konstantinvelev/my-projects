using SeedAPI.Models;
using SeedAPI.Models.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SeedAPI.Repositories.CourseRepository
{
    public class CourseRepository : ICourseRepository
    {
        private readonly ApplicationContext context;

        public CourseRepository(ApplicationContext context)
        {
            this.context = context;
        }

        public bool Delete(string id)
        {
            try
            {
                var courseForDelete = this.context.Courses.FirstOrDefault(s => s.Id == id);
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

        public List<Course> GetAll()
        {
            return this.context.Courses
                .OrderByDescending(s => s.CreatedOn)
                .ToList();
        }

        public async Task<Course> Save(Course course)
        {
            try
            {
                await this.context.Courses.AddAsync(course);
                await this.context.SaveChangesAsync();
                return course;
            }
            catch (Exception)
            {
                //error
                throw;
            }
        }

        public async Task<bool> Update(Course course)
        {
            try
            {
                var courseForUpdate = context.Courses.FirstOrDefault(s => s.Id == course.Id);
                var updatedCourse = CreateCourse(course);

                if (courseForUpdate == null && updatedCourse == null)
                {
                    throw new Exception("The update was not successfully!");
                }
                courseForUpdate = updatedCourse;
                context.Courses.Update(courseForUpdate);
                await context.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                throw;
            }
        }

        private Course CreateCourse(Course course)
        {
            var newCourse = new Course
            {
                Name = course.Name,
                Grade = course.Grade,
                Description = course.Description,
                DateTime = course.DateTime,
                IsDeleted = course.IsDeleted,
                UpdatedOn = DateTime.UtcNow,
            };
            return newCourse;
        }
    }
}
