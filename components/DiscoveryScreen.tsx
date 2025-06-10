import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

interface Profile {
  id: string;
  name: string;
  age: number;
  bio: string;
  images: string[];
  location: string;
  interests: string[];
  profession: string;
}

const DiscoveryScreen: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfiles();
  }, []);

  const loadProfiles = async () => {
    try {
      // Simulate API call
      setTimeout(() => {
        const mockProfiles: Profile[] = [
          {
            id: '1',
            name: 'Emma Thompson',
            age: 28,
            bio: "Love exploring London's hidden gems, yoga enthusiast, and passionate about sustainable living. Looking for someone who shares my love for adventure and meaningful conversations.",
            images: [
              'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face',
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face',
            ],
            location: 'Kensington, London',
            interests: ['Yoga', 'Travel', 'Photography', 'Cooking'],
            profession: 'Marketing Manager',
          },
          {
            id: '2',
            name: 'James Wilson',
            age: 32,
            bio: "Tech entrepreneur by day, chef by night. Love trying new restaurants and planning weekend getaways. Seeking someone who enjoys life's simple pleasures.",
            images: [
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face',
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face',
            ],
            location: 'Shoreditch, London',
            interests: ['Technology', 'Cooking', 'Travel', 'Music'],
            profession: 'Software Engineer',
          },
          {
            id: '3',
            name: 'Sophie Chen',
            age: 26,
            bio: 'Artist and gallery curator with a passion for contemporary art. I love weekend museum visits and coffee shop conversations about life and creativity.',
            images: [
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face',
              'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop&crop=face',
            ],
            location: 'Camden, London',
            interests: ['Art', 'Museums', 'Coffee', 'Reading'],
            profession: 'Gallery Curator',
          },
        ];
        setProfiles(mockProfiles);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error loading profiles:', error);
      setLoading(false);
    }
  };

  const handleLike = () => {
    const currentProfile = profiles[currentProfileIndex];
    Alert.alert(
      'Match!',
      `You liked ${currentProfile.name}. Keep exploring to find more matches!`,
      [{ text: 'Continue', onPress: nextProfile }]
    );
  };

  const handlePass = () => {
    nextProfile();
  };

  const nextProfile = () => {
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    } else {
      Alert.alert(
        'No More Profiles',
        "You've seen all available profiles. Check back later for new matches!",
        [{ text: 'OK' }]
      );
    }
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50">
        <View className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-4"></View>
        <Text className="text-lg text-gray-600 font-medium">
          Finding your matches...
        </Text>
      </View>
    );
  }

  if (profiles.length === 0 || currentProfileIndex >= profiles.length) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50 px-8">
        <Ionicons name="heart-outline" size={80} color="#e91e63" />
        <Text className="text-2xl font-bold text-gray-800 mt-6 text-center">
          No More Profiles
        </Text>
        <Text className="text-gray-600 text-center mt-2 text-base leading-6">
          You've explored all available matches. Check back soon for new
          profiles!
        </Text>
        <TouchableOpacity
          className="bg-pink-500 px-8 py-3 rounded-full mt-8"
          onPress={() => {
            setCurrentProfileIndex(0);
            loadProfiles();
          }}
        >
          <Text className="text-white font-semibold text-base">Refresh</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentProfile = profiles[currentProfileIndex];

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-6 pt-12 pb-4 shadow-sm">
        <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-bold text-gray-800">Discover</Text>
          <View className="flex-row items-center">
            <Ionicons name="location-outline" size={16} color="#6b7280" />
            <Text className="text-sm text-gray-600 ml-1">London</Text>
          </View>
        </View>
      </View>

      <ScrollView
        className="flex-1 px-4 py-4"
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Card */}
        <View className="bg-white rounded-3xl shadow-lg overflow-hidden mb-6">
          {/* Main Image */}
          <View className="relative">
            <Image
              source={{ uri: currentProfile.images[0] }}
              className="w-full h-96"
              resizeMode="cover"
            />
            <View className="absolute top-4 right-4 bg-black/20 px-3 py-1 rounded-full">
              <Text className="text-white text-sm font-medium">
                {currentProfileIndex + 1} / {profiles.length}
              </Text>
            </View>
          </View>

          {/* Profile Info */}
          <View className="p-6">
            {/* Name and Age */}
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-2xl font-bold text-gray-800">
                {currentProfile.name}, {currentProfile.age}
              </Text>
              <View className="bg-pink-50 px-3 py-1 rounded-full">
                <Text className="text-pink-600 text-sm font-medium">
                  {currentProfile.profession}
                </Text>
              </View>
            </View>

            {/* Location */}
            <View className="flex-row items-center mb-4">
              <Ionicons name="location-outline" size={16} color="#6b7280" />
              <Text className="text-gray-600 ml-2">
                {currentProfile.location}
              </Text>
            </View>

            {/* Bio */}
            <Text className="text-gray-700 text-base leading-6 mb-6">
              {currentProfile.bio}
            </Text>

            {/* Interests */}
            <View className="mb-4">
              <Text className="text-gray-800 font-semibold mb-3">
                Interests
              </Text>
              <View className="flex-row flex-wrap">
                {currentProfile.interests.map((interest, index) => (
                  <View
                    key={index}
                    className="bg-gray-100 px-3 py-2 rounded-full mr-2 mb-2"
                  >
                    <Text className="text-gray-700 text-sm">{interest}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Additional Images */}
            {currentProfile.images.length > 1 && (
              <View className="mt-4">
                <Text className="text-gray-800 font-semibold mb-3">
                  More Photos
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {currentProfile.images.slice(1).map((image, index) => (
                    <Image
                      key={index}
                      source={{ uri: image }}
                      className="w-24 h-32 rounded-xl mr-3"
                      resizeMode="cover"
                    />
                  ))}
                </ScrollView>
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View className="bg-white px-6 py-4 flex-row justify-center space-x-8 shadow-lg">
        <TouchableOpacity
          className="bg-gray-100 w-16 h-16 rounded-full justify-center items-center shadow-md"
          onPress={handlePass}
          activeOpacity={0.7}
        >
          <Ionicons name="close" size={28} color="#6b7280" />
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-pink-500 w-20 h-20 rounded-full justify-center items-center shadow-lg"
          onPress={handleLike}
          activeOpacity={0.7}
        >
          <Ionicons name="heart" size={32} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-blue-100 w-16 h-16 rounded-full justify-center items-center shadow-md"
          onPress={() => Alert.alert('Super Like', 'Feature coming soon!')}
          activeOpacity={0.7}
        >
          <Ionicons name="star" size={28} color="#3b82f6" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DiscoveryScreen;
