using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
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
            
            Task<Channel> IRequestHandler<Query, Channel>.Handle(Query request, CancellationToken cancellationToken)
            {
                throw new NotImplementedException();
            }
        }
    }
}