using System;
using System.Collections.Generic;
using System.Text;

namespace repaso
{
    class FiguraGeometrica
    {
        // permite dar acceso a las clases hijas sobre los atributos de la clase padre
        // en herencia las clases hijas conocen los atributos de la clase padre pero no al revés
        protected string color;

        public void CalcularPerimetro()
        {

        }

        public void CalcularArea()
        {

        }
    }

    class Rectangulo : FiguraGeometrica
    {
        double largo, ancho;
    }

    class Circulo
    {
        double radio;
    }

    class Triangulo : FiguraGeometrica
    {
        double piso, altura;
    }
}
