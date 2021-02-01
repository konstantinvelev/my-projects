namespace Prima08.Services.Data
{
    using System;
    using System.Threading.Tasks;

    using Prima08.Data.Common.Repositories;
    using Prima08.Data.Models;
    using Prima08.Web.ViewModels.Queries;

    public class QueriesService : IQueriesService
    {
        private readonly IRepository<Querie> querieRepository;

        public QueriesService(IRepository<Querie> querieRepository)
        {
            this.querieRepository = querieRepository;
        }

        public async Task CreateAsync(CreateInputViewModel input)
        {
            var querie = new Querie
            {
                CreatedOn = DateTime.UtcNow,
                IsDeleted = false,
                Name = input.Name,
                Number = input.Number,
                Email = input.Email,
                Question = input.Question,
            };

            await this.querieRepository.AddAsync(querie);
            await this.querieRepository.SaveChangesAsync();
        }
    }
}
