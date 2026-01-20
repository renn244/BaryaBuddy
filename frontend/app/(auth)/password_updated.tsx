import { Button } from '@/components/ui/Button'
import CustomSafeAreaView from '@/components/ui/CustomSafeAreaView'
import { StyleSheet, Text, View } from 'react-native'

import Illustration from '@/assets/app/PasswordUpdate/Illustration.svg'
import { router } from 'expo-router'

const PasswordUpdated = () => {
    return (
        <CustomSafeAreaView className='px-6'>
            <View className='pb-7.5'>

                <View className='h-10.75'>
                    
                </View>

                <View className='mt-10.25 mb-16 w-full h-127 flex-col justify-center'>
                    <View className='flex-col items-center gap-8'>
                        <Illustration height={120} />

                        <View className='flex-col gap-2'>
                            <Text className='font-sans-medium font-medium text-2xl text-center'>
                                Password updated!
                            </Text>
                            <Text className='font-sans text-xl leading-6 tracking-wider text-center text-neutral-grey-1'>
                               Your password has been setup successfully
                            </Text>
                        </View>
                    </View>
                </View>

                <View>
                    <Button onPress={() => router.push('/(auth)/login')}>
                        <Text className='text-white text-xl font-bold font-sans-bold'>
                            BACK TO LOGIN
                        </Text>
                    </Button>
                </View>

            </View>
        </CustomSafeAreaView>
    )
}

export default PasswordUpdated

const styles = StyleSheet.create({})