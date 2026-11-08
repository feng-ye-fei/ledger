function BillItem({type,amount,note}){
    return(
        <div>
            <span>{note}</span>
            <span>{type==='支出'?'-':'+'}{amount} 元</span>
        </div>
    )
}

export default BillItem