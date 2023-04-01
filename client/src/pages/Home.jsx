import React from "react";
import { useState, useEffect } from "react";
import { Card, FormField, Loader } from "../components";

function Home() {
  const [loading, setloading] = useState(false);
  const [allPosts, setallPosts] = useState(null);
  const [searchText, setsearchText] = useState("");

  const RenderCards = ({ data, title }) => {
    if (data.lenght > 0) {
      return data.map((post) => <Card key={post._id} {...post} />);
    }

    return (
      <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">
        {title}
      </h2>
    );
  };
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-500px">
          Browse Through Collection of Posts
        </p>
      </div>
      <div className="mt-16">
        <FormField />
      </div>
      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                showing results for{" "}
                <span className="text-[#222328]">{searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards data={[]} title="no search results" />
              ) : (
                <RenderCards data={[]} title="no posts exist" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Home;