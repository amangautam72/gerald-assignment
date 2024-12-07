import React from "react";
import { Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Screen1, Screen2 } from "../views";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import styles from "./styles";
import { DrawerNavigationProp, useDrawerProgress } from "@react-navigation/drawer";
import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Contact from "../views/Contact";
import { useNavigation } from "@react-navigation/native";

type HomeNavigatorParamList = {
  Screen1: undefined;
  Screen2: undefined;
};

type BottomTabParamList = {
  Home: undefined;
  Contact: undefined;
};

type BottomTabNavigatorProps = BottomTabNavigationProp<BottomTabParamList>;

interface Props {
  navigation: BottomTabNavigatorProps;
}

const Stack = createStackNavigator<HomeNavigatorParamList>();

const HomeNavigator = () => {
  return ( <Stack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerShown: false,
    }}
  >
    <Stack.Screen name="Screen1" component={Screen1} />
    <Stack.Screen name="Screen2" component={Screen2} />
  </Stack.Navigator>)
}

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabNavigator : React.FC<Props> = () => {
  const progress = useDrawerProgress();
  const navigation = useNavigation<DrawerNavigationProp<any>>()

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(progress.value, [0, 1], [0, -8]);
    const translateX = interpolate(progress.value, [0, 1], [0, 70]);
    const translateY = interpolate(progress.value, [0, 1], [0, 20]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 50]);
    return {
      transform: [{ rotate: `${rotate}deg` }, { translateX }, { translateY }],
      flex: 1,
      overflow: "hidden",
      borderRadius
    };
  });

  const parentAnimatedStyle = useAnimatedStyle(() => {
    const marginTop = interpolate(progress.value, [0,1], [0,50])
    return {
      flex: 1, 
      backgroundColor: "#1F1B33",
      marginTop
    }
  });
  return (
   
    <Animated.View style={parentAnimatedStyle}>
      <Animated.View style={animatedStyle}>
        <Tab.Navigator  
        screenOptions={{
          headerTransparent: true,
          headerTitleStyle: styles.screenOptionsText,
          header: () => <SafeAreaView >
            <TouchableOpacity style={styles.screenOptionsView} onPress={() => navigation.openDrawer()}>
          <Image
            source={require("../assets/images/menu.png")}
            style={styles.screenOptionsImage}
          />
          <Text style={styles.screenOptionsText}>START</Text>
      </TouchableOpacity>
      </SafeAreaView>
        }}>
          <Tab.Screen name="Home" component={HomeNavigator} />
          <Tab.Screen name="Contact" component={Contact} />
        </Tab.Navigator>
      </Animated.View>
      </Animated.View>
  );
};

export default TabNavigator