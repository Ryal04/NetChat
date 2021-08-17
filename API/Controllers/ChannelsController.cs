
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Channels;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace API.Controllers
{
    public class ChannelsController : BaseController
    {
        [HttpGet]
        public async Task<ActionResult<List<Channel>>> List()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<Channel>> Details(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }   

        public async Task<Unit> Create([FromBody] Create.Command command)
        {
            return await Mediator.Send(command);
        }

    }
}