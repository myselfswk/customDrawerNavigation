import * as React from "react";
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from "@react-navigation/drawer";
import {
    Body,
    Button,
    Container,
    Content,
    Footer,
    H3,
    Header,
    Icon,
    Left,
    List,
    ListItem,
    Right,
    Switch,
    Text,
    Thumbnail
} from "native-base";
import Animated from "react-native-reanimated";
import { DrawerActions } from "@react-navigation/native";

function SideBar({ progress, ...props }) {
    const translateX = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0]
    });
    return (
        <Container>
            <Header style={{ backgroundColor: '#ffffff', borderBottomWidth: 0 }}>
                <Right>
                    <Button onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}>
                        <Icon name="menu" />
                    </Button>
                </Right>
            </Header>
            <Content contentContainerStyle={{flex: 1}}>
                <ListItem thumbnail>
                    <Left>
                        <Thumbnail source={{
                            uri: 'https://attiehandassociates.co.za/wp-content/uploads/2014/08/Profile-Pic-Demo.png'
                        }} />
                    </Left>
                    <Body>
                        <H3>M Waleed Khan</H3>
                        <Text note>MERN stack Developer</Text>
                    </Body>
                </ListItem>
                <DrawerContentScrollView {...props}>
                    <Animated.View style={{ transform: [{ translateX }] }}>
                        <DrawerItemList {...props} />
                        <DrawerItem
                            label="Rate Us"
                            icon={({ color, size }) => (
                                <Icon name="star" style={{ fontSize: size, color: color }} />
                            )}
                            onPress={() => props.navigation.navigate('Home')}
                        />
                    </Animated.View>
                </DrawerContentScrollView>
                <List>
                    <ListItem>
                        <Body>
                            <Text>Dark Mode</Text>
                        </Body>
                        <Right>
                            <Switch value={true} />
                        </Right>
                    </ListItem>
                </List>
            </Content>
            <Footer />
        </Container>

    )
}

export default SideBar;