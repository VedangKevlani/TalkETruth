import Head from 'next/head';
import styles from '../styles/Landing.module.css';
import VoiceField from '../components/VoiceField';

export default function Home() {
  return (
    <>
      <Head>
        <title>Talk e Truth</title>
        <meta
          name="description"
          content="Build English speaking confidence through reading aloud — without erasing Jamaican identity."
        />
      </Head>

      <main className={styles.container}>
<nav className={styles.nav}>
  <div className={styles.navLeft}>
    <img
      src="/talketruth.png"
      alt="Talk e Truth logo"
      className={styles.logo}
    />

    <div className={styles.brandBlock}>
      <span className={styles.brand}>Talk E Truth</span>
    </div>
  </div>

  <ul className={styles.navLinks}>
    <li><a href="/">Home</a></li>
    <li><a href="/how-it-works">How It Works</a></li>
    <li><a href="/who-its-for">Who It’s For</a></li>
    <li><a href="/our-philosophy">Our Philosophy</a></li>
    <li><a href="/pilot">Pilot</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>


        {/* HERO */}
        <section className={styles.hero}>
          <VoiceField /> 
          <h1>
            Confidence in Public Speaking.  
            <br />
            <span>Without losing your voice.</span>
          </h1>

          <p>
            Talk e Truth helps students and professionals build real English
            public speaking confidence through reading aloud — while fully respecting
            Jamaican accents, rhythms, and speech differences.
          </p>

          <div className={styles.cta}>
            <button>Explore the Idea</button>
            <button className={styles.secondary}>Pilot with Us</button>
          </div>
        </section>

        {/* VALUE PROPS */}
        <section className={styles.values}>
          <div>
            <h3>Built for Jamaican Voices</h3>
            <p>
              Parish intonations, Patois influence, pauses, and natural rhythm
              are respected — never corrected or erased.
            </p>
          </div>

          <div>
            <h3>Confidence, Not Perfection</h3>
            <p>
              We measure comfort, flow, and presence — not accents or
              “foreign-sounding” speech.
            </p>
          </div>

          <div>
            <h3>Designed for Classrooms & Life</h3>
            <p>
              From primary schools to interviews, debates, and conferences.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className={styles.footer}>
          <p>
            © {new Date().getFullYear()} Talk e Truth · Speak your voice. Own your confidence.
          </p>
        </footer>
      </main>
    </>
  );
}
