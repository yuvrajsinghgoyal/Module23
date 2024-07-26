// Object containing items with names, categories, and prices in USD
const items = [
    {
        name: "Iphone 15",
        category: "Mobile",
        priceUSD: 999,
    },
    {
        name: "Macbook Air",
        category: "Laptops",
        priceUSD: 1499,
    },
    {
        name: "Apple Watch",
        category: "Watches",
        priceUSD: 499,
    },
];

const exchange=90;
function UsdToInd(heee){
    return heee*exchange;
}

const anotherHee=items.map((item)=>({
    ...item,IndiaPrice:UsdToInd(item.priceUSD)
}))
console.log(anotherHee)