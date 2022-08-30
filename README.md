# IMÁGENES Y ARCHIVOS G SHEET. 📚🗃
*Go to bottom for README.md in english*.
*Creado por Alan Mariño*
## Script para obtener información de imágenes y archivos de Google Drive. 🛠
Este programa obtiene información de imágenes y archivos alojados en ficheros de Google Drive a través del lenguaje de programación Google Script, basado en Javascript; luego imprime esta información de manera automatizada en una hoja de cálculo, para poder utilizar esta información en el futuro. El programa está pensado para archivos que se crean a menudo y de los que se necesita un rápido registro; ejemplos pueden ser imágenes, vídeos, documentos comerciales como facturas, cotizaciones, etc.

### DESCRIPCIÓN DEL PROGRAMA. 📝
- Este programa obtiene información de cada archivo guardado en la carpeta temporal en el enlace público que cada usuario crea en su unidad.
- Los datos que obtiene son el nombre, la URL pública, la URL de descarga y la URL de visualización en G Drive. También obtiene el nombre del propietario del archivo, la fecha de creación y genera una previsualización en las celdas en el caso de que sea una imagen.
- Los archivos son subidos o movidos hacia una carpeta, y luego de ejecutar el programa, son enviados hacia otra carpeta en Google Drive. Esto se hace para evitar problemas de rendimiento relacionados con demasiados archivos en un mismo fichero.

### REQUISITOS 💼
- Cuenta de Google Drive, puede ser personal, educativa, o corporativa.
- Suficiente espacio de almacenamiento para alojar los archivos.

### USO 📟📠
- Este programa puede ser usado por varias personas en un mismo archivo de Google Sheets. Para dicho propósito, nombrar cada hoja con la parte inicial del correo del usuario; lo que está antes del símbolo @.
- Crear dos carpetas. Una de estas que estará siempre vacía, donde se subirán todos los archivos, y otra, a donde se moverán todos los archivos y que servirá como un archivador o repositorio final. IMPORTANTE 👉 **(Si se desea que estos archivos sean públicos, especialmente en el caso de imágenes, es necesario crear ambas carpetas en unidades personales y configurarlas como compartidas para todo usuario de Internet)**
- Para implementar, dar clic en el menú Extensiones y luego en App Script. Después, copiar y pegar el programa por completo en el archivo "code.gs".
- En la sentencia switch: Al lado de ```case```, escribir el alias de correo del usuario (la parte inicial del correo antes del @); luego, en ```folderUpload```, asignar el id de la carpeta donde subiremos los archivos. Por último en ```folderMoveTo```, asignar el id de la carpeta a donde moveremos los archivos. IMPORTANTE 👉 **(El id de la carpeta es la secuencia alfanumérica que se encuentra en su URL después de la palabra folders/)**
- Subir los archivos que se desee a la carpeta para subir imágenes.
- La primera vez que se use, recargar hasta ver el menú nuevo Tools, y dar clic en la opción Links Imágenes. Luego aceptar el permiso. 
- Dar clic en el menú Tools y luego en Links Imágenes; después, esperar hasta que se complete la ejecución. 
Obtendrá la información deseada de todos los archivos. Además, se habrán movido a la carpeta de repositorio final donde estarán todos los archivos que hayan sido objeto de este programa en el pasado.

### MODIFICAR 💻
- Es posible añadir más variables o más información, de interés. Recomiendo utilizar la documentación de App Script de los archivos en Google Drive. https://developers.google.com/apps-script/reference/drive/file
