using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace ProductService.DataModels
{
    public class Category
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string categoryID { get; set; } = ObjectId.GenerateNewId().ToString();
        public string categoryName { get; set; }
        public string image_category { get; set; }

        public Category(string _categoryID, string _categoryName , string _image_category)
        {
            categoryID = _categoryID;
            categoryName = _categoryName;
            image_category = _image_category;
        }
    }
}
