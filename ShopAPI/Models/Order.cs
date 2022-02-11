namespace ShopAPI.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int IdProduct { get; set; }
        public int IdWorkers { get; set; }
        public int IdCustomers { get; set; }
        public int Count { get; set; }
        public int Amount { get; set; }
    }
}
