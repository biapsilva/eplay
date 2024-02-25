import { useParams } from 'react-router-dom'
import Hero from '../../Components/Hero'
import Section from '../../Components/Section'
import Gallery from '../../Components/Gallery'
import Loader from '../../Components/Loader'
import { useGetGameQuery } from '../../Services/api'

type GameParams = {
  id: string
}
const Product = () => {
  const { id } = useParams() as GameParams
  const { data: game } = useGetGameQuery(id)
  if (!game) {
    return <Loader />
  }
  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b> {game.details.publisher} <br />
          <b>Idioma:</b> o jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')} e as legendas podem ser ajustadas
          nas configurações do jogo.
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
