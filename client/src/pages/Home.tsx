import React, { useEffect, useState } from 'react';
import { Card, FormField, Loader } from '../components';

const RenderCards = ({ data, title }: IRenderCards) => {
  if (data?.length > 0) return (
    <>
      {
        data.map((post: any) => <Card key={post._id} {...post} />)
      }
    </>
  )
  return <h2 className="mt-5 font-bold text-lightblue text-xl uppercase">{title}</h2>
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState<ICard[]>([]);
  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = useState<ICard[]>([]);
  const [searchTimeout, setSearchTimeout] = useState<number>();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        const res = await fetch("http://localhost:8080/api/v1/post", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.ok) {
          const result = await res.json();
          setAllPosts(result.data.reverse());
        }
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const handleSearchChange = (e: any) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResults = allPosts?.filter((item) => item?.name.toLowerCase().includes(searchText.toLowerCase()) || item?.prompt.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedResults(searchResults);
      }, 500)
    )
    
  }

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-gunmetal text-4xl">The Community Showcase</h1>
        <p className="mt-2 text-silver text-base max-w-[500px]">Browse through a collection of imaginative and visually stunning images generated by DALL-E ai.</p>
      </div>
      <div className="mt-16">
        <FormField
          labelName="Search Posts"
          type="text"
          name="text"
          placeholder="Search Posts"
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>
      <div className="mt-10">
        {
          loading ? (
            <div className="flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <>
              {
                searchText ? (
                  <h2 className="font-medium text-silver text-xl mb-3">
                    Showing results for <span className="text-gunmetal">{searchText}</span>
                  </h2>
                ) : null
              }
              <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                {
                  searchText ? (
                    <RenderCards data={searchedResults} title="No search results found" />
                  ) : (
                    <RenderCards data={allPosts} title="No posts found" />
                  )
                }
              </div>
            </>
          )
        }
      </div>
    </section>
  )
}

export default Home;