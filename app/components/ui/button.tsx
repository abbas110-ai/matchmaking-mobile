import { cn } from '@/lib/utils';
import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  className?: string;
}

export function Button({
  title,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  className,
  ...props
}: ButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-red-500 active:bg-red-600';
      case 'secondary':
        return 'bg-gray-100 active:bg-gray-200';
      case 'outline':
        return 'border border-red-500 bg-transparent active:bg-red-50';
      default:
        return 'bg-red-500 active:bg-red-600';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2 rounded-md';
      case 'md':
        return 'px-4 py-3 rounded-lg';
      case 'lg':
        return 'px-6 py-4 rounded-xl';
      default:
        return 'px-4 py-3 rounded-lg';
    }
  };

  const getTextStyles = () => {
    const baseStyles = 'text-center font-semibold';
    const colorStyles =
      variant === 'outline' || variant === 'secondary'
        ? 'text-red-500'
        : 'text-white';
    return `${baseStyles} ${colorStyles}`;
  };

  return (
    <TouchableOpacity
      className={cn(
        getVariantStyles(),
        getSizeStyles(),
        disabled || loading ? 'opacity-50' : '',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? 'white' : '#ef4444'}
        />
      ) : (
        <Text className={getTextStyles()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
