using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace ConexionDB_6
{
    class ConexionBD
    {
        SqlConnection con;
        string cadenaConexion = "Data Source = .\\SQLEXPRESS;" +
            "Initial catalog = LOST;" +
            "Integrated Security = true;";

        public ConexionBD()
        {
            con = new SqlConnection(cadenaConexion);
        }

        public void AbrirConexion()
        {
            try
            {
                con.Open();
                Console.WriteLine("Se abrió la conexión");
            }
            catch
            {
                Console.WriteLine("No se pudo abrir la conexión");
            }
        }

        public void CerrarConexion()
        {
            try
            {
                con.Close();
                //Console.WriteLine("Se cerró la conexión");
            }
            catch
            {
                Console.WriteLine("No se pudo cerrar la conexión");
            }
        }

        public SqlConnection GetConnection()
        {
            return con;
        }

    }
}
