namespace Prima08.Web.Controllers
{
    using System.Diagnostics;

    using Prima08.Web.ViewModels;

    using Microsoft.AspNetCore.Mvc;
    using Prima08.Services.Data;
    using Prima08.Web.ViewModels.Products;

    public class HomeController : BaseController
    {
        private readonly IProductsService productsService;

        public HomeController(IProductsService productsService)
        {
            this.productsService = productsService;
        }

        public IActionResult Index()
        {
            var model = new AllViewModel
            {
                Products = this.productsService.GetProducts(),
            };
            return this.View(model);
        }

        public IActionResult Contacts()
        {
            return this.View();
        }

        public IActionResult Card()
        {
            return this.View();
        }

        public IActionResult GDPR()
        {
            return this.View();
        }

        public IActionResult ForUs()
        {
            return this.View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return this.View(
                new ErrorViewModel { RequestId = Activity.Current?.Id ?? this.HttpContext.TraceIdentifier });
        }
    }
}
