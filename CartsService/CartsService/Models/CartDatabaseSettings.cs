namespace CartsService.Models
{
    public class CartDatabaseSettings: ICartDatabaseSettings
    {
        public string ConnectionString { get; set; } = string.Empty;
        public string DatabaseName { get; set; } = string.Empty;
        public string CartCollectionName { get; set; } = string.Empty;
    }
}
