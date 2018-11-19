import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import PropTypes from "prop-types";

class ContactProfil extends Component {
	render() {
		return (
			<View>
				<Text>{this.props.nomContact}</Text>
				<View style={styles.container}>
					<View style={styles.button}>
						<Button
							onPress={this.props.prevContact}
							title="<"
							color="#1E90FF"
						/>
					</View>
					<Image
						source={this.props.imgContact}
						resizeMode="cover"
						style={{
							width: 150,
							height: 150
						}}
					/>
					<View style={styles.button}>
						<Button
							onPress={this.props.nextContact}
							title=">"
							color="#1E90FF"
						/>
					</View>
				</View>
			</View>
		);
	}
}

ContactProfil.propTypes = {
	nomContact: PropTypes.string,
	imgContact: PropTypes.number,
	nextContact: PropTypes.func,
	prevContact: PropTypes.func
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row"
	},
	button: {
		margin: 50,
		width: 50
	},
	txt: {
		justifyContent: "center"
	}
});
export default ContactProfil;
