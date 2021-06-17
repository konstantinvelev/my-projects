using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SeedAPI.Maps.CourseMaps;
using SeedAPI.Models;
using SeedAPI.ViewModels;
using System.Linq;
using System.Text.Json;

namespace SeedAPI.Web.API.Controllers
{
    [Route("api/[controller]")]
    public class CourseController : Controller
    {
        private  ICourseMap courseMap;
        private IMapper mapper;

        public CourseController(ICourseMap courseMap)
        {
            this.courseMap = courseMap;
            this.mapper = GetMap();

        }
        [HttpGet]
        public string Get()
        {
            var courses = this.courseMap.GetAll().ToList();
            var jsonCourse = JsonSerializer.Serialize(courses);
            return jsonCourse;
        }

        [Route("[action]/{courseName}")]
        [HttpGet]
        public CourseViewModel GetByName(string courseName)
        {
            return courseMap.GetByName(courseName);
        }

        [HttpGet("{id}")]
        public CourseViewModel GetById(string id)
        {
            return courseMap.GetById(id);
        }

        [HttpPost]
        public string Post([FromBody] CourseViewModel course)
        {
            var createdUser = this.courseMap.Create(course);
            var jsonUser = JsonSerializer.Serialize(createdUser);
            return jsonUser;
        }
        // PUT api/user/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string user)
        {
        }
        // DELETE api/user/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        private static IMapper GetMap()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Course, CourseViewModel>();
                cfg.CreateMap<CourseViewModel, Course>();
            });

            var maper = config.CreateMapper();
            return maper;
        }
    }
}
