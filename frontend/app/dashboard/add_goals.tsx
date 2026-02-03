import { Button } from '@/components/ui/Button';
import DatePicker from '@/components/ui/DatePicker';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import CustomSelect from '@/components/ui/Picker';
import { useState } from 'react';
import { Text, View } from 'react-native';

const AddGoals = () => {
    const [value, setValue] = useState("");

    return (
        <View className='px-6 pb-8 pt-9 flex-1 flex-col justify-between'>
            <View className='flex-col gap-3'>

                <View className='flex-col gap-1'>
                    <Label>Goal Title</Label>
                    <Input />
                </View>

                <View className='flex-col gap-1'>
                    <Label>Amount</Label>
                    <Input />
                </View>

                <View className='flex-col gap-1'>
                    <Label>Contribution Type</Label>
                    <CustomSelect options={[
                        { label: "Daily", value: "daily" },
                        { label: "Weekly", value: "weekly" },
                        { label: "Monthly", value: "monthly" },
                        { label: "Yearly", value: "yearly"}
                    ]} />
                </View>

                <View className='flex-col gap-1'>
                    <Label>Deadline</Label>
                    <DatePicker />
                </View>
            </View>

            <Button>
                <Text className='text-white text-xl font-bold font-sans-bold'>
                    ADD GOAL
                </Text>
            </Button>
        </View>
    )
}

export default AddGoals