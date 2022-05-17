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
    public class BasketsController : ControllerBase
    {
        private readonly ShopContext _context;

        public BasketsController(ShopContext context)
        {
            _context = context;
        }

        // GET: api/Baskets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Basket>>> GetBaskets()
        {
          if (_context.Baskets == null)
          {
              return NotFound();
          }
            return await _context.Baskets.ToListAsync();
        }

        // GET: api/Baskets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Basket>> GetBasket(int id)
        {
          if (_context.Baskets == null)
          {
              return NotFound();
          }
            var basket = await _context.Baskets.FindAsync(id);

            if (basket == null)
            {
                return NotFound();
            }

            return basket;
        }

        // PUT: api/Baskets/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBasket(int id, Basket basket)
        {
            if (id != basket.Id)
            {
                return BadRequest();
            }

            _context.Entry(basket).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BasketExists(id))
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

        // POST: api/Baskets
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Basket>> PostBasket(Basket basket)
        {
          if (_context.Baskets == null)
          {
              return Problem("Entity set 'ShopContext.Baskets'  is null.");
          }

            var users = await _context.Users.FindAsync(basket.IdUser);

            if (users == null)
            {
                return NotFound();
            }

            basket.User = users;
            int sum = 0;

            for (int i = 0; i < basket.Buys.Count; i++)
            {
                var buy = await _context.Buys.FindAsync(basket.Buys[i].Id);

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
                basket.Buys[i] = buy;
            }

            basket.Amount = sum;
            basket.IsFinished = false;

            _context.Baskets.Add(basket);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBasket", new { id = basket.Id }, basket);
        }

        // DELETE: api/Baskets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBasket(int id)
        {
            if (_context.Baskets == null)
            {
                return NotFound();
            }
            var basket = await _context.Baskets.FindAsync(id);
            if (basket == null)
            {
                return NotFound();
            }

            _context.Baskets.Remove(basket);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BasketExists(int id)
        {
            return (_context.Baskets?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
