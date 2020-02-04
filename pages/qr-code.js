import React from 'react'
import Link from 'next/link'

import { QRCode } from 'react-qr-svg'

import Page from './layout'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'Type something'
    }
  }

  componentDidMount() {
    this.html2canvas = require('html2canvas')
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
      const canvas = document.querySelector('#qr')

      this.html2canvas(canvas, {
        scale: 0.52,
        useCORS: true
      })
        .then(canvas => {
          canvas.toBlob(function(blob) {
            window.saveAs(blob, 'qrcode.png')
          })
        })
        .catch(err => {
          console.error(err)
        })
    }
  }

  /** Render HTML */
  render() {
    return (
      <Page>
        <style jsx>{`
          #modal-id {
            display: none;
          }

          #qr_result {
            margin-left: -100px;
          }

          .modal-container .modal-body {
            max-height: 60vh !important;
          }

          #start_button {
            margin-top: 40px;
          }

          .card {
            max-width: 500px;
            margin: 1.7rem auto 0;
            background-color: #fff;
            border: none;
            padding: 1rem 0rem;
          }

          .card-body {
            padding: 0;
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
              <h2 className="h3 text-center subtitle">QR CODE</h2>
              <h1 className="h1 rwd_title text-center">
                Set the value of your QR code and watch it updating in
                real-time!
              </h1>

              <div className="card">
                <div className="card-body">
                  <div className="form-group">
                    <input
                      value={this.state.inputValue}
                      onChange={event => this.updateInputValue(event)}
                      type="text"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="card-footer">
                  <div id="qr">
                    <QRCode
                      bgColor="#FFFFFF"
                      fgColor="#000000"
                      level="Q"
                      style={{ width: 250 }}
                      value={this.state.inputValue}
                    />
                  </div>

                  <button
                    onClick={() => {
                      this.generatorHandleClick(this.state.inputValue)
                    }}
                    className="btn btn-primary"
                    id="start_button"
                  >
                    Save as image
                  </button>
                </div>
              </div>

              <div className="buttons-section">
                <Link href="/passwords">
                  <a className="btn btn-secondary">Generate password</a>
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
