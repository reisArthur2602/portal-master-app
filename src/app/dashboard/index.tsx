import CardService, { CardServiceProps } from '@/src/components/screens/dashboard/card-service';
import ReminderAvailableExams from '@/src/components/screens/dashboard/reminder-available-exams';
import { Calendar, Heart, User } from 'lucide-react-native';

import { Text, View } from 'react-native';

const services: Array<CardServiceProps> = [
    {
        id: 'appointment',
        title: 'Agendar Consulta',
        description: 'Marque sua próxima consulta',
        icon: <Calendar color="#2563EB" size={28} />,
        route: '/dashboard/appointment',
    },
    {
        id: 'exams',
        title: 'Meus Exames',
        description: 'Acesse todos os seus exames',
        icon: <Heart color="#2563EB" size={28} />,
        route: '/dashboard/exams',
    },
    {
        id: 'profile',
        title: 'Meu Perfil',
        description: 'Visualize todos os seus dados',
        icon: <User color="#2563EB" size={28} />,
        route: '/dashboard/profile',
    },
];

export default function DashboardScreen() {
    return (
        <View className="screen-wrapper gap-8">
            <View>
                <Text className="title">{'Olá👋 \nArthur de Souza Reis'}</Text>
                <Text className="subtitle">Como podemos ajudar você hoje?</Text>
            </View>

            <ReminderAvailableExams examsAvailableCount={4} />
            <View className="gap-2">
                <Text className="title">Serviços</Text>
                <View className="gap-3">
                    {services.map((service) => (
                        <CardService key={service.id} {...service} />
                    ))}
                </View>
            </View>
        </View>
    );
}
