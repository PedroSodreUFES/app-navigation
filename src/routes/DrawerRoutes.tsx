import { createDrawerNavigator, DrawerScreenProps } from "@react-navigation/drawer"
import { Product } from "@/app/Product"
import { Home } from "@/app/Home"
import { MaterialIcons } from "@expo/vector-icons"

export type DrawerRoutesList = {
    home: undefined
    product: undefined | { id: string }
}

export type DrawerRoutesProps<T extends keyof DrawerRoutesList> = DrawerScreenProps<DrawerRoutesList, T>

const Drawer = createDrawerNavigator<DrawerRoutesList>()

export function DrawerRoutes() {
    return (
        <Drawer.Navigator
            initialRouteName="home"
            screenOptions={{ 
                headerShown: false,  
                drawerActiveTintColor: "#581795",
                drawerInactiveTintColor: "#444",
                // DrawerBarShowLabel: false, não mostrar o nome, só o ícone
                }}>
            <Drawer.Screen
              name="home"
              component={Home}
              options={{
                drawerLabel: "Início",
                drawerIcon: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} />
            }} 
              />
            <Drawer.Screen
              name="product" 
              component={Product} 
              options={{
                drawerLabel: "Produto",
                drawerIcon: ({ color, size }) => <MaterialIcons name="add-box" size={size} color={color} />
            }} 
              />
        </Drawer.Navigator>
    )
}