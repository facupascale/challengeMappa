import { FiltersScreen, MapScreen, SignUpScreen} from "@/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";

const Stack = createNativeStackNavigator<RootStackParamList>();
export const MainNavigation = () => {
  return (
  
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen
          name="Filters"
          component={FiltersScreen}
          options={{
            presentation: 'modal',
            headerShown: true,
            title: 'Filters',
          }}
        />
      </Stack.Navigator>

  );
}
