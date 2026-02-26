import { useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export const ActivateAccountForm = () => {
  const { push } = useRouter();
  return (
    <View className="gap-12 w-full">

<View className="gap-6">

      <View className="gap-1">
        <Text className="text-primaryForeground font-semibold">CPF</Text>
        <TextInput placeholder="000.000.000-00" keyboardType="number-pad"  className="input"/>
      </View>

      <View className="gap-1">
        <Text className="text-primaryForeground font-semibold">Código de ativação</Text>
        <TextInput placeholder="Ex: 123456" keyboardType="numeric"  className="input" maxLength={6}/>
      </View>
</View>



        <TouchableOpacity
            onPress={() => push("/(auth)/create-password")}
            className="border  border-primaryForeground rounded-xl p-4 items-center justify-center bg-primaryForeground"
        >
            <Text className="text-primary font-semibold ">
            Continuar
            </Text>
        </TouchableOpacity>

    </View>
  );
};
