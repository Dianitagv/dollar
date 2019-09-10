using System;

namespace ClaseCuenta
{
    class Program
    {
        static void Main(string[] args)
        {
            Cuenta BCP = new Cuenta("Eduardo Gonzales Salas", 0.0);

            Cuenta BBVA = new Cuenta("Mario Gomez", 0.0);

            BCP.ingresar(200.00);
            BCP.retirar(350);

            Console.WriteLine($"El titular es {BCP.Titular}");

            
        }
    }

    class Cuenta
    {        

        string titular;
        double cantidad;

        public string Titular { get => titular; set => titular = value; }
        public double Cantidad { get => cantidad; set => cantidad = value; }

        public Cuenta(string titular, double cantidad)
        {
            this.titular = titular;
            this.cantidad = cantidad;
        }

        
        public void ingresar(double cant)
        {
            if (cant < 0)
            {
                cantidad = 0;
            }
            else
            {
                this.cantidad = cantidad + cant;
                Console.WriteLine($"Su saldo contable es {cantidad}");
            }
            
        }

        public void retirar(double cant)
        {
            cantidad = cantidad - cant;
            if (cantidad < 0)
            {
                cantidad = 0;
            }
            else
            {                
                Console.WriteLine($"Su saldo disponible es {cantidad}");
            }
        }
    }
}
