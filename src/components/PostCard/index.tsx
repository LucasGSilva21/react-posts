export interface PostProps {
  id: number
  title: string
  body: string
}

export function PostCard(props: PostProps) {
  return (
    <div key={props.id}>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  )
}
