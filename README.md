# IMÁGENES Y ARCHIVOS G SHEET. 📚🗃
*Go to bottom for README.md in english*.
*Creado por Alan Rothman*
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
- Dar clic en el menú Tools y luego en Files Information; después, esperar hasta que se complete la ejecución. 
Obtendrá la información deseada de todos los archivos. Además, se habrán movido a la carpeta de repositorio final donde estarán todos los archivos que hayan sido objeto de este programa en el pasado.

### MODIFICAR 💻
- Es posible añadir más variables o más información, de interés. Recomiendo utilizar la documentación de App Script de los archivos en Google Drive. https://developers.google.com/apps-script/reference/drive/file

----------------------------------------------------------------------------------------------------------------------------------------------------------------------
# IMAGES AND FILES G SHEET. 📚🗃

#Ir hacia arriba para leer el README.md en español*.
*Created by Alan Rothman*
## Script to obtain information about files and images in Google Drive. 🛠
This program gets information from files and images stored in Google Drive folders, using Google Script, a programming language based on Javascript; the program, then, prints this information automatically in a spreadsheet, in order to utilize it in the future. This program is thought for files that are oftenly created and for which, quick records are necessary; e.g. images, videos, commercial documents, contracts, etc.

### PROGRAM DESCRIPTION 📝
- This program gets information from every file stored in a temporary public parent folder in each user's personal storage in Google Drive.
- Data obtained about these files includes their names, public URL, download URL, visualization in G Drive URL. Also, the owner's name, date of creation and generates an in-cell preview in the case of an image.
- Files are uploaded or moved to a folder; after executing the program, it moves all the files to another folder where they will be finally stored. This is done to avoid performance issues.

### REQUIREMENTS 💼
- Google Drive account; it can be personal, education or corporate type.
- Enough storage size for the files.

### USAGE 📟📠
- This program can be used by several people in the same spreadsheet. In order to achieve that, name every sheet with the initial part of every user's mail; everything before the @ symbol.
- Create two folders. One of them will always be empty; in it, the files will be uploaded. The other folder will be the one where all the files will go to after the execution of the program. IMPORTANT 👉 **(If it is needed for these files to be public, especially with images, set both folders to public for everyone with the URL)**
- In order to implement this program, click on the Extensions menu and then on App Script; then, paste all the code in the code.gs file and save it.
- In the switch sentence: Next to ```case```, type the alias of each user (everything before @); then, assign ```folderUpload``` a value with the id of the folder where files will be uploade. Finally, assign to  ```folderMoveTo``` the value of the folder id where all files will be moved to and stored permanently. IMPORTANT 👉 **(The id of the folder is the alphanumeric secuence that can be found in the folder URL, after the word folders/)**
- Upload all necessary files to the folder created for this purpose.
- On first usage, reload the spreadsheet to see the Tools Menu. Click on it, then on Files Information and finally accept the permission.
- Click on Tools and on Files Information. Wait until completion of the program. 
This will get all the desired information for the files. Also, the files will all have moved to the final repository where they will be stored with all of the previous files.

### MODIFYING THE SCRIPT 💻
- It is possible to delete or add more information about the files. I recommend using App Script documentation for Google Drive Files. https://developers.google.com/apps-script/reference/drive/file
