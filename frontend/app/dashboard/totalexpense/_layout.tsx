import { Stack } from "expo-router"

const TotalExpenseLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
        </Stack>
    )
}

export default TotalExpenseLayout