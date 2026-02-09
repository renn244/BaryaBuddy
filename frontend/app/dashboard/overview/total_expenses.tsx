import ExpenseCard from "@/components/dashboard/ExpenseCard";
import PingCircle from "@/components/dashboard/PingCircle";
import { Calendar, CalendarTheme, toDateId, useCalendar } from "@marceloterreiro/flash-calendar";
import { format } from "date-fns/fp";
import { Bike, ChevronLeft, ChevronRight, Salad, ShoppingCart } from "lucide-react-native";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";


const TotalExpense = () => {
    const [tabs, setTabs] = useState<"spends" | "categories">("spends")

    const today = toDateId(new Date());
    const { 
        weekDaysList, 
        calendarRowMonth,
        weeksList,
    } = useCalendar({
        calendarMonthId: today,
        calendarActiveDateRanges: [{ startId: today, endId: today }],
        calendarFirstDayOfWeek: 'monday',
        getCalendarWeekDayFormat: format('EEEEEE')
    })

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
            <View className="py-8 px-6 flex-col gap-6">
                <View className="bg-white rounded-3xl p-4">
                    <Calendar.VStack>
                        <Calendar.HStack justifyContent="space-between">
                            <Pressable className="p-1 border border-neutral-grey-3 rounded-[10px]">
                                <ChevronLeft  width={24} height={24} />
                            </Pressable>

                            <Text className="sub-heading-sm leading-5 text-neutral-dark-2">
                                {calendarRowMonth}
                            </Text>

                            <Pressable className="p-1 border border-neutral-grey-3 rounded-[10px]">
                                <ChevronRight width={24} height={24} />
                            </Pressable>
                        </Calendar.HStack>

                        <Calendar.Row.Week>
                            {weekDaysList.map((day) => (
                                <Calendar.Item.WeekName
                                key={day}
                                height={40}
                                theme={calendarTheme.itemWeekName}
                                >
                                    {day}
                                </Calendar.Item.WeekName>
                            ))}
                        </Calendar.Row.Week>

                        {weeksList.map((week, weekIndex) => {
                            
                            if(!week.some(day => day.isToday)) {
                                return null;
                            }
                            
                            return (
                                <Calendar.Row.Week key={weekIndex}>
                                    {week.map((day) => (
                                        <Calendar.Item.Day.Container
                                        dayHeight={40}
                                        daySpacing={4}
                                        metadata={day}
                                        isStartOfWeek={day.isStartOfWeek}
                                        theme={calendarTheme.itemDayContainer}
                                        >
                                            <Calendar.Item.Day
                                            height={24}
                                            metadata={day}
                                            onPress={() => undefined}
                                            theme={calendarTheme.itemDay}
                                            >
                                                {day.displayLabel}
                                            </Calendar.Item.Day>
                                        </Calendar.Item.Day.Container>
                                    ))}
                                </Calendar.Row.Week>
                            )
                        })}
                    </Calendar.VStack>
                </View>

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