import { Stack } from "expo-router"

const TotalExpenseLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="total_expenses" />
        </Stack>
    )
}

export default TotalExpenseLayout