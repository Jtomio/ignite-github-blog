import { Container } from "./styles";

export function Box({ children }: React.PropsWithChildren) {
  return (
    <Container>
      {children}
    </Container>
  )
}
