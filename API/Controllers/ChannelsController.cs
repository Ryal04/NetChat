
using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Persistence;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChannelsController : ControllerBase
    {
        private DataContext _context;
        private ILogger _logger;

        public ChannelsController(DataContext context , ILogger logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentException(nameof(logger));
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