
using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChannelsController : ControllerBase
    {
        private DataContext _context;

        public ChannelsController(DataContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }
        public IActionResult Get()
        {
            var channels = _context.Channels.ToList();
            return Ok(channels);
        }

        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            var channel = _context.Channels.FirstOrDefault(x => x.Id == id);
            return Ok(channel);
        }
    }
}