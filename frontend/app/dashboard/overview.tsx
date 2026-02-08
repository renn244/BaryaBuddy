import ExpenseCard from '@/components/dashboard/ExpenseCard'
import { Bell, MoreHorizontal, Plus, Salad, Wallet } from 'lucide-react-native'
import { Pressable, ScrollView, Text, View } from 'react-native'

const Overview = () => {

    return (
        <View>
            
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName='flex-row gap-4 px-6 py-8'
            >
                <View className='p-5 bg-white rounded-2xl'>
                    <View className='w-full flex-col gap-8'>
                        <View className='flex-col gap-2'>
                            <Wallet width={24} height={24} />

                            <Text className='font-sans text-base'>
                                Total Salary
                            </Text>
                        </View>

                        <Text className='font-semibold text-[18px]'>
                            $1,289.38
                        </Text>
                    </View>
                </View>

                <View className='p-5 bg-primary rounded-2xl'>
                    <View className='w-full flex-col gap-8'>
                        <View className='flex-col gap-2'>
                            <Wallet color={'white'} width={24} height={24} />

                            <Text className='font-sans text-base text-white'>
                                Total Expense
                            </Text>
                        </View>

                        <Text className='font-semibold text-[18px] text-white'>
                            $298.16
                        </Text>
                    </View>
                </View>

                <View className='p-5 bg-white rounded-2xl'>
                    <View className='w-full flex-col gap-8'>
                        <View className='flex-col gap-2'>
                            <Wallet width={24} height={24} />

                            <Text className='font-sans text-base'>
                                Monthly
                            </Text>
                        </View>

                        <Text className='font-semibold text-[18px]'>
                            $3,389.38
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <View className='flex-col gap-6 px-6 py-8 bg-white rounded-t-3xl'>

                <View className='flex-col gap-5'>
                
                    <View className='flex-row justify-between'>
                        <View className='p-2 rounded-xl bg-primary shadow-md'>
                            <View className='flex-row items-center gap-2'>

                                <View className='p-1 bg-white/25  rounded-lg'>
                                    <Plus color={'#FFFFFF'} width={20} height={20} />
                                </View>

                                <Text className='font-sans-semibold font-semibold text-base text-white leading-4'>
                                    Savings
                                </Text>

                            </View>
                        </View>

                        <View className='p-2 rounded-xl bg-neutral-grey-3/5 shadow-md'>
                            <View className='flex-row items-center gap-2'>

                                <View className='p-1 bg-neutral-grey-3/30 rounded-lg'>
                                    <Bell width={20} height={20} />
                                </View>

                                <Text className='font-sans-semibold font-semibold text-base leading-4'>
                                    Remind
                                </Text>

                            </View>
                        </View>

                        <View className='p-2 rounded-xl bg-neutral-grey-3/5 shadow-md'>
                            <View className='flex-row items-center gap-2'>

                                <View className='p-1 bg-neutral-grey-3/30 rounded-lg'>
                                    <Wallet width={20} height={20} />
                                </View>

                                <Text className='font-sans-semibold font-semibold text-base leading-4'>
                                    Budget
                                </Text>

                            </View>
                        </View>
                    </View>

                    <View className='flex-row justify-center'>
                        <View className='flex-row gap-2 items-center'>
                            <Pressable
                            className={`h-1.25 w-4.5 rounded-2xl bg-primary`}
                            />
                            <Pressable
                            className={`h-1.25 w-4.5 rounded-2xl bg-neutral-soft-grey-2`}
                            />
                            <Pressable
                            className={`h-1.25 w-4.5 rounded-2xl bg-neutral-soft-grey-2`}
                            />
                        </View>
                    </View>

                </View>

                <View className='flex-col gap-8'>

                    <View className='flex-row justify-between items-center'>
                        <Text className='font-sans-semibold font-semibold text-xl leading-5'>
                            Latest Entries
                        </Text>

                        <Pressable className='p-1.5 rounded-xl border border-neutral-grey-3'>
                            <MoreHorizontal width={28} height={28} />
                        </Pressable>
                    </View>

                    <View className='flex-col gap-8'>

                        <ExpenseCard 
                        icon={<Salad width={30} height={30} />}
                        title='Food'
                        date='20 Feb 2024'
                        amount={20}
                        />

                    </View>

                </View>

            </View>

        </View>
    )
}

export default Overview