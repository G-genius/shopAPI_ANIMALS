﻿namespace ShopAPI.Models
{
    public class Storage
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Address { get; set; }

        public Purchase Purchase { get; set; }
    }
}
