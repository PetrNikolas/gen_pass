// ------------------------------------------------------------------------------
// Import libs
// ------------------------------------------------------------------------------
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'


// ------------------------------------------------------------------------------
// Generate password
// ------------------------------------------------------------------------------
const generatorHandleClick = (length) => {
  /** Password */
  let password = "";

  /** Possible word, numbers, etc. */
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  /** Iterator */
  for(let i = 0; i < length; i++) {
      password += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  console.log(password);
}


// ------------------------------------------------------------------------------
// Export
// ------------------------------------------------------------------------------
export default () => (
  <div className="root">
    <Head>
      <meta charSet="utf-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>GEN PASS</title>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
      <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css" />
      <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css" />
      <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css" />
    </Head>
    <style jsx>{`
      .root {
        padding: 50px;
        font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
        background: #fefefe !important;
      }

      .navbar a {
        color: #00b4f0 !important;
      }

      .card {
        width: 50%;
        margin: 0 auto;
        margin-top: 25vh;
      }

      .btn-primary {
        background: #00b4f0 !important;
        border-color: #00b4f0 !important;
      }
    `}</style>

    <header className="navbar animated fadeInDown">
      <section className="navbar-section">
        <a href="/" className="btn btn-link">Home</a>
      </section>
      <section className="navbar-center">
        GEN PASS
      </section>
      <section className="navbar-section">
        <a href="#" className="btn btn-link">Username generator</a>
        <a href="#" className="btn btn-link">Donate</a>
        <a href="#" className="btn btn-link">Contact</a>
      </section>
    </header>

    <main>
      <div className="container">
        <div className="columns">
          <div className="column col-xs-12 text-center">
            <div id="main_card" className="card animated fadeInUp">
              <div className="card-header">
                <h1 className="card-title h1">Generator of your secure password</h1>
                <div className="card-subtitle text-gray">Secure, easy and fast.</div>
              </div>
              <div className="card-body">
                You can try generate your secure password. So, click on the button and generate your password now!
              </div>
              <div className="card-footer">
                <a onClick={ () => { generatorHandleClick(100) } } className="btn btn-primary" id="start_button">Generate now!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
)