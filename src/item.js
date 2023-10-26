
function Item(props)
{
    return (
        <div id={props.itemNo}>
            <h5>{props.itemNo+1}. {props.itemName} <button className="btn btn-outline-primary"  onClick={()=>props.onClick(props.itemNo)}>Done!</button></h5>
            
        </div>
    );
}
export default Item;