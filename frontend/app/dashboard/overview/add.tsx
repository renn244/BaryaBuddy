import ExpenseCard from '@/components/dashboard/ExpenseCard'
import { Coins, MoreHorizontal, Plus, Wallet } from 'lucide-react-native'
import { Pressable, ScrollView, Text, View } from 'react-native'

const Add = () => {
  return (
    <ScrollView>
      <ScrollView 
      horizontal={true}
      className='py-8 px-6'
      contentContainerClassName='gap-4'
      >
        {/* Add category other than expense and spend? */}
        <View className='py-2 px-3 flex-col justify-center border border-dashed border-neutral-grey-3 rounded-2xl'>
          <Plus width={24} height={24} color="#B0B8BF" />
        </View>

        <View className='rounded-[20px] min-w-30 p-5 flex-col gap-2 bg-white'>
          <Wallet width={24} height={24} />

          <Text className='font-sans text-base leading-4 tracking-wider'>Add Income</Text>
        </View>

        <View className='rounded-[20px] min-w-30 p-5 flex-col gap-2 bg-primary'>
          <Wallet width={24} height={24} color="#FFFFFF" />

          <Text className='font-sans text-base leading-4 tracking-wider text-white'>Add Expense</Text>
        </View>
      </ScrollView>

      <View className='py-8 px-6 flex-col gap-8 rounded-t-3xl bg-white'>
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
          icon={<Coins width={30} height={30} />}
          title='Food'
          date='20 Feb 2024'
          amount={20}
          />

          <ExpenseCard 
          icon={<Coins width={30} height={30} />}
          title='Food'
          date='20 Feb 2024'
          amount={20}
          />

          <ExpenseCard 
          icon={<Coins width={30} height={30} />}
          title='Food'
          date='20 Feb 2024'
          amount={20}
          />

          <ExpenseCard 
          icon={<Coins width={30} height={30} />}
          title='Food'
          date='20 Feb 2024'
          amount={20}
          />

          <ExpenseCard 
          icon={<Coins width={30} height={30} />}
          title='Food'
          date='20 Feb 2024'
          amount={20}
          />

          <ExpenseCard 
          icon={<Coins width={30} height={30} />}
          title='Food'
          date='20 Feb 2024'
          amount={20}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default Add