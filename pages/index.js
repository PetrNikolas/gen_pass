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
  }

  /** Render HTML */
  render() {
    return (
      <Page>
        <style jsx>{`
          .card {
            width: auto;
            background-color: #fff;
            border: none;
            padding: 2rem 1.5rem;
            cursor: pointer;
            -moz-transition: all 0.3s;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
            margin: 0 0.5rem;
          }

          .card:hover {
            box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
            -moz-transform: scale(1.1);
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
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
          <h2 className="h1 rwd_title text-center">Random generators</h2>

          <div className="columns">
            <div className="column col-xs-12 col-4 text-center">
              <Link href="/qr-code">
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-title h3">QR codes generator</h2>
                  </div>
                  <div className="card-body">
                    <img src="static/img/pen.svg" width="105" alt="Passwords" />
                  </div>
                  <div className="card-footer">
                    <a className="btn btn-primary">Generate now</a>
                  </div>
                </div>
              </Link>
            </div>

            <div className="column col-xs-12 col-4 text-center">
              <Link href="/passwords">
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-title h3">Passwords generator</h2>
                  </div>
                  <div className="card-body">
                    <img src="static/img/pen.svg" width="105" alt="Passwords" />
                  </div>
                  <div className="card-footer">
                    <a className="btn btn-primary">Generate now</a>
                  </div>
                </div>
              </Link>
            </div>

            <div className="column col-xs-12 col-4 text-center">
              <Link href="/usernames">
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-title h3">Usernames generator</h2>
                  </div>
                  <div className="card-body">
                    <img
                      src="static/img/user.svg"
                      width="105"
                      height="121"
                      alt="Usernames"
                    />
                  </div>
                  <div className="card-footer">
                    <a className="btn btn-primary">Generate now</a>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}
