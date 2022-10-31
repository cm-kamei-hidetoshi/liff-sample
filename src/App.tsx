import styles from './App.module.css'

function App() {
    const items = [...Array(100)]

    console.log(items)

  return (
      <div>
        <h1>テスト</h1>
          {items.map((value, index)=>{
              return <div className={styles.content}>{index}</div>
          })}
        <div className={styles.footer}>フッター</div>

      </div>


  )
}

export default App
