'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function Top() {
  // TODO: とりあえず最初はリダイレクトにしておく
  useEffect(() => {
    redirect('/' + process.env.NEXT_PUBLIC_LATEST_VERSION)
  }, [])
  return <></>
}
