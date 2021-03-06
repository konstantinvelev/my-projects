﻿using AutoMapper;
using SeedAPI.Models;
using SeedAPI.ViewModels;
using System.Collections.Generic;
using SeedAPI.Services.CourseServices;

namespace SeedAPI.Maps.CourseMaps
{
    public class CourseMap : ICourseMap
    {
        private ICourseService courseService;
        private IMapper mapper;

        public CourseMap(ICourseService service)
        {
           this.courseService = service;
            this.mapper = GetMap();
        }
        public CourseViewModel Create(CourseViewModel viewModel)
        {
            Course course = ViewModelToDomain(viewModel);
            return DomainToViewModel(this.courseService.Create(course));
        }
        public bool Update(CourseViewModel viewModel)
        {
            Course course = ViewModelToDomain(viewModel);
            return courseService.Update(course);
        }
        public bool Delete(string id)
        {
            return courseService.Delete(id).Result;
        }
        public IEnumerable<CourseViewModel> GetAll()
        {
            return DomainToViewModel(courseService.GetAll());
        }

        public CourseViewModel DomainToViewModel(Course course)
        {
            var viewModel = this.mapper.Map<Course, CourseViewModel>(course);
            return viewModel;
        }
        public List<CourseViewModel> DomainToViewModel(List<Course> domain)
        {
            List<CourseViewModel> model = new List<CourseViewModel>();
            foreach (Course of in domain)
            {
                model.Add(DomainToViewModel(of));
            }
            return model;
        }
        public Course ViewModelToDomain(CourseViewModel officeViewModel)
        {
            var model = this.mapper.Map<CourseViewModel, Course>(officeViewModel);
            return model;
        }
     

        public CourseViewModel GetByName(string courseName)
        {
             var course = this.courseService.GetByName(courseName); 
            var model = this.mapper.Map<Course, CourseViewModel>(course);
            return model;
        }

        public CourseViewModel GetById(string id)
        {
            var course = this.courseService.GetById(id);
            var model = this.mapper.Map<Course, CourseViewModel>(course);
            return model;
        }

        private static IMapper GetMap()
        {
            var config = new MapperConfiguration(cfg => {
                cfg.CreateMap<Course, CourseViewModel>();
                cfg.CreateMap<CourseViewModel, Course>();
                cfg.CreateMap<Exam, ExamViewModel>();
                cfg.CreateMap<ExamViewModel, Exam>();
                cfg.CreateMap<Homework, HomeworkViewModel>();
                cfg.CreateMap<HomeworkViewModel, Homework>();
            });

            var maper = config.CreateMapper();
            return maper;
        }
    }
}
