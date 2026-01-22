import { Tabs } from 'expo-router';
import { Calendar1Icon, Heart, Home, User } from 'lucide-react-native';

export default function DashboardLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#2563EB',
                tabBarInactiveTintColor: '#E2E8F0',
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
                tabBarStyle: {
                    backgroundColor: '#FAFAFB',
                    height: 70,
                    paddingBottom: 10,
                    paddingTop: 10,
                    borderTopWidth: 0,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Início',
                    tabBarIcon: ({ color }) => <Home color={color} size={24} />,
                }}
            />
            <Tabs.Screen
                name="appointment/index"
                options={{
                    title: 'Agendar',
                    tabBarIcon: ({ color }) => <Calendar1Icon color={color} size={24} />,
                }}
            />
            <Tabs.Screen
                name="exams/index"
                options={{
                    title: 'Exames',
                    tabBarIcon: ({ color }) => <Heart color={color} size={24} />,
                }}
            />

            <Tabs.Screen
                name="profile/index"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => <User color={color} size={24} />,
                }}
            />
        </Tabs>
    );
}
