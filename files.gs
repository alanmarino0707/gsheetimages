// Creado por Alan Mariño.
function onOpen(){
  let ui = SpreadsheetApp.getUi();
  ui.createMenu('Tools 🛠️').addItem('Links Imágenes 📷','listFolderContents').addToUi();
}

// Declaración de la función que mueve los archivos de la carpeta temporal a la carpeta final
function moveFiles(sourceFileId, targetFolderId) {
  var file = DriveApp.getFileById(sourceFileId);
  var folder = DriveApp.getFolderById(targetFolderId);
  file.moveTo(folder);
}

// Función que obtiene el url de archivos de una carpeta en Google Drive. 
//Es importante que la hoja u hojas de cálculo tengan un encabezado antes de ejecutar el programa.
function listFolderContents(){

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var sheetName = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getName()
  
  var folderUpload; // Carpeta donde se deben subir las imágenes de las que se quiere obtener el enlace público
  var folderMoveTo; // Carpeta a donde se moverán las imágenes después de obtener el link público
  var concatUrl = 'https://drive.google.com/uc?export=view&id=';
  
  //Se pueden añadir más casos para el nombre de la hoja de Google Sheets. Las que están en la parte inferior de la interfaz.
  switch (sheetName){
    case 'rothman':
      folderUpload = '';
      folderMoveTo = '';
      break
    }
  var folder = DriveApp.getFolderById(folderUpload);
  var contents = folder.getFiles();

  var varFile;
  var varName;
  var varPublicLink;
  var varGLink;
  var varOwner;
  var varTime;
  var dataRows = [];
  var varImage;
  var varDownloadUrl;
  var varSize;
  let i = 0;

  var Bvals = sheet.getRange("B1:B").getValues();
  var Blast = Bvals.filter(String).length;
  var lastToValue = Blast

  // Iteración sobre cada archivo pidiendo su información.
  while(contents.hasNext()){
    varFile = contents.next();
    varName = varFile.getName();
    varPublicLink = concatUrl + varFile.getId();
    varGLink = varFile.getUrl();
    varDownloadUrl = varFile.getDownloadUrl();
    varOwner = varFile.getOwner().getEmail();
    varTime = varFile.getDateCreated().toLocaleString();
    varSize = varFile.getSize(); // en bytes
    
    varImage = ''
    //Añadiendo los archivos a la iteración únicamente si el usuario que los ejecutó es el mismo que los creó.
    if(1==1){
      dataRows[i] = [varName, varPublicLink, varGLink ,varDownloadUrl,varOwner, varTime, varSize ,varImage];
      i++;
      moveFiles(varFile.getId(),folderMoveTo) // Moviendo los archivos al repositorio final.
    }
    else{
      continue
    }
  }
  //Ordenando los datos en función de su fecha de creación
  const sortedRows = dataRows.sort();

  for(row of sortedRows){
    row[7] = "=image(B" + (sortedRows.indexOf(row)+1+lastToValue).toString() + ")";
    sheet.appendRow(row);
  }
  return sortedRows
}

// https://github.com/alanmarino0707
