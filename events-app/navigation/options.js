import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

export const navOptions = (nav) => {
	return {
		headerTintColor: '#cbd5e1',
		headerStyle: {
			backgroundColor: '#0f172a',
		},
		headerTitleAlign: 'center',
		headerRight: () => (
			<Ionicons
				name='menu'
				size={32}
				color='white'
				style={{ paddingRight: 10 }}
				onPress={() => nav.toggleDrawer()}
			/>
		),
		headerLeft: () => (
			<Text style={{ color: 'white', fontSize: 20, paddingLeft: 10 }}>
				Logo
			</Text>
		),
	};
};
