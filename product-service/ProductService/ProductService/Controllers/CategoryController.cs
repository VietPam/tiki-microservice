using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductService.DataModels;
using System.Collections.Generic;

namespace ProductService.Controllers
{
    [Produces("application/json")]
    [Route("category/list")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly DatabaseSetting _setting;

        public CategoryController(DatabaseSetting setting)
        {
            _setting = setting;
        }

        // defaut api GET (all exmaple data )
        [HttpGet]
        public ActionResult<List<Category>> GetAllCategory()
        {
            return _setting.GetCategory();
        }

        //GET Category by ID
        [HttpGet]
        [Route("category-id/{id}")]
        public ActionResult<Category> GetCategoryByID(string id)
        {
            var category = _setting.GetCategoryID(id);

            // check if not exist
            if (category == null)
            {
                return NotFound();
            }

            return category;
        }

        //GET Category by Name
        [HttpGet]
        [Route("category-name/{Name}")]
        public ActionResult<List<Category>> GetCategoryByName(string Name)
        {
            var category = _setting.FindCategoryName(Name);

            // check if not exist
            if (category == null)
            {
                return NotFound();
            }

            return category;
        }

        //POST(Add) Category data
        [HttpPost]
        [Route("category/add")]
        [Consumes("application/json")]
        public ActionResult<Category> AddCategory(Category category)
        {

            // If Category already Exist
            var check = _setting.GetCategoryName(category.categoryName);
            if (check.Capacity > 0)
            {
                return Ok("Category existed");
            }

            // Add Category
            _setting.CreateCategory(category);

            return CreatedAtRoute("AddCategory", new { id = category.categoryID.ToString() }, category);
        }

        //PUT(Edit) Category data
        [HttpPut]
        [Consumes("application/json")]
        [Route("category-edit/{id}")]
        public IActionResult EditCategory(string id, Category _category)
        {
            // get Product by ID
            var category = _setting.GetCategoryID(id);

            // check Product exist
            if (category == null)
            {
                return NotFound("Category not found");
            }

            // check blank input Product 
            if (_category == null)
            {
                return NotFound("Input Category not found");
            }

            // Set data edit
            _setting.UpdateCategory(id, _category);

            return Ok("Updated");
        }

        //Delete Category data
        [HttpDelete]
        [Consumes("application/json")]
        [Route("category-delete/{id}")]
        public IActionResult DeleteCategory(string id)
        {
            // get Category by ID
            var category = _setting.GetCategoryID(id);

            // check Category exist
            if (category == null)
            {
                return NotFound("Category not found");
            }

            // Set data edit
            _setting.RemoveCategory(id);

            return Ok("Deleted");
        }
    }
}
