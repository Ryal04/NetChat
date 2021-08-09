
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        public ChannelsController(DataContext context , ILogger<ChannelsController> logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentException(nameof(context));
        }
        public IActionResult Get()
        {
            var channels = GetChannels();
            _logger.LogInformation("termino la tarea");
            return Ok(channels);
        }

        private IEnumerable<Domain.Channel> GetChannels(){
            var channels = _context.Channels.ToList();
            return channels;
        }

        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            var channel = _context.Channels.FirstOrDefault(x => x.Id == id);
            return Ok(channel);
            
        }
    }
}