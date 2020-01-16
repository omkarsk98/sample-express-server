const fs = require('fs');
const { saveToFile, deleteFile } = require("../modules/manageFiles");
const path = require('path')

const saveToFileService = function (data) {
    let file = path.join(__dirname, '../userFiles/data.txt')
    return saveToFile(fs, data, file);
}

const deleteFileService = function (file) {
    return deleteFile(fs, file)
}

module.exports = {
    deleteFileService: deleteFileService,
    saveToFileService: saveToFileService
}