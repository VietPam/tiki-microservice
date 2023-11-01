using CartsService.Models;
using MongoDB.Driver;

namespace CartsService.Services
{
    public interface ICartServices
    {
        List<Cart> Get();
        Cart Get(string id);
        List<Cart> GetbyUserID(string userID);
        Cart Create(Cart cart);
        void Update(string id, Cart cart);
        void Remove(string id);
        Cart CheckAdd(string userID, string productID, string[] options);
        UpdateResult UpdateQuantity(string id,int quantity);
    }
}
