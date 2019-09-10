using System;

namespace repaso
{
    class Program
    {
        static void Main(string[] args)
        {
            Lampara miLampara = new Lampara();
            miLampara.Accionar();
        }
    }

    class Lampara
    {
        // en una clase las variables son conocidas como atributos
        // Lámpara apagada
        // bool = verdero o falso
        bool interrruptor = false;
        // int es un número entero positivo o negativo
        int tamaño;
        // string es una cadena
        string color;
        // de mesa, de pared, de pie
        string tipo;
        // double, float, decimal
        double precio;
        // char un solo caracter
        char consumoElectrico;

        // Métodos (funciones)
        private void Encender()
        {
            interrruptor = true;
        }

        private void Apagar()
        {
            interrruptor = false;
        }

        public void Accionar()
        {
            if(interrruptor)            
                // interrruptor = false;
                Apagar();
            
            if (interrruptor == false)
                Encender();
        }
    }
}
