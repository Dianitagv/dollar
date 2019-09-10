using System;

namespace Clases_2
{
    class Program
    {
        //STATIC 
        static void Main(string[] args)
        {
            Celular miLadrillo = new Celular("NOKIA", "8110", "Celeste", "973441647", "98329873298719");
            miLadrillo.Llamar("783728232");
            miLadrillo.colgar();

            Celular miCel = new Celular("LG", "K10", "Negro", "962543773", "08987827398271");

            Console.WriteLine($"has creado {Celular.numeroDeCelulares}");

            // OBTENCION DE VALORES
            Console.WriteLine($"Mi numero es {miLadrillo.Numero}");
            Console.WriteLine($"Mi otro numero es {miCel.Numero}");

            // CAMBIO DE COLOR
            miCel.SetColor("Azul");
            // ASIGNACION DE VALORES
            miCel.IMEI1 = "0000000001112";

        }
    }

    class Celular
    {

        public static int numeroDeCelulares = 0;

        string marca;
        string modelo;
        string color;
        string numero;
        string IMEI;
        // propfull

        private string colorFunda;

        public string ColorFunda
        {
            get { return colorFunda; }
            set { colorFunda = value; }
        }


        public string Color { get => color; set => color = value; }
        public string Numero { get => numero; set => numero = value; }
        public string IMEI1 { get => IMEI; set => IMEI = value; }

        //GET Y SET 
        // OBTENER Y ESTABLECER, PONER

        public string GetMarca()
        {
            return marca;
        }
            public string GetColor()
        {
            return color;
        }

        public void SetColor(string color)
        {
            this.color = color;
        }

        public Celular()
        {
            Console.WriteLine("Se creó un celular");
        }

        public Celular(string marca, string modelo, string color, string numero, string iMEI)
        {
            this.marca = marca;
            this.modelo = modelo;
            this.color = color;
            this.numero = numero;
            IMEI = iMEI;
            numeroDeCelulares++;
        }        

        public void Llamar(string numero)
        {

        }
        
        public int colgar()
        {
            return 0;
        }

    }
}
