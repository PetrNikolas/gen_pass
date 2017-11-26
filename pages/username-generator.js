// ------------------------------------------------------------------------------
// Import libs
// ------------------------------------------------------------------------------
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'


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
    let first_variant = "";
    let second_varinat = "";
    let username = "";

    /** Check if second name exist */
    if (!secondName || typeof secondName === "undefined") {
      secondName = '';
    }

    if (name && typeof name !== "undefined" && surname && typeof surname !== "undefined") {
      /** Possible variants */
      const possible_of_name = name + secondName;
      const possible_of_surname = surname;

      const all_possibles = name + secondName + surname;
      const length = all_possibles.length;

      try {
          /** Iterator */
          for(let i = 0; i < length; i++) {
            first_variant += possible_of_name.charAt(Math.floor(Math.random() * possible_of_name.length)); 
            second_varinat += possible_of_surname.charAt(Math.floor(Math.random() * possible_of_surname.length));
          }

          username = first_variant + second_varinat;

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
       <div className="root">
        <Head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>

          <title>GENPASS</title>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
          <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css" />
          <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css" />
          <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css" />
        </Head>

        <style jsx>{`
          .root {
            padding: 50px;
            font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
          }

          .navbar a {
            color: #6a11cb !important; 
          }

          .logo {
            color: #1c1a27;
            font-size: 35px;
          }

          .card {
            width: 50%;
            margin: 0 auto;
            margin-top: 10vh;
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

          @media only screen and (max-width: 1100px) {
            .card {
              width: 100%;
            }

            h1 {
              font-size: 1rem;
            }
          }
        `}</style>

        <header className="navbar animated fadeInDown">
          <section className="navbar-section logo">
            GENPASS
          </section>

          <section className="navbar-section">
            <Link href="/"><a className="btn btn-link">Home</a></Link>
            <Link href="/username-generator"><a className="btn btn-link">Username generator</a></Link>
            <Link href="/contact"><a className="btn btn-link">Contact</a></Link>
          </section>
        </header>

        <main>
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
                            <div className="column col-xs-4">
                                <label className="form-label" for="name">Your name</label>
                                <input value={this.state.nameValue} onChange={event => this.updateNameValue(event)} type="text" className="form-input" id="name" />
                            </div>

                            <div className="column col-xs-4">
                                <label className="form-label" for="secondName">Your second name</label>
                                <input value={this.state.secondNameValue} onChange={event => this.updateSecondNameValue(event)} type="text" className="form-input" id="secondName" />
                            </div>

                            <div className="column col-xs-4">
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
                      <span className="chip"> {this.state.nameValue} </span>
                      <span className="chip"> {this.state.secondNameValue} </span>
                      <span className="chip"> {this.state.surnameValue} </span> 
                    </div>

                    <div className="card-subtitle text-gray">Random, secure, custom, easy and fast.</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>
    )
  } 
}  
