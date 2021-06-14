using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using SeedAPI.Maps.UserMaps;
using SeedAPI.ViewModels;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace SeedAPI.Web.API.Controllers
{
    [Route("/api/[controller]")]
    public class TokenController : Controller
    {
        private IConfiguration _config;
        private readonly IUserMap userMap;

        public TokenController(IConfiguration config ,IUserMap userMap)
        {
            _config = config;
            this.userMap = userMap;
        }

        [AllowAnonymous]
        [HttpPost]
        public dynamic Post([FromBody] LoginViewModel login)
        {
            IActionResult response = Unauthorized();
            var user = Authenticate(login);
            if (user != null)
            {
                var tokenString = BuildToken(user);
                response = Ok(new { token = tokenString, user = user });
            }
            return response;
        }
        private string BuildToken(UserViewModel user)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              expires: DateTime.Now.AddMinutes(30),
              signingCredentials: creds);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
        private UserViewModel Authenticate(LoginViewModel login)
        {
          return this.userMap.LogInUser(login);
            
        }
    }

}
