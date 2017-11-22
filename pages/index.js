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
    this.setState({
      inputValue: event.target.value
    });
  }

  /** Generate password */
  generatorHandleClick = (length) => {
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
      console.log(length);
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

          input {
            max-width: 150px;
            margin: 0 auto;
          }

          textarea {
            resize: none;
          }
        `}</style>

        <header className="navbar animated fadeInDown">
          <section className="navbar-section">
            <a href="/" className="btn btn-link">Home</a>
          </section>

          <section className="navbar-center">
            GENPASS
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
                    <h1 className="card-title h1">Generator of random password</h1>
                    <div className="card-subtitle text-gray">So, click on the button and generate your password now!</div>
                  </div>

                  <div className="card-body">
                    <div className="form-group">
                      <label className="form-label" for="count">Set lenght of your password <br/> (default is 100)</label>
                      <input value={this.state.inputValue} onChange={event => this.updateInputValue(event)} type="number" min="1" max="100000" className="form-input" id="count" />
                    </div>
                    <button onClick={ () => { this.generatorHandleClick(this.state.inputValue) } } className="btn btn-primary" id="start_button">Generate now!</button>
                  </div>

                  <div className="card-footer">
                    <div className="form-group">
                      <label className="form-label" for="result">Your password is:</label>
                      <textarea value={this.state.generatedPassword} className="form-input" id="result" rows="10" readOnly></textarea>
                    </div>

                    <div className="card-subtitle text-gray">Random, secure, custom, easy and fast.</div>
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
