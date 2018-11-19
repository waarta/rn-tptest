import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import Key from "./Key";

class Keyboard extends Component {
	isUse(num) {
		return this.props.numContact.includes(num);
	}
	render() {
		return (
			<View>
				{[0, 1, 2].map(i => {
					return (
						<View key={"row_" + i} style={styles.numberRow}>
							<Key value={i * 3 + 1} use={this.isUse(i * 3 + 1)} />
							<Key value={i * 3 + 2} use={this.isUse(i * 3 + 2)} />
							<Key value={i * 3 + 3} use={this.isUse(i * 3 + 3)} />
						</View>
					);
				})}
				<View style={styles.numberRow}>
					<Key value={0} use={this.isUse(0)} />
				</View>
			</View>
		);
	}
}

Keyboard.propTypes = {
	numContact: PropTypes.string
};

const styles = StyleSheet.create({
	numberRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	}
});

export default Keyboard;
