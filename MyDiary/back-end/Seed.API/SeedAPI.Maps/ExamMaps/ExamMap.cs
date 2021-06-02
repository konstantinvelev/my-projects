using AutoMapper;
using SeedAPI.Models;
using SeedAPI.Services.ExamServices;
using SeedAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace SeedAPI.Maps.ExamMaps
{
   public class ExamMap : IExamMap
    {
        IExamService examService;
        private IMapper mapper;

        public ExamMap(IExamService service)
        {
            this.examService = service;
            this.mapper = GetMap();
        }
        public ExamViewModel Create(ExamViewModel viewModel)
        {
            Exam exam = ViewModelToDomain(viewModel);
            return DomainToViewModel(this.examService.Create(exam));
        }
        public bool Update(ExamViewModel viewModel)
        {
            Exam exam = ViewModelToDomain(viewModel);
            return examService.Update(exam);
        }
        public bool Delete(string id)
        {
            return examService.Delete(id);
        }
        public IEnumerable<ExamViewModel> GetAll()
        {
            return DomainToViewModel(examService.GetAll());
        }

        public ExamViewModel DomainToViewModel(Exam exam)
        {
            var viewModel = this.mapper.Map<Exam, ExamViewModel>(exam);
            return viewModel;
        }
        public List<ExamViewModel> DomainToViewModel(List<Exam> domain)
        {
            List<ExamViewModel> model = new List<ExamViewModel>();
            foreach (Exam of in domain)
            {
                model.Add(DomainToViewModel(of));
            }
            return model;
        }
        public Exam ViewModelToDomain(ExamViewModel officeViewModel)
        {
            var model = this.mapper.Map<ExamViewModel, Exam>(officeViewModel);
            return model;
        }
        private static IMapper GetMap()
        {
            var config = new MapperConfiguration(cfg => {
                cfg.CreateMap<Exam, ExamViewModel>();
                cfg.CreateMap<ExamViewModel, Exam>();
            });

            var maper = config.CreateMapper();
            return maper;
        }
    }
}
