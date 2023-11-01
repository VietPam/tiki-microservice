namespace OrderApi.Models
{
    public class OrderDbSetting
    {
        public string ConnectionString { get; set; } = null;
        public string DatabaseName { get; set; } = null;
        public string OrderCollectionName { get; set; } = null;
    }
}
