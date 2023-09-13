import ItemList from "../../components/ItemList"


const HomePage = (props: Props) => {
    return (
        <div>
            <ItemList schedule={props.schedule} />
        </div>
    )
}

export default HomePage