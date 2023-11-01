using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace CartsService.Models
{
    [BsonIgnoreExtraElements]
    public class Cart
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = string.Empty /*= ObjectId.GenerateNewId().ToString()*/;
        [BsonElement("userID")]
        public string UserID { get; set; } = string.Empty;
        [BsonElement("productID")]
        public string ProductID { get; set; } = string.Empty;
        [BsonElement("productName")]
        public string ProductName { get; set; } = string.Empty;
        [BsonElement("image")]
        public string Image { get; set; } = string.Empty;
        [BsonElement("price")]
        public int Price { get; set; }
        [BsonElement("options")]
        public string[]? Options { get; set; }
        [BsonElement("shopName")]
        public string ShopName { get; set; } = string.Empty;
        [BsonElement("quantity")]
        public int Quantity { get; set; }
    }
}
