import { Stack } from "expo-router"

const SavingsLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="your_goals" />
        </Stack>
    )
}

export default SavingsLayout