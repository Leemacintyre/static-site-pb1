const express = require("express")
const { readFile } = require("./utils/fileReaders")
const { makeHtml } = require("./utils/textToHtml")
require("dotenv").config()
const app = express()

const PORT = process.env.PORT || 3001

app.get("/*", async (req, res) => {
    try {
        const { 0: url } = req.params

        const htmlTemplate = await readFile("src/template.html")
        const mdContent = await readFile(`src/content/${url}/index.md`)

        const mdHtml = makeHtml(mdContent)
        const html = htmlTemplate.replace("{{content}}", mdHtml)

        return res.status(200).send(html)
    } catch (error) {
        console.log(error)
        return res.status(404).send({
            status: 404,
            message: "page not found",
        })
    }
})

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
})

module.exports = app
