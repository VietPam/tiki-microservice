using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes; 

namespace Testmongo.Models
{
    [BsonIgnoreExtraElements]
    public class shop
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; } = String.Empty;

        [BsonElement("shopName")]
        public string shopName { get; set; } = String.Empty;

        [BsonElement("shopAddress")]
        public string shopAddress { get; set; } = String.Empty;

        [BsonElement("shopDescription")]
        public string shopDescription { get; set; } = String.Empty;

        [BsonElement("shopAdmin")]
        public string shopAdmin { get; set; } = String.Empty;

        [BsonElement("businessfield")]
        public string businessfield { get; set; } = String.Empty;

        [BsonElement("shopImage")]
        public string shopImage { get; set; } = String.Empty;

        [BsonElement("rating")]
        public float rating { get; set; } 
    }
}
