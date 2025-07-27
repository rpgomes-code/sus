import { Text, View } from 'react-native';

interface BadgeProps {
  text: string;
  variant?: 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({ text, variant = 'info', size = 'md', className = '' }: BadgeProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'error':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'info':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSizeClasses = () => {
    return size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm';
  };

  return (
    <View
      className={`
      inline-flex
      rounded-full
      border
      ${getVariantClasses()}
      ${getSizeClasses()}
      ${className}
    `}>
      <Text className="font-poppins-medium text-center">{text}</Text>
    </View>
  );
}
