using System;

namespace Clases
{
    class Program
    {
        static void Main(string[] args)
        {
            int [] arr = new int[10];
            // CREACION DE UN OBJETO - INSTANCIAR UNA CLASE
            Auto miAuto = new Auto();
            // ACCESO A LOS ATRIBUTOS DE LA CLASE AUTO 
            // CON EL OPERADOR PUNTO
            miAuto.marca = "VolksWagen";
            miAuto.modelo = "Golf GTi";
            miAuto.anio = 2020;
            miAuto.placa = "SH-3010";

            Console.WriteLine($"Este es mi {miAuto.modelo} del {miAuto.anio}");
            miAuto.Arrancar();
            string sapo = "Christian";
            miAuto.Atropellar("Jorge", sapo);            

            Console.WriteLine($"Apunta la placa, es {miAuto.placa}");

            Auto superAuto = new Auto("Daewoo", "Tico", 1991, "T3M-ATP");
            Console.WriteLine($"Este es mi superauto {superAuto.modelo} del año {superAuto.anio}, tapa la placa");

            
        }
    }

}
