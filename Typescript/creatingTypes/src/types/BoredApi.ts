/* 
https://www.boredapi.com/api/activity
*/

type BoredApi = {
    activity: string
    type: string
    participants: number
    price: number
    link: string
    key: string
    accessibility: number
}

const boredApi: BoredApi = {
    activity:"Learn Javascript",
    type:"education",
    participants:1,
    price:0,
    link:"",
    key:"3469378",
    accessibility:0.9
}