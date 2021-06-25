using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SeedAPI.Maps.CourseMaps;
using SeedAPI.Models;
using SeedAPI.ViewModels;
using System.Collections.Generic;
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
        public IEnumerable<CourseViewModel> Get()
        {
            return this.courseMap.GetAll().ToList();
            
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
        public CourseViewModel Post([FromBody] CourseViewModel course)
        {
            return this.courseMap.Create(course);
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
