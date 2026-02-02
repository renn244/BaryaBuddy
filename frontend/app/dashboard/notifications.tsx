import { Hamburger, MoreHorizontal } from 'lucide-react-native'
import { ScrollView, Text, View } from 'react-native'

const Notifications = () => {
    const data = [
        {
            id: '1',
            type: 'Food',
            message: 'You just paid your food bill',
            linkTo: null,
            createdAt: 'Just now',
        },
        {
            id: '2',
            type: 'Reminder',
            message: 'Reminder to pay your rent',
            linkTo: null,
            createdAt: '23 sec ago',
        },
        {
            id: '3',
            type: 'Goal Achieved',
            message: 'You just achieved your goal for new bike',
            linkTo: null,
            createdAt: '2 min ago',
        },
        {
            id: '4',
            type: 'Reminder',
            message: 'You just set a new reminder shopping',
            linkTo: null,
            createdAt: '10 min ago',
        },
        {
            id: '5',
            type: 'Food',
            message: 'You just paid your food bill',
            linkTo: null,
            createdAt: '45 min ago',
        },
        {
            id: '6',
            type: 'Bill',
            message: 'You just got a reminder for your bill pay',
            linkTo: null,
            createdAt: '1 hour ago',
        },
        {
            id: '7',
            type: 'Uber',
            message: 'You just paid your bill',
            linkTo: null,
            createdAt: '2 hours ago',
        },
    ]

    return (
        <View>
            <ScrollView
            style={{ flexGrow: 1, paddingVertical: 30, paddingHorizontal: 24 }}
            contentContainerStyle={{ gap: 8 }}
            showsVerticalScrollIndicator={false}
            >
                {data.map((item) => (
                    <Notification 
                    id={item.id}
                    type={item.type}
                    message={item.message}
                    linkTo={item.linkTo}
                    createdAt={item.createdAt}
                    key={item.id}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

type NotificationProps = {
    id: string;
    type: string;
    message: string;
    linkTo: string | null;
    createdAt: string;
}

const Notification = ({
    id, type, message, linkTo, createdAt
}: NotificationProps) => {
    return (
        <View className='w-full pt-1 pb-3 flex-row items-center gap-3.5 border-b border-neutral-soft-grey-1'>
            <View className='bg-neutral-soft-grey-2 size-10.5 p-2 rounded-xl'>
                {/* Should replace this depending on the type  */}
                {/* Can't do it yet tho */}
                <Hamburger width={26} height={26} />
            </View>

            <View className='flex-1 flex-col gap-0.5'>
                <View className='flex-row justify-between items-start'>
                    <Text className="sub-heading-base text-neutral-dark-2">
                        {type}
                    </Text>
                    
                    <Text className="font-sans text-base leading-4 tracking-wide align-middle text-neutral-grey-1">
                        {createdAt}
                    </Text>
                </View>

                <View className='flex-row justify-between items-center'>
                    <Text className="font-sans w-50 text-base leading-4 tracking-wide align-middle text-neutral-grey-1">
                        {message}
                    </Text>

                    <MoreHorizontal color={'#9BA1A8'} width={24} height={24} />
                </View>
            </View>
        </View>
    )
}

export default Notifications