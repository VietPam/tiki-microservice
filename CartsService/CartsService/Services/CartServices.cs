using CartsService.Models;
using MongoDB.Driver;

namespace CartsService.Services
{
    public class CartServices : ICartServices
    {
        private readonly IMongoCollection<Cart> _carts;
        public CartServices(ICartDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _carts = database.GetCollection<Cart>(settings.CartCollectionName);
        }
        public Cart Create(Cart cart)
        {
            _carts.InsertOne(cart);
            return cart;
        }

        public List<Cart> Get()
        {
            return _carts.Find(cart => true).ToList();
        }

        public Cart Get(string id)
        {
            return _carts.Find(cart => cart.Id == id).FirstOrDefault();
        }

        public List<Cart> GetbyUserID(string userID)
        {
            return _carts.Find<Cart>(cart => cart.UserID == userID).ToList();
        }

        public void Remove(string id)
        {
            _carts.DeleteOne(cart => cart.Id == id);
        }

        public void Update(string id, Cart cart)
        {
            _carts.ReplaceOne(cart => cart.Id == id, cart);
        }
        public Cart CheckAdd(string userID, string productID, string[]? options)
        {
            return _carts.Find(cart => cart.UserID == userID && cart.ProductID == productID && cart.Options == options).FirstOrDefault();
        }
        public UpdateResult UpdateQuantity(string id,int quantity)
        {
            var filter = Builders<Cart>.Filter.Eq(cart => cart.Id, id);
            UpdateDefinition<Cart> update = Builders<Cart>.Update.Set(cart => cart.Quantity, quantity);
            return _carts.UpdateOne(filter, update);
        }
    }
}
