using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace ConexionDB_6.Entidades
{
    class ControladorUsuario
    {
        ConexionBD con = new ConexionBD(); // USAREMOS LA BASE DE DATOS
        SqlCommand cmd;



        public void RegistrarUsuario(Usuario usuario)
        {
            cmd = new SqlCommand
                ($"INSERT INTO usuarios (correo,clave,nombre,fechadenacimiento, privilegios) VALUES('{usuario.Correo}','{usuario.Clave}','{usuario.Nombre}','{usuario.FechaNacimiento.ToString("yyy-MM-dd HH:mm:ss")}','{usuario.Privilegios}')", con.GetConnection());
            con.AbrirConexion();
            cmd.ExecuteNonQuery();
            con.CerrarConexion();
        }

        public bool buscarUsuario(Usuario usuario)
        {
            cmd = new SqlCommand
                ($"SELECT COUNT(*) FROM usuarios WHERE nombre='{usuario.Nombre}' and clave='{usuario.Clave}'",con.GetConnection());

            con.AbrirConexion();
            if (Convert.ToInt32(cmd.ExecuteScalar()) != 0)
            {
                // Console.WriteLine("se encontro");
                con.CerrarConexion();
                return true;
                
            }
            else
            {
                con.CerrarConexion();
                //Console.WriteLine("no");
                return false;
            }               
            
            
        }
        public Usuario leerUsuario(Usuario usuario)
        {
            cmd = new SqlCommand($"SELECT * FROM usuarios WHERE nombre = '{usuario.Nombre}'", con.GetConnection());
            con.AbrirConexion();
            SqlDataReader reader = cmd.ExecuteReader();
            Usuario user = null;
            while (reader.Read())
            {

                user = new Usuario()
                {
                    Correo = reader[0].ToString(),
                    Clave = reader[1].ToString(),
                    Nombre = reader[2].ToString(),
                    FechaNacimiento = Convert.ToDateTime(reader[3]),
                    Privilegios = Convert.ToInt32(reader[4])
                };
         

            };
            con.CerrarConexion();
            return user;


        }


        /*public static implicit operator ControladorUsuario(ConstroladorUsuario v)
        {
            throw new NotImplementedException();
        }*/

        /*public void cambiarContrasena(Usuario usuario)
        {
            cmd = new SqlCommand
                ($"UPDATE usuarios SET clave = '{usuario.Clave}' WHERE nombre = '{usuario.Nombre}'", con.GetConnection());
            con.AbrirConexion();
            cmd.ExecuteNonQuery();
            con.CerrarConexion();
        }*/
    }
}
