namespace Prima08.Web.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Prima08.Services.Data;
    using Prima08.Web.ViewModels.Products;

    public class ProductsController : Controller
    {
        private readonly IProductsService productsService;

        public ProductsController(IProductsService productsService)
        {
            this.productsService = productsService;
        }

        [HttpGet]
        public IActionResult All()
        {
            var model = new AllViewModel()
            {
                Products = this.productsService.GetProducts(),
            };
            return this.View(model);
        }

        [HttpGet]
        public IActionResult Details(int id)
        {
            var product = this.productsService.GetById(id);

            var viewModel = new DetailsViewModel()
            {
                Title = product.Title,
                Description = product.Description,
                ImageUrl = product.ImageUrl,
            };

            return this.View(viewModel);
        }
    }
}
