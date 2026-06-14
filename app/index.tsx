import { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import SocialButton from '../components/SocialButton';
import { styles } from '../styles';

export default function LoginScreen() {
  const [email, setEmail] = useState<string>('');

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image
        source={require('../assets/spotify-logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>Olá de novo</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity style={styles.buttonPrimary}>
        <Text style={styles.buttonPrimaryText}>Continuar</Text>
      </TouchableOpacity>

      <Text style={styles.divider}>ou</Text>

      <SocialButton label="Continuar com um número de telefone" icon={require('../assets/phone-icon.png')} />
      <SocialButton label="Continuar com o Google" icon={require('../assets/google-icon.png')} />

    </ScrollView>
  );
}