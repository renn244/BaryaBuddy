import { MoreHorizontal } from 'lucide-react-native'
import { ScrollView, Text, View } from 'react-native'

const Reminders = () => {

    const data = [
        {
            id: '1',
            reminderDate: '26 May 2024',
            type: 'Bill Payment', // this is coming from goal
            payment: '$200',
            due: '3 Jun 2024',
        },
        {
            id: '2',
            reminderDate: '26 May 2024',
            type: 'Car Loan', // this is coming from goal
            payment: '$600',
            due: '11 July 2024',
        },
        {
            id: '3',
            reminderDate: '26 May 2024',
            type: 'Iphone 15 Pro', // this is coming from goal
            payment: '$1000',
            due: '3 Aug 2024',
        },
        {
            id: '4', 
            reminderDate: '26 May 2024',
            type: 'New Bike', // this is coming from goal
            payment: '$2300',
            due: '12 Sep 2024',
        },
    ]

    return (
        <View>
            <ScrollView
            style={{ flexGrow: 1, paddingVertical: 30, paddingHorizontal: 24 }}
            contentContainerStyle={{ gap: 8 }}
            showsVerticalScrollIndicator={false}>
                {data.map((item) => (
                    <Reminder 
                    id={item.id}
                    reminderDate={item.reminderDate}
                    type={item.type}
                    payment={item.payment}
                    due={item.due}
                    key={item.id} />
                ))}
            </ScrollView>
        </View>
    )
}

type ReminderProps = {
    id: string;
    reminderDate: string;
    type: string;
    payment: string;
    due: string;
}

const Reminder = ({
    id, reminderDate, type, payment, due
}: ReminderProps) => {
    return (
        <View className='w-full pt-1 pb-3 border-b border-neutral-soft-grey-1'>
            
            <View className='flex-row justify-between'>
                <View className='flex-row gap-1'>
                    <Text className='font-sans text-lg leading-5 tracking-wide'>
                        Reminder Date: 
                    </Text>
                    <Text className='font-sans text-lg leading-5 tracking-wide'>
                        {reminderDate}
                    </Text>
                </View>

                <MoreHorizontal color={'#9BA1A8'} width={24} height={24} />
            </View>

            <View className='flex-row justify-between'>
                <View className='flex-col items-baseline'>
                    <Text className='sub-heading-base text-neutral-dark-2'>
                        {type}
                    </Text>

                    <Text className='sub-heading-sm text-lg leading-5 text-neutral-grey-1'>
                        {payment}
                    </Text>
                </View>

                <View className='flex-col items-end-safe justify-between'>
                    <Text className='sub-heading-sm align-bottom text-neutral-grey-1'>
                        Due on
                    </Text>

                    <Text className='font-sans text-base leading-4 tracking-wide align-middle text-neutral-grey-1'>
                        {due}
                    </Text>
                </View>
            </View>

        </View>
    )
}

export default Reminders