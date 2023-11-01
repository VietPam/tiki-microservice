using Testmongo.Models;
using MongoDB.Driver;

namespace Testmongo.Services
{
    public class ShopService : IShopService
    {
        private readonly IMongoCollection<shop> _shops;
        public ShopService(ITestDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _shops = database.GetCollection<shop>(settings.TestCoursesCollectionName);
        }
        public shop Create(shop shop)
        {
            _shops.InsertOne(shop);
            return shop;
        }


        public shop Get(string id)
        {
            return _shops.Find(shop => shop.id == id).FirstOrDefault();
        }

        public List<shop> Getall()
        {
            return _shops.Find(shop => true).ToList();
        }

        public void Remove(string id)
        {
            _shops.DeleteOne(shop => shop.id == id);
        }

        public void Update(string id, shop shop)
        {
            _shops.ReplaceOne(shop => shop.id == id, shop);
        }

     
    }
}
