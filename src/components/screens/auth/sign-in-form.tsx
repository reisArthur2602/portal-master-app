import { useRouter } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export const SignInForm = () => {
    const { push } = useRouter();
    return (
        <View className="gap-4 w-full">
            <View className="gap-2">
                <Text className="label">CPF</Text>
                <TextInput
                    placeholder="000.000.000-00"
                    keyboardType="number-pad"
                    className="input"
                />
            </View>

            <TouchableOpacity className="btn" onPress={()=>push('/dashboard')}>
                <Text className="btn-text">Acesse sua conta</Text>
            </TouchableOpacity>
        </View>
    );
};
