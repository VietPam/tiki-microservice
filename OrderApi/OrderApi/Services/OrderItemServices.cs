using OrderApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace OrderApi.Services
{
    public class OrderItemServices
    {
        private readonly IMongoCollection<OrderItem> _orderItemCollection;

        public OrderItemServices(IOptions<OrderItemDbSetting> mongodbsetting)
        {
            MongoClient client = new MongoClient(mongodbsetting.Value.ConnectionString);
            IMongoDatabase db = client.GetDatabase(mongodbsetting.Value.DatabaseName);
            _orderItemCollection = db.GetCollection<OrderItem>(mongodbsetting.Value.OrderItemCollectionName);
        }
        public OrderItem Create(OrderItem item)
        {
            _orderItemCollection.InsertOne(item);
            return item;
        }
        public List<OrderItem> Get(string IdOrder)
        {
            return _orderItemCollection.Find(item => item.idOrder.ToString() == IdOrder).ToList();
        }
        public void Delete(OrderItem item)
        {
            _orderItemCollection.DeleteOne(it => it.idOrder.ToString()==item.idOrder);
        }
    }
}
