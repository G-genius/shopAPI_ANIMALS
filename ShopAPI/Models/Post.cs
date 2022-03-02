namespace ShopAPI.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string? Name { get; set; }


        public Worker Worker { get; set; }
    }
}
