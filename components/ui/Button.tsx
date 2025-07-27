import { Text, TouchableOpacity } from 'react-native';

// Example Button Component with NativeWind
interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
}: ButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-500 active:bg-blue-600';
      case 'secondary':
        return 'bg-gray-500 active:bg-gray-600';
      case 'outline':
        return 'border-2 border-blue-500 bg-transparent active:bg-blue-50';
      default:
        return 'bg-blue-500 active:bg-blue-600';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5';
      case 'md':
        return 'px-4 py-2';
      case 'lg':
        return 'px-6 py-3';
      default:
        return 'px-4 py-2';
    }
  };

  const getTextClasses = () => {
    const baseClasses = 'font-poppins-semibold text-center';
    const colorClasses = variant === 'outline' ? 'text-blue-500' : 'text-white';
    const sizeClasses = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base';
    return `${baseClasses} ${colorClasses} ${sizeClasses}`;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`
        rounded-lg
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${disabled ? 'opacity-50' : ''}
        ${className}
      `}
      activeOpacity={0.8}>
      <Text className={getTextClasses()}>{title}</Text>
    </TouchableOpacity>
  );
}
