using Microsoft.AspNetCore.Mvc;
using OrderApi.Services;
using OrderApi.Models;

namespace OrderApi.Controllers
{
        [Route("api/[controller]")]
        [ApiController]
        public class OrderController : ControllerBase
        {
            private readonly OrderServices orderService;
            private readonly OrderItemServices orderItemService;

            public OrderController(OrderServices orderService,OrderItemServices orderItemServices)
            {
                this.orderService = orderService;
                this.orderItemService = orderItemServices;
            }
            [HttpGet]
            public ActionResult<List<Order>> GetAll()
            {
                return orderService.Get();
            }
            [HttpGet("OrderItem")]
            public ActionResult<List<OrderItem>> GetItem(string idorder)
            {
                var od = orderService.Get(idorder);
                if (od == null)
                {
                    return NotFound($"Order with ID = {idorder} not found");
                }
                return orderItemService.Get(idorder);
            }
            [HttpGet("OrderbyID")]
            public ActionResult<Order> Get(string idorder)
            { 
                var order = orderService.Get(idorder);
                if (order == null)
                {
                    return NotFound();
                }
                return order;
            }
            [HttpPost]
            public ActionResult<Order> CreateOrder([FromBody] Order od)
            {
                orderService.Create(od);
                return CreatedAtAction(nameof(Get), new { id = od }, od);
            }
            [HttpPost("OrderItem")]
            public ActionResult<OrderItem> CreateItem([FromBody] OrderItem item)
            {
                orderItemService.Create(item);
                return CreatedAtAction(nameof(Get), new { id = item.idOrder }, item);
            }
            [HttpDelete("{ID}")]
            public ActionResult DeleteOrder(string ID)
            {
                var exist = orderService.Get(ID);
                if (exist == null)
                {
                    return NotFound($"Order with ID = {ID} not found");
                }
                List<OrderItem> listitem = orderItemService.Get(ID);
                foreach (OrderItem item in listitem)
                {
                    orderItemService.Delete(item);
                }
                orderService.Remove(ID);
                return Ok($"Deleted");
                
            }
            [HttpPut("{ID}")]
            public ActionResult UpdateOrder(string ID, [FromBody] Order orderUpdate)
            {
                var exist = orderService.Get(ID);
                if (exist == null)
                {
                    return NotFound($"Order with ID = {ID} not found");
                }
                orderService.Update(orderUpdate, ID);
                return NoContent();
            }
        }
}
