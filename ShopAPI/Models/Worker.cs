namespace ShopAPI.Models
{
    public class Worker
    {
        public int Id { get; set; }
        public string? FIO { get; set; }
        public int IdPost { get; set; }

       // public int PostForeignKey { get; set; }
        public Post Post { get; set; }

        public Order Order { get; set; }
    }
}
