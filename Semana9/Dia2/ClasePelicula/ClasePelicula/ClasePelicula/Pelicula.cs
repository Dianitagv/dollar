using System;
using System.Collections.Generic;
using System.Text;

namespace ClasePelicula
{
    class Pelicula
    {
        int id;
        string titulo;
        double precio;
        int disponibilidad;
        int puntuacion;

        public int Id { get => id; set => id = value; }
        public string Titulo { get => titulo; set => titulo = value; }
        public double Precio { get => precio; set => precio = value; }
        public int Disponibilidad { get => disponibilidad; set => disponibilidad = value; }
        public int Puntuacion { get => puntuacion; set => puntuacion = value; }

        public Pelicula()
        {
            Id = 0; Titulo = "";Precio = 0.00; Disponibilidad = 0;Puntuacion = 0;
        }

        public Pelicula(string titulo, double precio, int disponibilidad)
        {
            this.Titulo = titulo;
            this.Precio = precio;
            this.Disponibilidad = disponibilidad;
        }

        public Pelicula(int id, string titulo, double precio, int disponibilidad, int puntuacion)
        {
            this.Id = id;
            this.Titulo = titulo;
            this.Precio = precio;
            this.Disponibilidad = disponibilidad;
            this.Puntuacion = puntuacion;
        }     

        public void verificarDisponibilidad()
        {

        }

        public void comprarPelicula()
        {

        }

        public void devolverPelicula()
        {
            
        }
    }
}
