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
      nameValue: '',
      surnameValue: '',
      generatedUsername: ''
    }
  }

  /** Update value in input - name */
  updateNameValue = event => {
    /** Error message */
    document.getElementById('error').style.display = 'none'

    this.setState({
      nameValue: event.target.value
    })
  }

  /** Update value in input - surname */
  updateSurnameValue = event => {
    /** Error message */
    document.getElementById('error').style.display = 'none'

    this.setState({
      surnameValue: event.target.value
    })
  }

  /** Generate password */
  generatorHandleClick = (name, surname) => {
    /** Error message */
    document.getElementById('error').style.display = 'none'

    /** Password */
    let numbers_varinat = ''
    let username = ''

    if (
      name &&
      typeof name !== 'undefined' &&
      surname &&
      typeof surname !== 'undefined'
    ) {
      /** Possible variants */
      const possible_of_numbers = '1234567890'

      try {
        /** Iterator */
        for (let i = 0; i < 3; i++) {
          numbers_varinat += possible_of_numbers.charAt(
            Math.floor(Math.random() * 7)
          )
        }

        username = name.slice(0, 3) + surname.slice(0, 5) + numbers_varinat

        this.setState({
          generatedUsername: username
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
              <h2 className="h3 text-center subtitle">USERNAME</h2>
              <h1 className="h1 rwd_title text-center">
                Generate your username from your name and surname now!
              </h1>

              <div className="card">
                <div className="card-body">
                  <div className="form-group">
                    <div className="columns">
                      <div className="column col-lg-6 col-md-6 col-xs-12">
                        <label className="form-label">Your name</label>
                        <input
                          value={this.state.nameValue}
                          onChange={event => this.updateNameValue(event)}
                          type="text"
                          className="form-input"
                          id="name"
                        />
                      </div>

                      <div className="column col-lg-6 col-md-6 col-xs-12">
                        <label className="form-label">Your surname</label>
                        <input
                          value={this.state.surnameValue}
                          onChange={event => this.updateSurnameValue(event)}
                          type="text"
                          className="form-input"
                          id="surname"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      this.generatorHandleClick(
                        this.state.nameValue,
                        this.state.surnameValue
                      )
                    }}
                    className="btn btn-primary"
                    id="start_button"
                  >
                    Generate now!
                  </button>
                  <span id="error">Name and surname are required</span>
                </div>

                <div className="card-footer">
                  <div className="form-group">
                    <label className="form-label">Your username is:</label>
                    <textarea
                      value={this.state.generatedUsername}
                      className="form-input"
                      id="result"
                      rows="3"
                      readOnly
                    />
                  </div>

                  <div>
                    Generated from:
                    {this.state.nameValue && (
                      <span id="name_chip" className="chip">
                        {' '}
                        {this.state.nameValue}{' '}
                      </span>
                    )}
                    {this.state.surnameValue && (
                      <span id="surname_chip" className="chip">
                        {' '}
                        {this.state.surnameValue}{' '}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="buttons-section">
                <Link href="/passwords">
                  <a className="btn btn-secondary">Generate password</a>
                </Link>
                <Link href="/qr-code">
                  <a className="btn btn-secondary">Generate qr code</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}
