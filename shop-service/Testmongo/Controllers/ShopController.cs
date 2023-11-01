using Microsoft.AspNetCore.Mvc;
using Testmongo.Models;
using Testmongo.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Testmongo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShopsController : ControllerBase
    {
        private readonly IShopService shopService;

        public ShopsController(IShopService shopService)
        {
            this.shopService = shopService;
        }
        // GET: api/<ShopsController>
        [HttpGet]
        public ActionResult<List<shop>> Get()
        {
            return shopService.Getall();
        }

        // GET api/<ShopsController>/5
        [HttpGet("{id}")]
        public ActionResult<shop> Get(string id)
        {
            var shop = shopService.Get(id);
            if (shop == null)
                return NotFound($"Shop with id = {id} not found");
            return shop;
        }

        // POST api/<ShopsController>
        [HttpPost]
        public ActionResult<shop> Post([FromBody] shop shop)
        {
            shopService.Create(shop);
            return CreatedAtAction(nameof(Get), new { id = shop.id }, shop);
        }

        // PUT api/<ShopsController>/5
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] shop shop)
        {
            var existingShop = shopService.Get(id);
            if (existingShop == null)
                return NotFound($"Shop with id = {id} not found");
            shopService.Update(id, shop);
            return NoContent();

        }

        // DELETE api/<ShopsController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var shop = shopService.Get(id);
            if(shop==null)
                return NotFound($"Shop with id = {id} not found");
            shopService.Remove(shop.id);
            return Ok($"Shop with id = {id} deleted");
        }
    }
}
