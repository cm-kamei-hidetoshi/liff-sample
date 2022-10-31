import styles from './App.module.css'

function App() {
    const items = [...Array(100)]

    console.log(items)

    return (
        <div className={styles.root}>
            <h1>ヘッダー</h1>
            <div className={styles.content}>
                {items.map((value, index) => {
                    return <div className={styles.item}>{index}</div>
                })}
            </div>
            <div className={styles.footer}>フッター</div>

        </div>


    )
}

export default App
