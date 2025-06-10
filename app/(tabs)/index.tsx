import React, { useState } from 'react';
import {
  Dimensions,
  GestureHandlerRootView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const { width: screenWidth } = Dimensions.get('window');

export default function DiscoveryScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex-1 bg-gray-50">
        <ScrollView className="flex-1 px-4 pt-12">
          <Card variant="elevated" className="mb-6">
            <View className="p-4">
              <Text className="text-2xl font-bold text-gray-900 mb-2">
                {/* {currentProfile.name}, {currentProfile.age} */}
                profile
              </Text>

              <Text className="text-gray-600 mb-4">name</Text>

              <View className="flex-row flex-wrap gap-2">
                <Text>Profile2</Text>
              </View>
            </View>
          </Card>
        </ScrollView>

        <View className="flex-row justify-center gap-8 pb-8 px-4">
          <Button
            title="Pass"
            variant="outline"
            size="lg"
            // onPress={handlePass}
            className="flex-1"
          />
          <Button
            title="Like"
            variant="primary"
            size="lg"
            // onPress={handleLike}
            className="flex-1"
          />
        </View>
      </View>
    </GestureHandlerRootView>
  );
}
