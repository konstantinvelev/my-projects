namespace Prima08.Web.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Prima08.Services.Data;
    using Prima08.Web.ViewModels.Queries;

    public class QueriesController : Controller
    {
        private readonly IQueriesService queriesService;

        public QueriesController(IQueriesService queriesService)
        {
            this.queriesService = queriesService;
        }

        [HttpPost]
        public IActionResult Add(CreateInputViewModel input)
        {
            this.queriesService.CreateAsync(input);
            return this.Redirect("/");
        }
    }
}
