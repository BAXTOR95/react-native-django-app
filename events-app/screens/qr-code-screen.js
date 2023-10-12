import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const QrCodeScreen = () => {
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);
	const navigation = useNavigation();
	const isFocused = useIsFocused();

	useEffect(() => {
		const getBarCodeScannerPermissions = async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		};

		getBarCodeScannerPermissions();
	}, [isFocused]);

	const handleBarCodeScanned = ({ type, data }) => {
		if (scanned) return; // Ignore if already scanned

		setScanned(true);
		alert(`Bar code with type ${type} and data ${data} has been scanned!`);

		// Navigate to the "New Event" screen with the scanned data
		navigation.navigate('New Event', { qr_data: data });
	};

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<View style={styles.screen}>
			{isFocused && (
				<BarCodeScanner
					onBarCodeScanned={handleBarCodeScanned}
					style={StyleSheet.absoluteFillObject}
				/>
			)}
			{scanned && (
				<Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});

export default QrCodeScreen;
