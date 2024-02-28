import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/MainSliderTwo/MainSliderTwo";
import TourDetailsPage from "@/components/TourDetails/TourDetailsPage";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetchProgramDetails } from "src/api";

const ProgramDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState();
  useEffect(() => {
    if(id) {
        fetchData();
    }
  }, [id])
  
  const fetchData = async () => {
    const result = await fetchProgramDetails(id);
    setData(result?.data);
  };

  return (
    <Layout pageTitle="Program Details">
      {/* <MainSliderTwo /> */}
      <TourDetailsPage data={data}/>
    </Layout>
  );
};

export default ProgramDetail;
