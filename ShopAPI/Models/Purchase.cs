namespace ShopAPI.Models
{
    public class Purchase
    {
        public int Id { get; set; }
        public int IdWorker { get; set; }
        public int Amount { get; set; }

        public Worker? Worker { get; set; }

        public List<BuyForShop>? BuyForShops { get; set; }
    }
}
