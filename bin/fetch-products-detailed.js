const fs = require('fs')
const rp = require('request-promise')
const cheerio = require('cheerio')

const options = {
  uri: 'https://status.aws.amazon.com',
  transform: function (body) {
    return cheerio.load(body)
  }
}

rp(options)
  .then(function ($) {
    let products = {}

    $('body').find('.bb.top.pad8').each(function () {
      if ($(this).attr('colspan') === '3') {
        return
      }

      let product = removeUnnecessaryWords($(this).text()).replace(/\(.*\)/, '').trim()
      if (!products[product]) {
        products[product] = {
          name: product,
          regions: []
        }
      }

      let regExp = new RegExp(/(.+)\((.*)\)/).exec($(this).text())
      if (regExp && regExp[2]) {
        let rssUrl = $(this).parent().find('a').attr('href')

        let region = {
          name: regExp[2],
          code: getCodeFromRssUrl(rssUrl)
        }
        products[product].regions.push(region)
      }
    })

    return Object.keys(products)
      .map(key => {
        if (products[key].regions.length === 0) {
          products[key].regions = null
        }
        return products[key]
      })
      .sort(function (a, b) {
        return a.name.localeCompare(b.name)
      })
  })
  .then(function (products) {
    fs.writeFileSync('./aws-products-detailed.json', JSON.stringify(products, null, 2), 'utf-8')
  })
  .catch(function (err) {
    console.error(err)
  })

function removeUnnecessaryWords (str) {
  if (str.indexOf('Amazon') === 0 || str.indexOf('AWS') === 0) {
    return str.substr(str.indexOf(' ') + 1)
  }
  return str
}

function getCodeFromRssUrl (str) {
  return str.replace(/^\/rss\/(.+)\.rss$/, '$1')
}
