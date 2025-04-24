import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMainNavigation } from '@/hooks';
import { styles } from './styles';
import { MAIN_STACK_SCREEN_NAMES } from '@/constants';
export const SignUpScreen = () => {
  const navigation = useMainNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignUp = () => {
    if (phoneNumber.length >= 8) {
      navigation.navigate(MAIN_STACK_SCREEN_NAMES.MAP);
    } else {
      Alert.alert('Error', 'Por favor ingresa un número de teléfono válido');
    }
  };

  const handleSocialSignUp = (provider: string) => {
    // En un caso real, aquí iría la lógica de autenticación social
    navigation.navigate(MAIN_STACK_SCREEN_NAMES.MAP);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign up</Text>

      <View style={styles.inputContainer}>
        <View style={styles.phoneInput}>
          <Text style={styles.prefix}>+54</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            maxLength={10}
          />
        </View>
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialSignUp('apple')}>
          <AntDesign name="apple1" size={24} color="black" />
          <Text style={styles.socialText}>Sign up with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialSignUp('google')}>
          <AntDesign name="google" size={24} color="black" />
          <Text style={styles.socialText}>Sign up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleSocialSignUp('facebook')}
        >
          <AntDesign name="facebook-square" size={24} color="black" />
          <Text style={styles.socialText}>Sign up with Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate(MAIN_STACK_SCREEN_NAMES.MAP)}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
