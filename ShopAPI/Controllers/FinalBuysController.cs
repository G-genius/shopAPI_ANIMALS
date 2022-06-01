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
    public class FinalBuysController : ControllerBase
    {
        private readonly ShopContext _context;

        public FinalBuysController(ShopContext context)
        {
            _context = context;
        }

        // GET: api/FinalBuys
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FinalBuy>>> GetFinalBuys()
        {
          if (_context.FinalBuys == null)
          {
              return NotFound();
          }
            return await _context.FinalBuys.ToListAsync();
        }

        // GET: api/FinalBuys/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FinalBuy>> GetFinalBuy(int id)
        {
          if (_context.FinalBuys == null)
          {
              return NotFound();
          }
            var finalBuy = await _context.FinalBuys.FindAsync(id);

            if (finalBuy == null)
            {
                return NotFound();
            }

            return finalBuy;
        }

        // PUT: api/FinalBuys/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFinalBuy(int id, FinalBuy finalBuy)
        {
            if (id != finalBuy.Id)
            {
                return BadRequest();
            }

            _context.Entry(finalBuy).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FinalBuyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/FinalBuys
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<FinalBuy>> PostFinalBuy(FinalBuy finalBuy)
        {
          if (_context.FinalBuys == null)
          {
              return Problem("Entity set 'ShopContext.FinalBuys'  is null.");
          }

            var users = await _context.Users.FindAsync(finalBuy.IdUser);

            if (users == null)
            {
                return NotFound();
            }

            finalBuy.User = users;
            finalBuy.UserBasket = users.Basket;
            float sum = 0;

            for (int i = 0; i < finalBuy.UserBasket.Count; i++)
            {
                var buy = await _context.Buys.FindAsync(finalBuy.UserBasket[i]);

                if (buy == null)
                {
                    return NotFound();
                }

                var product = await _context.Products.FindAsync(buy.IdProduct);

                if (product == null)
                {
                    return NotFound();
                }

                product.Count -= buy.Count;
                if (product.Count < 0)
                {
                    return NotFound();
                }
                _context.Entry(product).State = EntityState.Modified;

                sum += buy.Amount;
                finalBuy.UserBasket[i] = buy;
            }

            finalBuy.Amount = sum;

            _context.FinalBuys.Add(finalBuy);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFinalBuy", new { id = finalBuy.Id }, finalBuy);
        }

        // DELETE: api/FinalBuys/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFinalBuy(int id)
        {
            if (_context.FinalBuys == null)
            {
                return NotFound();
            }
            var finalBuy = await _context.FinalBuys.FindAsync(id);
            if (finalBuy == null)
            {
                return NotFound();
            }

            _context.FinalBuys.Remove(finalBuy);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FinalBuyExists(int id)
        {
            return (_context.FinalBuys?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
