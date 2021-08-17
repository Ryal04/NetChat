using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Error;
using Application.Interfaces;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace Application.User
{
    public class Register
    {
        public class Command : IRequest<User>
        {
            public string UserName{get; set;}
            public string Email { get; set; }
            public string Password { get; set; }
        } 

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.UserName).NotEmpty();
                RuleFor(x => x.Email).NotEmpty();
                RuleFor(x => x.Password).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Command, User>
        {
            private readonly UserManager<AppUser> userManager;
            private readonly IJwtGenerator jwtGenerator;

            public Handler(UserManager<AppUser> userManager, IJwtGenerator jwtGenerator)
            {
                this.userManager = userManager;
                this.jwtGenerator = jwtGenerator;
            }

            public async Task<User> Handle(Command request, CancellationToken cancellationToken)
            {
                if (await userManager.FindByEmailAsync(request.Email) != null)
                {
                    throw new RestException(HttpStatusCode.BadRequest, new {Email = "User already exists"});
                }

                if (await userManager.FindByNameAsync(request.UserName) != null)
                {
                    throw new RestException(HttpStatusCode.BadRequest, new {UserName = "Email already exists"});
                }

                var user = new AppUser 
                {
                    Email = request.Email,
                    UserName = request.UserName,
                };

                var result = await userManager.CreateAsync(user, request.Password); 

                if(result.Succeeded)
                {
                    return new User 
                    {
                        UserName = user.UserName,
                        Email = user.Email,
                        Token = jwtGenerator.CreateToken(user)
                    };
                }


                throw new Exception("Error registering user");
            }
        }
    }
}