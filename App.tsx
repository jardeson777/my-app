import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import LoginScreen from './src/screens/login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotificationsScreen from './src/screens/notifications';

export type StackParamList = {
  login: undefined;
  private: undefined;
}

export type TabParamList = {
  home: undefined;
  notifications: undefined;
}

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const TabsScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const usuarioLogado = true;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {!usuarioLogado ? (
          <Stack.Screen
            name="login"
            component={LoginScreen}
          />
        ) :
          <Stack.Screen name="private" component={TabsScreen} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
