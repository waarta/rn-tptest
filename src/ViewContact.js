import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ContactProfil from "./ContactProfil";
import PropTypes from "prop-types";
import PhoneNumber from "./PhoneNumber";

class ViewContact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dimensionGrid: 0
		};
	}

	onLayout(event) {
		var width = event.nativeEvent.layout.width;
		var height = event.nativeEvent.layout.height;
		if (width < height)
			this.setState({ dimensionGrid: Math.round(width - 100) });
		else this.setState({ dimensionGrid: Math.round(height - 100) });
	}

	render() {
		return (
			<View style={styles.container} onLayout={this.onLayout.bind(this)}>
				<ContactProfil
					nomContact={this.props.contact["nom"]}
					imgContact={this.props.contact["photo"]}
					nextContact={this.props.nextContact}
					prevContact={this.props.prevContact}
				/>
				<PhoneNumber
					dimensionGrid={this.state.dimensionGrid}
					numContact={this.props.contact["num"]}
				/>
			</View>
		);
	}
}

ViewContact.propTypes = {
	contact: PropTypes.object,
	nextContact: PropTypes.func,
	prevContact: PropTypes.func
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});

export default ViewContact;
