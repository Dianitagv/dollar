using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_CodeFirst_6.Modelos

{
    [Table("MisAlumnos", Schema = "Administracion")]
    class Alumno
    {
        public Alumno()
        {
            Cursos = new List<Curso>();
        }
        // SNIPPET PROP
        [Key]
        public int id { get; set; }
        [Required]
        [Column("Nombres y Apellidos", Order = 1)]
        public string nombre { get; set; }
        [Column("Nota", Order = 0)]
        public double ponderado { get; set; }
        [NotMapped]
        public int edad { get; set; }

        // PROPIEDADES DE NAVEGACIÓN
        [ForeignKey("Direccion")]
        public int Micasa { get; set; }
        public Direccion Direccion { get; set; }

      public ICollection<Curso> Cursos { get; set; }

   }
}
