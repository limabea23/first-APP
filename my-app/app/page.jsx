import Header from '../components/Header'
import Card from '../components/Card'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Header props="PEDRI⚽NATION"/>
      <main>

        <aside>
          <Card title="About" content="Pedro González López (born 25 November 2002), more commonly known as Pedri, is a Spanish professional footballer who plays as a midfielder for La Liga club Barcelona and the Spain national team. Considered one of the best players in the world, Pedri is known for his exceptional vision, technical ability, precise passing, and dribbling."/>
          <Card title="Early Life" content="Born in Bajamar, Tenerife, Canary Islands, Pedri's family moved to Tegueste, a nearby town, when he was 3. Pedri joined UD Tegueste, starting as a centre-back. At 13, Pedri signed for CF Juventud Laguna, where he played until 2018."/>
          <Card title="Style of play" content="Pedri usually plays in a free midfield role, which allows him to roam the pitch; he likes to occupy central areas and operate between the lines, although he is also capable of moving out wide and running towards the touchline to create chances for teammates. He even drops deep to the defence to pick up the ball."/>
        </aside>

        <div className='imagem'>
          <img src="/pedri-com-bola.jpg" alt="cartaz com foto do shawn mendes"></img>
        </div>

      </main>
      <Footer />
    </div>
  );
}
