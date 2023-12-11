// import { useEffect } from "react";
import { Button } from "@mui/material";
import { useGetSingleUserQuery } from "../redux/user/userApi";
import { decodedToken } from "../utils/jwtHelpers";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../utils/local-storage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const userId = getFromLocalStorage("accessToken");
  const token = userId && userId;

  useEffect(() => {
    if (!token) {
      console.log("hello");
      navigate("/signIn");
    }
  }, [navigate, token]);

  const decodedData = token && decodedToken(token);
  const id = decodedData?.userId;
  const { data } = useGetSingleUserQuery(id);
  const user = data && data?.data;

  const handleSignOut = () => {
    removeFromLocalStorage("accessToken");
    navigate("/signIn");
  };

  return (
    <div className='h-[100vh] flex justify-center items-center flex-col'>
      <h3>Hello {user?.username}</h3>
      <br />
      <h3 className='mb-10'>Email: {user?.email}</h3>
      <Button onClick={handleSignOut} variant='contained'>
        Sign Out
      </Button>
    </div>
  );
};

export default Home;
