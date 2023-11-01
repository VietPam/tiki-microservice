using CartsService.Models;
using CartsService.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CartsService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartServices cartService;
        public CartController(ICartServices cartService)
        {
            this.cartService = cartService;
        }
        // GET: api/<CartController>
        [HttpGet]
        public ActionResult<List<Cart>> Get()
        {
            return cartService.Get();
        }

        // GET api/<CartController>/5
        [HttpGet("search-CartId/{id}")]
        public ActionResult<Cart> Get(string id)
        {
            var cart = cartService.Get(id);
            if (cart == null)
            {
                return NotFound($"Cart with Id = {id} not found");
            }
            return cart;
        }
        //GET api/<CartController>/5
        [HttpGet("{userID}")]
        public ActionResult<List<Cart>> GetCartByUserId(string userID)
        {
            List<Cart> cart = cartService.GetbyUserID(userID);
            if (cart == null)
            {
                return NotFound($"this customer's cart is empty");
            }
            return cart;
        }

        // POST api/<CartController>
        [HttpPost]
        public ActionResult<Cart> Post([FromBody] Cart cart)
        {
            var cartt = cartService.CheckAdd(cart.UserID, cart.ProductID, cart.Options);
            if (cartt == null)
            {
                cartService.Create(cart);
                return CreatedAtAction(nameof(Get), new { id = cart.Id }, cart);
            }
            string id = cartt.Id;
            int quantity = cartt.Quantity + 1;
            cartService.UpdateQuantity(id, quantity);
            return NoContent();

        }

        // PUT api/<CartController>/5
        [HttpPut("update-CartID/{id}")]
        public ActionResult Put(string id, [FromBody] Cart cart)
        {
            var existingcart = cartService.Get(id);
            if (existingcart == null)
            {
                return NotFound($"Cart with Id = {id} not found");
            }
            //Update
            cartService.Update(id, cart);
            return NoContent();
        }

        // DELETE api/<CartController>/5
        [HttpDelete("delete-CartID/{id}")]
        public ActionResult Delete(string id)
        {
            var cart = cartService.Get(id);
            if (cart == null)
            {
                return NotFound($"Cart with Id = {id} not found");
            }
            //Delete
            cartService.Remove(cart.Id);
            return Ok($"Cart with Id = {id} deleted");
        }
    }
}
