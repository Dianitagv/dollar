using System;

namespace Herencia
{
    class Program
    {
        static void Main(string[] args)
        {
            ActorDeVoz marioCastaneda = new ActorDeVoz();
            marioCastaneda.TipoDeVoz = "Goku";
            Console.WriteLine(marioCastaneda.TipoDeVoz);
            Actor actor = new Actor();
        }
    }

    class Actor
    {
        // POR DEFECTO TODO ES PRIVADO
        // PROTECTED: ES HEREDADO A CLASES HIJAS E INACCESIBLE PARA EL PUBLICO
        protected string nombre;
        protected string genero;
        protected string[] personajes;

        public string Nombre { get => nombre; set => nombre = value; }
        public string Genero { get => genero; set => genero = value; }
        public string[] Personajes { get => personajes; set => personajes = value; }
    }

    // Herencia: Clase Hija : Clase padre
    class ActorDeVoz : Actor
    {
        //string nombre;
        //string genero;
        //string[] personajes;
        string tipoDeVoz;

        

        public ActorDeVoz() : base ("Christian","Thriller")
        {
            Nombre = "Christian";
        }

        public ActorDeVoz(string nombre, string genero, string tipoDeVoz):
            base (nombre, genero)
        {
            this.tipoDeVoz = tipoDeVoz;
        }

        

        // METODOS GET Y SET DE TIPO DE VOZ
        //public string GetTipoDeVoz()
        //{
        //    return tipoDeVoz;
        //}

        //public void SetTipoDeVoz(string voz)
        //{
        //    tipoDeVoz = voz;
        //}

        // Métodos autogenerados (get y set)
        public string TipoDeVoz { get => tipoDeVoz; set => tipoDeVoz = value; }        
    }
}
