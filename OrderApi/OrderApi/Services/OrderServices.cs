using OrderApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace OrderApi.Services
{
    public class OrderServices
    {
        private readonly IMongoCollection<Order> _orderCollection;

        public OrderServices(IOptions<OrderDbSetting> mongodbsetting)
        {
            MongoClient client = new MongoClient(mongodbsetting.Value.ConnectionString);
            IMongoDatabase db = client.GetDatabase(mongodbsetting.Value.DatabaseName);
            _orderCollection = db.GetCollection<Order>(mongodbsetting.Value.OrderCollectionName);
        }
        public Order Create(Order order)
        {
            _orderCollection.InsertOne(order);
            return order;
        }

        public List<Order> Get()
        {
            return _orderCollection.Find(Order => true).ToList();
        }

        public Order Get(string idOrder)
        {
            return _orderCollection.Find(Order => Order.id.ToString() == idOrder).FirstOrDefault();
        }

        public void Remove(string ID)
        {
            _orderCollection.DeleteOne(order => order.id.ToString() == ID);
        }

        public void Update(Order order, string ID)
        {
            _orderCollection.ReplaceOne(order => order.id.ToString() == ID, order);
        }
    }
}
