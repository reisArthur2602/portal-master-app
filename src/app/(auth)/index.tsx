import { SignInForm } from "@/src/components/screens/auth/sign-in-form";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";


export default function AuthScreen() {
  const { push } = useRouter();
  return (
    <View className="flex-1">

      <Text className="text-primaryForeground font-extrabold text-5xl mb-12">
        Acessar sua conta.
      </Text>

      <SignInForm />

    </View>
  );
}
