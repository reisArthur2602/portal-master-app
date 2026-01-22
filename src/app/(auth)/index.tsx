import { SignInForm } from '@/src/components/screens/auth/sign-in-form';
import { View } from 'react-native';
import { Logo } from '../../components/logo';

export default function IndexScreen() {
    return (
        <View className="screen-wrapper items-center gap-8 justify-center">
            <Logo />
            <SignInForm />
        </View>
    );
}
