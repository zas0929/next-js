import Layout from '../components/Layout'
import Image from "next/image";
import youtubeImg from "../public/youtube.png";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Image
        src={youtubeImg}
        width={500}
        height={350}
        alt="preview"
        placeholder="blur"
      />
    </Layout>
  )}

export default MyApp
