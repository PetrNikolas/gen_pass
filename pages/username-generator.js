// ------------------------------------------------------------------------------
// Import libs
// ------------------------------------------------------------------------------
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Page from '../layout'


// ------------------------------------------------------------------------------
// Export component
// ------------------------------------------------------------------------------
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      secondNameValue: '',
      surnameValue: '',
      generatedUsername: ''
    };
  }

  /** Update value in input - name */
  updateNameValue = (event) => {
    /** Error message */
    document.getElementById("error").style.display = "none";

    this.setState({
      nameValue: event.target.value
    });
  }

  /** Update value in input - second name */
  updateSecondNameValue = (event) => {
    /** Error message */
    document.getElementById("error").style.display = "none";

    this.setState({
      secondNameValue: event.target.value
    });
  }

  /** Update value in input - surname */
  updateSurnameValue = (event) => {
    /** Error message */
    document.getElementById("error").style.display = "none";

    this.setState({
      surnameValue: event.target.value
    });
  }

  /** Generate password */
  generatorHandleClick = (name, secondName, surname) => {
    /** Error message */
    document.getElementById("error").style.display = "none";

    /** Password */
    let name_variant = "";
    let numbers_varinat = "";
    let username = "";

    /** Check if second name exist */
    if (!secondName || typeof secondName === "undefined") {
      secondName = '';
    }

    if (name && typeof name !== "undefined" && surname && typeof surname !== "undefined") {
      /** Possible variants */
      const possible_of_name = name + secondName + surname;
      const possible_of_numbers = '1234567890';

      const length_of_name = possible_of_name.length;

      try {
          /** Iterator */
          for(let i = 0; i < 5; i++) {
            name_variant += possible_of_name.charAt(Math.floor(Math.random() * possible_of_name.length)); 
          }

          for(let i = 0; i < 3; i++) {
            numbers_varinat += possible_of_numbers.charAt(Math.floor(Math.random() * 7)); 
          } 

          username = name_variant + numbers_varinat;

          this.setState({
              generatedUsername: username
          });
      } catch (err) {
          console.log(err);
      }
    } else {
      /** Error message */
      document.getElementById("error").style.display = "block";
    }
  }
  
  /** Render HTML */
  render() {
    return (
       <Page>
        <style jsx>{`
          .breadcrumb-item a {
            color: #f8114d;
          }

          .breadcrumb .breadcrumb-item:not(:last-child) a {
            color: #667189;
          }

          .card {
            width: 100%;
            max-width: 45rem;
            margin: .5rem auto 0;
            background-color: #fff;
            border: none;
            padding: 1.5rem;
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
            line-height: 1.5;
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
          <ul className="breadcrumb animated fadeInDown">
            <li className="breadcrumb-item">
              <Link href="/"><a>Home</a></Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/username-generator"><a>Username generator</a></Link>
            </li>
          </ul>

          <div className="columns">
            <div className="column col-xs-12 text-center">

              <div id="main_card" className="card animated fadeInUp">
                <div className="card-header">
                  <h1 className="card-title h1">Usernames generator</h1>
                  <div className="card-subtitle text-gray">So, click on the button and generate your username from your name and surname now!</div>
                  <br/>
                  <div className="card-subtitle text-gray">* second name is not required</div>
                </div>

                <div className="card-body">
                  <div className="form-group">
                      <div className="columns">
                          <div className="column col-lg-4 col-xs-12">
                              <label className="form-label" for="name">Your name</label>
                              <input value={this.state.nameValue} onChange={event => this.updateNameValue(event)} type="text" className="form-input" id="name" />
                          </div>

                          <div className="column col-lg-4 col-xs-12">
                              <label className="form-label" for="secondName">Your second name</label>
                              <input value={this.state.secondNameValue} onChange={event => this.updateSecondNameValue(event)} type="text" className="form-input" id="secondName" />
                          </div>

                          <div className="column col-lg-4 col-xs-12">
                              <label className="form-label" for="surname">Your surname</label>
                              <input value={this.state.surnameValue} onChange={event => this.updateSurnameValue(event)} type="text" className="form-input" id="surname" />
                          </div>
                      </div>
                  </div>
                  <button onClick={ () => { this.generatorHandleClick(this.state.nameValue, this.state.secondNameValue, this.state.surnameValue) } } className="btn btn-primary" id="start_button">Generate now!</button>
                  <span id="error">Name and surname are required</span>
                </div>

                <div className="card-footer">
                  <div className="form-group">
                    <label className="form-label" for="result">Your username is:</label>
                    <textarea value={this.state.generatedUsername} className="form-input" id="result" rows="3" readOnly></textarea>
                  </div>

                  <div>
                    Generated from: 
                    {this.state.nameValue && (
                      <span id="name_chip" className="chip"> {this.state.nameValue} </span>
                    )}
                    {this.state.secondNameValue && (
                      <span id="second_name_chip" className="chip"> {this.state.secondNameValue} </span>
                    )}
                    {this.state.surnameValue && (
                      <span id="surname_chip" className="chip"> {this.state.surnameValue} </span> 
                    )}
                  </div>

                  <div className="card-subtitle text-gray">Random, secure, custom, easy and fast.</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Page>
    )
  } 
}  