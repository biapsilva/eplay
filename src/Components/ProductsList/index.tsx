import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <Container>
    <h2>{title}</h2>
    <List>
      <Product />
    </List>
  </Container>
)

export default ProductsList
