export interface ICar{
    color:string
    model: string
    topSpeed? : number
}

const car2 :ICar = {
    color:'blue',
    model: 'ford',
}

const car1: ICar = {
    color: 'red',
    model: 'Kia',
    topSpeed: 250
}

const multiply = (x: number, y: number) : number => {
    return x * y;
}
 export const cars = [car1,car2]

