import {Platform} from "react-native"
import {Navigation} from "react-native-navigation"
import Icon from "react-native-vector-icons/Ionicons"
import CartIcon from "../Components/cartScreenComp/cartIcon"




const MainTabs = () => {
    Promise.all([
        Icon.getImageSource(Platform.OS === "android"? "md-home": "ios-home", 30) ,
        Icon.getImageSource(Platform.OS === "android"? "md-paper": "ios-paper", 30),
        Icon.getImageSource(Platform.OS === "android"? "md-cart": "ios-cart", 30),
        Icon.getImageSource(Platform === "android"? "md-person": "ios-person", 30)
    ]  
    ).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                label1: "Home",
                screen: "fluffy.HomeScreen",
                icon: sources[0]
    
            },
            {
                label2: "News",
                screen: "fluffy.NewsScreen",
                icon: sources[1]
    
            },
            {
                label3: "Cart",
                screen: "fluffy.CartScreen",
                icon: sources[2],
                title: " Shopping Cart",

            },
            {
                label4: "Profile",
                screen: "fluffy.ProfileScreen",
                icon: sources[3]
            }
    
        
        ],
        tabsStyle:{
            tabBarHideShadow: true,

            // tabBarTranslucent: true
            // tabBarButtonColor: "red"
        },
        appStyle: {
            keepStyleAcrossPush: false
          }
        })
    })
    
}


export default MainTabs