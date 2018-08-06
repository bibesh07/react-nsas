using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FluentValidation;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NSAS.Core.Models.Entities;
using NSAS.Core.Models.Validators;
using NSAS.Web.Services;

namespace NSAS.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/Events")]
    public class EventsController : Controller
    {
        private readonly IEventService _eventService;

        private readonly IValidator<Event> _eventValidator;

        public EventsController(IEventService eventService, IValidator<Event> eventValidator) {
            _eventService = eventService;
            _eventValidator = eventValidator;
        }
        
        [HttpPost("AddEvent")]
        public async Task<IActionResult> AddEvent([FromBody] Event eventToAdd, IFormFile file)
        {
            var result = _eventValidator.Validate(eventToAdd);

            if (file != null)
            {
                var filename = "wwwroot/uploads/" + Guid.NewGuid() + Path.GetExtension(file.FileName);

                using (var stream = file.OpenReadStream())
                {
                    using(var localStream = new FileStream(filename, FileMode.Create))
                    {
                        await stream.CopyToAsync(localStream);
                    }
                }

                eventToAdd.ImageName = filename;
            }

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