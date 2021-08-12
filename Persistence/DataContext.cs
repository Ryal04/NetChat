using System;
using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Channel> Channels{ get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            base.OnModelCreating(modelBuilder);
            
            modelBuilder
                .Entity<Channel>()
                .HasData(

                    new Channel{
                    Id = Guid.NewGuid(),
                    Name = "DotNetCore",
                    Description = "Canal de DotNetCore",
                    },
                    new Channel{
                    Id = Guid.NewGuid(),
                    Name = "Angular",
                    Description = "Canal de Angular",
                    },
                    new Channel{
                    Id = Guid.NewGuid(),
                    Name = "ReactJs",
                    Description = "Canal de ReactJs",
                    }

                    );
        }
    }
}
