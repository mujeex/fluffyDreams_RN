
import {Provider} from "react-redux"
import {Navigation} from "react-native-navigation"

import OnboardingScreen from "./src/screens/OnboardingScreen"
import HomeScreen from "./src/screens/HomeScreen"
import NewsScreen from "./src/screens/NewsScreen"
import ProfileScreen from "./src/screens/ProfileScreen"
import CartScreen from "./src/screens/CartScreen"
import ProfileInfoScreen from "./src/screens/ProfileInfoScreen"
import OrderScreen from "./src/screens/OrderScreen"
import SummaryScreen from "./src/screens/summaryScreen"
import ShippingScreen from "./src/screens/shippingsScreen"
import configureStore from "./src/Store/configureStore"


const store = configureStore()

Navigation.registerComponent("fluffy.OnboardingScreen", ()=> OnboardingScreen,store,Provider)
Navigation.registerComponent("fluffy.HomeScreen",()=>HomeScreen,
 store,
 Provider
 )
Navigation.registerComponent("fluffy.NewsScreen", ()=> NewsScreen,
store,
Provider
)

Navigation.registerComponent("fluffy.ProfileScreen",
 ()=> ProfileScreen,
 store,
 Provider)

 Navigation.registerComponent("fluffy.CartScreen",
 ()=> CartScreen,
 store,
 Provider)

 Navigation.registerComponent("fluffy.SummaryScreen", 
()=>SummaryScreen,
store,
Provider)


Navigation.registerComponent("fluffy.ShippingScreen", 
()=>ShippingScreen,
store,
Provider)

Navigation.registerComponent("fluffy.ProfileInfoScreen", 
()=>ProfileInfoScreen,
store,
Provider)

Navigation.registerComponent("fluffy.OrderScreen", 
()=> OrderScreen,
store,
Provider)

export default  () => Navigation.startSingleScreenApp({
screen : {
  screen: "fluffy.OnboardingScreen",
}
})



