import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [
				{ nom: "momo", photo: "../img/android.png", num: "0260410134" },
				{ nom: "toto", photo: "../img/biere.png", num: "0792254068" },
				{ nom: "azerty", photo: "../img/canards.jpg", num: "0495861285" }
			]
		};
	}

	render() {
		return <View />;
	}
}

export default Contact;
