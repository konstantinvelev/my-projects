using SeedAPI.ViewModels;
using System.Collections.Generic;

namespace SeedAPI.Maps.ExamMaps
{
    public interface IExamMap
    {
        ExamViewModel Create(ExamViewModel viewModel);
        public bool Update(ExamViewModel viewModel);
        public bool Delete(string id);
        public IEnumerable<ExamViewModel> GetAll();
    }
}