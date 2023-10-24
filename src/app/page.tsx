'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {
  useSelector,
  useDispatch,
  selectCount,
  increment,
  decrement,
} from '@/lib/redux'

export default function Home() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <span id="init">project start!</span>
        <div>
          <p>counter: {count}</p>
          <div>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
          </div>
        </div>
      </div>
    </main>
  )
}
