const Models = [
    {
        name: "Mercedes",
        engine: 'petrol',
        properties: {
            transmission: 'Automatic',
            color: 'Blue'
        }
    },
    {
        name: "Tesla",
        engine: 'electric',
        properties: {
            transmission: 'Automatic',
            color: 'Blue'
        }
    }
]

// function useModels(){
//     Models
// }


const [Mercedes, properties] = Models
// console.log(Tesla)
// console.log(Mercedes)


let period = new Date().getDay()
console.log(period)
