using System;

namespace MasArreglos
{
    class Program
    {
        static int[] Push(int n, int[] arr)
        {
            mostrarArreglo(arr);
            int[] arregloNuevo = new int[arr.Length + 1];
            for (int i = 0; i < arr.Length; i++)
            {
                arregloNuevo[i] = arr[i];
            }
            arregloNuevo[arregloNuevo.Length - 1] = n;
            arr = arregloNuevo;
            mostrarArreglo(arr);
            return arregloNuevo;
        }

        static int[] Pop(int[] arr1)
        {
            if (arr1.Length == 0)
            {
                Console.WriteLine("Te quedaste sin numeritos.");
                return arr1;
            }
            else
            {
                mostrarArreglo(arr1);
                int[] nuevoArreglo = new int[arr1.Length - 1];
                for (int i = 0; i < nuevoArreglo.Length - 1; i++)
                {
                    nuevoArreglo[i] = arr1[i];
                }
                arr1 = nuevoArreglo;
                mostrarArreglo(arr1);
                return nuevoArreglo;
            }
        }

        static int[] QuitarElemento(int m,int[] arr)
            {
                int []nuevoArreglo = new int[arr.Length];
                    for(int i = 0; i < nuevoArreglo.Length -1;i++)
                    {
                        if (i != m)
                        {                            
                            nuevoArreglo[i] = arr[i];       
                        }
                arr = nuevoArreglo;
                mostrarArreglo(arr);
                return arr;
                }
            }
        static void mostrarArreglo(int [] arreglo)
        {
            for(int i = 0; i<arreglo.Length;i++)
            {
                Console.Write(arreglo[i] + " ");
            }
            Console.WriteLine();
        }        

        static void Main(string[] args)
        {
            int[] arreglo = { 6, 3, 5, 9, 2, 10, 32, 7 };
            int opcion;
            do
            {
                Console.WriteLine("********Menú*********");
                Console.WriteLine("Elegir opción");
                Console.WriteLine("1 función push");
                Console.WriteLine("2 función pop");
                Console.WriteLine("3 ordenar el arreglo");
                Console.WriteLine("4 el arreglo es simétrico");
                Console.WriteLine("5 quitar elemento por posición");
                Console.WriteLine("6 Salir");
                opcion = int.Parse(Console.ReadLine());

                switch (opcion)
                {
                    case 1:
                        Console.WriteLine("Ingrese un número para el arreglo:");
                        int n = int.Parse(Console.ReadLine());
                        arreglo = Push(n, arreglo);                        
                        break;
                    case 2:
                        arreglo = Pop(arreglo);                        
                        break;
                    case 3:
                        //OrdenarArreglo();
                        break;
                    case 4:
                        //EsSimetrico();
                        break;
                    case 5:
                        Console.WriteLine("Ingrese posición del arreglo que desea quitar:");
                        int m = int.Parse(Console.ReadLine());
                        QuitarElemento(m);
                        break;
                    default:
                        break;
                }

            } while (opcion!=6);

            

            
        }
    }
}
