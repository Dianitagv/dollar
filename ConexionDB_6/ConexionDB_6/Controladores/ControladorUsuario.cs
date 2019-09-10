﻿using System;
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
                ($"INSERT INTO usuarios (correo,clave,nombre,fechadenacimiento, privilegios) VALUES('{usuario.Correo}','{usuario.Clave}','{usuario.Nombre}','{usuario.FechaNacimiento}','{usuario.Privilegios}')", con.GetConnection());
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
                Console.WriteLine("se encontro");
                return true;
                
            }
            else
            {
                Console.WriteLine("no");
                return false;
            }

                
            con.CerrarConexion();
            
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