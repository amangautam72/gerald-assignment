import React from "react";
import { View, Text } from "react-native";
import { DrawerItem, DrawerContentScrollView, useDrawerProgress, DrawerNavigationProp } from "@react-navigation/drawer";
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation<DrawerNavigationProp<any>>()
  const progress = useDrawerProgress()

  const animatedStyle = useAnimatedStyle(() => {
    const marginTop = interpolate(progress.value, [0,1], [0,50])
    return {
      marginTop,
      flex: 1,
      backgroundColor: "#1F1B33",
      borderTopLeftRadius: 50
    }
  });
  return (
    <Animated.View style={animatedStyle}>
    <DrawerContentScrollView
    >
      <View style={styles.viewDrawer}>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>Beka</Text>
        </View>

        <View style={styles.viewContentDrawer}>
          <View style={styles.contentDrawerItemActive}>
            <DrawerItem
              label="Start"
              labelStyle={styles.drawerItemLabelActive}
              onPress={() => navigation.navigate("Home")}
            />
          </View>

          <View style={styles.contentDrawerItem}>
            <DrawerItem
              label="Your Cart"
              labelStyle={styles.drawerItemLabel}
              onPress={() => null}
            />
          </View>

          <View style={styles.contentDrawerItem}>
            <DrawerItem
              label="Favorites"
              labelStyle={styles.drawerItemLabel}
              onPress={() => null}
            />
          </View>

          <View style={styles.contentDrawerItem}>
            <DrawerItem
              label="Your Orders"
              labelStyle={styles.drawerItemLabel}
              onPress={() => null}
            />
          </View>
        </View>

        <View style={styles.viewRow} />
        <View style={styles.viewSignOut}>
          <DrawerItem
            label="Sign Out"
            labelStyle={styles.signoutItem}
            onPress={() => null}
          />
        </View>
      </View>
    </DrawerContentScrollView>
    </Animated.View>
  );
};
