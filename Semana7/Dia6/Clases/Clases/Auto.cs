using System;
using System.Collections.Generic;
using System.Text;

namespace Clases
{
    class Auto
    {
        // CARACTERISTICAS, ATRIBUTOS => string, int

        // ACCESIBILIDAD PRIVADA Y PUBLICA
        // TODOS LOS METODOS Y ATRIBUTOS SON PRIVADOS
        // PRIVATE SOLO SE PUEDE USAR DENTRO DE LA CLASE
        // PUBLIC CUALQUIERA PUEDE USAR LOS METODOS Y ATRIBUTOS
        public string marca;
        public string modelo;
        public int anio;
        public string placa;

        // SELECCTIONAR CTRL + . CREAR CONSTRUCTOR


        // EL CONSTRUCTOR SE LLAMA CADA VEZ QUE SE CREA UN OBJETO
        // CONSTRUCTOR SIN PARÁMETROS
        public Auto()
        {
            Console.WriteLine("Se creó un auto");
        }
        public Auto(string marca, string modelo, int anio, string placa)
        {
            this.marca = marca;
            this.modelo = modelo;
            this.anio = anio;
            this.placa = placa;

            Console.WriteLine("Se creó un auto con sus características");
        }

        // METODOS DE CLASE, FUNCIONES, COMPORTAMIENTO DEL OBJETO
        public void Arrancar()
        {
            Console.WriteLine("Runnnnn");
        }
        public void Frenar()
        {

        }

        public void Atropellar(string nombre)
        {
            Console.WriteLine($"{nombre} grita aaaaaaaaaah!");
        }

        // SOBRECARGA DE FUNCION ATROPELLAR
        // 

        public void Atropellar(string nombre, string sapo)
        {
            Console.WriteLine($"{nombre} grita aaaaaaaaaah!");
            Console.WriteLine($"{sapo} dice jojojojo");
        }

        
    }
}
