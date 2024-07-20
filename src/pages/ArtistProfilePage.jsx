import { useQuery } from "@tanstack/react-query";
import customFetch from "../utils/utils";
import imgPics from "../assets/img.jpg";

function ArtistProfilePage() {
  const { isPending, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await customFetch.get("/users");
      return data;
    },
  });

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      {data.map((items) => {
        const { id, name, email, website } = items;
        return (
          <article key={id}>
            <img src="" alt="profile pic" className="pro_img" />
            <h4>{name}</h4>
            <p>{email}</p>
            <h5>{website}</h5>
            <div>
              <a href="">Albums</a>
              <a href="">Tweets</a>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ArtistProfilePage;
