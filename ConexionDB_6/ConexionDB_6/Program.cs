using ConexionDB_6.Entidades;
using System;

namespace ConexionDB_6
{
    class Program
    {
        static void Main(string[] args)
        {

            int opcion; 
            do
            {
                Console.WriteLine("MENÚ");
                Console.WriteLine("1 INICIAR SESIÓN");
                Console.WriteLine("2 CREAR USUARIOS");
                Console.WriteLine("Ingrese una opción.");
                opcion = int.Parse(Console.ReadLine());
                ControladorUsuario cusuario = new ControladorUsuario();


                switch (opcion)
            {
                case 1:
                        Usuario usuario1 = new Usuario();
                        Console.WriteLine("Login:");
                        Console.WriteLine("ingrese su correo");
                        usuario1.Nombre = Console.ReadLine();
                        Console.WriteLine("ingrese su clave");
                        usuario1.Clave = Console.ReadLine();
                        
                        if (cusuario.buscarUsuario(usuario1)== true)
                        {
                            Console.WriteLine("se encontro usuario");
                        }else
                            Console.WriteLine("no se encontro usuario");




                        break;
                case 2:
                    Usuario usuario = new Usuario();
                    Console.WriteLine("Creacion de usuarios.");
                    Console.WriteLine("Ingrese un correo:");
                    usuario.Correo = Console.ReadLine();
                    Console.WriteLine("Ingrese una clave");
                    usuario.Clave = Console.ReadLine();
                    Console.WriteLine("Ingrese su nombre");
                    usuario.Nombre = Console.ReadLine();
                    Console.WriteLine("Ingrese su fecha de nacimiento");
                    usuario.FechaNacimiento = Convert.ToDateTime(Console.ReadLine());
                    Console.WriteLine("ingresar un tipo de Privilegio");
                    usuario.Privilegios = int.Parse(Console.ReadLine());
                    
                    cusuario.RegistrarUsuario(usuario);

                    Console.Clear();

                    break;
                default:
                    break;
            }

            } while (opcion != 3);


            /*ConstroladorUsuario cUsuario = new ConstroladorUsuario();

            Usuario usu = new Usuario() { Nombre = "Christian", Clave = "123" };

            cUsuario.InsertarUsuario(usu);

            cUsuario.InsertarUsuario(new Usuario() { Nombre = "Yo", Clave = "666" });


            /* SqlConnection con = new SqlConnection();
             con.ConnectionString =
                "Data source = .\\SQLEXPRESS; " + // SERVIDOR DONDE ESTÁN LOS DATOS
                "Initial catalog = BikeStores;" + // LA BASE DE DATOS A DONDE NOS CONECTAMOS
                "Integrated security = true;";



             try
             {
                 con.Open();
                 Console.WriteLine("Se conectó a la base de datos");              
             }
             catch (Exception ex)
             {
                 Console.WriteLine("No se pudo conectar a la base de datos");
             }

             string nombre = "Eduardo";
             string clave = "1234";

             SqlCommand cmd = new SqlCommand
                 ($"SELECT * FROM usuarios WHERE nombre = '{nombre}' AND clave = '{clave}'",con);
             var resultado = cmd.ExecuteScalar();

             if(resultado == null)
             {
                 Console.WriteLine("No hubo resultados");
             }
             else
             {
                 Console.WriteLine(resultado.ToString());
             }

             cmd = new SqlCommand
                 (
                     $"SELECT count(*) FROM usuarios WHERE " +
                     $"nombre = '{nombre}' and clave = '{clave}'", con);

             int respuesta = Convert.ToInt32(cmd.ExecuteScalar());

             Console.WriteLine($"Se encontraron {respuesta} resultado(s).");

             string nuevoNombre, nuevaClave;
             Console.WriteLine("¨******CREACIÓN DE NUEVO USUARIO");
             Console.WriteLine("Ingrese nuevo nombre de usuario");
             nuevoNombre = Console.ReadLine();
             Console.WriteLine("Ingrese nueva clave de usuario");            
             nuevaClave = Console.ReadLine();

             cmd = new SqlCommand
                 (
                 $"INSERT INTO usuarios (nombre,clave) VALUES('{nuevoNombre}','{nuevaClave}')",con);
             cmd.ExecuteNonQuery();

             //UPDATE
             Console.WriteLine("Ingresar nombre de usuario");
             nombre = Console.ReadLine();

             Console.WriteLine("Ingresar nueva contraseña:");
             nuevaClave = Console.ReadLine();

             cmd = new SqlCommand
                 (
                     $"update usuarios set clave = '{nuevaClave}' where nombre = '{nombre}'",con
                 );
             cmd.ExecuteNonQuery();

             //DELETE
             Console.WriteLine("Ingrese nombre de usuario a borrar.");
             nombre = Console.ReadLine();

             cmd = new SqlCommand($"DELETE FROM usuarios WHERE nombre = '{nombre}'",con);
             cmd.ExecuteNonQuery();

             //CONSULTA CON RESULTADOS DE VARIAS FILAS
             Console.WriteLine("******Nombre de los usuarios");

             cmd = new SqlCommand($"SELECT nombre,clave FROM usuarios", con);

             //DATA READER SE ENCARGA DE LEER Y ALMACENAR DATOS DE UN CONSULTA
             SqlDataReader reader = cmd.ExecuteReader();

             while(reader.Read())
             {
                 Console.WriteLine(reader[0]+"\t\t" + reader[1]);
             }


             try
             {
                 con.Close();
             }
             catch
             {                
                 Console.WriteLine("No se pudo desconectar de la base de datos");
             }
             */
        }
    }
}
