import { Button } from '@/components/ui/Button'
import CustomSafeAreaView from '@/components/ui/CustomSafeAreaView'
import { PasswordInput } from '@/components/ui/passwordInput'
import { router } from 'expo-router'
import { Check, X } from 'lucide-react-native'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { withUniwind } from 'uniwind'

const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const StyledCheck = withUniwind(Check);
    const StyledX = withUniwind(X);

    useEffect(() => {
        const updatedQuality = passwordQuality.map((item) => ({ ...item, met: item.regex.test(newPassword) }));
        setPasswordQuality(updatedQuality);
    }, [newPassword]);

    // need to fetch the name and email
    const [passwordQuality, setPasswordQuality] = useState([
        { 
            label: 'Must not contain your name or email', 
            met: false, 
            regex: /^(?!.*(name|email)).*$/i 
        },
        { 
            label: 'At least 8 characters', 
            met: false, 
            regex: /^.{8,}$/ 
        },
        { 
            label: 'Contains a symbol or a number', 
            met: false, 
            regex: /(?=.*[!@#$%^&*(),.?":{}|<>0-9])/ 
        }
    ]);
  
    const handleSubmit = () => {
        // Handle password reset submission logic here
    }
    
    return (
        <CustomSafeAreaView className='px-6'>
            <View className='pb-7.5'>

                <View className='h-10.75'>

                </View>

                <View className='flex-col gap-12 mt-10.25'>
                    <View className='flex-col gap-3'>
                        <Text className='font-sans-semibold text-4xl font-semibold'>
                            Create Your New Password
                        </Text>
                        <Text className='font-sans-regular text-xl text-neutral-grey-2'>
                            Your new password must be different from previous used passwords.
                        </Text>
                    </View>

                    <View className='flex-col gap-6 h-84'>
                        <View className='flex-col gap-4'>

                            <PasswordInput 
                            value={newPassword}
                            onChangeText={setNewPassword}
                            placeholder='New Password'
                            id='New Password'
                            />
                            
                            <PasswordInput 
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            placeholder='Confirm Password'
                            id='Confirm Password'
                            />
                            
                        </View>
        
                        <View>
                            {passwordQuality.map((item) => (
                                <View key={item.label} className='flex-row items-center gap-2'>
                                    {   
                                        item.met 
                                            ? <StyledCheck className="text-primary" width={20} height={20} /> 
                                            : <StyledX className='text-neutral-grey-1' width={20} height={20} />
                                    }
                                    <Text className={`text-xl tracking-wider ${item.met ? 'text-primary' : 'text-neutral-grey-1'}`}>
                                        {item.label}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    <Button onPress={() => router.push('/(auth)/password_updated')}>
                        <Text className='text-white text-xl font-bold font-sans-bold'>
                            RESET PASSWORD
                        </Text>
                    </Button>
                </View>

            </View>
        </CustomSafeAreaView>
    )
}

export default ChangePassword