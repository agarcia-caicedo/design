import React from "react";
import emailjs from "emailjs-com";
import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      feedback: "",
    };
  }
  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  sendMessage(event) {
    event.preventDefault();
    if (this.state.name.length > 0 || this.state.email.length > 0) {
      const templateParams = {
        name: this.state.name,
        email: this.state.email,
        feedback: this.state.feedback,
      };
      emailjs
        .send(
          "default_service",
          "contact_form",
          templateParams,
          "user_SyHtjkzsCsYMMh1NdyZno"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (err) {
            console.error("Your message was not able to be sent");
          }
        );
      this.setState({
        name: "",
        email: "",
        feedback: "",
      });
    }
  }
  render() {
    return (
      <div>
        <FormControl
          className="ui form"
          id={this.props.id}
          name={this.props.name}
          method={this.props.method}
          action={this.props.action}
          required
          style={{
              width: "50vw",
              padding: "3vw",
          }}
        >
          <TextField
            id="name"
            name="name"
            onChange={this.handleInputChange.bind(this)}
            placeholder="your name"
            variant="outlined"
            size="small"
            required
            value={this.state.name}
            style={{
              paddingLeft: "5vh",
              paddingBottom: "2vh",
            }}
          />
          <br />
          <TextField
            id="email"
            name="email"
            onChange={this.handleInputChange.bind(this)}
            placeholder="your email address"
            required
            value={this.state.email}
            variant="outlined"
            size="small"
            style={{
            paddingLeft: "5vh",
            paddingBottom: "2vh", }}
          />
          <br />
          <TextField
            id="feedback"
            name="feedback"
            onChange={this.handleInputChange.bind(this)}
            placeholder="what would you like to chat about?"
            required
            variant="outlined"
            multiline
            rows={4}
            value={this.state.feedback}
            style={{ paddingLeft: "5vh",paddingBottom: "2vh", }}
          />
          <br />
          <input
            type="button"
            value="Send"
            className="ui button"
            style={{
              fontFamily: "Oswald', sans-serif",
              fontSize: "4vh",
              color: "#003541",
              backgroundColor: "#09c5d1",
              marginLeft: "5vh",
              border: "none",
              width: "7vw",
            }}
            onClick={this.sendMessage.bind(this)}
          />
        </FormControl>
      </div>
    );
  }
}
