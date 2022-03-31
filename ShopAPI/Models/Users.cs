namespace ShopAPI.Models
{
    public class Users
    {
        public int Id { get; set; }
        public string? FIO { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string UserName { get; internal set; }


        public int? RoleId { get; set; }
        public Role Role { get; set; }
    }
    public class Role
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Users> Users { get; set; }
        public Role()
        {
            Users = new List<Users>();
        }
    }
}
