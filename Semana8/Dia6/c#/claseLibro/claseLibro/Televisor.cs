using System;
using System.Collections.Generic;
using System.Text;

namespace claseLibro
{
    class Televisor
    {
        double precio;
        string color;
        char consumo;
        int pulgadas;


        public Televisor(){
        Color = "blanco"; Consumo = 'F'; Precio = 1000; Pulgadas = 32; 
        }
        public Televisor(double precio, int pulgada)
        {
            this.Precio = precio;
            this.Pulgadas = pulgada;
        }

        public Televisor(double precio, string color, char consumo, int pulgadas)
        {
            this.Precio = precio;
            this.Color = color;
            this.Consumo = consumo;
            this.Pulgadas = pulgadas;            
        }

        public double Precio { get => precio; set => precio = value; }
        public string Color { get => color; set => color = value; }
        public char Consumo { get => consumo; set => consumo = value; }
        public int Pulgadas { get => pulgadas; set => pulgadas = value; }

        public void ComprobarConsumo()
        {
            
            if(Consumo == 'A' || Consumo == 'B' || Consumo == 'C' || Consumo == 'D' || Consumo == 'E' || Consumo == 'F')
            {
                Console.WriteLine($"El consumo es óptimo: {Consumo}");
            }
            else
            {
                Console.WriteLine("No te pases de listo, Diego");
            }
        }

        public void PrecioFinal()
        {
            int total = 0;
            if(consumo == 'A')            
                total = total + 100;
            if(consumo == 'B')
                total = total + 80;
            if(consumo == 'C')
                total = total + 60;
            if(consumo == 'D')
                total = total + 40;
            if(consumo == 'E')
                total = total + 30;
            if(consumo == 'F')
                total = total + 20;
            if (pulgadas == 32)
                total = total + 100;
            if (pulgadas == 40)
                total = total + 150;
            if (pulgadas == 48)
                total = total + 200;
            if (pulgadas == 55)
                total = total + 250;
            if (pulgadas == 60)
                total = total + 300;

            precio = precio + total;
        }

        
    }
}
