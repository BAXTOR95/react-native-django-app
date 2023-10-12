import { Text, View, FlatList, RefreshControl } from 'react-native';
// import { DUMMY_DATA } from '../../data/dummy';
import EventItem from './event-item';

const EventList = ({ data, onRefresh }) => {
	const renderItem = ({ item }) => {
		return (
			<EventItem
				id={item.id}
				name={item.name}
				description={item.description}
				qrCode={item.qr_code}
			/>
		);
	};
	return (
		<View>
			<FlatList
				data={[...data].reverse()} // Reverse the data array
				keyExtractor={(item) => item.id.toString()} // Ensure the key is a string
				renderItem={renderItem}
				refreshControl={
					<RefreshControl refreshing={false} onRefresh={onRefresh} />
				}
			/>
		</View>
	);
};

export default EventList;
