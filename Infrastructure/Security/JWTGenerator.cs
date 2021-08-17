using System;
using System.Text;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Domain;
using Application.Interfaces;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;

namespace Infrastructure.Security
{
    public class JWTGenerator : IJwtGenerator
    {
         private SymmetricSecurityKey _Key; 
        public JWTGenerator(IConfiguration configuration) 
        {
            _Key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["TokenKey"]));
        }
        public string CreateToken(AppUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.NameId, user.UserName)
            };

            var creds = new SigningCredentials(_Key, SecurityAlgorithms.HmacSha256Signature);
            
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}