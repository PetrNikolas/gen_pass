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
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <title>GENPASS</title>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
            <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css" />
            <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css" />
            <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css" />
        </Head>

        <style jsx>{`
          .root {
            padding: 30px 50px 50px 50px;
            font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
          }

          .footer {
            color: #acb3c2;
            padding: .5rem .5rem 1.5rem .5rem;
          }

          .footer a {
            color: #667189;
          }

          .footer .hearth_icon {
            color: #f8114d;
          }

          .centered {
            text-align: center;
          }

          .navbar a {
            color: #50596c !important; 
          }

          .navbar a:hover, .navbar a:focus, .navbar a:active {
            border: none !important;
            border-bottom: 2px solid #f8114d !important; 
          }

          .logo a {
            color: #1c1a27 !important;
            font-size: 35px;
          }

          .logo a:hover {
            border-bottom: none !important;
            text-decoration: none;
          }

          @media only screen and (max-width: 1100px) {
            .root {
              padding: 3px;
            }
          }
        `}</style>

        <header className="navbar animated fadeInDown">
            <section className="navbar-section logo">
              <Link href="/" as={ process.env.BACKEND_URL + '/gen_pass'}><a>GENPASS</a></Link>
            </section>

            <section className="navbar-section">
              <Link href="/passwords" as={ process.env.BACKEND_URL + '/passwords'}><a className="btn btn-link">Passwords</a></Link>
              <Link href="/usernames" as={ process.env.BACKEND_URL + '/usernames'}><a className="btn btn-link">Usernames</a></Link>
            </section>
        </header>

        <main>
            {children}
        </main>

        <footer className="footer animated fadeInDown">
            <p className="centered">
              <a href="mailto:petr.nikolas@icloud.com?subject=Hello"><i className="icon icon-mail"></i> Send me a feedback.</a>
            </p>
            <p className="centered">
              Built with <span className="hearth_icon">♥</span> by <a target="_blank" href="http://www.petrnikolas.com/">Petr Nikolas</a>
            </p>  
        </footer>
    </div>
)