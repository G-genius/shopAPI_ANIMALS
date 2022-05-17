namespace ShopAPI.Models
{
    public class Purchase
    {
        public int Id { get; set; }
        public int IdUser { get; set; }
        public int Amount { get; set; }
        public bool IsFinished { get; set; }

        public User? User { get; set; }

        public List<BuyForShop>? BuyForShops { get; set; }
    }
}
