using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;

namespace ProductService.DataModels
{
    public class Product
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string productID { get; set; } = ObjectId.GenerateNewId().ToString();

        public string productName { get; set; }

        public Category category { get; set; }

        public string description { get; set; }

        public string image_product { get; set; }

        public List<string> image_list { get; set; }

        public int price { get; set; }

        public int sale { get; set; }

        public string branch { get; set; }

        public Dictionary<string, string> options { get; set; }

        public enum e_status
        {
            AVAILABLE = 0,  // on sall 
            OUTOFSOCK   // out of product
        }

        public e_status status { get; set; }

        public int quantity { get; set; }

        public Dictionary<string, string> details { get; set; }

        public double rating_value { get; set; } = 4.5 ;

        public bool is_draft { get; set; } = false;

        public string shop_location { get; set; } = "Ha Noi";

        public string sold_number { get; set; } = "da ban 12000";

        public double discount { get; set; }


        public Product(string _productID, string _productName, Category _category,
                                string _description, string _image_detail, List<string> _image_list,
                                int _price, int _sale,string _branch
                            , Dictionary<string, string> _options,
                                int _status , int _quantity, Dictionary<string, string> _details,
                                double _rating_value, bool _is_draft , string _shop_location, string _sold_number, double _discount)
        {
            productID = _productID;
            productName = _productName;
            category = _category;
            description = _description;
            image_product = _image_detail;
            image_list = _image_list;
            price = _price;
            sale = _sale;
            branch = _branch;
            options = _options;

            if(_status == 0)
            {
                status = e_status.AVAILABLE;
            }
            else
            {
                status = e_status.OUTOFSOCK;
            }

            quantity = _quantity;
            details = _details;
            rating_value = _rating_value;
            is_draft = _is_draft;
            shop_location = _shop_location;
            sold_number = _sold_number;
            discount = _discount;
        }
    }
}
