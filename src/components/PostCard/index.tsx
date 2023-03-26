import { Card, CardContent, Typography } from "@mui/material";

export interface PostProps {
  id: number
  title: string
  body: string
}

export function PostCard(props: PostProps) {
  return (
    <Card
      key={props.id}
      sx={{
        width: 275,
        height: 400
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography color="text.secondary">
          {props.body}
        </Typography>
      </CardContent>
    </Card>
  )
}
