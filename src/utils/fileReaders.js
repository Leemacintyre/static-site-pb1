const fs = require("fs")
const path = require("path")
const util = require("util")
const _readFile = util.promisify(fs.readFile)

const readFile = async (location) => {
    const rootDirectory = require("path").resolve("./")
    const filePath = path.join(rootDirectory, location)
    return await _readFile(filePath, "utf8")
}

module.exports = {
    readFile,
}
