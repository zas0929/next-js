import Heading from "../components/Heading";
import Head from "next/head";
import Socials from "../components/Socials";

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { socials: data }
    }
  } catch {
    return {
      props: { socials: null }
    }
  }
};

const Home = ({ socials }) => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text="Home" />
    <p>Hello</p>
    <Socials socials={socials} />
  </div>
);

export default Home;