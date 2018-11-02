const Vue = require('Vue')
const express = require('express')
const server = express()
const path = require('path')
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync(path.resolve(__dirname, './index.template.html'), 'UTF-8')
})

const app = new Vue({
  template: `<div>1111111111111</div>`
})

const context = {
  title: 'hello',
  meta: `
	  <meta ...>
	  <meta ...>
	`
}

server.get('*', (req, res) => {
  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal error')
      return
    }
    res.send(html)
  })
})

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080')
})
