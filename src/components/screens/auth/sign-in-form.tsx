import { useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export const SignInForm = () => {
  const { push } = useRouter();
  return (
    <View className="gap-12 w-full">

<View className="gap-6">

      <View className="gap-1">
        <Text className="text-primaryForeground font-semibold">CPF</Text>
        <TextInput placeholder="000.000.000-00" keyboardType="number-pad"  className="input"/>
      </View>

      <View className="gap-1">
        <Text className="text-primaryForeground font-semibold">Senha</Text>
        <TextInput placeholder="******" keyboardType="number-pad"  className="input"/>
      </View>
</View>

    <View className="gap-4">
        <TouchableOpacity
            onPress={() => push("/dashboard")}
            className="bg-primaryForeground rounded-xl p-4 items-center justify-center "
        >
            <Text className="text-primary font-semibold ">Acessar minha conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => push("/(auth)/activate-account")}
            className="border border-primaryForeground rounded-xl p-4 items-center justify-center"
        >
            <Text className="text-primaryForeground font-semibold ">
            Ainda não possui uma conta?
            </Text>
        </TouchableOpacity>
    </View>
    </View>
  );
};
