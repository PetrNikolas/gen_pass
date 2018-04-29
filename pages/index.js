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
          .columns {
            padding-top: 58px;
          }

          .card {
            width: auto;
            background: white;
            border: none;
            padding: 90px 1rem;
            cursor: pointer;
            margin: 1rem 0.5rem;
            -webkit-transition: 0.7s;
            transition: 0.7s;
          }

          .card:hover {
            margin-top: 3px;
          }

          .card .h3 {
            color: rgb(54, 2, 254);
            font-size: 44px;
            font-weight: 900;
          }

          .qr-code-bg {
            background: url('static/img/qr.png') #fff no-repeat;
            background-size: cover;
          }

          .password-bg {
            background: url('static/img/password.png') #fff no-repeat;
            background-size: cover;
          }

          .username-bg {
            background: url('static/img/username.png') #fff no-repeat;
            background-size: cover;
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
          <h2 className="h3 text-center subtitle">WELCOME TO GENPASS</h2>
          <h1 className="h1 rwd_title text-center">
            Generator that doesn’t save your personal data
          </h1>

          <div className="columns">
            <div className="column col-xs-12 col-md-12 col-4 text-center">
              <Link href="/qr-code">
                <div className="card qr-code-bg">
                  <div className="card-header">
                    <h3 className="card-title h3">QR code</h3>
                  </div>
                  <div className="card-footer">
                    <a className="btn btn-primary">Generate</a>
                  </div>
                </div>
              </Link>
            </div>

            <div className="column col-xs-12 col-md-12 col-4 text-center">
              <Link href="/passwords">
                <div className="card password-bg">
                  <div className="card-header">
                    <h3 className="card-title h3">Password</h3>
                  </div>
                  <div className="card-footer">
                    <a className="btn btn-primary">Generate</a>
                  </div>
                </div>
              </Link>
            </div>

            <div className="column col-xs-12 col-md-12 col-4 text-center">
              <Link href="/usernames">
                <div className="card username-bg">
                  <div className="card-header">
                    <h3 className="card-title h3">Username</h3>
                  </div>
                  <div className="card-footer">
                    <a className="btn btn-primary">Generate</a>
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
