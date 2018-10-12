import data from "../Store/Local/PriceList"

const analyse = (flavor,size,toppings) => {
  const flavorPrice= data.customizables.Flavor.filter(Flavor => Flavor.name == flavor) 
  const sizePrice= data.customizables.Sizes.filter(Size => Size.name == size)
  const toppingsPrice= toppingsfunc(toppings,data.customizables.Toppings)

  const total= [flavorPrice[0].price, sizePrice[0].price, toppingsPrice]

  return total
 
}

const toppingsfunc = (toMatch,target) => {
let total=0
let found=[]
   for(let i=0; i< toMatch.length; i++){
       for(let j=0; j<target.length; j++){
           if(target[j].name==toMatch[i]){
               found.push(target[j].price);
           }
       }
   }

   for(let i=0; i< found.length;i++){
     total+=found[i]
   }
return total

}

export default analyse