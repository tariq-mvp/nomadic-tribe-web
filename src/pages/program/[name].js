import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import ToursListPage from "@/components/ToursListPage/ToursListPage";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { fetchExplorePageData } from "src/api";

const Program = () => {
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
    setData(result?.data?.regionData?.filter((x) => x.title === name));
    setLoading(false);
  };

  return (
    <Layout pageTitle="Programs List">
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "300px" }}>
          <Spinner />
        </div>
      ) : (
        <>
          {data?.length > 0 ? (
            <>
          <PageHeader title="Programs List" page="Programs" />
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

export default Program;
