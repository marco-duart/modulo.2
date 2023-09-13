import Item from "../Item"

const ItemList = (props: Props) => {
    return (
        <div>
            <Item schedule={props.schedule} />
        </div>
    )
}

export default ItemList