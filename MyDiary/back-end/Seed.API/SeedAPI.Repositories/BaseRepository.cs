using SeedAPI.Models.Context;

namespace SeedAPI.Repositories.UserRepositories
{
    public abstract class BaseRepository
    {
        private readonly ApplicationContext context;

        public BaseRepository(ApplicationContext context)
        {
            this.context = context;
        }

    }
}