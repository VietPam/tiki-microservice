namespace OrderApi.Models
{
    public class OrderItemDbSetting
    {
        public string ConnectionString { get; set; } = null;
        public string DatabaseName { get; set; } = null;
        public string OrderItemCollectionName { get; set; } = null;
    }
}
