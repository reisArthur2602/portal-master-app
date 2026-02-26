import { useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export const SignInForm = () => {
  const { push } = useRouter();
  return (
    <View className="gap-4 w-full">
      <View className="gap-2">
        <Text className="label">CPF</Text>
        <TextInput placeholder="000.000.000-00" keyboardType="number-pad" />
      </View>

      <TouchableOpacity
        onPress={() => push("/dashboard")}
        className="bg-primaryForeground rounded-full p-4 items-center justify-center "
      >
        <Text className="text-primary font-semibold ">Acessar minha conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => push("/(auth)")}
        className="border border-primaryForeground rounded-full p-4 items-center justify-center"
      >
        <Text className="text-primaryForeground font-semibold ">
          Ainda não possui uma conta?
        </Text>
      </TouchableOpacity>
    </View>
  );
};
