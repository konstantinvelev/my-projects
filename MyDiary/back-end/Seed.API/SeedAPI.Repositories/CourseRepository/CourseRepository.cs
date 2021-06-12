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
        private readonly EfDeletableEntityRepository<Course> courseRepository;

        public CourseRepository(EfDeletableEntityRepository<Course> courseRepository)
        {
            this.courseRepository = courseRepository;
        }

        public async Task<bool> Delete(string id)
        {
            try
            {
                var courseForDelete = this.courseRepository.GetById(id);
                courseForDelete.IsDeleted = true;
                await this.courseRepository.SaveChangesAsync();
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
            return this.courseRepository.All().ToList();
        }

        public async Task<Course> Save(Course domain)
        {
            try
            {
                var newUser = CreateCourse(domain);
                await this.courseRepository.AddAsync(newUser);
                await this.courseRepository.SaveChangesAsync();
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
                var courseForUpdate = this.courseRepository.GetById(domain.Id);
                var updatedCourse = CreateCourse(domain);

                if (courseForUpdate == null && updatedCourse == null)
                {
                    throw new Exception("The update was not successfully!");
                }
                courseForUpdate = updatedCourse;
                this.courseRepository.Update(courseForUpdate);
                await this.courseRepository.SaveChangesAsync();
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
                UpdatedOn = DateTime.UtcNow,
            };
            return newCourse;
        }
    }
}
