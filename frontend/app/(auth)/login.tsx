import Logo from '@/assets/app/logo/logo.svg'
import { Button } from '@/components/ui/Button'
import CustomSafeAreaView from '@/components/ui/CustomSafeAreaView'
import { Input } from '@/components/ui/Input'
import { Link, router } from 'expo-router'
import { User } from 'lucide-react-native'
import { Text, View } from 'react-native'
import { withUniwind } from 'uniwind'

import Facebook from '@/assets/app/logo/Oauth/facebook.svg'
import Google from '@/assets/app/logo/Oauth/google.svg'
import { PasswordInput } from '@/components/ui/passwordInput'

const Login = () => {
    const StyledUser = withUniwind(User);

    return (
        <CustomSafeAreaView className='px-6'>
            <View className='flex-1 gap-13 items-center pt-5 pb-7.5'>

                <View className='flex-col items-center gap-1.75 pb-1.75'>
                    <Logo height={64} width={64} />
                    <Text className='font-sans-bold font-bold text-2xl'>
                        BaryaBuddy
                    </Text>
                </View>

                <View className='w-full flex-col gap-4'>

                    <View className='gap-6 w-full'>
                        <View className='flex-col gap-3'>
                            
                            <View className='relative w-full'>
                                <StyledUser
                                className='absolute left-4 top-3.5 z-99'
                                height={24} width={24} />
                                <Input 
                                id='username'
                                className="pl-11"
                                placeholder='Username'
                                />
                            </View>
                            
                            <PasswordInput />

                        </View>

                        <Button
                        onPress={() => router.push('/dashboard/overview')}
                        >
                            <Text className='text-white text-xl font-bold font-sans-bold'>
                                LOGIN
                            </Text>
                        </Button>

                        <Link 
                        className='py-3 px-5'
                        href={'/(auth)/forgot_password'}>
                            <Text className='text-lg font-semibold text-center text-neutral-grey-1'>
                                FORGOT PASSWORD
                            </Text>
                        </Link>
                    </View>

                    <Text className='text-xl text-center'>
                        Or
                    </Text>

                    <View className='flex-col gap-5 pt-2'>
                        <Button 
                        className='pl-4 justify-baseline gap-8.5'
                        variant='outline'>
                            <Google height={24} width={24} />
                            <Text className='font-sans-semibold font-semibold text-lg leading-6'>
                                CONTINUE WITH GOOGLE
                            </Text>
                        </Button>
                        <Button
                        className='pl-4 justify-baseline gap-7.5'
                        variant='outline'>
                            <Facebook height={24} width={24} />
                            <Text className='font-sans-semibold font-semibold text-lg leading-6'>
                                CONTINUE WITH FACEBOOK
                            </Text>
                        </Button>
                    </View>

                </View>

                <View className='flex-row gap-1'>
                    <Text className='font-sans text-lg'>
                        Don't have an account?
                    </Text>
                    <Link href={'/(auth)/register'}>
                        <Text className='font-sans text-lg text-primary'>
                            Register here
                        </Text>
                    </Link>
                </View>
            </View>
        </CustomSafeAreaView>
    )
}

export default Login