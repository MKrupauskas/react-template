import React from 'react'

import styles from './app.module.scss'

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <header className={styles['app-header']}>
        <p>
          Edit <code>src/components/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default App
