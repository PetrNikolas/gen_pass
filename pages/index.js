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
    this.state = {
      inputValue: 100,
      generatedPassword: ''
    };
  }

  /** Update value in input */
  updateInputValue = (event) => {
    /** Error message */
    document.getElementById("error").style.display = "none";

    this.setState({
      inputValue: event.target.value
    });
  }

  /** Generate password */
  generatorHandleClick = (length) => {
    /** Error message */
    document.getElementById("error").style.display = "none";

    /** Password */
    let password = "";

    /** Possible word, numbers, etc. */
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    /** Check if value exist */
    if (!length || typeof length === "undefined") {
      length = 100;
    }

    if (length < 100001) {
      try {
        /** Iterator */
        for(let i = 0; i < length; i++) {
            password += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        this.setState({
          generatedPassword: password
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      /** Error message */
      document.getElementById("error").style.display = "block";
    }
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

          .footer {
            color: #acb3c2;
            padding: .5rem .5rem 1.5rem .5rem;
          }

          .footer a {
            color: #667189;
          }

          .centered {
            text-align: center;
          }

          .navbar a {
            color: #6a11cb !important; 
          }

          .logo a {
            color: #1c1a27 !important;
            font-size: 35px;
          }

          .logo a:hover {
            border-bottom: none;
            text-decoration: none;
          }

          .card {
            width: 50%;
            margin: 0 auto;
            margin-top: 7vh;
            border: .3rem dotted #e7e9ed;
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

          #error {
            color: red;
            display: none;
          }

          @media only screen and (max-width: 1100px) {
            .card {
              width: 100%;
            }

            h1 {
              font-size: 1rem;
            }

            .root {
              padding: 3px;
            }
          }
        `}</style>

        <header className="navbar animated fadeInDown">
          <section className="navbar-section logo">
            <Link href="/"><a>GENPASS</a></Link>
          </section>

          <section className="navbar-section">
            <Link href="/username-generator"><a className="btn btn-link">Username generator</a></Link>
          </section>
        </header>

        <main>
          <div className="container">
            <div className="columns">
              <div className="column col-xs-12 text-center">

                <div id="main_card" className="card animated fadeInUp">
                  <div className="card-header">
                    <h1 className="card-title h1">Generator of random password</h1>
                    <div className="card-subtitle text-gray">So, click on the button and generate your password now!</div>
                  </div>

                  <div className="card-body">
                    <div className="form-group">
                      <label className="form-label" for="count">Set lenght of your password (default is 100)</label>
                      <input value={this.state.inputValue} onChange={event => this.updateInputValue(event)} type="number" min="1" max="100000" className="form-input" id="count" />
                    </div>
                    <button onClick={ () => { this.generatorHandleClick(this.state.inputValue) } } className="btn btn-primary" id="start_button">Generate now!</button>
                    <span id="error">Max value is 100000</span>
                  </div>

                  <div className="card-footer">
                    <div className="form-group">
                      <label className="form-label" for="result">Your password is:</label>
                      <textarea value={this.state.generatedPassword} className="form-input" id="result" rows="7" readOnly></textarea>
                    </div>

                    <div className="card-subtitle text-gray">Random, secure, custom, easy and fast.</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>

        <footer className="footer animated fadeInDown">
          <p className="centered">
            <a href="mailto:petr.nikolas@icloud.com?subject=Hello">Send me a feedback.</a>
          </p>
          <p className="centered">
            Built with ♥ by <a target="_blank" href="http://www.petrnikolas.com/">Petr Nikolas</a>
          </p>  
        </footer>
      </div>
    )
  } 
}  


// ------------------------------------------------------------------------------
// Styles
// ------------------------------------------------------------------------------
const styles = {
  root: {
    padding: '50px',
    font: '14px "Lucida Grande", Helvetica, Arial, sans-serif'
  },

  footer: {
    color: '#acb3c2',
    padding: '.5rem .5rem 1.5rem .5rem'
  },

  footer_a: {
    color: '#667189'
  },

  centered: {
    textAlign: 'center'
  },

  navbar_a: {
    color: '#6a11cb !important'
  },

  logo_a: {
    color: '#1c1a27 !important',
    fontSize: '35px',
    ':hover': {
      borderBottom: 'none',
      textDecoration: 'none'
    }
  },

  card: {
    width: '50%',
    margin: '0 auto',
    marginTop: '7vh',
    border: '.3rem dotted #e7e9ed',
    boxShadow: '0 6px 15px rgba(36,37,38,0.08)'
  },

  btn_primary: {
    background: '#6a11cb !important',
    borderColor: '#6a11cb !important',
    ':focus': {
      background: '#6a11cb !important',
      borderColor: '#6a11cb !important',
    },
    ':active': {
      background: '#6a11cb !important',
      borderColor: '#6a11cb !important'
    }
  },

  input: {
    maxWidth: '150px',
    margin: '0 auto'
  },

  label: {
    color: '#868f96 !important'
  },

  textarea: {
    resize: 'none'
  },

  form_input: {
    ':focus': {
      borderColor: '#6a11cb',
      boxShadow: 'none'
    }
  },

  error: {
    color: 'red',
    display: 'none'
  }
}