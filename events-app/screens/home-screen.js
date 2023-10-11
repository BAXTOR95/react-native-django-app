import { View, StyleSheet } from 'react-native';
import EventList from '../components/events/event-list';
import { useEffect, useState } from 'react';

const HomeScreen = () => {
	const [data, setData] = useState([]);
	const [refresh, setRefresh] = useState(false);

	const handleRefresh = () => {
		console.log('refreshing');
		setRefresh((prevState) => !prevState);
	};

	useEffect(() => {
		fetchData();
	}, [refresh]);

	const fetchData = async () => {
		try {
			const response = await fetch('http://192.168.50.107:8000/api/events/');
			const data = await response.json();
			setData(data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	return (
		<View style={styles.screen}>
			<EventList data={data} onRefresh={handleRefresh} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		padding: 20,
	},
});

export default HomeScreen;
