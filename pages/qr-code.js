// ------------------------------------------------------------------------------
// Import libs
// ------------------------------------------------------------------------------
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { QRCode } from 'react-qr-svg'

import Page from './layout'

// ------------------------------------------------------------------------------
// Export component
// ------------------------------------------------------------------------------
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'some text'
    }
  }

  /** Update value in input */
  updateInputValue = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  /** Generate password */
  generatorHandleClick = value => {
    if (value) {
      console.log(value)
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
                  <h2 className="card-title h3">QR codes generator</h2>
                  <div className="card-subtitle text-gray">
                    So, click on the button and generate your QR code now!
                  </div>
                </div>

                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label">
                      Set value of your QR code and see the code update in
                      real-time!
                    </label>
                    <input
                      value={this.state.inputValue}
                      onChange={event => this.updateInputValue(event)}
                      type="text"
                      className="form-input"
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
                </div>

                <div className="card-footer">
                  <QRCode
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                    level="Q"
                    style={{ width: 250 }}
                    value={this.state.inputValue}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}
