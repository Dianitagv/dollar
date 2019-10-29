using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_CodeFirst_6.Modelos
{
   class Profesor
   {
      public int id { get; set; }
        [Required]
        [MaxLength(50)]
      public string nombre { get; set; }
        [MaxLength(50)]
      public string facultad { get; set; }

      public ICollection<Curso> Cursos { get; set; }
   }
}
