import { useState,useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Counter from './Counter.jsx'
import BillItem from './BillItem.jsx'

const DEFAULT_BILLS = [
  { id: 1, type: '支出', amount: 25, note: '午餐' },
  { id: 2, type: '收入', amount: 1500, note: '家教' },
  { id: 3, type: '支出', amount: 7, note: '奶茶' },
  { id: 4, type: '支出', amount: 11.5, note: '晚餐' },
]

function App() {
  const [note,setNote]=useState('')
  const [amount,setAmount]=useState('')
  const [type,setType]=useState('支出')
  const [bills,setBills]=useState(()=>{
    const saved=localStorage.getItem('bills')
    return saved?JSON.parse(saved):DEFAULT_BILLS
  })

  const totalIncome=bills.filter(b=>b.type==='收入').reduce((sum,b)=>sum+b.amount,0)
  const totalExpense=bills.filter(b=>b.type==='支出').reduce((sum,b)=>sum+b.amount,0)
  const balance=totalIncome-totalExpense

  function addBill(){
    const num=parseFloat(amount)
    if(note===''||isNaN(num)||num<=0){
      alert('请填写备注，金额要大于0！')
      return
    }
    const newBill={
      id:Date.now(),// 用当前时间戳当唯一 id
      type,
      amount:num,
      note,
    }
    setBills([...bills,newBill])// 换新格子 → 列表自动多一条
    // 清空输入框
    setNote('')
    setAmount('')
  }

  function deleteBill(id){
    setBills(bills.filter(b=>b.id!==id))
  }

  useEffect(()=>{
    localStorage.setItem('bills',JSON.stringify(bills))
  },[bills])

  return (
    <><header className='top'>
      <h1 className='title'>记帐本</h1>
      <div className='summary-bar'>
        <div>收入 {totalIncome} 元</div>
        <div>支出 {totalExpense} 元</div>
        <div className="summary-item">结余 <span className={balance>0?'zhengshu':'fushu'}>{balance} </span>元</div>
      </div>
    </header>
    <main>
      <section className='form-row'>
        <div className='left'>
          <input value={note} onChange={e=>setNote(e.target.value)} placeholder="备注（如：午餐）" className='note'/>
          <input value={amount} onChange={e=>setAmount(e.target.value)} placeholder="金额" type='number' className='amount'/>
        </div>
        <div className='center'>
          <button type='button' onClick={()=>setType('支出')} className={type==='支出'?'active':'btn'}>支出</button>
          <button type='button' onClick={()=>setType('收入')} className={type==='收入'?'active':'btn'}>收入</button>
        </div>
        <div className='right'>
          <button type='button' onClick={addBill} className='jybbtn'>记一笔</button>
        </div>
      </section>
      <section className="bill-list">
        {/* <Counter label="点赞" />
        <Counter label="点踩" /> */}

        {bills.map(b=>(
          <BillItem key={b.id} type={b.type} amount={b.amount} note={b.note} onDelete={()=>deleteBill(b.id)}/>
        ))}
      </section>
    </main>
    </>
  )
}

export default App
