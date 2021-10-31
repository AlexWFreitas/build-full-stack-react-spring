import React, { Component } from "react";
import SingleContact from './SingleContact';
import AddContacts from './AddContacts';
const client = require('../utils/Client');

export default class Contacts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [],
		};
	}

	componentDidMount() {
		let x = client({method: 'GET', path: 'http://localhost:8080/api/contacts'}).then(response => {
			this.setState({contacts: response.entity._embedded.contacts});
		});	  
	}

	render() {
		return (
			<div>
				<div className="row">
					<AddContacts />
				</div>
				<div className="row">
					{console.log(this.state.contacts)}
					{ this.state.contacts.map( (item) => (
						<SingleContact key={item.id} item={item} />
					)) }
				</div>				
			</div>
		)
	}
 }
