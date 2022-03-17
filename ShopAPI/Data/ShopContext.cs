using Microsoft.EntityFrameworkCore;
using ShopAPI.Models;

namespace ShopAPI.Data
{
    public class ShopContext: DbContext
    {
        public ShopContext(DbContextOptions<ShopContext> options)
            : base(options)
        {

        }

        public DbSet<Customer> Customers { get; set; } = null!;
        public DbSet<Order> Orders { get; set; } = null!;
        public DbSet<Post> Posts { get; set; } = null!;
        public DbSet<Product> Products { get; set; } = null!;
        public DbSet<Purchase> Purchases { get; set; } = null!;
        public DbSet<Storage> Storages { get; set; } = null!;
        public DbSet<Worker> Workers { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Worker>()
                .HasOne(d => d.Post)
                .WithMany(a => a.Workers)
                .HasForeignKey(b => b.IdPost);


            modelBuilder.Entity<Order>()
                .HasOne(d => d.Worker)
                .WithMany(m => m.Orders)
                .HasForeignKey(l => l.IdWorker);

            modelBuilder.Entity<Order>()
                .HasOne(d => d.Customer)
                .WithMany(m => m.Orders)
                .HasForeignKey(l => l.IdCustomer);

            modelBuilder.Entity<Order>()
                .HasOne(d => d.Product)
                .WithMany(m => m.Orders)
                .HasForeignKey(l => l.IdProduct);



            modelBuilder.Entity<Purchase>()
                .HasOne(d => d.Storage)
                .WithMany(f => f.Purchases)
                .HasForeignKey(e => e.IdStorage);

            modelBuilder.Entity<Purchase>()
                .HasOne(d => d.Product)
                .WithMany(f => f.Purchases)
                .HasForeignKey(e => e.IdProduct);




        }
    }
    
}
