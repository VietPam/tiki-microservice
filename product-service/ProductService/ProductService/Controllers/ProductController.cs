using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using ProductService.DataModels;
using Microsoft.AspNetCore.Http;
using System.IO;
using System;

namespace ProductService.Controllers
{
    [Produces("application/json")]
    [Route("product/list")]
    [ApiController]
    public class ProductController : ControllerBase
    {      
        private readonly DatabaseSetting _setting;

        public ProductController(DatabaseSetting setting)
        {
            _setting = setting;
        }

        // defaut api GET (all data )
        [HttpGet]
        public ActionResult<List<Product>> GetAllProduct()
        {
            return _setting.GetProduct();
        }

        // GET (all sub data )
        [HttpGet]
        [Route("sub")]
        public ActionResult<List<SubProduct>> GetAllSubProduct()
        {
            return _setting.GetSubProduct();
        }

        //GET by ID
        [HttpGet]
        [Route("search-id/{id}")]
        public ActionResult<Product> GetProductyID(string id)
        {
            var product = _setting.GetID(id);

            // check if not exist
            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        //GET by Name
        [HttpGet]
        [Route("search-name/{Name}")]
        public ActionResult<List<Product>> GetProductByName(string Name)
        {
            var product = _setting.GetName(Name);

            // check if not exist
            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        //GET by branch
        [HttpGet]
        [Route("search-branch/{_branch}")]
        public ActionResult<List<Product>> GetProductBySupplier(string _branch)
        {
            var product = _setting.GetBranch(_branch);

            // check if not exist
            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        //GET by price
        [HttpGet]
        [Route("search-price/{price1:int}-{price2:int}")]
        public ActionResult<List<Product>> GetProductByPrice(int price1, int price2)
        {
            //validate input price
            if(price2 < price1)
            {
                (price1, price2) = (price2, price1);
            }

            var product = _setting.GetPrice(price1, price2);

            // check if not exist
            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        //GET by Category
        [HttpGet]
        [Route("search-supplier/{cate}")]
        public ActionResult<List<Product>> GetProductByCategory(string cate)
        {
            var product = _setting.GetCategory(cate);

            // check if not exist
            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        //POST(Add) Product data
        [HttpPost]
        [Route("add")]
        [Consumes("application/json")]
        public ActionResult<Product> AddProduct(Product product)
        {           
            // If Product already Exist
            var check = _setting.GetDetailProduct(product.productName, product.branch);
            if (check != null)
            {
                return Ok("Product existed");
            }     

            // Add product
            _setting.Create(product);

            return CreatedAtRoute("AddProduct", new { id = product.productID.ToString() }, product);
        }

        //POST(Add) list of Product data
        [HttpPost]
        [Route("add-list")]
        [Consumes("application/json")]
        public ActionResult<Product> AddListProduct(List<Product> productlist)
        {
            foreach(Product product in productlist)
            {
                // If Product already Exist
                var check = _setting.GetDetailProduct(product.productName, product.branch);
                if (check != null)
                {
                    return Ok("Product existed");
                }

                // Add product
                _setting.Create(product);
            }
        
            return CreatedAtRoute("AddListProduct", new { id = productlist[0].productID.ToString() }, productlist);
        }

        //PUT(Edit) Product data
        [HttpPut]
        [Consumes("application/json")]
        [Route("edit/{id}")]
        public IActionResult EditProduct(string id, Product _product)
        {
            // get Product by ID
            var product = _setting.GetID(id);

            // check Product exist
            if (product == null)
            {
                return NotFound("Product not found");
            }

            // check blank input Product 
            if (_product == null)
            {
                return NotFound("Input product not found");
            }

            // Set data edit
            _setting.Update(id, _product);

            return Ok("Updated");
        }


        [HttpDelete]
        [Consumes("application/json")]
        [Route("delete/{id}")]
        public IActionResult DeleteProduct(string id)
        {
            // get Product by ID
            var product = _setting.GetID(id);

            // check Product exist
            if (product == null)
            {
                return NotFound("Product not found");
            }

            // Set data edit
            _setting.Remove(id);

            return Ok("Deleted");
        }
    }
}
