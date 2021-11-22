import Link from 'next/link'
import Thing from '../components/Thing'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <div>
        <Link href="/test">Test &rarr;</Link>
      </div>
      <Thing />
      <Thing />
    </>
  )
}
