namespace Prima08.Services.Data
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using Prima08.Data.Models;

    public interface IProductsService
    {
        IEnumerable<Product> GetProducts();

        Product GetById(int id);
    }
}
