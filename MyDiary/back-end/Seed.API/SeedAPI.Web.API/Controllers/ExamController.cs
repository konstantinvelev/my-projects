﻿using AutoMapper;
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
    //[Authorize]
    public class ExamController : Controller
    {
        private readonly IExamMap examMap;

        public ExamController(IExamMap examMap)
        {
            this.examMap = examMap;
        }

        [HttpGet]
        public IEnumerable<ExamViewModel> Get()
        {
            return this.examMap.GetAll();
        }

        [HttpGet("{id}")]
        public ExamViewModel Get(string id)
        {
            return this.examMap.GetById(id);
        }

        [HttpPost]
        public ExamViewModel Post([FromBody] ExamViewModel exam)
        {
            return this.examMap.Create(exam);
        }
        // PUT api/user/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string user)
        {
        }
        // DELETE api/user/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            this.examMap.Delete(id);
        }
    }
}
