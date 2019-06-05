// import {SHOW_ITEMS} from "../Actions/actionTypes"

const initialState= {
    cakes:[

        {
            id: 1,
            name:"Baked blur",
            image: require("../../Assets/bake-baked-blur-461279.jpg"),
            price: 62, 
            flavor:"Vanilla",
            size: "8inches", 
            toppings: ["maltesers","smarties"]
         },

        {
            id: 2,
            name:"Blueberry Cake",
            image: require("../../Assets/bakery-baking-blueberries-291528.jpg"),
            price: 70, 
            flavor:"Tiramisu",
            size: "12inches",
            toppings: ["gummybears"]
         },
         
        {
            id: 3,
            name:"Birthday Cake",
            image: require("../../Assets/baking-berry-birthday-357748.jpg"),
            price: 54, 
            flavor:"Strawberry",
            size: "10inches",
            toppings: ["mentos","smarties"]
         },
         
        {
            id: 4,
            name:"Blackberry Cake",
            image: require("../../Assets/berries-berry-cake-434243.jpg"),
            price: 58, 
            flavor:"Vanilla",
            size: "6inches",
            toppings: ["mint","smarties"]
         },
         
        {
            id: 5,
            name:"Cheesecake",
            image: require("../../Assets/berries-cake-cheesecake-85766.jpg"),
            price: 77, 
            flavor:"Tiramisu",
            size: "14inches", 
            toppings: ["mentos","smarties"]
         },
         
        {
            id: 6,
            name:"Blueberry Fudge",
            image: require("../../Assets/berry-blackberry-blueberry-315707.jpg"),
            price: 61, 
            flavor:"Strawberry",
            size: "12inches",
            toppings: ["gummybears","mint"]
         },
         {
            id: 7,
            name:"Pancake",
            image: require("../../Assets/birthday-birthday-cake-cake-140831.jpg"),
            price: 92, 
            flavor:"Chocolate",
            size: "8inches",
            toppings: ["mint","smarties"]
         },
         {
            id: 8,
            name:"Vanilla Fudge",
            image: require("../../Assets/birthday-birthday-cake-cake-140831.jpg"),
            price: 65, 
            flavor:"Vanilla",
            size: "10inches",
            toppings: ["gummybears","mint"]
         },
         {
            id: 9,
            name:"Strawberry Fudge",
            image: require("../../Assets/blur-cake-cheesecake-219293.jpg"),
            price: 91, 
            flavor:"Coffee",
            size: "12inches",
            toppings: ["mentos","smarties"]
         },
         {
            id: 10,
            name:"Mango Slice",
            image: require("../../Assets/blur-cake-close-up-355290.jpg"),
            price: 109, 
            flavor:"Chocolate",
            size: "14inches", 
            toppings: ["mint","mentos","smarties"]
         },

    ],

    
}

    
    



const homeReducer = (state = initialState) => {
        // switch(action.type){
        //     case SHOW_ITEMS:
        //     return {
        //         ...state
        //     }
        //     default:
            return state
        // }
        
    
}

export default homeReducer