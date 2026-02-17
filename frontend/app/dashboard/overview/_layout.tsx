import { Stack } from "expo-router"

const TotalExpenseLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="total_expenses" />

            <Stack.Screen name="add" />
            <Stack.Screen name="add_income" />
            <Stack.Screen name="add_expense" />
        </Stack>
    )
}

export default TotalExpenseLayout