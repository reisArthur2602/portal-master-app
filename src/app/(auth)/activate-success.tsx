import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function ActivateSuccessScreen() {
const{ replace } = useRouter();

  return (

      <View className="gap-8 mt-auto mb-16">
        <Text className="text-primaryForeground font-extrabold text-5xl">
          Sua conta foi ativada!
        </Text>
<Text className="text-primaryForeground/80 ">
          Agora você pode acessar sua conta e aproveitar todos os recursos disponíveis.
        </Text>


        <TouchableOpacity
          onPress={() => replace("/(auth)")}
          className="bg-primaryForeground rounded-md p-4 items-center justify-center "
        >
          <Text className="text-primary font-semibold text-xl">
            Acessar minha conta
          </Text>
        </TouchableOpacity>
      </View>

  )
}
