
type PropsType = {
    questions: QuestionsType
}

const QuestionsList = (props: PropsType) => {
    return (
        <div>
            <ol>
                {props.questions.map(item => (
                    <li>{item.question}</li>
                ))}
            </ol>
        </div>
    )
}

export default QuestionsList