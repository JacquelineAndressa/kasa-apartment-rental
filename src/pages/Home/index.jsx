import Banner from '../../components/Banner'
import Card from '../../components/Card'
import bannerHome from '../../assets/banner-home.jpg'
import logements from '../../data/logements.json'
import './Home.scss'

function Home() {
  return (
    <div>
      <Banner image={bannerHome} text="At home, everywhere, and anywhere" />
      <section className="cards-container">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </div>
  )
}

export default Home
