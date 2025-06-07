import { createBottomTabNavigator, BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { Product } from "@/app/Product"
import { Home } from "@/app/Home"
import { MaterialIcons } from "@expo/vector-icons"

export type BottomRoutesList = {
    home: undefined
    product: undefined | { id: string }
}

export type BottomRoutesProps<T extends keyof BottomRoutesList> = BottomTabScreenProps<BottomRoutesList, T>

const Tab = createBottomTabNavigator<BottomRoutesList>()

export function BottomRoutes() {
    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{ 
                headerShown: false,  
                tabBarActiveTintColor: "#581795",
                tabBarInactiveTintColor: "#444",
                tabBarLabelPosition: "beside-icon",
                // tabBarShowLabel: false, não mostrar o nome, só o ícone
                }}>
            <Tab.Screen
              name="home"
              component={Home}
              options={{
                tabBarLabel: "Início",
                tabBarIcon: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} />
            }} 
              />
            <Tab.Screen
              name="product" 
              component={Product} 
              options={{
                tabBarLabel: "Produto",
                tabBarIcon: ({ color, size }) => <MaterialIcons name="add-box" size={size} color={color} />
            }} 
              />
        </Tab.Navigator>
    )
}