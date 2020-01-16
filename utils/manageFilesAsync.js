const writeFileAsync = function (fs, file, data, encoding = 'utf8') {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, encoding, function (err) {
            if (err) {
                reject(err)
            }
            resolve(file)
        })
    })
}

const deleteFileAsync = function (fs, file) {
    return new Promise((resolve, reject) => {
        fs.unlink(file, function (err) {
            if (err) {
                reject(err)
            }
            resolve(file)
        })
    })
}

module.exports = {
    writeFileAsync: writeFileAsync,
    deleteFileAsync: deleteFileAsync 
}