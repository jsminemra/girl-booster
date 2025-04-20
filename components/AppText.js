import React from 'react';
import { Text } from 'react-native';

export default function AppText({ children, style, ...props }) {
  return (
    <Text style={[{ fontFamily: 'Inter_400Regular' }, style]} {...props}>
      {children}
    </Text>
  );
}
