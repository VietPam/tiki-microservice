using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace OrderApi.Models
{
    public class Order
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; } = string.Empty;
        public string userID { get; set; }
        public string shopID { get; set; }
        public string paymentID { get; set; }
        public string status { get; set; }
        public string orderDate { get; set; }
        public string paymentDate { get; set; }
        public string total {  get; set; }
    }
}
