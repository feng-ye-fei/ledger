function BillItem({type,amount,note,onDelete}){
    return(
        <div>
            <span>{note}</span>
            <span>{type==='支出'?'-':'+'}{amount} 元</span>
            <button type="button" onClick={onDelete}>删除</button>
        </div>
    )
}

export default BillItem