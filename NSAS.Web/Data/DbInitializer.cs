using NSAS.Core.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NSAS.Web.Data
{
    public class DbInitializer
    {
        public static void SeedData(DataContext _dataContext)
        {
            _SeedUsers(_dataContext);
            _SeedEvents(_dataContext);
            _SeedPanelMembers(_dataContext);
        }

        public static void _SeedUsers(DataContext _dataContext)
        {
            var user = _dataContext.Set<User>();
            if(user.Any())
            {
                return;
            }

            user.Add(new User
            {
                Name = "NSAS",
                Email = "nsas@selu.edu",
                Password = "Pokhara",
            });

            _dataContext.SaveChanges();
        }

        public static void _SeedEvents(DataContext _dataContext)
        {
            var events = _dataContext.Set<Event>();

            if (events.Any())
            {
                return;
            }

            events.Add(new Event
            {
                EventName = "Dashain",
                EventStartDate = new DateTime(),
                EventEndDate = new DateTime(),
            });

            _dataContext.SaveChanges();
        }

        public static void _SeedPanelMembers(DataContext _dataContext)
        {
            var panelMember = _dataContext.Set<PanelMember>();
            if (panelMember.Any())
            {
                return;
            }

            panelMember.Add(new PanelMember
            {
                Name = "Pawan Shrestha",
                Position = "President",
                Major = "Biology",
                Description = "I am president of NSAS"
            });

            _dataContext.SaveChanges();
        }
    }
}
