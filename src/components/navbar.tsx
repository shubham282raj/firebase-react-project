import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="header">
      <span className="navbar">
        <Link to={"/"}>Home</Link>
        {!user ? (
          <Link to={"/login"}>Login</Link>
        ) : (
          <Link to={"/createpost"}>Create Post</Link>
        )}
      </span>
      <span className="userNavInfo">
        {user && (
          <>
            <span id="userNavDisplayName">{user?.displayName}</span>
            <img
              id="userNavDisplayImg"
              src={user?.photoURL || " "}
              height="30px"
            />
            <button onClick={logOut}>Log Out</button>
          </>
        )}
      </span>
    </div>
  );
};
