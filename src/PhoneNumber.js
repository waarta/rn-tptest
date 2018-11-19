import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import Keyboard from "./Keyboard";

class PhoneNumber extends Component {
	render() {
		return (
			<View>
				<Keyboard dimensionGrid={this.props.dimensionGrid} />
			</View>
		);
	}
}

PhoneNumber.propTypes = {
	dimensionGrid: PropTypes.number
};

const styles = StyleSheet.create({});

export default PhoneNumber;
