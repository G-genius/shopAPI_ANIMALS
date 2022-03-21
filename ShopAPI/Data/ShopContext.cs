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

        public DbSet<Users> Users { get; set; } = null!;
        public DbSet<Buy> Buys { get; set; } = null!;
        public DbSet<Post> Posts { get; set; } = null!;
        public DbSet<Product> Products { get; set; } = null!;
        public DbSet<BuyForShop> BuyForShops { get; set; } = null!;
        public DbSet<Worker> Workers { get; set; } = null!;
        public DbSet<Basket> Baskets { get; set; } = null!;
        public DbSet<Purchase> Purchases { get; set;} = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Worker>()
                .HasOne(d => d.Post)
                .WithMany()
                .HasForeignKey(b => b.IdPost);


            modelBuilder.Entity<Buy>()
                .HasOne(d => d.Product)
                .WithMany()
                .HasForeignKey(b => b.IdProduct);

            modelBuilder.Entity<BuyForShop>()
                .HasOne(d => d.Product)
                .WithMany()
                .HasForeignKey(b => b.IdProduct);

            modelBuilder.Entity<Basket>()
                .HasOne(d => d.User)
                .WithMany()
                .HasForeignKey(b => b.IdUser);

            modelBuilder.Entity<Purchase>()
                .HasOne(d => d.Worker)
                .WithMany()
                .HasForeignKey(b => b.IdWorker);

            modelBuilder.Entity<Buy>()
                .HasOne<Basket>()
                .WithMany(p => p.Buys);

            modelBuilder.Entity<BuyForShop>()
                .HasOne<Purchase>()
                .WithMany(p => p.BuyForShops);
        }
    }
    
}
