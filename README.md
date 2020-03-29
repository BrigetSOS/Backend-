# Backend-
Backend-

El API REST de esta plataforma esta construido bajo la plataforma nodejs.
Se usa express como framwork.


# Normas de contribución
- Uso de EMAC6
- Solo se hace uso de 1 clase por archivo
- Maximo de lineas de una clase es de 500 lineas
- Los metodos llevan nombres de verbos
    ```js 
        move(){
            //code
        }

        createListPeoples(){
            //code
        }
    ```
- Nombres de variables con sentido
    ```js
        let cuentaAhorros = 0; (si)
        let cA (no)
    ```
    los nombres como i, j, k dentro de bucles for, while
    al ser conocidos por la comunidad de desarrolladores pueden seguirse usando

- despues de cada expresion debe agregar el -> ;
- para exportar clases o modulos se definen al final del archivo

    ```js
        class People{ /*code*/}
        module.export = {
            People:People
        }
    ```
- las clases deben usar CamelCase, los metodos y variables deben usar LowerCase
    ```js
        class Book{
            getListBooks(){
                let counterBooks = 0;
            }
        }

    ```







