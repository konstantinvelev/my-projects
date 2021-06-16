using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SeedAPI.Maps.HomeworkMaps;
using SeedAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace SeedAPI.Web.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeworkController : ControllerBase
    {
        private readonly IHomeworkMap homeworkMap;

        public HomeworkController(IHomeworkMap homeworkMap)
        {
            this.homeworkMap = homeworkMap;
        }

        // GET api/user
        [HttpGet]
        public string Get()
        {
            var homeworks = this.homeworkMap.GetAll();
            var json = JsonSerializer.Serialize(homeworks);
            return json;
        }
        // GET api/user/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }
        // POST api/user
        [HttpPost]
        public string Post([FromBody] HomeworkViewModel homeworks)
        {
            var createdCourse = this.homeworkMap.Create(homeworks);
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
