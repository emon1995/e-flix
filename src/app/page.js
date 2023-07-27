
import HeroSection from './components/HeroSection';
import styles from './page.module.css'

const Home = () => {
  return (
    <main>
      <HeroSection title={"LET\'S WATCH MOVIE TOGETHER"} imageUrl={"/home.svg"} />
    </main>
  )
}

export default Home;