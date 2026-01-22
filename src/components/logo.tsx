import { HeartPulseIcon } from 'lucide-react-native';
import { Text, View } from 'react-native';

export const Logo = () => {
    return (
        <View className="flex-row items-center w-fit gap-0.5">
            <Text className="title">Portal</Text>
            <HeartPulseIcon size={22} color="#2563EB" />
            <Text className="title">Master</Text>
        </View>
    );
};
