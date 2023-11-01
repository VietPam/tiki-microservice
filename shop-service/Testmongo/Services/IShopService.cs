using Testmongo.Models;

namespace Testmongo.Services
{
    public interface IShopService
    {
        List<shop> Getall();
        shop Get(string id);
        shop Create(shop shop);
        void Update(string id, shop shop);
        void Remove(string id);
    }
}
