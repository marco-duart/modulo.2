import api from "./api"
import { isAxiosError } from "axios"


export const GetQuestions = async () => {
    try {
        const response = await api.get("/questions/")
        return response.data
    } catch (error) {
        if(isAxiosError(error))
        {
            return error.response?.status
        }
        return "Não é um erro axios"
    }
}

export const PostQuestion = async (question: string, answer: string) => {
    try {
        await api.post("/questions/", { question, answer, },)
        return
    } catch (error) {
        if(isAxiosError(error))
        {
            return error.response?.status
        }
        return "Não é um erro axios"
    }
}

export const PutQuestion = async (id: number, question: string, answer: string) => {
    try {
        await api.put(`/questions/${id}`, { question, answer, },)
        return
    } catch (error) {
        if(isAxiosError(error))
        {
            return error.response?.status
        }
        return "Não é um erro axios"
    }
}

export const DeleteQuestion = async (id: number) => {
    try {
        await api.delete(`/questions/${id}`)
        return
    } catch (error) {
        if(isAxiosError(error))
        {
            return error.response?.status
        }
        return "Não é um erro axios"
    }
}