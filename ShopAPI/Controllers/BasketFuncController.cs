using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShopAPI.Data;
using ShopAPI.Models;

namespace ShopAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BasketFuncController : ControllerBase
    {
        private readonly ShopContext _context;

        public BasketFuncController(ShopContext context)
        {
            _context = context;
        }

        

        [HttpPut]
        public async Task<IActionResult> PutUserBuy(int idUser, int idBuy)
        {
            var user = await _context.Users.FindAsync(idUser);

            if (user == null)
            {
                return NotFound();
            }
            if (user.Basket == null) user.Basket = new List<Buy> { };
            var buy = await _context.Buys.FindAsync(idBuy);

            if (buy == null)
            {
                return NotFound();
            }

            for (var i = 0; i < user.Basket.Count; i++)
            {
                var buy2 = user.Basket[i];
                if (buy2.Id == idBuy)
                {
                    return BadRequest();
                }
            }

            user.Basket.Add(buy);
            _context.Entry(user).State = EntityState.Modified;

            return NoContent();
        }

        //[HttpPut("{idUser, idBuy}")]
        //public async Task<IActionResult> DeleteUserBuy(int idUser, int idBuy)
        //{
        //    var user = await _context.Users.FindAsync(idUser);

        //    if (user == null)
        //    {
        //        return NotFound();
        //    }

        //    for (var i = 0; i < user.Basket.Count; i++)
        //    {
        //        var buy = user.Basket[i];
        //        if (buy.Id == idBuy)
        //        {
        //            user.Basket.Remove(buy);
        //            break;
        //        }
        //        else
        //        {
        //            return NotFound();
        //        }
        //    }
        //    //var buy = await _context.Buys.FindAsync(idBuy);

        //    //if (buy == null)
        //    //{
        //    //    return NotFound();
        //    //}
        //    //user.Basket.Add(buy);
        //    _context.Entry(user).State = EntityState.Modified;

        //    return NoContent();
        //}
    }
}