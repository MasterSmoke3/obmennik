//function uploadFile() {
    //const fileInput = document.getElementById("fileInput");
    //const fileList = document.getElementById("fileList");

    //if (fileInput.files.length > 0) {
        //const file = fileInput.files[0];
        //const fileInfo = document.createElement("div");
        //fileInfo.classList.add("file-info");
        //const fileName = document.createElement("span");
        //fileName.textContent = "Имя файла: " + file.name;
        //const uploadDate = document.createElement("span");
        //uploadDate.textContent = "Дата загрузки: " + new Date().toLocaleString();
        //const fileSize = document.createElement("span");
        //fileSize.textContent = "Размер файла: " + getFileSize(file.size);
        //const userName = document.createElement("span");
        //userName.textContent = "Имя пользователя: " + Getname(); 
        //const downloadCount = document.createElement("span");
        //downloadCount.textContent = "Число скачиваний: 0"; 


        //fileInfo.appendChild(fileName);
        //fileInfo.appendChild(uploadDate);
        //fileInfo.appendChild(fileSize);
        //fileInfo.appendChild(userName);
        //fileInfo.appendChild(downloadCount);
        //fileList.appendChild(fileInfo);
    //}

//}

//function getFileSize(size) {
    //const units = ["bytes", "KB", "MB", "GB", "TB"];
    //let unitIndex = 0;

    //while (size >= 1024 && unitIndex < units.length - 1) {
        //size /= 1024;
        //unitIndex++;
    //}

    //return size.toFixed(2) + " " + units[unitIndex];
//}

//function Getname() {

    //return "Legenda";
//}




document.addEventListener("DOMContentLoaded", function() {
    listFiles(); // При загрузке страницы выводим список файлов
});

// Для загрузки файла на сервер
function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    fetch("/upload", {
        method: "POST",
        body: formData
    }).then(response => {
        if (response.ok) {
            listFiles(); // После загрузки перечитываем список файлов
        }
    });
}

// Для отображения и сортировки списка файлов
function listFiles() {
    fetch("/files")
        .then(response => response.json())
        .then(files => {
            const fileList = document.getElementById("fileList");
            fileList.innerHTML = ""; // Очищаем предыдущий список
            files.forEach(file => {
                const listItem = document.createElement("div");
                listItem.textContent = file.name;
                fileList.appendChild(listItem);
            });
    });
}

// Для сортировки файлов на сервере и их отображения
function sortFiles() {
    const sortOption = document.getElementById("sortOption").value;
    fetch(`/sort?option=${sortOption}`)
        .then(response => response.json())
        .then(sortedFiles => {
            const fileList = document.getElementById("fileList");
            fileList.innerHTML = ""; // Очищаем предыдущий список
            sortedFiles.forEach(file => {
                const listItem = document.createElement("div");
                listItem.textContent = file.name;
                fileList.appendChild(listItem);
            });
        });
}


//Для создания файлообменника с возможностью загрузки и загрузки файлов, а также сортировки по различным параметрам, потребуется комбинация JavaScript, HTML, CSS и серверной части на Node.js.
//Код для серверной части предполагает обработку загрузки файлов, получение списка файлов и сортировку на основе параметра, однако фактическая реализация может быть более сложной в зависимости от специфики требований.