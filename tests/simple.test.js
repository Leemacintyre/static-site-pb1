const request = require("supertest")
const app = require("../src")

const { readFile } = require("../src/utils/fileReaders")
const { makeHtml } = require("../src/utils/textToHtml")

const correctHtml = `<h1 id="thisistheaboutpage">This is the About page</h1>\n<p>Acme Co. is a reputable maker of widgets and is an international brand.</p>\n<p>Thank you for your interest in our services. Please contact us at enquiries@acme.com.</p>`

describe("Should return status code", () => {
    it("Should return status code 200", async () => {
        const res = await request(app).get("/valves")
        expect(res.statusCode).toEqual(200)
    })

    it("Should return status code 404", async () => {
        const res = await request(app).get("/wrong_url")
        expect(res.statusCode).toEqual(404)
    })

    it("should return correct html", async () => {
        const sampleText = await readFile("tests/testMarkdownFile.md")
        const sampleHtml = makeHtml(sampleText)
        expect(sampleHtml).toEqual(correctHtml)
    })
})
