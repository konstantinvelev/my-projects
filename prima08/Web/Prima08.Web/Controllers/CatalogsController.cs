namespace Prima08.Web.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Prima08.Services.Data;

    public class CatalogsController : Controller
    {

        [HttpGet]
        public IActionResult All()
        {
            return this.View();
        }
    }
}
