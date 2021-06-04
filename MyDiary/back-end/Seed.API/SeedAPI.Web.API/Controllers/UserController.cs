using Microsoft.AspNetCore.Mvc;
using SeedAPI.ViewModels;
using SeedAPI.Web.API.App_Start;
using System.Text.Json;

namespace SeedAPI.Web.API.Controllers
{
    [Route("api/[controller]")]
    //[Authorize]
    public class UserController : Controller
    {
        private IUserMap userMap;

        public UserController(IUserMap map)
        {
            this.userMap = map;
        }

        // GET api/user
        [HttpGet]
        public string /*IEnumerable<UserViewModel>*/ Get()
        {

            return "awawaawawawawawawaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
           // return userMap.GetAll(); ;
        }
        // GET api/user/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }
         // POST api/user
        [HttpPost]
        public string Post([FromBody] UserViewModel user)
        {
            var createdUser =  this.userMap.Create(user);
            var jsonUser = JsonSerializer.Serialize(createdUser);
            return jsonUser;
        }
        // PUT api/user/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string user)
        {
        }
        // DELETE api/user/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
