function BillItem({type,amount,note,onDelete}){
    return(
        <div className={type==='支出'?'expense':'income'}>
            <div className="left">
                <span> {note} </span>
                <span> {type==='支出'?'-':'+'} <span className="amount">{amount.toFixed(2)}</span> 元 </span>
            </div>
            <button className="deletebtn" type="button" onClick={onDelete}> 删除 </button>
        </div>
    )
}

export default BillItem