
function Item(props)
{
    return (
        <div id={props.itemNo} onClick={()=>props.onClick(props.itemNo)}>
            <h3>{props.itemNo+1}. {props.itemName}</h3>
        </div>
    );
}
export default Item;