using Microsoft.EntityFrameworkCore;
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

        public async Task<bool> Delete(string id)
        {
            try
            {
                var courseForDelete = await this.context.Courses.FindAsync(id);
                courseForDelete.IsDeleted = true;
                await this.context.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                //Exception
                throw;
            }
        }

        public async Task<List<Course>> GetAll()
        {
            return await this.context.Courses.ToListAsync();
        }

        public async Task<Course> GetById(string id)
        {
            var course = await this.context.Courses.FirstOrDefaultAsync(s => s.Id == id);
            return course;
        }

        public async Task<Course> GetByName(string courseName)
        {
            var course = await this.context.Courses.FirstOrDefaultAsync(s=>s.Name.ToLower() == courseName.ToLower());
            return course;
        }

        public async Task<Course> Save(Course domain)
        {
            try
            {
                var newUser = CreateCourse(domain);
                newUser.CreatedOn = DateTime.UtcNow;
                await this.context.Courses.AddAsync(newUser);
                await this.context.SaveChangesAsync();
                return newUser;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<bool> Update(Course domain)
        {
            try
            {
                var courseForUpdate = await this.context.Courses.FindAsync(domain.Id);
                var updatedCourse = CreateCourse(domain);

                if (courseForUpdate == null && updatedCourse == null)
                {
                    throw new Exception("The update was not successfully!");
                }
                courseForUpdate = updatedCourse;
                courseForUpdate.UpdatedOn = DateTime.UtcNow;
                this.context.Courses.Update(courseForUpdate);
                await this.context.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                return false;
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
                UserId = course.UserId,
                IsPassed = course.IsPassed,
            };
            return newCourse;
        }
    }
}
