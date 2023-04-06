import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {AuthScreen, HomeScreen} from "screens";
import {Screens} from "utils/constants/navigation";

const Stack = createNativeStackNavigator();

const App = () => (
	<NavigationContainer>
		<SafeAreaProvider>
			<Stack.Navigator screenOptions={{animation: "slide_from_right"}}>
				<Stack.Screen
					options={{headerShown: false}}
					name={Screens.Auth}
					component={AuthScreen}
				/>
				<Stack.Screen name={Screens.Home} component={HomeScreen} />
			</Stack.Navigator>
		</SafeAreaProvider>
	</NavigationContainer>
);

export default App;
