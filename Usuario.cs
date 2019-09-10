using System;
using System.Collections.Generic;
using System.Text;

namespace ConexionDB_6.Entidades
{
    class Usuario
    {
        string correo;
        string clave;
        string nombre;
        DateTime fechaNacimiento;
        int privilegios;

        public string Correo { get => correo; set => correo = value; }
        public string Clave { get => clave; set => clave = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public int Privilegios { get => privilegios; set => privilegios = value; }
        public DateTime FechaNacimiento { get => fechaNacimiento; set => fechaNacimiento = value; }
                  
    }

    
}
