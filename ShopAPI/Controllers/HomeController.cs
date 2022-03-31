using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using ShopAPI.viewModels;
using ShopAPI.Models;
using Microsoft.AspNetCore.Identity;

namespace ShopAPI.Controllers
{
    public class HomeController : Controller
    {
        private readonly UserManager<Users> _userManager;
        private readonly SignInManager<Users> _signInManager;

        //public HomeController(UserManager<Users> userManager, SignInManager<Users> signInManager)
        //{
        //    _userManager = userManager;
        //    _signInManager = signInManager;
        //}
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Register(RegistrViewModel model)
        {
            if (ModelState.IsValid)
            {
                Users user = new Users { Email = model.Email, UserName = model.Email };
                // добавляем пользователя
                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    // установка куки
                    await _signInManager.SignInAsync(user, false);
                    return RedirectToAction("Index", "Home");
                }
                else
                {
                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError(string.Empty, error.Description);
                    }
                }
            }
            return View(model);
        }
    }
}
