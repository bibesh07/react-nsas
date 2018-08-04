using NSAS.Core.Models.Entities;
using NSAS.Web.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NSAS.Web.Services
{
    public class EventService : IEventService
    {
        public readonly DataContext _dataContext;

        public EventService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public void AddEvent(Event newEvent)
        {
            _dataContext.Events.Add(newEvent);

            _dataContext.SaveChanges();
        }

        public ICollection<Event> GetPastEvents() => _dataContext.Events.Where(d => d.EventStartDate < DateTime.Now).ToList();

        public ICollection<Event> GetFutureEvents() => _dataContext.Events.Where(d => d.EventStartDate > DateTime.Now).ToList();

        public void DeleteEvent(int id)
        {
            var tweet = _dataContext.Events.Where(e => e.ID == id).SingleOrDefault();
            if (tweet != null)
            {
                _dataContext.Events.Remove(tweet);
                _dataContext.SaveChanges();
            }
        }
    }
}
