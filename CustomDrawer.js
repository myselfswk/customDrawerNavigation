import * as React from "react";
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from "@react-navigation/drawer";
import {
    Button,
    Container,
    Content,
    Footer,
    Header,
    Icon,
    Right,
    Text
} from "native-base";
import Animated from "react-native-reanimated";

function SideBar({ progress, ...props }) {
    const translateX = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0]
    });
    return (
        <Container>
            <Header style={{ backgroundColor: '#ffffff', borderBottomWidth: 0 }}>
                <Right>
                    <Button transparent>
                        <Icon name="menu" />
                    </Button>
                </Right>
            </Header>
            <Content>
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
            </Content>
            <Footer />
        </Container>

    )
}

export default SideBar;