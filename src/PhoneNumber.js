import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import Keyboard from "./Keyboard";

class PhoneNumber extends Component {
	render() {
		return (
			<View
				style={[
					styles.carre,
					{
						width: this.props.dimensionGrid,
						height: this.props.dimensionGrid
					}
				]}
			>
				<Keyboard numContact={this.props.numContact} />
				<Text style={styles.number}> {this.props.numContact}</Text>
			</View>
		);
	}
}

PhoneNumber.propTypes = {
	dimensionGrid: PropTypes.number,
	numContact: PropTypes.string
};

const styles = StyleSheet.create({
	carre: {
		alignItems: "center",
		borderWidth: 1,
		borderColor: "black"
	},
	number: {
		fontSize: 26,
		margin: 10,
		alignItems: "center",
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 100,
		padding: 10
	}
});

export default PhoneNumber;
