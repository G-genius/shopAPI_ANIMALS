﻿namespace ShopAPI.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public string? FIO { get; set; }
        public string? PhoneNumber { get; set; }

        public List<Order>? Orders { get; set; }
    }
}
