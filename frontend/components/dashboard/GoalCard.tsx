import { Car } from "lucide-react-native"
import { Text, View } from "react-native"

type GoalCardProps = {
    icon: React.ReactNode;
    title: string;
    progress: number; // percentage from 0 to 100
    currentAmount: number;
    targetAmount: number;
}

const GoalCard = ({
    icon,
    title,
    progress,
    currentAmount,
    targetAmount
}: GoalCardProps) => {
    return (
        <View className='flex-row items-center justify-between gap-3.5'>
            <View className='p-1.5 rounded-xl bg-neutral-soft-grey-2'>
                {icon}
            </View>
            <View className='flex-col gap-1.5 items-start w-full max-w-63'>
                <Text className='font-sans-semibold font-semibold text-xl leading-5'>
                    {title}
                </Text>

                <View className='w-full rounded-full h-0.75 bg-neutral-soft-grey-1 overflow-hidden'>
                    <View
                    className='h-full bg-primary rounded-full'
                    style={{
                        // example from pokedex repo
                        //  width: `${Math.min(stat.base_stat, getStatsMax(stat.stat.name as any)) / (getStatsMax(stat.stat.name as any) / 100)}%`
                        width: `${progress}%`
                    }}
                    />
                </View>

                <View className='flex-row w-full items-center justify-between'>
                    <Text className='font-sans text-lg leading-5 text-neutral-grey-1'>
                        ${currentAmount}
                    </Text>

                    <Text className='font-sans text-lg leading-5 text-neutral-grey-1'>
                        ${targetAmount}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default GoalCard