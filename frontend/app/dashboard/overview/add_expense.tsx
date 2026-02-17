import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import PocketDatePicker from '@/components/ui/PocketDatePicker'
import TagSelector from '@/components/ui/TagSelector'
import { Text, View } from 'react-native'

const AddExpense = () => {
  const tags = ["Health", "Grocery"];

  return (
    <View className='pb-8 flex-1 justify-between'>
      <View className='flex-1'>
        <View className='px-6 py-8'>
          <PocketDatePicker />
        </View>

        <View className='px-6 flex-col gap-3'>
          <View className='flex-col gap-1'>
            <Label>Income Title</Label>
            <Input />
          </View>

          <View className='flex-col gap-1'>
            <Label>Amount</Label>
            <Input />
          </View>
          
          {/* category Input tags */}
          <View className='flex-col gap-2'>
            <Label>Expense Category</Label>
            <TagSelector 
            tags={tags}
            onSelectTag={() => undefined}
            onAddTag={() => undefined}
            selectedTag={tags[1]}
            />
          </View>
        </View>
      </View>

      <View className='px-6'>
        <Button>
          <Text className='font-sans-semibold text-white text-lg'>ADD EXPENSE</Text>
        </Button>
      </View>
    </View>
  )
}

export default AddExpense