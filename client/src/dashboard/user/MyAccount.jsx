import { useContext, useState } from "react";
import { AuthContext } from "./../../context/AuthContext.jsx";
import MyBookings from "./MyBookings.jsx";
import UserProfileSettings from "./UserProfileSettings.jsx";
import useGetProfile from "../../hooks/useFetchData.jsx";
import { BASE_URL } from "../../config.js";
import Loading from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const { dispatch } = useContext(AuthContext);
  const [tab, setTab] = useState("bookings");
  const navigate = useNavigate();

  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={error} />;
  }

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="pb-[50px] px-[30px] rounded-md">
            <div className="flex items-center justify-center">
              <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                <img
                  src={userData?.photo}
                  alt="user-img"
                  className="w-full h-full rounded-full"
                />
              </figure>
            </div>

            <div className="text-center mt-4">
              <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                {userData?.name}
              </h3>
              <p className="text-textColor text-[15px] leading-6 font-medium">
                {userData?.email}
              </p>
              <p className="text-textColor text-[15px] leading-6 font-medium">
                Blood Group:
                <span className="ml-2 text-headingColor text-[16px] leading-8">
                  {userData?.bloodGroup}
                </span>
              </p>
            </div>

            <div className="mt-[50px] md:mt-[100px]">
              <button
                onClick={handleLogout}
                className="w-full bg-primaryColor p-3 text-[16px] leading-7 rounded-md text-white"
              >
                Logout
              </button>
              <button className="w-full bg-red-500 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
                Delete Account
              </button>
            </div>
          </div>

          <div className="md:col-span-2 md:px-[30px]">
            <div>
              <button
                onClick={() => setTab("bookings")}
                className={`p-2 mr-5 px-5 rounded-md  font-semibold text-[16px] border border-solid ${
                  tab === "bookings"
                    ? "bg-primaryColor text-white"
                    : "text-headingColor border-primaryColor"
                } `}
              >
                My Bookings
              </button>
              <button
                onClick={() => setTab("settings")}
                className={`py-2 mr-5 px-5 rounded-md  font-semibold text-[16px] border border-solid ${
                  tab === "settings"
                    ? "bg-primaryColor text-white"
                    : "text-headingColor border-primaryColor"
                } `}
              >
                Profile Settings
              </button>
            </div>

            {tab === "bookings" ? (
              <MyBookings />
            ) : (
              <UserProfileSettings user={userData} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
