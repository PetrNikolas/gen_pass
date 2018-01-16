import Head from 'next/head'
import Link from 'next/link'
import { createComponent } from 'react-fela'

// ------------------------------------------------------------------------------
// Styles
// ------------------------------------------------------------------------------
const Container = createComponent(() => ({
  maxWidth: 700,
  marginLeft: 'auto',
  marginRight: 'auto',
  lineHeight: 1.5
}))

// ------------------------------------------------------------------------------
// Export layout
// ------------------------------------------------------------------------------
export default ({ children }) => (
  <div className="root">
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>GENPASS</title>

      <link
        rel="shortcut icon"
        type="image/ico"
        href="/static/img/favicon.ico"
      />

      <meta name="author" content="Petr Nikolas" />
      <meta name="description" content="Random generators" />

      <meta property="og:title" content="GENPASS" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://generator-random.com/" />
      <meta property="og:description" content="Random generators" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="GENPASS" />
      <meta name="twitter:description" content="Random generators" />
      <meta name="twitter:site" content="@PetrNikolas" />
      <meta name="twitter:creator" content="@PetrNikolas" />

      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/spectre.css/dist/spectre.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css"
      />
      <link rel="stylesheet" href="/static/css/main.css" />

      <script
        dangerouslySetInnerHTML={{
          __html: `
          !function(e,t,a,n,c,s,o){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,s=t.createElement(a),o=t.getElementsByTagName(a)[0],s.async=1,s.src=n,o.parentNode.insertBefore(s,o)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-112389082-1","auto"),ga("send","pageview");
        `
        }}
      />
    </Head>

    <header className="navbar animated fadeInDown">
      <section className="navbar-section logo">
        <Link href="/">
          <a>GENPASS</a>
        </Link>
      </section>

      <section className="navbar-section">
        <Link href="/passwords">
          <a className="btn btn-link">Passwords</a>
        </Link>
        <Link href="/usernames">
          <a className="btn btn-link">Usernames</a>
        </Link>
      </section>
    </header>

    <main>{children}</main>

    <footer className="footer animated fadeInDown">
      <p className="centered">
        <a href="mailto:petr.nikolas@icloud.com?subject=Hello">
          <i className="icon icon-mail" /> Send me a feedback.
        </a>
      </p>
      <p className="centered">
        Built with <span className="hearth_icon">♥</span> by{' '}
        <a target="_blank" href="http://www.petrnikolas.com/">
          Petr Nikolas
        </a>
      </p>
    </footer>
  </div>
)
