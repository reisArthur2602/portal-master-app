import { ActivateAccountForm } from '@/src/components/screens/auth/activate-account-form';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function ActivateAccountScreen() {
    const { push } = useRouter();
  return (
    <View >


      <Text className="text-primaryForeground font-extrabold text-5xl mb-12">
         Ative sua conta.
      </Text>
<ActivateAccountForm/>





      </View>
  )
}
