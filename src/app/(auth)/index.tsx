import { SignInForm } from "@/src/components/screens/auth/sign-in-form";
import { useRouter } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthScreen() {
  const { push } = useRouter();
  return (
    <SafeAreaView className="bg-primary flex-1 p-6 gap-6">
      <Text className="text-primaryForeground font-bold text-3xl">
        Acesse sua conta
      </Text>
      <SignInForm />
    </SafeAreaView>
  );
}
