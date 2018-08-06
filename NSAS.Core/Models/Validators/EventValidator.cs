using FluentValidation;
using NSAS.Core.Models.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace NSAS.Core.Models.Validators
{
    public class EventValidator : AbstractValidator<Event>
    {
        public EventValidator ()
        {
            RuleFor(x => x.Location).NotEmpty().MinimumLength(5);
            RuleFor(x => x.EventName).NotEmpty().WithMessage("Event name is required field");
            RuleFor(x => x.EventStartDate).GreaterThan(DateTime.Now).WithMessage("Event start date must be selected in future");
        }
    }
}
