import React from 'react'
import Link from 'next/link'

import Page from './layout'

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
            max-width: 500px;
            margin: 1.7rem auto 0;
            background-color: #fff;
            border: none;
            padding: 1rem 0rem;
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
              <h2 className="h3 text-center subtitle">PASSWORD</h2>
              <h1 className="h1 rwd_title text-center">
                Set lenght of your password and generate your password now!
              </h1>

              <div className="card">
                <div className="card-body">
                  <div className="form-group">
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
                    <label className="form-label">Your password is:</label>
                    <textarea
                      value={this.state.generatedPassword}
                      className="form-input"
                      id="result"
                      rows="7"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="buttons-section">
                <Link href="/qr-code">
                  <a className="btn btn-secondary">Generate qr code</a>
                </Link>
                <Link href="/usernames">
                  <a className="btn btn-secondary">Generate username</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}
