using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.Collections.Generic;

namespace ProductService.DataModels
{
    public class SubProduct
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string product_ID { get; set; }

        public string description { get; set; }

        public string image_product { get; set; }

        public int price_discount { get; set; }

        public double discount { get; set; } 

        public string sold_number { get; set; } 

        public SubProduct(string product_ID, string description, string image_product, int price, double _discount, string sold_number)
        {
            this.product_ID = product_ID;
            this.description = description;
            this.image_product = image_product;
            this.price_discount = price;
            this.discount = _discount;
            this.sold_number = sold_number;
        }
    }
}
