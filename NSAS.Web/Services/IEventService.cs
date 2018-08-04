using NSAS.Core.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NSAS.Web.Services
{
    public interface IEventService
    {
        void AddEvent(Event newEvent);

        ICollection<Event> GetPastEvents();

        ICollection<Event> GetFutureEvents();

        void DeleteEvent(int eventId);
    }
}
