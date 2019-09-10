using System;

namespace Funciones_1
{
    class Program
    {
        static void MostrarArreglo(int[] arreglo)
        {
            for (int i = 0; i < arreglo.Length; i++)
            {
                Console.Write(arreglo[i] + "  ");
            }
            Console.WriteLine();
        }

        static int[] Push(int n, int[] arr)
        {
            MostrarArreglo(arr);
            int[] arregloNuevo = new int[arr.Length + 1];
            for (int i = 0; i < arr.Length; i++)
            {
                arregloNuevo[i] = arr[i];
            }
            arregloNuevo[arregloNuevo.Length - 1] = n;
            arr = arregloNuevo;
            MostrarArreglo(arr);
            return arregloNuevo;
        }
        static int[] Pop(int[] arr)
        {
            if (arr.Length == 0)
            {
                Console.WriteLine("El arreglo está vacío");
                return arr;
            }
            else
            {
                MostrarArreglo(arr);
                int[] arregloCorto = new int[arr.Length - 1];
                for (int i = 0; i < arregloCorto.Length; i++)
                {
                    arregloCorto[i] = arr[i];
                }
                arr = arregloCorto;
                MostrarArreglo(arr);
                return arregloCorto;
            }

        }
        static int[] QuitarElemento(int n, int[] arr)
        {
            if (n > arr.Length || n < 0)
            {
                Console.WriteLine("No existe tal posicion");
                return arr;
            }
            if (arr.Length == 0)
            {
                Console.WriteLine("El arreglo está vacío");
                return arr;
            }

            MostrarArreglo(arr);
            int[] arregloCorto = new int[arr.Length - 1];
            for (int i = 0, contador = 0; i < arr.Length; i++)
            {
                if (i != n)
                {
                    arregloCorto[contador] = arr[i];
                    contador++;
                }

            }
            arr = arregloCorto;
            MostrarArreglo(arr);
            return arr;
        }

        // ORDENAR ELEMENTOS DE MANERA ASCENDENTE
        static void OrdenarArreglo(int[] arr)
        {
            MostrarArreglo(arr);
            /*
            // USA EL PRIMER Y SEGUNDO ELEMENTO
            if (arr[0] > arr[1])
            {
               int aux;
               // HACEMOS CAMBIO DE VALORES
               aux = arr[0];
               arr[0] = arr[1];
               arr[1] = aux;
            }*/

            for (int i = 0; i < arr.Length; i++)
            {
                for (int j = i; j < arr.Length; j++)
                {
                    if (arr[i] > arr[j])
                    {
                        int aux;
                        // HACEMOS CAMBIO DE VALORES
                        aux = arr[i];
                        arr[i] = arr[j];
                        arr[j] = aux;
                    }
                }
            }
            MostrarArreglo(arr);
        }

        static void Main(string[] args)
        {
            int[] arreglo = { 6, 3, 5, 9, 1, 4 };
            int opcion;
            do
            {
                Console.Clear();
                Console.WriteLine("****** MENU ******");
                Console.WriteLine("1 funcion push");
                Console.WriteLine("2 funcion pop");
                Console.WriteLine("3 ordenar el arreglo");
                Console.WriteLine("4 el arreglo es simetrico?");
                Console.WriteLine("5 quitar elemento por posicion");
                Console.WriteLine("6 salir");
                Console.WriteLine("\nIngrese una opcion");
                opcion = int.Parse(Console.ReadLine());

                switch (opcion)
                {
                    case 1:
                        Console.WriteLine("\nIngrese un numero para hacer push");
                        int n = int.Parse(Console.ReadLine());
                        arreglo = Push(n, arreglo);
                        break;
                    case 2:
                        arreglo = Pop(arreglo);
                        break;
                    case 3:
                        OrdenarArreglo(arreglo);
                        break;
                    case 4:
                        //EsSimetrico();
                        break;
                    case 5:
                        Console.WriteLine("\nIngrese la posicion del elemento a quitar");
                        int x = int.Parse(Console.ReadLine());
                        arreglo = QuitarElemento(x, arreglo);
                        break;
                    default:
                        break;
                }
                Console.ReadKey();

            } while (opcion != 6);

        }
    }
}