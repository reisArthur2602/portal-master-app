import { useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export const CreatePasswordForm = () => {
  const { push } = useRouter();
  return (
    <View className="gap-12 w-full">



<View className="gap-6">

      <View className="gap-1">
        <Text className="text-primaryForeground font-semibold">Senha</Text>
        <TextInput placeholder="Digite sua senha"   className="input" />
      </View>
<View className="gap-1">
        <Text className="text-primaryForeground font-semibold">Confirmar senha</Text>
        <TextInput placeholder="Confirme sua senha"  className="input" />
      </View>
</View>


        <TouchableOpacity
            onPress={() => push("/(auth)/activate-success")}
            className="bg-primaryForeground rounded-xl p-4 items-center justify-center "
        >
            <Text className="text-primary font-semibold ">Finalizar Ativação</Text>
        </TouchableOpacity>

    </View>
  );
};
