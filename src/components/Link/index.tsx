import { Container } from "./styles";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, React.PropsWithChildren { }

export function Link({ children, ...props }: LinkProps) {
  return (
    <Container {...props}>
      {children}
    </Container>
  )
}
