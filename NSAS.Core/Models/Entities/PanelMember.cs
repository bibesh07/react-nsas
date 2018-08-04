using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace NSAS.Core.Models.Entities
{
    public class PanelMember
    {
        public int PanelMemberId { get; set; }

        public string Name { get; set; }

        public string Position { get; set; }

        public string Major { get; set; }

        public string Description { get; set; }
    }
}
