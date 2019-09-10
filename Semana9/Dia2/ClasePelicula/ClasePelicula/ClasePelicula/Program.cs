using System;

namespace ClasePelicula
{
    class Program
    {
        static void Main(string[] args)
        {

            Pelicula[] misPeliculas = new Pelicula[5];

            Pelicula pel1 = new Pelicula();
            pel1.Id = 0001;
            pel1.Titulo = "Lo que el viento se llevó";
            pel1.Precio = 45.00;
            pel1.Disponibilidad = 10;
            pel1.Puntuacion = 4;

            misPeliculas[0] = pel1;

            Pelicula pel2 = new Pelicula();
            pel1.Id = 0002;
            pel1.Titulo = "Lo que el viento se llevó";
            pel1.Precio = 45.00;
            pel1.Disponibilidad = 10;
            pel1.Puntuacion = 4;

            misPeliculas[0] = pel2;

            Pelicula pel3 = new Pelicula();
            pel1.Id = 0001;
            pel1.Titulo = "Lo que el viento se llevó";
            pel1.Precio = 45.00;
            pel1.Disponibilidad = 10;
            pel1.Puntuacion = 4;

            misPeliculas[0] = pel3;

            Pelicula pel4 = new Pelicula();
            pel1.Id = 0001;
            pel1.Titulo = "Lo que el viento se llevó";
            pel1.Precio = 45.00;
            pel1.Disponibilidad = 10;
            pel1.Puntuacion = 4;

            misPeliculas[0] = pel4;

            Pelicula pel5 = new Pelicula();
            pel1.Id = 0001;
            pel1.Titulo = "Lo que el viento se llevó";
            pel1.Precio = 45.00;
            pel1.Disponibilidad = 10;
            pel1.Puntuacion = 4;

            misPeliculas[0] = pel5;
        


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
