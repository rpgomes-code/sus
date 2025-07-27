import { useThemeColor } from '@/hooks/useThemeColor';
import { Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  className?: string;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  className = '',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  // Base classes for different text types
  const getTypeClasses = () => {
    switch (type) {
      case 'title':
        return 'text-4xl font-poppins-bold leading-8';
      case 'subtitle':
        return 'text-xl font-poppins-bold';
      case 'defaultSemiBold':
        return 'text-base font-poppins-semibold leading-6';
      case 'link':
        return 'text-base font-poppins leading-7 text-[#0a7ea4]';
      default:
        return 'text-base font-poppins leading-6';
    }
  };

  return (
    <Text
      className={`${getTypeClasses()} ${className}`}
      style={[{ color: type === 'link' ? undefined : color }, style]}
      {...rest}
    />
  );
}
