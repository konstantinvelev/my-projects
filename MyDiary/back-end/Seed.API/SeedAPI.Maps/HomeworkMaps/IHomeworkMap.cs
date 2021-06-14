using SeedAPI.ViewModels;
using System.Collections.Generic;

namespace SeedAPI.Maps.HomeworkMaps
{
    public interface IHomeworkMap
    {
        HomeworkViewModel Create(HomeworkViewModel viewModel);
        public bool Update(HomeworkViewModel viewModel);
        public bool Delete(string id);
        public IEnumerable<HomeworkViewModel> GetAll();
    }
}