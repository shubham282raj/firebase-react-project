import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { string } from "prop-types";
import { Post } from "./Post";

export interface Posts {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

export const Main = () => {
  const [postsList, setPostsList] = useState<Posts[] | null>(null);
  const postsRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Posts[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div id="postsContainer">
      {postsList?.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
};
