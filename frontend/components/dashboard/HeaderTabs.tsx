import { Image, Text, View } from 'react-native';

type HeaderTabsProps = {
    title: string,
    avatarUrl: string;
}

const HeaderTabs = ({ title, avatarUrl }: HeaderTabsProps) => {
    return (
        <View className='w-full h-13 bg-white px-4 py-1.5 flex-row items-center justify-between'>
            <Text className='font-sans-semibold text-[18px] font-semibold'>
                {title}
            </Text>
        
            <Image 
            width={40} height={40}
            style={{ borderRadius: 20 }}
            source={{ uri: avatarUrl }} />
        </View>
    )
}

export default HeaderTabs