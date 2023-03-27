const cheerio = require('cheerio');
const $ = cheerio.load(`<html class="no-js" lang="sc"><head></head></html>`)
$('head').prepend(`<meta http-equiv="Content-Security-Policy" content="default-src *; child-src * 'self' blob: http:; img-src * 'self' data: http:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; style-src 'self' 'unsafe-inline' *">`)
console.log($.html())
