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
                .WithMany()
                .HasForeignKey(b => b.IdPost);


            modelBuilder.Entity<Order>()
                .HasOne(d => d.Worker)
                .WithMany()
                .HasForeignKey(l => l.IdWorker);

            modelBuilder.Entity<Order>()
                .HasOne(d => d.Customer)
                .WithMany()
                .HasForeignKey(l => l.IdCustomer);

            modelBuilder.Entity<Order>()
                .HasOne(d => d.Product)
                .WithMany()
                .HasForeignKey(l => l.IdProduct);



            modelBuilder.Entity<Purchase>()
                .HasOne(d => d.Storage)
                .WithMany()
                .HasForeignKey(e => e.IdStorage);

            modelBuilder.Entity<Purchase>()
                .HasOne(d => d.Product)
                .WithMany()
                .HasForeignKey(e => e.IdProduct);




        }
    }
    
}
