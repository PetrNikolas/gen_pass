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

  server.get('/usernames', (req, res) => {
    return app.render(req.req, res.res, '/usernames', req.query)
  })

  server.get('/passwords', (req, res) => {
    return app.render(req.req, res.res, '/passwords', req.query)
  })

  server.get('/*', (req, res) => {
    return handle(req.req, res.res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
