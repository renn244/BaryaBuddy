import ExpenseCard from "@/components/dashboard/ExpenseCard";
import PingCircle from "@/components/dashboard/PingCircle";
import PocketDatePicker from "@/components/ui/PocketDatePicker";
import { CalendarTheme } from "@marceloterreiro/flash-calendar";
import { Bike, Salad, ShoppingCart } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

const TotalExpense = () => {
    const [tabs, setTabs] = useState<"spends" | "categories">("spends")

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
            <View className="py-8 px-6 flex-col gap-6">
                <PocketDatePicker />

                <PingCircle 
                amount={800}
                description="You have Spend total 60% of your budget"
                />
            </View>
            
            <View className="flex-col gap-8 px-6 py-8 bg-white rounded-t-3xl">
                <View className="flex-row border-px border-neutral-grey-3">
                    {/* Tabs */}
                    
                    {/* Active Tab */}
                    <View className="px-4 pb-3 border-b-3 border-primary mb-px w-1/2">
                        <Text className="sub-heading-base text-center align-middle">
                            Spends
                        </Text> 
                    </View>

                    {/* Inactive Tab */}
                    <View className="px-4 pb-4 w-1/2">
                        <Text className="sub-heading-base text-center align-middle text-neutral-grey-2">
                            Categories
                        </Text>
                    </View>
                </View>

                {tabs === "spends" && (
                    <View className="flex-col gap-8">
                        <ExpenseCard 
                        icon={<Salad width={30} height={30} />}
                        title='Food'
                        date='20 Feb 2024'
                        amount={20}
                        />

                        <ExpenseCard 
                        icon={<Bike width={30} height={30} />}
                        title='Uber'
                        date='13 March 2024'
                        amount={18}
                        />

                        <ExpenseCard 
                        icon={<ShoppingCart width={30} height={30} />}
                        title='Shopping'
                        date='11 March 2024'
                        amount={400}
                        />
                    </View>
                )}

                {tabs === "categories" && (
                    <View className="flex-col gap-4">
                        <View className="p-6">
                            {/* Still need Chart */}
                        </View>

                        <View className="flex-col gap-8">
                            <ExpenseCard 
                            icon={<Salad width={30} height={30} />}
                            title='Food'
                            date='20 Feb 2024'
                            amount={20}
                            />

                            <ExpenseCard 
                            icon={<Bike width={30} height={30} />}
                            title='Uber'
                            date='13 March 2024'
                            amount={18}
                            />

                            <ExpenseCard 
                            icon={<ShoppingCart width={30} height={30} />}
                            title='Shopping'
                            date='11 March 2024'
                            amount={400}
                            />
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    )
}

export default TotalExpense;

const calendarTheme: CalendarTheme = {
    itemDayContainer: {
        activeDayFiller: {
            backgroundColor: "#8b0000"
        }
    },
    itemDay: {
        base: ({ isDifferentMonth, isPressed }) => ({
            container: {
                padding: 10,
                borderBottomStartRadius: 8,
                borderBottomEndRadius: 8,
                borderTopEndRadius: 8,
                borderTopStartRadius: 8,
                backgroundColor: isPressed ? '#E6E8EB' : '#FFFFFF',
            },
            content: {
                fontSize: 14,
                lineHeight: 24,
                alignSelf: "center",
                color: isDifferentMonth ? '#888' : '#333',
            }
        }),
        today: () => ({
            container: {
                backgroundColor: "#0E33F3",
                borderWidth: 0,
                borderBottomEndRadius: 8,
                borderBottomStartRadius: 8,
                borderTopEndRadius: 8,
                borderTopStartRadius: 8,
            },
            content: {
                color: "#FFFFFF"
            }
        }),
        active: () => ({
            container: {
                backgroundColor: "#0E33F3",
                borderWidth: 0,
                borderBottomEndRadius: 8,
                borderBottomStartRadius: 8,
                borderTopEndRadius: 8,
                borderTopStartRadius: 8,
            },
            content: {
                color: "#FFFFFF"
            }
        })
    },
    itemWeekName: {
        container: {
            padding: 12,
        },
        content: {
            fontWeight: '600',
            fontSize: 12,
            lineHeight: 16,
            color: '#242D35'
        }
    }
}