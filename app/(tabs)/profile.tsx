import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ProfileScreen() {
  const [profile] = useState({
    name: 'Your Name',
    age: 25,
    bio: 'Edit your bio to tell others about yourself...',
    location: 'London, UK',
    profession: 'Your Profession',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face',
    ],
    interests: ['Add your interests'],
  });

  const handleEditProfile = () => {
    Alert.alert('Edit Profile', 'Profile editing feature coming soon!');
  };

  const handleSettings = () => {
    Alert.alert('Settings', 'Settings feature coming soon!');
  };

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View className="bg-white px-6 pt-12 pb-4 shadow-sm">
        <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-bold text-gray-800">Profile</Text>
          <TouchableOpacity onPress={handleSettings}>
            <Ionicons name="settings-outline" size={24} color="#6b7280" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        className="flex-1 px-4 py-4"
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Card */}
        <View className="bg-white rounded-3xl shadow-lg overflow-hidden mb-6">
          {/* Profile Image */}
          <View className="relative">
            <Image
              source={{ uri: profile.images[0] }}
              className="w-full h-80"
              resizeMode="cover"
            />
            <TouchableOpacity
              className="absolute bottom-4 right-4 bg-white w-12 h-12 rounded-full justify-center items-center shadow-lg"
              onPress={handleEditProfile}
            >
              <Ionicons name="camera-outline" size={20} color="#6b7280" />
            </TouchableOpacity>
          </View>

          {/* Profile Info */}
          <View className="p-6">
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-2xl font-bold text-gray-800">
                {profile.name}, {profile.age}
              </Text>
              <TouchableOpacity
                className="bg-pink-500 px-4 py-2 rounded-full"
                onPress={handleEditProfile}
              >
                <Text className="text-white font-semibold">Edit</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row items-center mb-4">
              <Ionicons name="location-outline" size={16} color="#6b7280" />
              <Text className="text-gray-600 ml-2">{profile.location}</Text>
            </View>

            <View className="bg-pink-50 px-3 py-2 rounded-full self-start mb-4">
              <Text className="text-pink-600 font-medium">
                {profile.profession}
              </Text>
            </View>

            <Text className="text-gray-700 text-base leading-6 mb-6">
              {profile.bio}
            </Text>

            <View>
              <Text className="text-gray-800 font-semibold mb-3">
                Interests
              </Text>
              <View className="flex-row flex-wrap">
                {profile.interests.map((interest, index) => (
                  <View
                    key={index}
                    className="bg-gray-100 px-3 py-2 rounded-full mr-2 mb-2"
                  >
                    <Text className="text-gray-700 text-sm">{interest}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        {/* Profile Stats */}
        <View className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <Text className="text-lg font-semibold text-gray-800 mb-4">
            Profile Stats
          </Text>
          <View className="flex-row justify-between">
            <View className="items-center flex-1">
              <Text className="text-2xl font-bold text-pink-500">12</Text>
              <Text className="text-gray-600 text-sm">Likes Sent</Text>
            </View>
            <View className="items-center flex-1">
              <Text className="text-2xl font-bold text-pink-500">8</Text>
              <Text className="text-gray-600 text-sm">Matches</Text>
            </View>
            <View className="items-center flex-1">
              <Text className="text-2xl font-bold text-pink-500">95%</Text>
              <Text className="text-gray-600 text-sm">Profile Complete</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="bg-white rounded-2xl p-6 shadow-sm">
          <Text className="text-lg font-semibold text-gray-800 mb-4">
            Quick Actions
          </Text>

          <TouchableOpacity
            className="flex-row items-center py-3"
            onPress={() =>
              Alert.alert('Privacy', 'Privacy settings coming soon!')
            }
          >
            <Ionicons name="shield-outline" size={20} color="#6b7280" />
            <Text className="text-gray-700 ml-3 flex-1">Privacy Settings</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={16}
              color="#9ca3af"
            />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center py-3"
            onPress={() =>
              Alert.alert('Notifications', 'Notification settings coming soon!')
            }
          >
            <Ionicons name="notifications-outline" size={20} color="#6b7280" />
            <Text className="text-gray-700 ml-3 flex-1">Notifications</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={16}
              color="#9ca3af"
            />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center py-3"
            onPress={() => Alert.alert('Help', 'Help & Support coming soon!')}
          >
            <Ionicons name="help-circle-outline" size={20} color="#6b7280" />
            <Text className="text-gray-700 ml-3 flex-1">Help & Support</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={16}
              color="#9ca3af"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
