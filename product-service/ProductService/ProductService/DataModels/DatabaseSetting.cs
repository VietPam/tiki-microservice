using ProductService.DataModels;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace ProductService.DataModels
{
    // Save data connecting
    public class DatabaseSetting
    {
        // Connect Mongodb
        private const string ConnectionString = "mongodb+srv://admin:admin@se214.h3kjms8.mongodb.net";

        // product data
        private readonly IMongoCollection<Product> _product;

        // category data
        private readonly IMongoCollection<Category> _category;

        // Sub Product data
        private List<SubProduct> _subproduct = new List<SubProduct>();

        private const string DatabaseName = "TAKA";

        private const string CollectionNameProduct = "product";

        private const string CollectionNameCategory = "category";

        public DatabaseSetting()
        {
            var client = new MongoClient(ConnectionString);
            var database = client.GetDatabase(DatabaseName);

            _product = database.GetCollection<Product>(CollectionNameProduct);

            _category = database.GetCollection<Category>(CollectionNameCategory);

            // Add sub product data from product collection
            foreach (var product in _product.Find(product => true).ToList())
            {
                SubProduct subProduct = new SubProduct(product.productID,product.description, product.image_product
                                                ,product.price, product.discount, product.sold_number);

                _subproduct.Add(subProduct);
            }
        }

        // CRUD database

        /****************************************************PRODUCT*********************************/
        // Get Sub Product list
        public List<SubProduct> GetSubProduct() =>
            _subproduct.ToList();

        // Get Product list
        public List<Product> GetProduct() =>
            _product.Find(product => true).ToList();

        // GetProduct by ID
        public Product GetID(string id) =>
            _product.Find<Product>(product => product.productID == id).FirstOrDefault();

        // GetProduct by Name
        public List<Product> GetName(string name) =>
            _product.Find<Product>(product => product.productName.ToLower().Contains(name.ToLower())).ToList();

        // GetProduct by Branch
        public List<Product> GetBranch(string sup) =>
            _product.Find<Product>(product => product.branch.ToLower().Contains(sup.ToLower())).ToList();

        // GetProduct by Category
        public List<Product> GetCategory(string cate) =>
            _product.Find<Product>(product => product.category.categoryName == cate).ToList();

        // GetProduct by Price
        public List<Product> GetPrice(int low, int high) =>
            _product.Find<Product>(product => product.price > low && product.price > high).ToList();

        // GetProduct by detail product
        public List<Product> GetDetailProduct(string name, string sup) =>
            _product.Find<Product>(product => product.productName.ToLower() == name.ToLower()
                                                    && product.branch.ToLower() == sup.ToLower()).ToList();

        // GetProduct by Price
        public List<Product> GetQuantity(int low = 0, int high = 0)
        {
            if(low == 0)
            {
                return _product.Find<Product>(product => product.quantity < high).ToList();
            }

            if (high == 0)
            {
                return _product.Find<Product>(product => product.quantity > low).ToList();
            }

            return _product.Find<Product>(product => product.quantity > low && product.quantity > high).ToList();
        }
           
        // Add product
        public Product Create(Product product)
        {
            _product.InsertOne(product);
            return product;
        }

        // Edit product
        public void Update(string id, Product product) =>
            _product.ReplaceOne(product => product.productID == id, product);

        // Delete product
        public void Remove(string id) =>
            _product.DeleteOne(product => product.productID == id);




        /****************************************************Category*********************************/
        // Get Category list
        public List<Category> GetCategory() =>
            _category.Find(category => true).ToList();

        // Get Category by ID
        public Category GetCategoryID(string id) =>
            _category.Find<Category>(category => category.categoryID == id).FirstOrDefault();

        // Find Category by Name
        public List<Category> FindCategoryName(string name) =>
            _category.Find<Category>(category => category.categoryName.ToLower().Contains(name.ToLower())).ToList();

        // Get Category by Name
        public List<Category> GetCategoryName(string name) =>
            _category.Find<Category>(category => category.categoryName.ToLower() == name.ToLower()).ToList();

        // Add Category
        public Category CreateCategory(Category category)
        {
            _category.InsertOne(category);
            return category;
        }

        // Edit Category
        public void UpdateCategory(string id, Category category) =>
            _category.ReplaceOne(category => category.categoryID == id, category);

        // Delete product
        public void RemoveCategory(string id) =>
            _category.DeleteOne(category => category.categoryID == id);
    }
}
