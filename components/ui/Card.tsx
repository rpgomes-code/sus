import { useThemeColor } from '@/hooks/useThemeColor';
import { View } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({ children, className = '', shadow = true, padding = 'md' }: CardProps) {
  const backgroundColor = useThemeColor({}, 'background');

  const getPaddingClasses = () => {
    switch (padding) {
      case 'none':
        return '';
      case 'sm':
        return 'p-2';
      case 'md':
        return 'p-4';
      case 'lg':
        return 'p-6';
      default:
        return 'p-4';
    }
  };

  return (
    <View
      className={`
        rounded-xl
        border border-gray-200 dark:border-gray-700
        ${shadow ? 'shadow-sm' : ''}
        ${getPaddingClasses()}
        ${className}
      `}
      style={{ backgroundColor }}>
      {children}
    </View>
  );
}
