import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Counter from './Counter.jsx'
import BillItem from './BillItem.jsx'

function App() {
  const [count, setCount] = useState(100)
  const [note,setNote]=useState('')
  const [amount,setAmount]=useState('')
  const [bills,setBills]=useState([
    { id:1 , type:'支出' , amount:25 , note:'午餐'},
    { id: 2, type: '收入', amount: 1500, note: '家教' },
    { id: 3, type: '支出', amount: 7, note: '奶茶' },
    { id: 4, type: '支出', amount: 11.5, note: '晚餐' },
  ])

  function addBill(){
    if(note===''||amount===''){
      alert('备注和金额都要填！')
      return
    }
    const newBill={
      id:Date.now(),// 用当前时间戳当唯一 id
      type:'支出',
      amount:amount,
      note:note,
    }
    setBills([...bills,newBill])// 换新格子 → 列表自动多一条
    // 清空输入框
    setNote('')
    setAmount('')
  }

  return (
    <>
      <div>
        <input value={note} onChange={e=>setNote(e.target.value)} placeholder="备注（如：午餐）" />
        <input value={amount} onChange={e=>setAmount(e.target.value)} placeholder="金额" type='number'/>
        <button type='button' onClick={addBill}>记一笔</button>
      </div>

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <Counter label="点赞" />
        <Counter label="点踩" />
        {bills.map(b=>(
          <BillItem key={b.id} type={b.type} amount={b.amount} note={b.note} />
        ))}
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
