import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type Exam = {
    description: string;
    performedBy: string;
    performedAt: string;
    status: 'AVAILABLE' | 'PENDING';
};

interface ICardExam {
    exam: Exam;
}

export default function CardExam({ exam }: ICardExam) {
    const isAvailable = exam.status === 'AVAILABLE';

    // cores do badge
    const badgeBg = isAvailable ? 'bg-primary' : 'bg-yellow-500';
    const badgeText = 'text-secondary';

    return (
        <TouchableOpacity className="py-4 rounded-lg border-border">
            <View className="flex-row justify-between items-center">
                {/* Info */}
                <View className='max-w-[70%]'>
                    <Text numberOfLines={1} className="font-bold text-foreground ">
                        {exam.description}
                    </Text>
                    <Text className="text-mutedForeground text-sm">
                        {exam.performedBy} - {exam.performedAt}
                    </Text>
                </View>

                <View className={`rounded-full px-2 py-1 justify-center items-center ${badgeBg}`}>
                    <Text className={`font-bold text-xs ${badgeText}`}>
                        {isAvailable ? 'Disponível' : 'Pendente'}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
