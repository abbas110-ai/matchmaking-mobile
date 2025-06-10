import { cn } from '@/lib/utils';
import React from 'react';
import { View, ViewProps } from 'react-native';

interface CardProps extends ViewProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  className?: string;
}

export function Card({
  children,
  variant = 'default',
  className,
  ...props
}: CardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'elevated':
        return 'bg-white rounded-xl shadow-lg shadow-black/10';
      case 'outlined':
        return 'bg-white rounded-xl border border-gray-200';
      default:
        return 'bg-white rounded-xl';
    }
  };

  return (
    <View className={cn(getVariantStyles(), 'p-4', className)} {...props}>
      {children}
    </View>
  );
}
