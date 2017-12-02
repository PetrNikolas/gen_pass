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

    /** Show and hide chip  */
    if (typeof event.target.value !== 'undefined' && event.target.value) {
      document.getElementById("name_chip").style.display = "inline-block";
    } else {
      /** Chip */
      document.getElementById("name_chip").style.display = "none";
    }
  }

  /** Update value in input - second name */
  updateSecondNameValue = (event) => {
    /** Error message */
    document.getElementById("error").style.display = "none";

    this.setState({
      secondNameValue: event.target.value
    });

    /** Show and hide chip  */
    if (typeof event.target.value !== 'undefined' && event.target.value) {
      document.getElementById("second_name_chip").style.display = "inline-block";
    } else {
      /** Chip */
      document.getElementById("second_name_chip").style.display = "none";
    }
  }

  /** Update value in input - surname */
  updateSurnameValue = (event) => {
    /** Error message */
    document.getElementById("error").style.display = "none";

    this.setState({
      surnameValue: event.target.value
    });

    /** Show and hide chip  */
    if (typeof event.target.value !== 'undefined' && event.target.value) {
      document.getElementById("surname_chip").style.display = "inline-block";
    } else {
      /** Chip */
      document.getElementById("surname_chip").style.display = "none";
    }
  }

  /** Generate password */
  generatorHandleClick = (name, secondName, surname) => {
    /** Error message */
    document.getElementById("error").style.display = "none";

    /** Password */
    let first_variant = "";
    let second_varinat = "";
    let username = "";

    /** Check if second name exist */
    if (!secondName || typeof secondName === "undefined") {
      secondName = '';
    }

    if (name && typeof name !== "undefined" && surname && typeof surname !== "undefined") {
      /** Possible variants */
      const possible_of_name = name + secondName + surname + '1234567890';
      const length_of_name = possible_of_name.length;

      try {
          /** Iterator */
          for(let i = 0; i < length_of_name; i++) {
            first_variant += possible_of_name.charAt(Math.floor(Math.random() * possible_of_name.length)); 
          }

          username = first_variant;

          for(let i = 0; i < length; i++) {
            username += username.charAt(Math.floor(Math.random() * username.length)); 
          } 

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
          .card {
            width: 50%;
            border: .3rem dotted #e7e9ed;
            margin: 0 auto;
            margin-top: 7vh;
            box-shadow: 0 6px 15px rgba(36,37,38,0.08);
          }

          .btn-primary, .btn-primary:focus, .btn-primary:active {
            background: #6a11cb !important;
            border-color: #6a11cb !important;
          }

          input {
            max-width: 150px;
            margin: 0 auto;
          }

          label {
            color: #868f96 !important;
          }

          textarea {
            resize: none;
          }

          .form-input:focus {
            border-color: #6a11cb;
            box-shadow: none;
          }

          #error {
            color: red;
            display: none;
          }

          #name_chip, #second_name_chip, #surname_chip {
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
                  <h1 className="card-title h1">Generator of random username</h1>
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
                    <span id="name_chip" className="chip"> {this.state.nameValue} </span>
                    <span id="second_name_chip" className="chip"> {this.state.secondNameValue} </span>
                    <span id="surname_chip" className="chip"> {this.state.surnameValue} </span> 
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


// ------------------------------------------------------------------------------
// Styles
// ------------------------------------------------------------------------------
const styles = {
  card: {
    width: '50%',
    margin: '0 auto',
    marginTop: '7vh',
    border: '.3rem dotted #e7e9ed',
    boxShadow: '0 6px 15px rgba(36,37,38,0.08)'
  },

  btn_primary: {
    background: '#6a11cb !important',
    borderColor: '#6a11cb !important',
    ':focus': {
      background: '#6a11cb !important',
      borderColor: '#6a11cb !important',
    },
    ':active': {
      background: '#6a11cb !important',
      borderColor: '#6a11cb !important'
    }
  },

  input: {
    maxWidth: '150px',
    margin: '0 auto'
  },

  label: {
    color: '#868f96 !important'
  },

  textarea: {
    resize: 'none'
  },

  form_input: {
    ':focus': {
      borderColor: '#6a11cb',
      boxShadow: 'none'
    }
  },

  error: {
    color: 'red',
    display: 'none'
  }
}