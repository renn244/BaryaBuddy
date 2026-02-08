import React from 'react';
import { Text, View } from 'react-native';

type ExpenseCardProps = {
    icon: React.ReactNode;
    title: string;
    date: string;
    amount: number;
}

const ExpenseCard = ({
    icon,
    title,
    date,
    amount
}: ExpenseCardProps) => {
    return (
        <View className='flex-row justify-between gap-3.5'>
            <View className='flex-row gap-3.5'>
                <View className='px-[7.5px] py-1.75 rounded-xl bg-neutral-soft-grey-2'>
                    {icon}
                </View>

                <View>
                    <Text className='font-sans-semibold font-semibold text-xl leading-5'>
                        {title}
                    </Text>
                    <Text className='font-sans text-lg text-neutral-grey-1 tracking-wider'>
                        {date}
                    </Text>
                </View>
            </View>
            <View>
                <Text className='font-sans-semibold font-semibold text-xl leading-5'>
                    ${amount}
                </Text>
            </View>
        </View>
    )
}

export default ExpenseCard