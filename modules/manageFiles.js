const { writeFileAsync, deleteFileAsync } = require('../utils/manageFilesAsync');
const { path } = require('path')

const saveToFile = function (fs, data, file = path.join(__dirname, '../userFiles/data.txt')) {
    return writeFileAsync(fs, file, data)
}

const deleteFile = function (fs, file) {
    return deleteFileAsync(fs, file)
}

module.exports = {
    deleteFile: deleteFile,
    saveToFile: saveToFile
}