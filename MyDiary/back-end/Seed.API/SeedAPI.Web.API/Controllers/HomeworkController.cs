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

        [HttpGet]
        public IEnumerable<HomeworkViewModel> Get()
        {
            return this.homeworkMap.GetAll();
        }

        [HttpGet("{id}")]
        public HomeworkViewModel GetById(string id)
        {
            return this.homeworkMap.GetById(id);
        }

        [HttpPost]
        public HomeworkViewModel Post([FromBody] HomeworkViewModel homeworks)
        {
            return this.homeworkMap.Create(homeworks);
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

        [HttpGet("{homeworkId}/{courseId}")]
        public void DeleteById(string homeworkId, string courseId)
        {
            this.homeworkMap.Delete(homeworkId);
        }
    }
}
