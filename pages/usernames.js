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
    let name_variant = ''
    let numbers_varinat = ''
    let username = ''

    if (
      name &&
      typeof name !== 'undefined' &&
      surname &&
      typeof surname !== 'undefined'
    ) {
      /** Possible variants */
      const possible_of_name = name + surname
      const possible_of_numbers = '1234567890'

      const length_of_name = possible_of_name.length

      try {
        /** Iterator */
        for (let i = 0; i < 5; i++) {
          name_variant += possible_of_name.charAt(
            Math.floor(Math.random() * possible_of_name.length)
          )
        }

        for (let i = 0; i < 3; i++) {
          numbers_varinat += possible_of_numbers.charAt(
            Math.floor(Math.random() * 7)
          )
        }

        username = name_variant + numbers_varinat

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
            width: 100%;
            max-width: 45rem;
            margin: 0.7rem auto 0;
            background-color: #fff;
            border: none;
            padding: 1.5rem;
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
                  <h2 className="card-title h3">Usernames generator</h2>
                  <div className="card-subtitle text-gray">
                    So, click on the button and generate your username from your
                    name and surname now!
                  </div>
                  <br />
                  <div className="card-subtitle text-gray">
                    * second name is not required
                  </div>
                </div>

                <div className="card-body">
                  <div className="form-group">
                    <div className="columns">
                      <div className="column col-lg-4 col-xs-12">
                        <label className="form-label" for="name">
                          Your name
                        </label>
                        <input
                          value={this.state.nameValue}
                          onChange={event => this.updateNameValue(event)}
                          type="text"
                          className="form-input"
                          id="name"
                        />
                      </div>

                      <div className="column col-lg-4 col-xs-12">
                        <label className="form-label" for="surname">
                          Your surname
                        </label>
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
                    <label className="form-label" for="result">
                      Your username is:
                    </label>
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
