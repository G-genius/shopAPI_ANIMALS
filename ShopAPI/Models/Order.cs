namespace ShopAPI.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int IdProduct { get; set; }
        public int IdWorker { get; set; }
        public int IdCustomer { get; set; }
        public int Count { get; set; }
        public int Amount { get; set; }

        public Worker? Worker { get; set; }

        public Customer? Customer { get; set; }

        public Product? Product { get; set; }
    }
}
