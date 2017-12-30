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
    super(props);
  }
  
  /** Render HTML */
  render() {
    return (
      <Page>
        <style jsx>{`
          h1 {
            padding-top: 7rem;
          }

          a {
            color: #f8114d !important;
          }

          .card {
            width: auto;
            max-width: 300px;
            margin: 1.5rem auto 0;
            background-color: #fff;
            border: none;
            padding: 2rem 1.5rem;
            box-shadow: 0 3px 20px rgba(0,0,0,.1);
          }

          .btn-primary, .btn-primary:focus, .btn-primary:active {
            background: #f8114d !important;
            border-color: #f8114d !important;
          }

          input {
            max-width: 200px;
            margin: 0 auto;
            height: 2.5rem;
            padding: 0 1rem;
            border: 0;
            border-radius: 3px;
            background-color: #f4f4fb;
            -webkit-transition: border-color .25s ease-in-out,-webkit-box-shadow .5s;
            transition: border-color .25s ease-in-out,-webkit-box-shadow .5s;
            transition: box-shadow .5s,border-color .25s ease-in-out;
            transition: box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          }

          label {
            color: #868f96 !important;
          }

          textarea {
            resize: none;
            height: 7.25rem;
            padding: 0 1.125rem;
            padding-top: 1.6rem;
            padding-bottom: 1rem;
            border: 0;
            border-radius: 3px;
            background-color: #f4f4fb !important;
            border-radius: 3px;
            line-height: 1.5;
            -webkit-transition: border-color .25s ease-in-out,-webkit-box-shadow .5s;
            transition: border-color .25s ease-in-out,-webkit-box-shadow .5s;
            transition: box-shadow .5s,border-color .25s ease-in-out;
            transition: box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          }

          .form-input:focus {
            border-color: #868f96;
            box-shadow: none;
          }

          #error {
            color: red;
            display: none;
          }

          @media only screen and (max-width: 1100px) {
            .card {
              width: 100%;
            }

            h1 {
              font-size: 1rem;
            }
          }
        `}</style>

        <div className="container">
          <h1 className="card-title h1 text-center animated fadeInDown">Random generators</h1>

          <div className="columns">
            <div className="column col-xs-12 col-6 text-center">
              <div className="card animated fadeInUp">
                <div className="card-header">
                  <h2 className="card-title h2">Passwords generator</h2>
                  <div className="card-subtitle text-gray"><Link href="/passwords"><a className="btn btn-link">Generate now</a></Link></div>
                </div>
              </div>
            </div>

            <div className="column col-xs-12 col-6 text-center">
              <div className="card animated fadeInUp">
                <div className="card-header">
                  <h2 className="card-title h2">Usernames generator</h2>
                  <div className="card-subtitle text-gray"><Link href="/usernames"><a className="btn btn-link">Generate now</a></Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    )
  } 
}  