import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import bannerAbout from '../../assets/banner-about.jpg'
import './About.scss'

function About() {
  return (
    <div className="about">
      <Banner image={bannerAbout} />

      <section className="about__collapses">
        <Collapse title="Reliability">
          Listings posted on Kasa ensure complete reliability. The photos comply
          with the available rentals, and all information is verified regularly
          by our teams.
        </Collapse>

        <Collapse title="Respect">
          Kindness is one of Kasa's founding values. Any discriminatory behavior
          or disturbance of neighbors will result in exclusion from our
          platform.
        </Collapse>

        <Collapse title="Service">
          Our team is at your service for any questions or claims. We are
          committed to providing quick and quality responses to ensure the best
          experience for our users.
        </Collapse>

        <Collapse title="Security">
          Security is Kasa's priority, for both hosts and travelers. Each
          accommodation complies with security standards established by our
          services. By signaling any incident, our team is committed to acting
          quickly.
        </Collapse>
      </section>
    </div>
  )
}

export default About
