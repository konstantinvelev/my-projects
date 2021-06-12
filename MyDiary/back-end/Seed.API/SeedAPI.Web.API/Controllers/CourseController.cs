using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SeedAPI.Maps.CourseMaps;
using SeedAPI.Services.CourseServices;
using SeedAPI.ViewModels;
using System.Collections.Generic;
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

        // GET api/user
        //[HttpGet]
        //public IEnumerable<CourseViewModel> Get()
        //{
        //    //return this.courseMap.GetAll();
        //    return new List<CourseViewModel>();
        //}
        //// GET api/user/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        [HttpPost]
        public string Post([FromBody] object course)
        {
            var model = this.mapper.Map<object, CourseViewModel>(course);
            var createdCourse = this.courseMap.Create(model);
            var jsonUser = JsonSerializer.Serialize(createdCourse);
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
                cfg.CreateMap<object, CourseViewModel>();
                cfg.CreateMap<CourseViewModel, CourseViewModel>();
            });

            var maper = config.CreateMapper();
            return maper;
        }
    }
}
