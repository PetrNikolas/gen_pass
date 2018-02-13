// ------------------------------------------------------------------------------
// Import libs
// ------------------------------------------------------------------------------
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { QRCode } from 'react-qr-svg'
import html2canvas from 'html2canvas'

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
    if (document.getElementById('rendered_canvas')) {
      document.getElementById('rendered_canvas').style.display = 'none'
    }

    this.setState({
      inputValue: event.target.value
    })
  }

  /** Update value in input */
  /*closeModal = event => {
    document.getElementById("modal-id").style.display = "none";
  }*/

  /** Generate password */
  /*generatorHandleClick = value => {
    if (value) {
      if (document.getElementById("rendered_canvas")) {
        document.getElementById("rendered_canvas").style.display = "none";
      }

      const canvas = document.querySelector("#qr");

      html2canvas( canvas, {
        scale: 0.52
      } )
        .then((canvas) => {
          document.getElementById("modal-id").style.display = "flex";
          document.getElementById('qr_result').appendChild(canvas);
          canvas.id = 'rendered_canvas'
        })
        .catch(err => {
          console.error(err);
        });
    }
  }*/

  /** Render HTML */
  render() {
    return (
      <Page>
        <style jsx>{`
          #modal-id {
            display: none;
          }

          .form-input {
            max-width: 450px !important;
          }

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

        {/*<div className="modal active" id="modal-id">
          <a onClick={() => { this.closeModal() }} className="modal-overlay" aria-label="Close"></a>
          <div className="modal-container">
            <div className="modal-header">
              <a onClick={() => { this.closeModal() }} className="btn btn-clear float-right" aria-label="Close"></a>
              <div className="modal-title h5">Your QR Code</div>
            </div>
            <div className="modal-body">
              <div className="content">
                <div id="qr_result"></div>
              </div>
            </div>
          </div>
        </div>*/}

        <div className="container">
          <div className="columns">
            <div className="column col-xs-12 text-center">
              <div id="main_card" className="card">
                <div className="card-header">
                  <h2 className="card-title h3">QR codes generator</h2>
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

                  {/*<button
                    onClick={() => {
                      this.generatorHandleClick(this.state.inputValue)
                    }}
                    className="btn btn-primary"
                    id="start_button"
                  >
                    Generate now!
                  </button>*/}
                </div>

                <div id="qr" className="card-footer">
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
