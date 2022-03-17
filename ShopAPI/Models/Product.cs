namespace ShopAPI.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int? Price { get; set; }

        public List<Order>? Orders { get; set; }

        public List<Purchase>? Purchases { get; set; }
    }
}
