import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

type PingCircleProps = {
    amount: number;
    description?: string;
}

const PingCircle = ({ amount, description }: PingCircleProps) => {
    const scale = useSharedValue(1);
    const opacity = useSharedValue(1);

    useEffect(() => {
        scale.value = withRepeat(
            withTiming(1.2, { duration: 1000, easing: Easing.out(Easing.ease) }),
            -1,
            false
        );
        opacity.value = withRepeat(
            withTiming(0, { duration: 1000, easing: Easing.out(Easing.ease) }),
            -1,
            false
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
        opacity: opacity.value,
    }));

    return (
        <View className="flex-col items-center gap-4">
            <View className='p-5 relative'>
                <Animated.View 
                className='size-40 absolute opacity-30 bg-neutral-soft-grey-1 rounded-full' 
                style={animatedStyle}
                />
                <Animated.View 
                className='size-35 absolute opacity-70 bg-neutral-soft-grey-1 rounded-full top-2.5 left-2.5'
                style={animatedStyle}
                />
                <View className='flex-row items-center justify-center size-30 rounded-full bg-primary'>
                    <Text className='font-sans-medium font-medium text-2xl font text-white'>
                        ${amount}
                    </Text>
                </View>
            </View>

            {description && (
                <Text className="sub-heading-base text-[14px]">
                    {description}
                </Text>
            )}
        </View>
    )
}

export default PingCircle