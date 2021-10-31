import React, { Component } from "react";

// Stateful Component

export default class AddContacts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '', 
			lastName: '', 
			email: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		let contact = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email
		}

		fetch("http://localhost:8080/api/contacts", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(contact),			
		})
		.then(response => response.json());

		window.location.reload();
	}

	render() {
		return (
			<div className="row">
				<form className="col s12" onSubmit={this.handleSubmit}>
				<div className="row">
					<div className="input-field col s6">
						<input name="firstName" value={this.state.firstName} type="text" className="validate" onChange={this.handleChange} />
						<label htmlFor="firstName">First Name</label>
					</div>
					<div className="input-field col s6">
						<input name="lastName" value={this.state.lastName} type="text" className="validate" onChange={this.handleChange} />
						<label htmlFor="lastName">Last Name</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s12">
						<input name="email" value={this.state.email} type="email" className="validate" onChange={this.handleChange} />
						<label htmlFor="email">Email</label>
					</div>
				</div>
				<div className="row">
					<button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
				</div>
				</form>
			</div>
		)
	}
}
