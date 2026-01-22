import CardExam from '@/src/components/screens/exam/card-exam';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

export const examsMock = [
    {
        description: 'Raio-X de Tórax',
        performedBy: 'Clínica Imagem Vida',
        performedAt: '12/01/2026',
        status: 'AVAILABLE',
    },
    {
        description: 'Ultrassonografia Abdominal Total',
        performedBy: 'Clínica Imagem Vida',
        performedAt: '10/01/2026',
        status: 'AVAILABLE',
    },
    {
        description: 'Tomografia Computadorizada de Crânio',
        performedBy: 'Centro de Diagnóstico São Lucas',
        performedAt: '09/01/2026',
        status: 'PENDING',
    },
] as const;

export default function ExamsScreen() {
    return (
        <View className="screen-wrapper gap-4">
            <Text className="title">Meus Exames</Text>
            <FlatList
                data={examsMock}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <CardExam exam={item} />}
            />
        </View>
    );
}
