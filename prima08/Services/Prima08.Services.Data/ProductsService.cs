namespace Prima08.Services.Data
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using Prima08.Data.Common.Repositories;
    using Prima08.Data.Models;

    public class ProductsService : IProductsService
    {
        private readonly IDeletableEntityRepository<Product> productsRepository;

        public ProductsService(IDeletableEntityRepository<Product> productsRepository)
        {
            this.productsRepository = productsRepository;
        }

        public Product GetById(int id)
        {
            var product = this.productsRepository.All().FirstOrDefault(s => s.Id == id);
            return product;
        }

        public IEnumerable<Product> GetProducts()
        {
            var products = this.productsRepository.All().ToList();
            return products;
        }
    }
}
