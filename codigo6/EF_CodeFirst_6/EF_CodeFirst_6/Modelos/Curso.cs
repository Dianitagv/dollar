using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_CodeFirst_6.Modelos
{
    [Table("MisCursos", Schema = "Administracion")]
    class Curso
   {
      // GET Y SET PARA LA MISMA PROPIEDAD
      public int id { get; set; }
      public string titulo { get; set; }
      public DateTime fechaDeInicio { get; set; }
       [ForeignKey("Profesor")]
      public int Prosor { get; set;}
      public ICollection<Alumno> Alumnos { get; set; }
      public Profesor Profesor { get; set; }

   }
}
