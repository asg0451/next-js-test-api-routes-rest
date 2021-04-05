import useSwr from 'swr'
import Link from 'next/link'

export default function Example({data, now}) {
  const now_date = new Date(now)
  return (
    <>
      <div>
      <span>rendered at: {now_date.toLocaleString()}</span>
      </div>
    <Link href="/">home</Link>
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>
          {todo.title}
        </li>
      ))}
    </ul>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const data = await res.json()
  const now = Date.now()
  return { props: { data , now} }
}
