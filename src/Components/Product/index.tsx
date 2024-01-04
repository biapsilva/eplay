import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'
import jogo1 from '../../assets/images/resident.png'
import jogo2 from '../../assets/images/zelda.png'
import jogo3 from '../../assets/images/star_wars.png'
import jogo4 from '../../assets/images/diablo.png'

const Product = () => (
  <>
    <Card>
      <img src={jogo1} alt="Resident Evil 4" />
      <Titulo>Resident Evil 4 - Remake</Titulo>
      <Tag>Ação</Tag>
      <Tag>PS4</Tag>
      <Descricao>
        Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo
        eletrônico de survival horror e tiro em terceira pessoa desenvolvido e
        publicado pela Capcom, lançado originalmente para o GameCube em 2005. É
        o sexto jogo principal da franquia Resident Evil.
      </Descricao>

      <img src={jogo2} alt="Zelda" />
      <Titulo>The Legend of Zelda</Titulo>
      <Tag>Aventura</Tag>
      <Tag>PS5</Tag>
      <Descricao>
        The Legend of Zelda é uma série de jogos eletrônicos da Nintendo criada
        em 1986 por Shigeru Miyamoto e Takashi Tezuka. É centrado em jogos
        eletrônicos de ação e aventura e alguns elementos de RPG
      </Descricao>

      <img src={jogo3} alt="Star Wars" />
      <Titulo>STAR WARS Jedi: Survivor</Titulo>
      <Tag>Aventura</Tag>
      <Tag>PS4 e PS5</Tag>
      <Descricao>
        Star Wars Jedi: Survivor é um jogo de ação e aventura desenvolvido pela
        Respawn Entertainment e publicado pela Electronic Arts. Foi lançado em
        28 de abril de 2023, sendo disponível para PlayStation 5, Windows e Xbox
        Series X/S como uma continuação de Star Wars Jedi: Fallen Order.
      </Descricao>

      <img src={jogo4} alt="Diablo" />
      <Titulo>Diablo IV</Titulo>
      <Tag>Ação</Tag>
      <Tag>PS5</Tag>
      <Descricao>
        Diablo é uma série de videogames de ação e RPG desenvolvida pela
        Blizzard North e continuada pela Blizzard Entertainment após o
        fechamento do estúdio North em 2005. A série é composta por quatro jogos
        principais: Diablo, Diablo II, Diablo III e Diablo. 4.
      </Descricao>
    </Card>
  </>
)

export default Product
