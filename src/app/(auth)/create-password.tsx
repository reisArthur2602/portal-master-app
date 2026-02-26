import { CreatePasswordForm } from '@/src/components/screens/auth/create-password-form';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function CreatePasswordScreen() {
    const {push} = useRouter();
  return (
   <View >
       <Text className="text-primaryForeground font-extrabold text-5xl mb-12">
               Crie sua senha.
            </Text>





  <CreatePasswordForm/>



      </View>
  )
}
