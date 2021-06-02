using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SeedAPI.Maps.ExamMaps;
using SeedAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace SeedAPI.Web.API.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class ExamController : Controller
    {
        private readonly IExamMap examMap;

        public ExamController(IExamMap examMap)
        {
            this.examMap = examMap;
        }

        // GET api/user
        [HttpGet]
        public IEnumerable<ExamViewModel> Get()
        {
            //return this.courseMap.GetAll();
            return new List<ExamViewModel>();
        }
        // GET api/user/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }
        // POST api/user
        [HttpPost]
        public string Post([FromBody] ExamViewModel exam)
        {
            var createdCourse = this.examMap.Create(exam);
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
