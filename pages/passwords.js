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
    super(props)
    this.state = {
      inputValue: 20,
      generatedPassword: ''
    }
  }

  /** Update value in input */
  updateInputValue = event => {
    /** Error message */
    document.getElementById('error').style.display = 'none'

    this.setState({
      inputValue: event.target.value
    })
  }

  /** Generate password */
  generatorHandleClick = length => {
    /** Error message */
    document.getElementById('error').style.display = 'none'

    /** Password */
    let password = ''

    /** Possible word, numbers, etc. */
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    /** Check if value exist */
    if (!length || typeof length === 'undefined') {
      length = 20
    }

    if (length < 100001) {
      try {
        /** Iterator */
        for (let i = 0; i < length; i++) {
          password += possible.charAt(
            Math.floor(Math.random() * possible.length)
          )
        }

        this.setState({
          generatedPassword: password
        })
      } catch (err) {
        console.log(err)
      }
    } else {
      /** Error message */
      document.getElementById('error').style.display = 'block'
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
            margin: 0.7rem auto 0;
            background-color: #fff;
            border: none;
            padding: 2rem 1.5rem;
          }

          @media only screen and (max-width: 1100px) {
            .card {
              width: 100%;
            }

            h2 {
              font-size: 1rem;
            }
          }
        `}</style>

        <div className="container">
          <div className="columns">
            <div className="column col-xs-12 text-center">
              <div id="main_card" className="card">
                <div className="card-header">
                  <h2 className="card-title h3">Passwords generator</h2>
                  <div className="card-subtitle text-gray">
                    So, click on the button and generate your password now!
                  </div>
                </div>

                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label" for="count">
                      Set lenght of your password (default is 20)
                    </label>
                    <input
                      value={this.state.inputValue}
                      onChange={event => this.updateInputValue(event)}
                      type="number"
                      min="1"
                      max="100000"
                      className="form-input"
                      id="count"
                    />
                  </div>
                  <button
                    onClick={() => {
                      this.generatorHandleClick(this.state.inputValue)
                    }}
                    className="btn btn-primary"
                    id="start_button"
                  >
                    Generate now!
                  </button>
                  <span id="error">Max value is 100000</span>
                </div>

                <div className="card-footer">
                  <div className="form-group">
                    <label className="form-label" for="result">
                      Your password is:
                    </label>
                    <textarea
                      value={this.state.generatedPassword}
                      className="form-input"
                      id="result"
                      rows="7"
                      readOnly
                    />
                  </div>

                  <div className="card-subtitle text-gray">
                    Random, secure, custom, easy and fast.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}
