using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NSAS.Core.Models.Entities;
using NSAS.Web.Services;

namespace NSAS.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/Events")]
    public class EventsController : Controller
    {
        private readonly IEventService _eventService;

        public EventsController(IEventService eventService) {
            _eventService = eventService;
        }
        
        [HttpPost("AddEvent")]
        public IActionResult AddEvent([FromBody] Event eventToAdd)
        {
           _eventService.AddEvent(eventToAdd);
            return Ok();
        }

        [HttpDelete("DeleteEvent")]
        public IActionResult DeleteEvent(int id)
        {
            _eventService.DeleteEvent(id);
            return Ok();
        }

        [HttpGet("GetPastEvents")]
        public IActionResult GetPastEvents() => Ok(_eventService.GetPastEvents());

        [HttpGet("GetFutureEvents")]
        public IActionResult GetFutureEvents() => Ok(_eventService.GetFutureEvents());

    }
}