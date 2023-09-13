interface IData {
    "_id": string
    "title": string
    "content": string
    "column": string
    "userId": string
    "__v": number
}

type Props = {
    data: IData[]
}