import { Button } from '@/components/ui/Button';
import { CalendarDays, Car, MoreHorizontal, Smartphone } from 'lucide-react-native';
import { useEffect } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const Savings = () => {

    const scale = useSharedValue(1);
    const opacity = useSharedValue(1);

    // Ping effect loop
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
        <ScrollView
        showsVerticalScrollIndicator={false}
        >

            <View className='py-8 px-6 gap-6'>
                <View className='flex-col gap-4 items-center'>
                    <Text className='font-sans-semibold font-semibold text-xl leading-5 text-center'>
                        Current Savings
                    </Text>

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
                                $800
                            </Text>
                        </View>
                    </View>
                </View>
                
                <View className='p-4 flex-col gap-4 rounded-[20px] bg-white'>
                    <View className='flex-row gap-2 items-center'>
                        <CalendarDays width={24} height={24} />

                        <Text className='font-sans-semibold font-semibold text-xl'>
                            January 2026
                        </Text>
                    </View>

                    <View>
                        <Text className='font-sans text-xl leading-6 text-neutral-grey-1'>
                            Goal for this Month
                        </Text>
                    </View>

                    <View className='flex-row items-center justify-between bg-neutral-soft-grey-2 rounded-[10px]'>
                        <Button className='w-33'>
                            <Text className='font-sans-semibold font-semibold text-white text-lg leading-6 text-center'>
                                $200
                            </Text>
                        </Button>

                        <View className='pr-4 py-2'>
                            <Text className='font-sans-semibold font-semibold text-lg leading-6 text-center'>
                                $500
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View className='flex-col gap-6 px-6 py-8 bg-white rounded-t-3xl'>
                <View className='flex-row items-center justify-between'>
                    <Text className='font-sans-semibold font-semibold text-xl leading-5'>
                        Your Goals
                    </Text>

                    <Pressable className='p-1.5 rounded-xl border border-neutral-grey-3'>
                        <MoreHorizontal width={28} height={28} />
                    </Pressable>
                </View>

                <View className='flex-col gap-8'>
                    
                    <View className='flex-row items-center justify-between gap-3.5'>
                        <View className='p-1.5 rounded-xl bg-neutral-soft-grey-2'>
                            <Car width={30} height={30} />
                        </View>
                        <View className='flex-col gap-1.5 items-start w-full max-w-63'>
                            <Text className='font-sans-semibold font-semibold text-xl leading-5'>
                                New Bike
                            </Text>

                            <View className='w-full rounded-full h-0.75 bg-neutral-soft-grey-1 overflow-hidden'>
                                <View
                                className='h-full bg-primary rounded-full'
                                style={{
                                    // example from pokedex repo
                                    //  width: `${Math.min(stat.base_stat, getStatsMax(stat.stat.name as any)) / (getStatsMax(stat.stat.name as any) / 100)}%`
                                    width: `60%`
                                }}
                                />
                            </View>

                            <View className='flex-row w-full items-center justify-between'>
                                <Text className='font-sans text-lg leading-5 text-neutral-grey-1'>
                                    $300
                                </Text>

                                <Text className='font-sans text-lg leading-5 text-neutral-grey-1'>
                                    $600
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View className='flex-row items-center justify-between gap-3.5'>
                        <View className='p-1.5 rounded-xl bg-neutral-soft-grey-2'>
                            <Smartphone width={30} height={30} />
                        </View>
                        <View className='flex-col gap-1.5 items-start w-full max-w-63'>
                            <Text className='font-sans-semibold font-semibold text-xl leading-5'>
                                Iphone 17 Pro
                            </Text>

                            <View className='w-full rounded-full h-0.75 bg-neutral-soft-grey-1 overflow-hidden'>
                                <View
                                className='h-full bg-primary rounded-full'
                                style={{
                                    // example from pokedex repo
                                    //  width: `${Math.min(stat.base_stat, getStatsMax(stat.stat.name as any)) / (getStatsMax(stat.stat.name as any) / 100)}%`
                                    width: `80%`
                                }}
                                />
                            </View>

                            <View className='flex-row w-full items-center justify-between'>
                                <Text className='font-sans text-lg leading-5 text-neutral-grey-1'>
                                    $600
                                </Text>

                                <Text className='font-sans text-lg leading-5 text-neutral-grey-1'>
                                    $1200
                                </Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>

        </ScrollView>
    )
}

export default Savings