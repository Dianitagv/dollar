using System;

namespace ClasePelicula
{
    class Program
    {
        static void Main(string[] args)
        {

            Pelicula[] misPeliculas = new Pelicula[10];
            misPeliculas[0] = new Pelicula(1,"Lo que el viento se llevo",45.00,5,3);
            misPeliculas[1] = new Pelicula(2, "Los pitufos", 45.00, 5, 3);
            misPeliculas[2] = new Pelicula(3, "Los miserables", 55.00, 4, 3);
            misPeliculas[3] = new Pelicula(4, "Avatar", 35.00, 2, 2);
            misPeliculas[4] = new Pelicula(5, "Alita", 50.00, 5, 1);

            int opcion = 0;

            do
            {
                Console.Clear();
                Console.WriteLine("Sistema de venta de películas");
                Console.WriteLine("1. Ver películas disponibles.");
                Console.WriteLine("2. Verificar disponibilidad.");
                Console.WriteLine("3. Comprar película.");
                Console.WriteLine("4. Devolver película.");
                Console.WriteLine("5. Películas populares.");
                Console.WriteLine("Escoja una opción: ");

                opcion = int.Parse(Console.ReadLine());

                switch (opcion)
                {
                    case 1:
                        //
                        break;
                    case 2:
                        //
                        break;
                    case 3:
                        //
                        break;
                    case 4:
                        //
                        break;
                    case 5:
                        //
                        break;
                    default:
                        break;
                }

            } while (opcion != 6);

        }
    }
}

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
        Id = 0; Titulo = ""; Precio = 0.00; Disponibilidad = 0; Puntuacion = 0;
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
        Console.WriteLine("Películas por disponibilidad.");
        foreach (var item in )
        {

        }
    }

    public void comprarPelicula()
    {

    }

    public void devolverPelicula()
    {

    }
}
