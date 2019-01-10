const cheerio = require("cheerio");
const fs = require('fs')

function testHtmeParser() {
	let htmlStr = `<template>
  <container>
	  <template slot="header">page</template>
	  <gauge-chart/>
    <template slot="footer">自动生成 0 个组件</template>
  </container>
</template>
`
	const $ = cheerio.load(htmlStr, { xmlMode: true })
	$('gauge-chart').append('<test-aaa>')
	console.log($.html())

}

module.exports = {
	testHtmeParser
}