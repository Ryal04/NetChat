
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/channels")]
    public class ChannelsController : ControllerBase 
    {
        public IActionResult Get()
        {
            var channels = new string[] {"Roidy","Alvarez","Gomez"};
            return Ok(channels);
        }
        
        [HttpGet("{id}")]
        public IActionResult Get(int id){
            
            return Ok("holi <3");
        }
    }
}