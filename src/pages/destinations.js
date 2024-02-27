import DestinationsPage from "@/components/DestinationsPage/DestinationsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React, { useEffect, useState } from "react";
import { fetchHomeData } from "src/api";

const Destinations = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const result = await fetchHomeData();
      setData(result?.data);
    } catch(err) {
      console.log("error", err);
    }
  }
  return (
    <Layout pageTitle="Destinations">
      <PageHeader title="Destinations" />
      <DestinationsPage data={data}/>
    </Layout>
  );
};

export default Destinations;
