// ------------------------------------------------------------------------------
// Import libs
// ------------------------------------------------------------------------------
const fastify = require('fastify')
const Next = require('next')


// ------------------------------------------------------------------------------
// Config
// ------------------------------------------------------------------------------
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'


// ------------------------------------------------------------------------------
// Create app
// ------------------------------------------------------------------------------
const app = Next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = fastify()

  server.get('/username-generator', (req, res) => {
    return app.render(req.req, res.res, '/username-generator', req.query)
  })

  server.get('/contact', (req, res) => {
    return app.render(req.req, res.res, '/contact', req.query)
  })

  server.get('/*', (req, res) => {
    return handle(req.req, res.res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
