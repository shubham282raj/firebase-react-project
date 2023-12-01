import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface CreateFormData {
  title: string;
  description: string;
}

export const CreateForm = () => {
  const [user] = useAuthState(auth);

  const schema = yup.object().shape({
    title: yup.string().required("You must add a title!"),
    description: yup.string().required("You must give a description!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, "posts");

  const onCreatePost = async (data: any) => {
    await addDoc(postsRef, {
      // title: data.title,
      // description: data.description,
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    });
  };

  return (
    <form onSubmit={handleSubmit(onCreatePost)} >
      <div className="createPostContainer">
        <input id="createPostTitleInput" placeholder="Title..." {...register("title")} />
        <p>{errors.title?.message}</p>
        <textarea id="createPostDescription" placeholder="Description..." {...register("description")} />
        <p>{errors.description?.message}</p>
        <input id="createPostSubmitButton" type="submit" />
      </div>
    </form>
  );
};
