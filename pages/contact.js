// ------------------------------------------------------------------------------
// Import libs
// ------------------------------------------------------------------------------
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'


// ------------------------------------------------------------------------------
// Export component
// ------------------------------------------------------------------------------
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  
  /** Render HTML */
  render() {
    return (
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
            padding: 50px;
            font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
          }

          .navbar a {
            color: #6a11cb !important; 
          }

          .logo {
            color: #1c1a27;
            font-size: 35px;
          }

          #main_card {
            height: 80vh;
            margin-top: 15px;
            box-shadow: 0 6px 15px rgba(36,37,38,0.08);
          }

          i {
            font-size: 47px;
          }

          .padding {
            padding-top: 20vh;
          }

          .btn-primary, .btn-primary:focus, .btn-primary:active {
            background: #6a11cb !important;
            border-color: #6a11cb !important;
          }

          input {
            max-width: 150px;
            margin: 0 auto;
          }

          label {
            color: #868f96 !important;
          }

          textarea {
            resize: none;
          }

          .form-input:focus {
            border-color: #6a11cb;
            box-shadow: none;
          }
        `}</style>

        <header className="navbar animated fadeInDown">
          <section className="navbar-section logo">
            GENPASS
          </section>

          <section className="navbar-section">
            <Link href="/"><a className="btn btn-link">Home</a></Link>
            <Link href="/username-generator"><a className="btn btn-link">Username generator</a></Link>
            <Link href="/contact"><a className="btn btn-link">Contact</a></Link>
          </section>
        </header>

        <main>
          <div className="container">
            <div className="columns">
              <div className="column col-xs-12 text-center">

                <div id="main_card" className="empty animated fadeInUp">
                  <div className="empty-icon padding">
                    <i className="icon icon-people"></i>
                  </div>
                  <h1 className="card-title h1">Hello!</h1>
                  <p className="empty-title h5">I'm Petr Nikolas</p>
                  <p className="empty-subtitle">Click the button to start a conversation with me.</p>
                  <div className="empty-action">
                    <a href="mailto:petr.nikolas@icloud.com?subject=Hello" className="btn btn-primary">Send a message</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>
    )
  } 
}  
