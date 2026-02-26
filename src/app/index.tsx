import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../assets/logo-alt.svg";

export default function HomeScreen() {
  const { push } = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-primary px-6 py-12">
      <Logo width={180} height={180} />

      <View className="gap-8 mt-auto mb-16">
        <Text className="text-primaryForeground font-bold text-5xl">
          Seu cuidado começa aqui.
        </Text>

        <TouchableOpacity
          onPress={() => push("/(auth)")}
          className="bg-primaryForeground rounded-full p-4 items-center justify-center "
        >
          <Text className="text-primary font-semibold text-xl">
            Acessar minha conta
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
