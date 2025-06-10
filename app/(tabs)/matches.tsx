import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Match {
  id: string;
  name: string;
  age: number;
  image: string;
  lastMessage: string;
  timestamp: string;
  isOnline: boolean;
}

export default function MatchesScreen() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMatches();
  }, []);

  const loadMatches = () => {
    // Simulate API call
    setTimeout(() => {
      const mockMatches: Match[] = [
        {
          id: '1',
          name: 'Emma Thompson',
          age: 28,
          image:
            'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
          lastMessage: 'Hey! Thanks for the match 😊',
          timestamp: '2m ago',
          isOnline: true,
        },
        {
          id: '2',
          name: 'Sophie Chen',
          age: 26,
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
          lastMessage: 'Would love to grab coffee sometime!',
          timestamp: '1h ago',
          isOnline: false,
        },
        {
          id: '3',
          name: 'James Wilson',
          age: 32,
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
          lastMessage:
            "Great profile! What's your favorite restaurant in London?",
          timestamp: '1d ago',
          isOnline: true,
        },
      ];
      setMatches(mockMatches);
      setLoading(false);
    }, 800);
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50">
        <View className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-4"></View>
        <Text className="text-lg text-gray-600 font-medium">
          Loading matches...
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View className="bg-white px-6 pt-12 pb-4 shadow-sm">
        <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-bold text-gray-800">Matches</Text>
          <Text className="text-pink-500 font-semibold">
            {matches.length} matches
          </Text>
        </View>
      </View>

      {matches.length === 0 ? (
        <View className="flex-1 justify-center items-center px-8">
          <Ionicons name="chatbubble-outline" size={80} color="#e91e63" />
          <Text className="text-2xl font-bold text-gray-800 mt-6 text-center">
            No Matches Yet
          </Text>
          <Text className="text-gray-600 text-center mt-2 text-base leading-6">
            Start liking profiles to see your matches here!
          </Text>
        </View>
      ) : (
        <ScrollView
          className="flex-1 px-4 py-4"
          showsVerticalScrollIndicator={false}
        >
          {matches.map((match) => (
            <TouchableOpacity
              key={match.id}
              className="bg-white rounded-2xl p-4 mb-3 shadow-sm flex-row items-center"
              activeOpacity={0.7}
            >
              <View className="relative">
                <Image
                  source={{ uri: match.image }}
                  className="w-16 h-16 rounded-full"
                  resizeMode="cover"
                />
                {match.isOnline && (
                  <View className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></View>
                )}
              </View>

              <View className="flex-1 ml-4">
                <View className="flex-row items-center justify-between mb-1">
                  <Text className="text-lg font-semibold text-gray-800">
                    {match.name}
                  </Text>
                  <Text className="text-sm text-gray-500">
                    {match.timestamp}
                  </Text>
                </View>
                <Text className="text-gray-600" numberOfLines={1}>
                  {match.lastMessage}
                </Text>
              </View>

              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="#9ca3af"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
