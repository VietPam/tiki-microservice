using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace OrderApi.Models
{
    public class OrderItem
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; } = string.Empty;
        public string idOrder { get; set; }
        public string idProduct { get; set; }
        public string name { get; set; }
        public string image { get; set; }
        public string option { get; set; }
        public string quantity { get; set; }
        public string price { get; set; }
        public string idVoucher { get; set; }
    }
}
