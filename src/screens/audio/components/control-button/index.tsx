import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export const ControlButton: React.FC<IControlButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Text style={styles.controlButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
