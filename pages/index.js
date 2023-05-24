import Head from 'next/head'
import { getBackground, getHeaders, getLogo, getMenu } from '../lib/api'
import Navbar from '../components/Navbar/Navbar'
import Menu from '../components/Menu/Menu'
import { motion } from 'framer-motion'
import Footer from '../components/Footer/Footer'

export default function Home(props) {
  const headers = props.headers.data.headersCollection.items
  console.log(headers[0].paragraph)
  const logo = props.logo.data.logo
  const background = props.background.data.backgroundImage.background.url
  const menu = props.menu
  return (
    <div>
      <Head>
        <title>Charlees at home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/small-logo.png" />
      </Head>
      <Navbar logo={logo} />
      <main className='bg-gray-900'>
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content flex-col my-44">
            <div className="max-w-md text-white">
              <h1 className="mb-5 text-7xl font-bold">{headers[0].firstHeader}</h1>
              <p className="mb-5 text-2xl">{headers[0].description}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="btn glass text-white">
                <a href='https://charlees-heat-at-home.square.site/' target='_blank'>Order Now</a>
              </motion.button>
            </div>
            <p className="mb-5 text-sm text-white my-10 bg-gray-900 bg-opacity-50 rounded-xl p-3">
            Our mission at Charlee’s is to provide high quality food at affordable prices. The Heat at Home branch of Charlee’s provides much larger portions with savings to match. Everything is sold cold with simple heating instructions. In order to ensure our high standards all Heat at Home items are made to order so please place your order 20-30 minutes before pickup.
            <br/><br/>
            EBT is accepted on all (in person) Heat at Home purchases. We are unable to accept EBT online so if that is your preferred purchasing method please call in your order and pay when you pick it up.
            <br/><br/>
            <motion.button
                whileHover={{ scale: 1.1 }}
                className="rounded-lg glass text-white p-2">
                  <a href='tel:4352263635'>(435)226-3635</a>
              </motion.button>
            </p>
          </div>

        </div>
        <div className='container mx-auto py-24'>
          <Menu menu={menu} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export async function getServerSideProps({ preview = true }) {
  const headers = (await getHeaders(preview)) ?? []
  const logo = (await getLogo(preview)) ?? []
  const menu = (await getMenu(preview)) ?? []
  const background = (await getBackground(preview)) ?? []

  return {
    props: { headers, logo, menu, background },
  }
}
