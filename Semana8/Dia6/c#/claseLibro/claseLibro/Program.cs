using System;

namespace claseLibro
{
    class Program
    {
        static void Main(string[] args)
        {
            Televisor miTelevisor = new Televisor(1000,"Blanco",'K',32);
            Console.WriteLine($"Mi televisor es de color {miTelevisor.Color} me costo {miTelevisor.Precio} tiene {miTelevisor.Pulgadas} y su consumo es de {miTelevisor.Consumo}");
            miTelevisor.ComprobarConsumo();
            


            
        }
    }            
}
