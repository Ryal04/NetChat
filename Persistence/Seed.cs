using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser{
                        Id = "1",
                        UserName = "Roidy",
                        Email = "Roidy.110@gmail.com"
                    },
                    new AppUser{
                        Id = "2",
                        UserName = "Roberto",
                        Email = "Roberto.110@gmail.com"
                    },
                    new AppUser{
                        Id = "3",
                        UserName = "Alvarez",
                        Email = "Alvarez.110@gmail.com"
                    }
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, ".Pa$$w0rd");
                }

            }
        }
    }
}