const showdown = require("showdown")

const makeHtml = (mdContent) => {
    const converter = new showdown.Converter()
    return converter.makeHtml(mdContent)
}

module.exports = {
    makeHtml,
}
