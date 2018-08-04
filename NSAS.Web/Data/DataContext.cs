using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using NSAS.Core.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NSAS.Web.Data
{
    public class DataContext : DbContext
    {
        public DataContext() { }

        public DataContext(IDbContextOptions options) { }

        public DbSet<User> Users { get; set; }

        public DbSet<Event> Events { get; set; }

        public DbSet<PanelMember> PanelMembers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            if(!options.IsConfigured)
            {
                options.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=NSAS;Trusted_Connection=True");
            }
        }
    }
}
