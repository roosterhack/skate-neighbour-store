import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import { client } from "../utils";

export const getStaticProps = async () => {
  const products = await client.product.fetchAll();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};

const Home: NextPage = ({ products }: any) => {
  return (
    <>
      <Hero />
      <ProductList products={products} />
    </>
  );
};

export default Home;
