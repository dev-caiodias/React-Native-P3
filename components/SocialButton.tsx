import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './SocialButton.styles';

type Props = {
    label: string;
    icon: any;
};

export default function SocialButton({ label, icon }: Props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}