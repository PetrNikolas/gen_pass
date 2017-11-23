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
            color: #2575fc !important; 
          }

          .navbar-center {
            color: #1c1a27;
            font-size: 35px;
          }

          .card {
            width: 50%;
            margin: 0 auto;
            margin-top: 25vh;
            box-shadow: 0 6px 15px rgba(36,37,38,0.08);
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
          <section className="navbar-section">
            <Link href="/"><a className="btn btn-link">Home</a></Link>
          </section>

          <section className="navbar-center">
            GENPASS
          </section>

          <section className="navbar-section">
            <Link href="/username-generator"><a className="btn btn-link">Username generator</a></Link>
            <Link href="/contact"><a className="btn btn-link">Contact</a></Link>
          </section>
        </header>

        <main>
          <div className="container">
            <div className="columns">
              <div className="column col-xs-12 text-center">

                <div id="main_card" className="card animated fadeInUp">
                    <div className="card-header">
                        <h1 className="card-title h1">Hello!</h1>
                        <div className="card-subtitle text-gray">I'm Petr Nikolas</div>
                    </div>

                    <div className="card-body">
                        You can contact me on my email:
                        <br/>
                        petr.nikolas@icloud.com
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
