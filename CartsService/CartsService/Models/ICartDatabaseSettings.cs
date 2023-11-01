namespace CartsService.Models
{
    public interface ICartDatabaseSettings
    {
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
        public string CartCollectionName { get; set; }
    }
}
