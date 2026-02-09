import GoalCard from '@/components/dashboard/GoalCard';
import PingCircle from '@/components/dashboard/PingCircle';
import { Button } from '@/components/ui/Button';
import { router } from 'expo-router';
import { CalendarDays, Car, MoreHorizontal, Smartphone } from 'lucide-react-native';
import { Pressable, ScrollView, Text, View } from 'react-native';

const Savings = () => {

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        >

            <View className='py-8 px-6 gap-6'>
                <View className='flex-col gap-4 items-center'>
                    <Text className='font-sans-semibold font-semibold text-xl leading-5 text-center'>
                        Current Savings
                    </Text>

                    <PingCircle 
                    amount={800}
                    />
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

                    <Pressable 
                    onPress={() => router.push('/dashboard/savings/your_goals')}
                    className='p-1.5 rounded-xl border border-neutral-grey-3'>
                        <MoreHorizontal width={28} height={28} />
                    </Pressable>
                </View>

                <View className='flex-col gap-6'>
                    
                    <GoalCard 
                    icon={<Car width={30} height={30} />}
                    title="New Bike"
                    progress={60}
                    currentAmount={300}
                    targetAmount={600}
                    />

                    <GoalCard 
                    icon={<Smartphone width={30} height={30} />}
                    title="Iphone 17 Pro"
                    progress={80}
                    currentAmount={600}
                    targetAmount={1200}
                    />

                </View>
            </View>

        </ScrollView>
    )
}

export default Savings