# aws-products

List of Amazon Web Services (AWS) products

[![Build Status][travis-image]][travis-url] [![npm][npm-image]][npm-url]
[![downloads][downloads-image]][npm-url]
[![JavaScript Style Guide][standardjs-image]](https://standardjs.com)

It's just two JSON files that can be used in any environment.

[travis-image]: https://travis-ci.org/hisener/aws-products.svg?branch=master
[travis-url]: https://travis-ci.org/hisener/aws-products
[npm-image]: https://img.shields.io/npm/v/aws-products.svg
[npm-url]: https://www.npmjs.com/package/aws-products
[downloads-image]: https://img.shields.io/npm/dm/aws-products.svg
[standardjs-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg

## Install

```bash
npm install aws-products
```

## Usage

```js
const awsProducts = require('aws-products')

console.log(awsProducts)
/*
[
  'API Gateway',
  'AppStream',
  'AppStream 2.0',
  'Athena',
  'Auto Scaling',
  ...
]
*/
```

And products with regions:

```js
const awsProducts = require('aws-products/detailed')

console.log(awsProducts)
/*
[
  {
    name: 'API Gateway',
    regions: [
       { "name": "Montreal", "code": "apigateway-ca-central-1" },
       { "name": "N. California", "code": "apigateway-us-west-1" },
       ...
    ]
  },
  {
    name: 'AppStream',
    regions: [
      { "name": "N. Virginia", "code": "appstream-us-east-1" }
    ]
  },
  ...
  {
    "name": "Route 53",
    "regions": null,
    "code": "route53"
  },
  ...
]
*/
```

## Update json files
```bash
node ./bin/fetch-products.js
node ./bin/fetch-products-detailed.js
```

## Related
* [azure-products](https://github.com/hisener/azure-products) - List of Microsoft Azure products

## License

MIT. Copyright (C) [Halil İbrahim Şener](https://halilsener.com).
