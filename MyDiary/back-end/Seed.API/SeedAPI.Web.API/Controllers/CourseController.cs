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
    [Authorize]
    public class CourseController : Controller
    {
        private readonly ICourseMap courseMap;

        public CourseController(ICourseMap courseMap)
        {
            this.courseMap = courseMap;
        }

        // GET api/user
        [HttpGet]
        public IEnumerable<CourseViewModel> Get()
        {
            //return this.courseMap.GetAll();
            return new List<CourseViewModel>();
        }
        // GET api/user/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }
        // POST api/user
        [HttpPost]
        public string Post([FromBody] CourseViewModel course)
        {
            var createdCourse = this.courseMap.Create(course);
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
    }
}
