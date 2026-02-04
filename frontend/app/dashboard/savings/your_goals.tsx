import GoalCard from '@/components/dashboard/GoalCard'
import { Bike, Car, Computer, House, Smartphone } from 'lucide-react-native'
import { ScrollView, Text, View } from 'react-native'

const YouGoal = () => {

    const data = [
        {
            icon: <Car width={30} height={30} />,
            title: "Car",
            progress: 75,
            currentAmount: 900,
            targetAmount: 2500,
        },
        {
            icon: <Smartphone width={30} height={30} />,
            title: "Iphone 17 Pro",
            progress: 50,
            currentAmount: 100,
            targetAmount: 800,
        },
        {
            icon: <Computer width={30} height={30} />,
            title: "Computer",
            progress: 25,
            currentAmount: 500,
            targetAmount: 1200,
        },
        {
            icon: <Bike width={30} height={30} />,
            title: "New Bike",
            progress: 90,
            currentAmount: 180,
            targetAmount: 200,
        },
        {
            icon: <House width={30} height={30} />,
            title: "New House",
            progress: 10,
            currentAmount: 2780,
            targetAmount: 10000,
        },
    ]

    return (
        <View className='py-8 px-6 flex-col gap-6'>
            <View>
                <Text className='sub-heading-base'>
                    All Goals
                </Text>
            </View>

            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{ flexGrow: 1 }}
            contentContainerStyle={{ flexGrow: 1, gap: 16 }}
            >
                {data.map((goal, index) => (
                    <GoalCard  
                    key={goal.title}
                    icon={goal.icon}
                    title={goal.title}
                    progress={goal.progress}
                    currentAmount={goal.currentAmount}
                    targetAmount={goal.targetAmount}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default YouGoal