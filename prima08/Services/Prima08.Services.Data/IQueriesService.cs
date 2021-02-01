namespace Prima08.Services.Data
{
    using System.Threading.Tasks;

    using Prima08.Web.ViewModels.Queries;

    public interface IQueriesService
    {
        Task CreateAsync(CreateInputViewModel input);
    }
}
