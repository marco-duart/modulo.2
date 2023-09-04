type AlternativesType = 0 | 1 | 2 | 3

type QuestionType = {
    id: number
    question: string
    options: string[]
    correctOption: AlternativesType
}

type QuestionsType = QuestionType[]