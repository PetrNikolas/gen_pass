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
          a {
            color: #f8114d !important;
          }

          .card {
            width: auto;
            background-color: #fff;
            border: none;
            padding: 2rem 1.5rem;
            box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
            cursor: pointer;
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
            <div className="column col-xs-12 col-4 text-center">
              <Link href="/passwords">
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-title h3">Passwords generator</h2>
                    <div className="card-subtitle text-gray">
                      <a className="btn btn-link">Generate now</a>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="column col-xs-12 col-4 text-center">
              <Link href="/usernames">
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-title h3">Usernames generator</h2>
                    <div className="card-subtitle text-gray">
                      <a className="btn btn-link">Generate now</a>
                    </div>
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
