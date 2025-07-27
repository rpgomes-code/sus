import { useThemeColor } from '@/hooks/useThemeColor';
import { TextInput, View } from 'react-native';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  className?: string;
  error?: boolean;
  disabled?: boolean;
}

export function Input({
  placeholder,
  value,
  onChangeText,
  className = '',
  error = false,
  disabled = false,
}: InputProps) {
  const textColor = useThemeColor({}, 'text');
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <View className={`${className}`}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        editable={!disabled}
        className={`
          font-poppins rounded-lg
          border-2
          px-4
          py-3
          text-base
          ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
          ${disabled ? 'opacity-50' : ''}
        `}
        style={{
          color: textColor,
          backgroundColor,
        }}
        placeholderTextColor={useThemeColor({}, 'icon')}
      />
    </View>
  );
}
