const cheerio = require("cheerio");
const fs = require('fs')

function testHtmeParser() {
	let routerConfig = "D:\\workspace\\user\\ICE\\D2_demo\\src\\pages\\test8\\Test8.vue"
	fs.readFile(routerConfig, 'utf8', (err, data) => {
		const $ = cheerio.load(data, { xmlMode: true })
		$('gauge-chart').append('<test-aaa>')
		console.log($.html)
	})

}

module.exports = {
	testHtmeParser
}