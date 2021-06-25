using AutoMapper;
using SeedAPI.Models;
using SeedAPI.Services.HomeworkServices;
using SeedAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace SeedAPI.Maps.HomeworkMaps
{
    public class HomeworkMap : IHomeworkMap
    {
        IHomeworkService homeworkService;
        private IMapper mapper;

        public HomeworkMap(IHomeworkService service)
        {
            this.homeworkService = service;
            this.mapper = GetMap();
        }
        public HomeworkViewModel Create(HomeworkViewModel viewModel)
        {
            Homework homework = ViewModelToDomain(viewModel);
            return DomainToViewModel(this.homeworkService.Create(homework));
        }
        public bool Update(HomeworkViewModel viewModel)
        {
            Homework homework = ViewModelToDomain(viewModel);
            return homeworkService.Update(homework);
        }
        public bool Delete(string id)
        {
            return homeworkService.Delete(id);
        }
        public IEnumerable<HomeworkViewModel> GetAll()
        {
            return DomainToViewModel(homeworkService.GetAll());
        }
        public HomeworkViewModel GetById(string id)
        {
            var homework = this.homeworkService.GetById(id);
            var model = this.mapper.Map<Homework,HomeworkViewModel>(homework);
            return model;
        }

        public HomeworkViewModel DomainToViewModel(Homework homework)
        {
            var viewModel = this.mapper.Map<Homework, HomeworkViewModel>(homework);
            return viewModel;
        }
        public List<HomeworkViewModel> DomainToViewModel(List<Homework> domain)
        {
            List<HomeworkViewModel> model = new List<HomeworkViewModel>();
            foreach (Homework of in domain)
            {
                model.Add(DomainToViewModel(of));
            }
            return model;
        }
        public Homework ViewModelToDomain(HomeworkViewModel officeViewModel)
        {
            var model = this.mapper.Map<HomeworkViewModel, Homework>(officeViewModel);
            return model;
        }
        private static IMapper GetMap()
        {
            var config = new MapperConfiguration(cfg => {
                cfg.CreateMap<Homework, HomeworkViewModel>();
                cfg.CreateMap<HomeworkViewModel, Homework>();
                cfg.CreateMap<User, UserViewModel>();
                cfg.CreateMap<UserViewModel, User >();
                cfg.CreateMap<Course, CourseViewModel>();
                cfg.CreateMap<CourseViewModel, Course>();
            });

            var maper = config.CreateMapper();
            return maper;
        }

        
    }
}
