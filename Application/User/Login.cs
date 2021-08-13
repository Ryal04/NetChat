using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Error;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace Application.User
{
    public class Login
    {
        public class Query : IRequest<AppUser>{
            public string Email{get; set;}
            public string Password{get; set;}
        }

        public class QueryValidator : AbstractValidator<Query>
        {
            public QueryValidator()
            {
                RuleFor(x => x.Email).NotEmpty();
                RuleFor(x => x.Password).NotEmpty();
            }

        }

        public class Handler : IRequestHandler<Query, AppUser>
        {
            private readonly UserManager<AppUser> userManager;
            private readonly SignInManager<AppUser> signInManager;

            public Handler(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
            {
                this.userManager = userManager;
                this.signInManager = signInManager;
            }
            public async Task<AppUser> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await userManager.FindByEmailAsync(request.Email);
                if(user == null){
                    throw new RestException(HttpStatusCode.Unauthorized);
                }

                var result = await signInManager.CheckPasswordSignInAsync(user,request.Password, false);

                if (result.Succeeded){
                    return user;
                }

                throw new RestException(HttpStatusCode.Unauthorized);
            }
        }
    }
}