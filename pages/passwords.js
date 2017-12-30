// ------------------------------------------------------------------------------
// Import libs
// ------------------------------------------------------------------------------
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Page from './layout'


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
      <Page>
        <style jsx>{`
          .card {
            width: 100%;
            max-width: 45rem;
            margin: 1.5rem auto 0;
            background-color: #fff;
            border: none;
            padding: 2rem 1.5rem;
          }

          .btn-primary, .btn-primary:focus, .btn-primary:active {
            background: #f8114d !important;
            border-color: #f8114d !important;
          }

          input {
            max-width: 200px;
            margin: 0 auto;
            height: 2.5rem;
            padding: 0 1rem;
            border: 0;
            border-radius: 3px;
            background-color: #f4f4fb;
            -webkit-transition: border-color .25s ease-in-out,-webkit-box-shadow .5s;
            transition: border-color .25s ease-in-out,-webkit-box-shadow .5s;
            transition: box-shadow .5s,border-color .25s ease-in-out;
            transition: box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          }

          label {
            color: #868f96 !important;
          }

          textarea {
            resize: none;
            height: 7.25rem;
            padding: 0 1.125rem;
            padding-top: 1.6rem;
            padding-bottom: 1rem;
            border: 0;
            border-radius: 3px;
            background-color: #f4f4fb !important;
            border-radius: 3px;
            line-height: 1.5;
            -webkit-transition: border-color .25s ease-in-out,-webkit-box-shadow .5s;
            transition: border-color .25s ease-in-out,-webkit-box-shadow .5s;
            transition: box-shadow .5s,border-color .25s ease-in-out;
            transition: box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          }

          .form-input:focus {
            border-color: #868f96;
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
          }
        `}</style>

        <div className="container">
          <div className="columns">
            <div className="column col-xs-12 text-center">

              <div id="main_card" className="card animated fadeInUp">
                <div className="card-header">
                  <h1 className="card-title h1">Passwords generator</h1>
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
      </Page>
    )
  } 
}  