import React from 'react';
import { StatusBar, View } from 'react-native';
import DiscoveryScreen from '../../components/DiscoveryScreen';

export default function TabOneScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <DiscoveryScreen />
    </View>
  );
}
