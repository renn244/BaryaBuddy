import { Button } from '@/components/ui/Button'
import CustomSafeAreaView from '@/components/ui/CustomSafeAreaView'
import { Input } from '@/components/ui/Input'
import { router } from 'expo-router'
import { Mail } from 'lucide-react-native'
import React from 'react'
import { Text, View } from 'react-native'
import { withUniwind } from 'uniwind'

const ForgotPassword = () => {
    const StyledMail = withUniwind(Mail);
    
    return (
        <CustomSafeAreaView className='px-6'>
            <View className='flex-1 flex-col justify-between pb-7.5'>

                <View className='h-10.75'>

                </View>

                <View className='flex-col gap-4 mt-10.25'>
                    
                    <View className='flex-col gap-2'>
                        <Text className='font-sans-semibold text-4xl leading-11 font-semibold'>
                            Forgot Password
                        </Text>
                        <Text className='font-sans-regular text-xl text-neutral-grey-2'>
                            Please enter your email address to receive a link to create a new password via email.
                        </Text>
                    </View>

                    <View className='relative w-full'>
                        <StyledMail 
                        className='absolute left-4 top-3.5 z-99'
                        />
                        <Input 
                        id='email'
                        className="pl-11"
                        placeholder='Email Address'
                        />
                    </View>

                </View>

                <View className='gap-3'>
                    <Button onPress={() => router.push('/(auth)/verify_code')}>
                        <Text className='text-white text-xl font-bold font-sans-bold'>
                            SEND RESET CODE
                        </Text>
                    </Button>

                    <Button 
                    onPress={() => router.push('/(auth)/login')}
                    variant='outline'>
                        <Text className='text-xl font-bold font-sans-bold'>
                            CANCEL
                        </Text>
                    </Button>
                </View>

            </View>
        </CustomSafeAreaView>
    )
}

export default ForgotPassword