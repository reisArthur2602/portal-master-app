import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';

export default function RootLayout() {
    return (
        <>
            <StatusBar />
            <SafeAreaView className="flex-1 bg-background">
                <Stack screenOptions={{ headerShown: false }} />
            </SafeAreaView>
        </>
    );
}
