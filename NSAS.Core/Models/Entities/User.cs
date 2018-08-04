using System;
using System.Collections.Generic;
using System.Text;

namespace NSAS.Core.Models.Entities
{
    public class User
    {
        public int UserId { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }
    }
}
