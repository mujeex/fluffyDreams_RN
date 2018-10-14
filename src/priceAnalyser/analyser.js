import data from "../Store/Local/PriceList"

export const analyse = (flavor,size) => {
  const flavorPrice= data.customizables.Flavor.filter(Flavor => Flavor.name == flavor) 
  const sizePrice= data.customizables.Sizes.filter(Size => Size.name == size)
//   const toppingsPrice= toppingsfunc(toppings,data.customizables.Toppings)
//here the toppingsfunc return a summed value of the elements
  const total= [flavorPrice[0].price, sizePrice[0].price]

  return total
 
}

export const toppingsfunc = (toMatch) => {
    let target=data.customizables.Toppings
// let total=0
let found=[]
   for(let i=0; i< toMatch.length; i++){
       for(let j=0; j<target.length; j++){
           if(target[j].name==toMatch[i]){
               found.push(target[j].price);
           }
       }
   }

//    for(let i=0; i< found.length;i++){
//      total+=found[i]
//    }

return found

}

export const add= (holder)=>{
    let total=0
    for(i=0;i<holder.length;i++){
        total+=holder[i]
    }
    return total
}

