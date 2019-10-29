using EF_CodeFirst_6.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_CodeFirst_6
{
   class Program
   {
      static void Main(string[] args)
      {
         using (ColegioContext context = new ColegioContext())
         {
            var alumnos = context.Alumnos.ToList();
               Direccion dir = new Direccion()
                {
                    numero = 102,
                    calle= "manzanitos"
                };
                Alumno alumno = new Alumno()
                {
                    nombre = "Christian",
                    ponderado = 20,
                    Direccion=dir
                };

                Curso curso = new Curso()
                {
                    titulo = "c#",
                    fechaDeInicio = Convert.ToDateTime("2019-06-06"),
                    Profesor = new Profesor() { nombre = "Patrick" },
                    Alumnos = new List<Alumno>()

                };

                //Profesor profesor = new Profesor()
                //{
                  //  nombre = "Patrick",
                  //  facultad = 8
                //};

                curso.Alumnos.Add(alumno);
                context.Cursos.Add(curso);
                context.Alumnos.Add(alumno);
                
                context.SaveChanges();

            foreach (var a  in alumnos)
            {
               Console.WriteLine(alumno.nombre + "   " + alumno.ponderado);
            }


         }
      }
   }
}
