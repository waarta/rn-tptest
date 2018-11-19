import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import Key from "./Key";

class Keyboard extends Component {
	render() {
		return (
			<View>
				{[0, 1, 2].map(i => {
					return (
						<View key={"row_" + i} style={styles.numberRow}>
							<Key value={i * 3 + 1} />
							<Key value={i * 3 + 2} />
							<Key value={i * 3 + 3} />
						</View>
					);
				})}
				<Key value={0} />
			</View>
		);
	}
}

Keyboard.propTypes = {};

const styles = StyleSheet.create({
	numberRow: {
		flexDirection: "row"
	}
});

export default Keyboard;
