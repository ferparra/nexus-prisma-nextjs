import { gql, request } from 'graphql-request'

export async function getServerSideProps() {
  const query = gql`
    {
      frameworks {
        id
        name
      }
    }
  `
  const data = await request('http://localhost:3000/api/graphql', query)
  const { frameworks } = data
  return {
    props: {
      frameworks
    }
  }
}

export default function Home({ frameworks }) {
  return (
    <div>
      <ul>
        {frameworks.map((f) => (
          <li key={f.id}>{f.name}</li>
        ))}
      </ul>
    </div>
  )
}
