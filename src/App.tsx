import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Screens} from "./shared/navigation";
import {AuthScreen} from "./screens/AuthScreen";
import {HomeScreen} from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

const App = () => (
	<NavigationContainer>
		<SafeAreaProvider>
			<Stack.Navigator
				screenOptions={{animation: "slide_from_right", headerShown: false}}
			>
				<Stack.Screen name={Screens.Auth} component={AuthScreen} />
				<Stack.Screen name={Screens.Home} component={HomeScreen} />
			</Stack.Navigator>
		</SafeAreaProvider>
	</NavigationContainer>
);

export default App;
