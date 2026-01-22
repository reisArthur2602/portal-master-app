import { Bell } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface IReminderAvailableExams {
    examsAvailableCount: number;
}

export default function ReminderAvailableExams({ examsAvailableCount }: IReminderAvailableExams) {
    return (
        <TouchableOpacity className="p-6 rounded-2xl bg-primary gap-4">
            <View className="flex-row items-center gap-2">
                <Bell size={16} color={'#F1F5F9'} strokeWidth={3} />
                <Text className="text-secondary font-extrabold text-lg ">Lembretes</Text>
            </View>

            <Text className="text-secondary/80 font-semibold text-lg">
                Você tem exames disponíveis para retirada
            </Text>
            <Text className="text-secondary font-extrabold">
                {examsAvailableCount} novos resultados
            </Text>
        </TouchableOpacity>
    );
}
