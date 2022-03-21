﻿namespace ShopAPI.Models
{
    public class Basket
    {
        public int Id { get; set; }
        public int IdUser { get; set; }
        public int Amount { get; set; }

        public string? UserPhone { get; set; }
        public string? Address { get; set; }

        public Users? User { get; set; }

        public List<Buy>? Buys { get; set; }
    }
}