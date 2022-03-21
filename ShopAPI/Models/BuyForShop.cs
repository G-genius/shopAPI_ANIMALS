namespace ShopAPI.Models
{
    public class BuyForShop
    {
        public int Id { get; set; }
        public int IdProduct { get; set; }
        public int Price { get; set; }
        public int Count { get; set; }
        public int Amount { get; set; }

        public Product? Product { get; set; }
    }
}
