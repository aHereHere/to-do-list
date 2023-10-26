
function Item(props)
{
    return (
        <div id={props.itemNo}>
            <h3>{props.itemNo+1}. {props.itemName}</h3>
            <button  onClick={()=>props.onClick(props.itemNo)}>Done!</button>
        </div>
    );
}
export default Item;