import { useLayoutEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Button, Text } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '@env';

const NewEventScreen = () => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [date, setDate] = useState(new Date());
	const [alert, setAlert] = useState({
		isVisible: false,
		msg: '',
	});
    const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: 'add new event',
			headerLeft: () => (
				<HeaderBackButton
					tintColor='white'
					onPress={() => navigation.goBack()}
				/>
			),
		});
	}, []);

	const handleAddEvent = async () => {
		const d = date.toISOString().slice(0, 10);
		console.log(d);

		const data = {
			name,
			description,
			date: d,
		};

		try {
			const response = await fetch(API_URL + 'events/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});

			const res = await response.json();
			setAlert({ isVisible: true, msg: 'event added' });
		} catch (error) {
			console.error('Error adding data:', error);
			setAlert({ isVisible: true, msg: 'event was not added' });
		}
	};

	return (
		<View style={styles.screen}>
			{alert.isVisible && <Text>{alert.msg}</Text>}
			<TextInput
				value={name}
				onChangeText={setName}
				placeholder='name'
				style={styles.input}
			/>
			<TextInput
				value={description}
				onChangeText={setDescription}
				placeholder='description'
				multiline={true}
				style={styles.input}
			/>
			<TextInput
				value={date.toLocaleDateString()}
				onChangeText={setDate}
				placeholder='event date'
				style={styles.input}
			/>
			<Button onPress={handleAddEvent} title='add' />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		padding: 20,
	},
	input: {
		height: 40,
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
		backgroundColor: 'white',
		marginBottom: 10,
	},
});

export default NewEventScreen;
