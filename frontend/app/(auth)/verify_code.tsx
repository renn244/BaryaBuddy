import { Button } from '@/components/ui/Button'
import CustomSafeAreaView from '@/components/ui/CustomSafeAreaView'
import { InputOTP } from '@/components/ui/InputOTP'
import { router } from 'expo-router'
import React, { useRef } from 'react'
import { Text, TextInput, View } from 'react-native'

const VerifyCode = () => {
    const [value, setValue] = React.useState<string[]>(Array(6).fill(""));
    const inputRefs = useRef<TextInput[]>([]);

    const handleKeyChange = (text: string, index: number) => {
        const newValue = [...value]
        newValue[index] = text;
        setValue(newValue);

        if (text && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        } else if (index >= inputRefs.current.length - 1 && text) {
            inputRefs.current[index].blur();
        }
    }

    const handleKeyPress = (event: any, index: number) => {
        if (event.nativeEvent.key === 'Backspace') {
            if (value[index]) {
                const newValue = [...value];
                newValue[index] = "";
                setValue(newValue);
            } else if (index > 0) {
                inputRefs.current[index - 1].focus();
                const newValue = [...value];
                newValue[index - 1] = "";
                setValue(newValue);
            }
        }
    };

    return (
        <CustomSafeAreaView className='px-6'>
            <View className='flex-1 flex-col justify-between pb-7.5'>
                <View className='h-10.75'>

                </View>

                <View className='flex-col gap-4 mt-10.25'>
                    <View className='flex-col gap-2'>
                        <Text className='font-sans-semibold text-4xl leading-11 font-semibold'>
                            Verify Code
                        </Text>
                        <Text className='font-sans-medium text-xl text-neutral-grey-2'>
                            Please enter the verification code sent to your email address.
                        </Text>
                    </View>

                    <View className='flex-row justify-around'>
                        {Array.from({ length: 6 }).map((_, index) => {
                            
                            return (
                                <InputOTP
                                textContentType="oneTimeCode"
                                autoComplete="sms-otp"
                                importantForAutofill="yes"
                                key={index}
                                ref={(ref) => { if (ref) inputRefs.current[index] = ref; }}
                                onChangeText={(text) => handleKeyChange(text, index)}
                                onKeyPress={(event) => handleKeyPress(event, index)}
                                value={value[index] || ''}
                                maxLength={1}
                                keyboardType='number-pad'
                                />
                            )
                        })}
                    </View>
                </View>

                <View className='gap-3'>
                    <Button onPress={() => router.push('/(auth)/change_password')}>
                        <Text className='text-white text-xl font-bold font-sans-bold'>
                            SUBMIT
                        </Text>
                    </Button>

                    <Button 
                    variant='outline'>
                        <Text className='text-xl font-bold font-sans-bold'>
                            RESEND CODE
                        </Text>
                    </Button>
                </View>
            </View>
        </CustomSafeAreaView>
    )
}

export default VerifyCode