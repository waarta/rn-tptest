import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";

class Key extends Component {
	render() {
		return (
			<View
				style={[
					styles.key,
					{
						backgroundColor: this.props.use ? "green" : "white"
					}
				]}
			>
				<Text style={styles.number}>{this.props.value}</Text>
			</View>
		);
	}
}

Key.propTypes = {
	value: PropTypes.number,
	use: PropTypes.bool
};

const styles = StyleSheet.create({
	key: {
		margin: 10,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 100,
		width: 40,
		height: 40
	},
	number: {
		fontSize: 26
	}
});

export default Key;
