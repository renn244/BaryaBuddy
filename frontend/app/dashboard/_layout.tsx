import HeaderTabs from '@/components/dashboard/HeaderTabs';
import { Tabs } from 'expo-router';
import { Bell, BookCheck, House, Plus, Settings } from 'lucide-react-native';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { withUniwind } from 'uniwind';

const DashboardLayout = () => {
    const StyledHouse = withUniwind(House);
    const insets = useSafeAreaInsets();

    // example only
    const avatarUrl = 'https://avatars.githubusercontent.com/u/97150877?v=4';

    return (
        <Tabs screenOptions={{ 
            tabBarShowLabel: false, 
            tabBarStyle: {
                borderTopWidth: 1,
                borderTopColor: '#E2E4E6'
            }
        }}>
            <Tabs.Screen 
            name='overview'
            options={{
                title: 'Overview',
                header: ({ options }) => (
                    <View style={{ paddingTop: insets.top }}>
                        <HeaderTabs 
                        avatarUrl={avatarUrl}
                        title={options.title ?? ''} />
                    </View>
                ),
                tabBarIcon: ({ color }) => <StyledHouse color={color} width={24} height={24} />
            }}
            />
            
            <Tabs.Screen 
            name='savings'
            options={{
                title: 'Savings',
                header: ({ options }) => (
                    <View style={{ paddingTop: insets.top }}>
                        <HeaderTabs 
                        avatarUrl={avatarUrl}
                        title={options.title ?? ''} />
                    </View>
                ),
                tabBarIcon: ({ color }) => <BookCheck color={color} width={24} height={24} />
            }}
            />

            <Tabs.Screen 
            name='add_goals'
            options={{
                title: 'Add Goal',
                header: ({ options }) => (
                    <View style={{ paddingTop: insets.top }}>
                        <HeaderTabs 
                        avatarUrl={avatarUrl}
                        title={options.title ?? ''} />
                    </View>
                ),
                tabBarIcon: ({ color }) => (
                    <View className='p-3.5 bg-primary rounded-full -mt-2'>
                        <Plus color={'#FFFFFF'} width={32} height={32} />
                    </View>
                )
            }}
            />

            <Tabs.Screen 
            name='notifications'
            options={{
                title: 'Notifications',
                header: ({ options }) => (
                    <View style={{ paddingTop: insets.top }}>
                        <HeaderTabs 
                        avatarUrl={avatarUrl}
                        title={options.title ?? ''} />
                    </View>
                ),
                tabBarIcon: ({ color }) => <Bell color={color} width={24} height={24} />
            }}
            />

            <Tabs.Screen 
            name='reminders'
            options={{
                title: 'Reminders',
                header: ({ options }) => (
                    <View style={{ paddingTop: insets.top }}>
                        <HeaderTabs 
                        avatarUrl={avatarUrl}
                        title={options.title ?? ''} />
                    </View>
                ),
                tabBarIcon: ({ color }) => <Settings color={color} width={24} height={24} />
            }}
            />

        </Tabs>
    )
}

export default DashboardLayout