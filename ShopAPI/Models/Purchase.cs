namespace ShopAPI.Models
{
    public class Purchase
    {
        public int Id { get; set; }
        public int IdProduct { get; set; }
        public int IdStorage { get; set; }
        public int Count { get; set; }
        public int Amount { get; set; }

        public Product? Product { get; set; }
        public Storage? Storage { get; set; }
    }
}
