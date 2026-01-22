import { Href, useRouter } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import React, { ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';

export type CardServiceProps = {
    id: string;
    title: string;
    description: string;
    icon: ReactNode;
    route: Href;
};

export default function CardService(service: CardServiceProps) {
    const { push } = useRouter();
    return (
        <Pressable
            key={service.id}
            className="flex-row items-center justify-between p-4"
            onPress={() => push(service.route)}
        >
            <View className="flex-row items-center gap-4">
                {service.icon}

                <View>
                    <Text className="font-bold text-foreground">{service.title}</Text>
                    <Text className="text-mutedForeground text-sm">{service.description}</Text>
                </View>
            </View>

            <ChevronRight color="#2563EB" size={18} />
        </Pressable>
    );
}
