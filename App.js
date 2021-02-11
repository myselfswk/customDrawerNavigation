import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import 'react-native-gesture-handler';
import {
  Container,
  Content,
  Text,
  Header,
  Left,
  Body,
  Title,
  Right,
  Item,
  Icon,
  Button,
  View
} from "native-base";
import SideBar from "./CustomDrawer";

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <Container>
      <Header>
        <Left style={{ flex: 0.1 }} />
        <Body style={{ flex: 1, alignItems: 'center' }}>
          <Title>Home</Title>
        </Body>
        <Right style={{ flex: 0.1 }} />
      </Header>
      <Content
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View>
          <Text>Home Screen Content</Text>
          <Button onPress={() => navigation.toggleDrawer()}><Text>Open Drawer</Text></Button>
        </View>
      </Content>
    </Container>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <Container>
      <Header>
        <Left style={{ flex: 0.1 }} />
        <Body style={{ flex: 1, alignItems: 'center' }}>
          <Title>Profile</Title>
        </Body>
        <Right style={{ flex: 0.1 }} />
      </Header>
      <Content
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View>
          <Text>Profile Screen Content</Text>
          <Button onPress={() => navigation.toggleDrawer()}><Text>Open Drawer</Text></Button>
        </View>
      </Content>
    </Container>
  );
}

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) =>
      (
        <SideBar {...props} />
      )}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="home" style={{ fontSize: size, color: color }} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="people" style={{ fontSize: size, color: color }} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}

export default App;