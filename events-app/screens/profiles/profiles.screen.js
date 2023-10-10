import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

const ProfilesScreen = () => {
	const navigation = useNavigation();
	return (
		<View>
			<Text>profiles screen</Text>
			<Button
				title='some profile'
				onPress={() => navigation.navigate('Profile', { profileId: 1 })}
			></Button>
		</View>
	);
};

export default ProfilesScreen;
