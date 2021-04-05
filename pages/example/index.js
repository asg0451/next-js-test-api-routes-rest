import useSwr from 'swr'
import Link from 'next/link'

export default function Example({data}) {
  return (
    <>
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
  return { props: { data } }
}
