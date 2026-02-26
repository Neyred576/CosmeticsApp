import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from '../screens/IntroScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import BeautyTipsScreen from '../screens/BeautyTipsScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createStackNavigator();

export const AppNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Intro"
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#FFFFFF' },
            }}
        >
            <Stack.Screen name="Intro" component={IntroScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
            <Stack.Screen name="BeautyTips" component={BeautyTipsScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
    );
};
