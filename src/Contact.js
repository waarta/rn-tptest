import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ViewContact from "./ViewContact";

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [
				{
					nom: "momo",
					photo: require("../img/android.png"),
					num: "0260410134"
				},
				{ nom: "toto", photo: require("../img/biere.png"), num: "0792254068" },
				{
					nom: "azerty",
					photo: require("../img/canards.jpg"),
					num: "0495861285"
				}
			],
			currentContact: 0
		};
	}

	next() {
		this.setState(oldState => {
			if (oldState.currentContact < this.state.contacts.length - 1)
				return {
					currentContact: oldState.currentContact + 1
				};
			else return { currentContact: 0 };
		});
	}

	prev() {
		this.setState(oldState => {
			if (oldState.currentContact > 0)
				return {
					currentContact: oldState.currentContact - 1
				};
			else return { currentContact: this.state.contacts.length - 1 };
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<ViewContact
					contact={this.state.contacts[this.state.currentContact]}
					nextContact={this.next.bind(this)}
					prevContact={this.prev.bind(this)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});

export default Contact;
