using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClassroomManger.Api.Models
{
    public class Student : Person
    {
        
        // Relations
        public int StudentId { get; set; }

        // Navigation Properties
        public virtual ICollection<Enrollment> Enrollments { get; set; }
    }
}