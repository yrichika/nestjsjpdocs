'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function Top() {
  // TODO: とりあえず最初はリダイレクトにしておく
  useEffect(() => {
    redirect('/v10')
  }, [])
  // DELETE: ただのサンプルコードなので後で削除
  // const count = useSelector(selectCount)
  // const dispatch = useDispatch()
  return (
    <></>
    // <main>
    //   <div>
    //     <span id="init">project start!</span>
    //     <div>
    //       <p>counter: {count}</p>
    //       <div>
    //         <button onClick={() => dispatch(increment())}>increment</button>
    //         <button onClick={() => dispatch(decrement())}>decrement</button>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  )
}
