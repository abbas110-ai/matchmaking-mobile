import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  // const handleLogin = async () => {
  //   if (!email.trim()) {
  //     Alert.alert('Error', 'Please enter your email');
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     // Implement your login logic here
  //     // For anonymous auth, you might just navigate directly
  //     await storeAuth('anonymous-token');
  //     router.replace('/(tabs)');
  //   } catch (error) {
  //     Alert.alert('Error', 'Login failed. Please try again.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <View className="flex-1 bg-gray-50 justify-center px-6">
      <Card variant="elevated" className="mb-8">
        <Text className="text-3xl font-bold text-center mb-8 text-gray-900">
          Welcome Back
        </Text>

        <View className="mb-6">
          <Text className="text-gray-700 mb-2 font-medium">Email</Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-3 text-gray-900"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <Button
          title="Continue"
          // onPress={handleLogin}
          loading={loading}
          className="mb-4"
        />

        <Text className="text-center text-gray-500 text-sm">
          By continuing, you agree to our Terms of Service
        </Text>
      </Card>
    </View>
  );
}
