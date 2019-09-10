using System;

namespace SiSePuede //Carpeta donde vamos a trabajar
{
    class Program // Donde vamos a iniciar nuestro proyecto
    {
        static void Main(string[] args) //El main es lo primero que se ejecuta
        {
            /////////// EJERCICIO 1 //////////////


            // String, int, char, bool, double = TIPOS datos
            //Console.WriteLine("Ingrese una número");
            //string variable = Console.ReadLine(); // LEER DESDE TECLADO = STRING
            //int vari = int.Parse(variable);
            //Console.WriteLine("Ingrese otro número");            
            //string variable1 = Console.ReadLine();
            //int vari1 = int.Parse(variable1);
            //int suma, resta, producto,division;
            //if (vari > vari1)
            //{
            //    suma = vari + vari1;
            //    resta = vari - vari1;
            //    Console.WriteLine("El primer número es mayor");
            //    Console.WriteLine($"Su suma es:   {suma}");
            //    Console.WriteLine($"Su resta es:  {resta}");
            //}
            //else
            //{
            //    producto = vari1 * vari;
            //    division = vari1 / vari;
            //    Console.WriteLine("El segundo número es mayor");
            //    Console.WriteLine("Su producto es:{0} ",producto);
            //    Console.WriteLine("Su división es:{0} ", division);
            //}
            //Console.ReadLine();

            /////////// EJERCICIO 2 //////////////
            ///
            //Console.WriteLine("Ingrese un número de uno o dos dígitos.");
            //string linea = Console.ReadLine();
            //int digito = int.Parse(linea);
            //if (digito >= 0 && digito <10)
            //{
            //    Console.WriteLine("El numero ingresado es {0}", digito);
            //    Console.WriteLine("El numero tiene un dígito.");
            //}
            //else if(digito > 9 && digito < 100)
            //{
            //    Console.WriteLine("El numero ingresado es {0}", digito);
            //    Console.WriteLine("El numero tiene dos dígitos.");
            //}
            //Console.ReadLine();

            /////////// EJERCICIO 3 //////////////
            ///
            //Console.WriteLine("Ingrese un número cualquiera: ");
            //string linea = Console.ReadLine();
            //var num = int.Parse(linea);
            //if(num > 0)
            //{
            //    Console.WriteLine("El número ingresado es {0}",num);
            //    Console.WriteLine("El numero es positivo.");
            //}
            //else if(num < 0)
            //{
            //    Console.WriteLine("El número ingresado es {0}", num);
            //    Console.WriteLine("El numero es negativo.");
            //}
            //else
            //{
            //    Console.WriteLine("El número ingresado es cero");                
            //}
            //Console.ReadLine();

            /////////// EJERCICIO 4 //////////////
            ///
            Console.WriteLine("Ingrese una letra:");
            string linea = Console.ReadLine();
            char caracter = char.Parse(linea);
            
            if (caracter == 'a' && caracter == 'e' && caracter == 'i' && caracter == 'o' && caracter == 'u')
            {
                Console.WriteLine("Se ingreso {0}", caracter);
                Console.WriteLine("Es una vocal");
            }
            else
            {
                Console.WriteLine("Se ingreso {0}", caracter);
                Console.WriteLine("Es una letra");
            }

            /////////// EJERCICIO 5 //////////////
            ///
            //Console.WriteLine("Ingrese un número para su tabla de multiplicar.");
            //string linea1 = Console.ReadLine();
            //int num = int.Parse(linea1);
            //for (int i = 0; i < 13; i++)
            //{
            //    Console.Write(num);
            //    Console.Write("x");
            //    Console.Write(i);
            //    Console.Write("=");
            //    Console.WriteLine(i*num);
            //}
            //Console.ReadLine();
        }
    }
}
