using System;
using System.Collections.Generic;
using System.Text;

namespace NSAS.Core.Models.Entities
{
    public class Event
    {
        public int ID { get; set; }

        public string EventName { get; set; }

        public string Location { get; set; }

        public DateTime EventStartDate { get; set; }

        public DateTime EventEndDate { get; set; }
    }
}
