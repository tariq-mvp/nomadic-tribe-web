import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import ToursListPage from "@/components/ProgramsListPage/ProgramsListPage";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { fetchExplorePageData } from "src/api";

const ChallengeProgram = () => {
  const router = useRouter();
  const { name } = router.query;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (name) {
      setLoading(true);
      fetchData();
    }
  }, [name]);

  const fetchData = async () => {
    const result = await fetchExplorePageData();
    console.log("result", result.data?.climateData)
    setData(result?.data?.climateData?.filter((x) => x.title === name));
    setLoading(false);
  };

  return (
    <Layout pageTitle="Climb Programs List">
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "300px" }}>
          <Spinner />
        </div>
      ) : (
        <>
          {data?.length > 0 ? (
            <>
          <PageHeader title="Climb Programs List" page="Programs" />
          <ToursListPage data={data} />
            </>
          ): (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "300px" }}>
              <h4>No Data Found</h4>
            </div>
          )}
        </>
      )}
    </Layout>
  );
};

export default ChallengeProgram;
