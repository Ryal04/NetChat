using System;
using System.Collections.Generic;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Error;
using Domain;
using MediatR;
using Persistence;

namespace Application.Channels
{
    public class Details
    {
        public class Query : IRequest<Channel>
        {
            public Guid Id {get; set;}
        }

        public class Handler : IRequestHandler<Query, Channel>
        {
            private DataContext _context;

            public Handler(DataContext context)
            {
                _context = context ?? throw new ArgumentException(nameof(context));
            }

            public async Task<Channel> Handle(Query request, CancellationToken cancellationToken)
            {
                var channel = await _context.Channels.FindAsync(request.Id);
                  if (channel == null)
                  {
                    throw new RestException(HttpStatusCode.NotFound , new { channel = "Not Found"});
                  }
                  
                return channel;
            }
        }
    }
}