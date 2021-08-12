import React from "react";
import mic from "../assets/mic.png";
import pic1 from "../assets/newpodcasts/sibling-rivalry@2x 2.png";
import pic2 from "../assets/newpodcasts/sibling-rivalry@2x 3.png";
import pic3 from "../assets/newpodcasts/sibling-rivalry@2x 4.png";
import pic4 from "../assets/newpodcasts/sibling-rivalry@2x 5.png";
import pic5 from "../assets/newpodcasts/sibling-rivalry@2x 6.png";
import pic6 from "../assets/newpodcasts/sibling-rivalry@2x 7.png";
import pic7 from "../assets/newpodcasts/sibling-rivalry@2x 8.png";
import vector from "../assets/svgs/Vector.svg";
import vector1 from "../assets/svgs/Vector-1.svg";
import daGay from "../assets/discord/EricdaGay.png";
import racist from "../assets/discord/racist.png";
import kevin from "../assets/discord/kevin.png";
import one from "../assets/discord/audience/one.png";
import two from "../assets/discord/audience/two.png";
import three from "../assets/discord/audience/three.png";
import four from "../assets/discord/audience/four.png";
import five from "../assets/discord/audience/five.png";
import six from "../assets/discord/audience/six.png";
import seven from "../assets/discord/audience/seven.png";
import eight from "../assets/discord/audience/eight.png";

const LPodcasts = () => {
  const audience = [
    {
      name: "Jeremy",
      src: one.src,
    },
    {
      name: "Bobby",
      src: two.src,
    },
    {
      name: "Shawn",

      src: three.src,
    },
    {
      name: "Maria",

      src: four.src,
    },
    {
      name: "Charles",
      src: seven.src,
    },
    {
      name: "Dennis",
      src: six.src,
    },
    {
      name: "Doris",
      src: five.src,
    },
    {
      name: "Carolyn",
      src: eight.src,
    },
  ];

  const host = [
    {
      name: "Eric Zhu",
      bg: "#564A4A",
      img: `${daGay.src}`,
    },
    {
      name: "Kevin",
      bg: "#D9BFCD",
      img: `${kevin.src}`,
    },
    {
      name: "Edmund",
      bg: "#DEDEDE",
      img: `${racist.src}`,
    },
  ];
  return (
    <div className="mt-[20rem] w-full">
      <h2 className="w-4/5 mx-auto font-normal text-[2rem] lg:hidden">
        Our Latest Episodes
      </h2>
      {/* <ScrollAnimation animateIn="fadeInDown" animateOnce="true"> */}
      <h2 className="w-max mx-auto font-normal text-[2rem] hidden lg:block">
        Get inspired with our latest episodes out there
      </h2>
      {/* </ScrollAnimation> */}
      {/* <ScrollAnimation animateIn="fadeInUp"> */}
      <div className="whitespace-nowrap space-x-4 w-4/5 lg:w-[90%] mt-[2rem] lg:mt-[5rem] mx-auto">
        <img
          alt="img"
          src={pic1.src}
          className="w-[45%] max-w-[171px] inline"
        />
        <img
          alt="img"
          src={pic2.src}
          className="w-[45%] max-w-[171px] inline"
        />
        <img
          alt="img"
          src={pic3.src}
          className="w-[45%] max-w-[171px] inline"
        />
        <img
          alt="img"
          src={pic4.src}
          className="w-[45%] max-w-[171px] inline"
        />
        <img
          alt="img"
          src={pic5.src}
          className="w-[45%] max-w-[171px] inline"
        />
        <img
          alt="img"
          src={pic6.src}
          className="w-[45%] max-w-[171px] inline"
        />
        <img
          alt="img"
          src={pic7.src}
          className="w-[45%] max-w-[171px] inline"
        />
        <img
          alt="img"
          src={pic2.src}
          className="w-[45%] max-w-[171px] inline"
        />
        <img
          alt="img"
          src={pic3.src}
          className="w-[45%] max-w-[171px] inline"
        />
      </div>
      {/* </ScrollAnimation> */}
      <div className="lg:hidden mt-[5rem] flex justify-center">
        <img alt="img" src={vector.src} className="w-full" />
        <img alt="img" src={vector1.src} className="w-full" />
      </div>
      <div className="flex  flex-col lg:flex-row w-[100%] mx-auto lg:justify-around lg:items-center lg:mt-[15rem]">
        <h3 className="w-[90%] lg:hidden mx-auto font-semibold text-[1.7rem]">
          Listen us live on Discord
        </h3>
        {/* <ScrollAnimation animateIn="fadeInLeft" animateOnce="true"> */}
        <div className="hidden lg:flex flex-col text-[2.5rem]">
          <p>Get the chance</p>
          <p>to listen us live</p>
          <p>
            only on{" "}
            <span className="text-[#0075FF] underline cursor-pointer">
              discord
            </span>
          </p>
        </div>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="fadeInRight" animateOnce="true"> */}
        <div className="lg:mt-0 mt-8 w-[90%] mx-auto lg:mx-[0rem] lg:max-w-[600px]  max-w-[451.8px]">
          <div className="bg-[#212121]   mx-auto rounded-md p-[0.5rem]">
            {/* podbox */}
            <h3 className="mb-2">Short talk with a great founder Kevin Ross</h3>
            <div className="flex justify-start w-[90%] mx-auto space-x-2">
              {host.map(({ bg, name, img }) => {
                return (
                  <div
                    className={` py-2 rounded-md w-full max-w-[139px]`}
                    style={{ backgroundColor: `${bg}` }}
                  >
                    <img
                      alt="img"
                      src={img}
                      className="w-[3rem] mx-auto h-[3rem] rounded-full "
                    />
                    <div className=" w-[95%] mx-auto mt-4 text-center rounded-md bg-[#BD9FAF] p-2">
                      {name}
                    </div>
                  </div>
                );
              })}
            </div>
            <hr className="w-[90%] mx-auto my-4" />
            <p className="text-[#929292] text-[0.9rem] w-[90%] mx-auto">
              in audience - {audience.length}
            </p>
            <div className="w-[90%] mx-auto justify-center flex flex-wrap">
              {audience.map(({ name, src }) => {
                return (
                  <div className="mr-4 p-2 mb-2">
                    <img
                      alt="img"
                      src={src}
                      className="w-[3rem] mb-2 mx-auto h-[3rem]  rounded-full "
                    />
                    <p>{name}</p>
                  </div>
                );
              })}
            </div>
            <div className="lg:hidden flex justify-between bg-gray-200 bg-opacity-10 rounded-lg p-4 items-center ">
              <h3 className="text-[1.5rem]">🔥 Fireside</h3>
              <button className="bg-[#0075FF] text-[1.3rem] rounded-md py-1 px-[1.8rem]">
                Join
              </button>
            </div>
          </div>
        </div>
        {/* </ScrollAnimation> */}
      </div>
      <div>
        <div className="hidden justify-between lg:flex mt-[6rem]">
          <div className="ml-[10vw] flex flex-col justify-center font-bold text-3xl ">
            <h3>Catch Our Latest Episodes On </h3>
            {/* Color SVGS  */}
            <div className="hidden mt-[2rem] justify-around items-center lg:flex">
              <svg
                className="w-[4rem]"
                viewBox="0 0 108 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53.9997 0C24.1771 0 0 24.177 0 54.0003C0 83.8249 24.1771 108 53.9997 108C83.8255 108 108 83.8249 108 54.0003C108 24.179 83.8255 0.00257935 53.999 0.00257935L53.9997 0ZM78.7636 77.884C77.7963 79.4703 75.72 79.9733 74.1337 78.9995C61.4552 71.255 45.4944 69.501 26.6977 73.7957C24.8864 74.2084 23.0809 73.0734 22.6682 71.2614C22.2536 69.4494 23.384 67.6439 25.1998 67.2312C45.7698 62.5296 63.4141 64.5551 77.648 73.254C79.2343 74.2277 79.7373 76.2977 78.7636 77.884ZM85.373 63.1783C84.1543 65.1612 81.5621 65.7867 79.5825 64.568C65.0675 55.644 42.9416 53.0601 25.7731 58.2718C23.5465 58.9443 21.1948 57.6895 20.519 55.4667C19.8484 53.2401 21.1039 50.8928 23.3266 50.2157C42.9377 44.2651 67.3179 47.1476 83.9867 57.3909C85.9663 58.6096 86.5918 61.2019 85.373 63.179V63.1783ZM85.9405 47.8672C68.5366 37.5298 39.8225 36.5793 23.206 41.6226C20.5377 42.4319 17.716 40.9255 16.9073 38.2572C16.0987 35.5875 17.6038 32.7676 20.274 31.9564C39.3486 26.1657 71.0579 27.2845 91.0952 39.1799C93.5004 40.6044 94.2871 43.7041 92.8621 46.101C91.4434 48.5011 88.3354 49.2923 85.9431 47.8672H85.9405Z"
                  fill="#1ED760"
                />
              </svg>
              {/* another one */}
              <svg
                className="w-[5rem]"
                viewBox="0 0 134 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M117 67C117 94.6149 94.6149 117 67 117C39.3851 117 17 94.6149 17 67C17 39.3851 39.3851 17 67 17C94.6149 17 117 39.3851 117 67Z"
                  fill="#0075FF"
                />
                <path
                  d="M39.001 60.808C36.7871 60.808 35 62.5947 35 64.808V69.1547C35 69.6799 35.1035 70.2001 35.3046 70.6854C35.5056 71.1707 35.8003 71.6116 36.1719 71.9831C36.5434 72.3545 36.9845 72.6492 37.4699 72.8502C37.9553 73.0512 38.4756 73.1547 39.001 73.1547C39.5264 73.1547 40.0467 73.0512 40.5321 72.8502C41.0175 72.6492 41.4586 72.3545 41.8301 71.9831C42.2017 71.6116 42.4964 71.1707 42.6974 70.6854C42.8985 70.2001 43.002 69.6799 43.002 69.1547V64.808C43.002 62.5947 41.2149 60.808 39.001 60.808ZM94.999 60.808C92.7851 60.808 90.998 62.5947 90.998 64.808V69.1547C90.998 70.2155 91.4195 71.2329 92.1699 71.9831C92.9202 72.7332 93.9379 73.1547 94.999 73.1547C96.0601 73.1547 97.0778 72.7332 97.8281 71.9831C98.5785 71.2329 99 70.2155 99 69.1547V64.808C99 62.5947 97.2129 60.808 94.999 60.808ZM52.8098 73.8987C50.5959 73.8987 48.8088 75.6853 48.8088 77.8987V82.2453C48.8088 83.3062 49.2303 84.3236 49.9807 85.0737C50.731 85.8239 51.7487 86.2453 52.8098 86.2453C53.8709 86.2453 54.8886 85.8239 55.6389 85.0737C56.3893 84.3236 56.8108 83.3062 56.8108 82.2453V77.9253C56.8108 75.712 55.0237 73.9253 52.8098 73.9253V73.8987ZM52.8098 47.72C50.5959 47.72 48.8088 49.5067 48.8088 51.72V66.0053C48.8088 67.0662 49.2303 68.0836 49.9807 68.8337C50.731 69.5839 51.7487 70.0053 52.8098 70.0053C53.8709 70.0053 54.8886 69.5839 55.6389 68.8337C56.3893 68.0836 56.8108 67.0662 56.8108 66.0053V51.688C56.8108 49.4747 55.0237 47.688 52.8098 47.688V47.72ZM81.1849 47.72C78.971 47.72 77.1839 49.5067 77.1839 51.72V56.0933C77.1839 57.1542 77.6054 58.1716 78.3557 58.9218C79.1061 59.6719 80.1238 60.0933 81.1849 60.0933C82.246 60.0933 83.2637 59.6719 84.014 58.9218C84.7643 58.1716 85.1859 57.1542 85.1859 56.0933V51.72C85.1859 49.5067 83.3988 47.72 81.1849 47.72ZM67 35C64.7861 35 62.999 36.7867 62.999 39V43.3467C62.999 44.4075 63.4205 45.4249 64.1709 46.1751C64.9212 46.9252 65.9389 47.3467 67 47.3467C68.0611 47.3467 69.0788 46.9252 69.8291 46.1751C70.5795 45.4249 71.001 44.4075 71.001 43.3467V39C71.001 36.7867 69.2139 35.0027 67 35.0027V35ZM67 86.6133C64.7861 86.6133 62.999 88.4 62.999 90.6133V94.9866C62.9972 95.5119 63.099 96.0324 63.2985 96.5184C63.4979 97.0044 63.7911 97.4463 64.1614 97.819C64.5317 98.1917 64.9718 98.4878 65.4566 98.6904C65.9413 98.893 66.4612 98.9982 66.9867 99C67.5121 99.0017 68.0327 98.9 68.5188 98.7006C69.0049 98.5012 69.4469 98.208 69.8197 97.8378C70.1925 97.4676 70.4887 97.0277 70.6913 96.543C70.894 96.0584 70.9992 95.5386 71.001 95.0133V90.64C71.001 88.4533 69.2139 86.64 67 86.64V86.6133ZM81.1875 64.0613C78.9737 64.0613 77.1865 65.8747 77.1865 68.0613V82.2693C77.1865 83.3302 77.6081 84.3476 78.3584 85.0977C79.1087 85.8479 80.1264 86.2693 81.1875 86.2693C82.2487 86.2693 83.2663 85.8479 84.0167 85.0977C84.767 84.3476 85.1885 83.3302 85.1885 82.2693V68.0587C85.1885 65.8453 83.4014 64.0587 81.1875 64.0587V64.0613ZM67 51.3413C64.7861 51.3413 62.999 53.1547 62.999 55.3413V78.616C62.999 79.6769 63.4205 80.6943 64.1709 81.4444C64.9212 82.1946 65.9389 82.616 67 82.616C68.0611 82.616 69.0788 82.1946 69.8291 81.4444C70.5795 80.6943 71.001 79.6769 71.001 78.616V55.368C71.001 53.1547 69.2139 51.368 67 51.368V51.3413Z"
                  fill="white"
                />
              </svg>
              <svg
                className="w-[5rem]"
                viewBox="0 0 134 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M94.7533 17H39.2467C26.9602 17 17 26.9602 17 39.2467V94.7533C17 107.04 26.9602 117 39.2467 117H94.7533C107.04 117 117 107.04 117 94.7533V39.2467C117 26.9602 107.04 17 94.7533 17Z"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M63.9467 104.547C60.9633 103.48 60.3233 102.03 59.1 93.5333C57.6767 83.6566 57.3667 77.5433 58.19 75.6066C59.2833 73.04 62.25 71.5833 66.4 71.5666C70.5167 71.55 73.51 73.02 74.61 75.6066C75.4367 77.54 75.1267 83.6566 73.7033 93.5333C72.7367 100.433 72.2033 102.177 70.87 103.35C69.0367 104.973 66.4367 105.423 63.97 104.55L63.9467 104.547ZM51.2033 94.4133C40.9033 89.3466 34.3033 80.7733 31.9033 69.3666C31.3033 66.4233 31.2033 59.4 31.77 56.7C33.27 49.45 36.1367 43.78 40.9033 38.7666C47.77 31.5266 56.6033 27.7 66.4367 27.7C76.17 27.7 84.97 31.4566 91.67 38.48C96.77 43.78 99.6367 49.39 101.103 56.78C101.603 59.24 101.603 65.9466 101.137 68.7133C99.6033 77.46 94.7367 85.4266 87.6367 90.78C85.1033 92.6933 78.9033 96.0333 77.9033 96.0333C77.5367 96.0333 77.5033 95.6533 77.67 94.1166C77.97 91.65 78.27 91.1366 79.67 90.55C81.9033 89.6166 85.7033 86.91 88.0367 84.57C92.07 80.57 95.0367 75.3366 96.4033 69.8366C97.27 66.4033 97.17 58.77 96.2033 55.2366C93.17 44.0033 84.0033 35.27 72.77 32.9366C69.5033 32.27 63.57 32.27 60.27 32.9366C48.9033 35.27 39.5033 44.4366 36.6367 55.97C35.87 59.1033 35.87 66.7366 36.6367 69.87C38.5367 77.5033 43.47 84.5033 49.9367 88.67C51.2033 89.5033 52.7367 90.37 53.37 90.6366C54.77 91.2366 55.07 91.7366 55.3367 94.2033C55.5033 95.7033 55.47 96.1366 55.1033 96.1366C54.87 96.1366 53.17 95.4033 51.37 94.5366L51.2033 94.4133ZM51.3367 80.8533C47.87 78.0866 44.8033 73.18 43.5367 68.3666C42.77 65.46 42.77 59.9333 43.57 57.0333C45.67 49.2066 51.4367 43.14 59.4367 40.29C62.17 39.3233 68.2367 39.1066 71.6033 39.85C83.2033 42.4333 91.4367 54.05 89.8367 65.5733C89.2033 70.2166 87.6033 74.03 84.77 77.5733C83.37 79.3633 79.97 82.3666 79.37 82.3666C79.27 82.3666 79.17 81.2333 79.17 79.8533V77.3333L80.9033 75.2666C87.4367 67.44 86.97 56.5066 79.8367 49.3333C77.07 46.54 73.87 44.9 69.7367 44.1433C67.07 43.65 66.5033 43.65 63.7033 44.11C59.4533 44.8033 56.16 46.45 53.2367 49.3433C46.07 56.4433 45.6033 67.4333 52.1367 75.2666L53.8567 77.3333V79.8666C53.8567 81.2666 53.7467 82.4 53.61 82.4C53.4767 82.4 52.51 81.7333 51.4767 80.9L51.3367 80.8533ZM62.9033 67.2433C59.9367 65.8633 58.3367 63.26 58.3033 59.8666C58.3033 56.8166 60.0033 54.1566 62.9367 52.6C64.8033 51.62 68.1033 51.62 69.97 52.6066C72.0033 53.6633 73.67 55.7133 74.3033 57.8533C76.2367 64.4266 69.27 70.1866 62.97 67.2433H62.9033Z"
                  fill="white"
                />
                <path
                  d="M66.9634 68.5368C71.5547 68.5368 75.2767 64.8148 75.2767 60.2235C75.2767 55.6322 71.5547 51.9102 66.9634 51.9102C62.372 51.9102 58.65 55.6322 58.65 60.2235C58.65 64.8148 62.372 68.5368 66.9634 68.5368Z"
                  fill="white"
                />
                <path
                  d="M67.76 71.7566C68.3366 71.8333 69.4833 71.9833 70.5433 72.3233C71.61 72.6566 72.5766 73.1799 73.33 73.7166C74.0633 74.2499 74.5966 74.8033 74.93 75.4766C75.2633 76.1499 75.43 76.9499 75.53 78.2599C75.5966 79.5733 75.5966 81.3933 75.2966 84.7933C74.9966 88.1833 74.3966 93.1533 73.93 96.3366C73.4633 99.5366 73.13 100.937 72.6966 101.97C72.2633 103.037 71.6966 103.737 71.0633 104.237C70.43 104.737 69.6966 105.037 68.9966 105.203C68.2966 105.37 67.6633 105.37 67.0633 105.37C66.4633 105.37 65.8966 105.37 65.13 105.203C64.3633 105.037 63.3633 104.737 62.63 104.137C61.8633 103.537 61.3633 102.67 60.9633 101.537C60.5633 100.403 60.2633 99.0366 59.8633 96.3033C59.4633 93.5699 58.93 89.5033 58.5966 86.4033C58.2633 83.3033 58.13 81.1699 58.1033 79.7366C58.07 78.3033 58.1366 77.5933 58.3033 76.9033C58.47 76.2366 58.7366 75.6033 59.1033 75.0699C59.47 74.5366 59.95 74.0699 60.4366 73.7033C60.9133 73.3366 61.4033 73.0699 61.99 72.8633C62.57 72.6299 63.2666 72.4299 64.1233 72.2633C64.99 72.0966 65.99 71.9299 66.5033 71.8633C67.0166 71.7866 67.0166 71.7866 67.59 71.8633L67.76 71.7566Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="66.8967"
                    y1="118.27"
                    x2="66.05"
                    y2="17"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#822CBE" />
                    <stop offset="1" stop-color="#D772FB" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                className="w-[5rem]"
                viewBox="0 0 134 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M117 67C117 94.6149 94.6149 117 67 117C39.3851 117 17 94.6149 17 67C17 39.3851 39.3851 17 67 17C94.6149 17 117 39.3851 117 67Z"
                  fill="#F43E37"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.1112 67C28.1112 45.5222 45.5223 28.1111 67.0001 28.1111C88.4778 28.1111 105.889 45.5222 105.889 67H96.1667C96.1667 50.8916 83.1084 37.8333 67.0001 37.8333C50.8917 37.8333 37.8334 50.8916 37.8334 67C37.8334 83.1083 50.8917 96.1666 67.0001 96.1666V105.889C45.5223 105.889 28.1112 88.4777 28.1112 67ZM67.0001 90.3333C54.1134 90.3333 43.6667 79.8866 43.6667 67C43.6667 54.1133 54.1134 43.6666 67.0001 43.6666C79.8867 43.6666 90.3334 54.1133 90.3334 67H81.8486C81.8486 58.7993 75.2007 52.1515 67.0001 52.1515C58.7994 52.1515 52.1516 58.7993 52.1516 67C52.1516 75.2006 58.7994 81.8485 67.0001 81.8485V90.3333Z"
                  fill="white"
                />
              </svg>
              <svg
                className="w-[5rem]"
                viewBox="0 0 134 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M117 67C117 94.6149 94.6149 117 67 117C39.3851 117 17 94.6149 17 67C17 39.3851 39.3851 17 67 17C94.6149 17 117 39.3851 117 67Z"
                  fill="url(#paint0_linear)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M66.89 105.78C45.3381 105.78 28 88.4419 28 66.89C28 45.3381 45.3381 28 66.89 28C88.4419 28 105.78 45.3381 105.78 66.89C105.78 88.4419 88.4419 105.78 66.89 105.78ZM66.89 90.3864L69.8067 87.4696L66.89 76.2887L63.9732 87.4696L66.89 90.3864ZM63.1634 90.224L61.705 95.7337L65.1079 92.3309L63.1634 90.224ZM70.6166 90.224L68.6721 92.1685L72.075 95.5714L70.6166 90.224ZM73.372 100.27L66.89 93.7892L60.408 100.27C62.5149 100.595 64.6217 100.919 66.89 100.919C69.1583 100.919 71.2651 100.756 73.372 100.27ZM66.89 32.8612C48.0935 32.8612 32.8612 48.0935 32.8612 66.89C32.8612 81.7975 42.4214 94.4368 55.7091 98.9742L63.001 71.9136C61.3803 70.779 60.408 68.8345 60.408 66.7276C60.408 63.1634 63.3248 60.2466 66.89 60.2466C70.4552 60.2466 73.372 63.1634 73.372 66.7276C73.372 68.8345 72.3997 70.6166 70.779 71.9136L78.0709 98.9742C91.3586 94.4368 100.919 81.7975 100.919 66.89C100.919 48.0935 85.6865 32.8612 66.89 32.8612ZM89.0894 83.742C88.2795 84.7143 86.8211 85.039 85.6865 84.2281C84.5529 83.4182 84.3905 81.9599 85.2004 80.9876C85.2004 80.9876 89.5755 75.1541 89.5755 66.89C89.5755 58.6259 85.2004 52.7924 85.2004 52.7924C84.3905 51.8201 84.5529 50.3617 85.6865 49.5519C86.8211 48.741 88.2795 49.0657 89.0894 50.038C89.4141 50.3617 94.4368 57.0051 94.4368 66.89C94.4368 76.7749 89.4141 83.4182 89.0894 83.742ZM77.261 77.4224C76.2887 76.4501 76.4501 74.668 77.4224 73.6957C77.4224 73.6957 79.853 71.1028 79.853 66.89C79.853 62.6772 77.4224 60.2466 77.4224 60.0842C76.4501 59.112 76.4501 57.4913 77.261 56.3576C78.2332 55.223 79.6916 55.223 80.6639 56.1952C80.8253 56.3576 84.7143 60.408 84.7143 66.89C84.7143 73.372 80.8253 77.4224 80.6639 77.5847C79.6916 78.557 78.2332 78.3946 77.261 77.4224ZM56.519 77.4224C55.5468 78.3946 54.0884 78.557 53.1161 77.5847C52.9547 77.261 49.0657 73.372 49.0657 66.89C49.0657 60.408 52.9547 56.519 53.1161 56.1952C54.0884 55.223 55.7091 55.223 56.519 56.3576C57.4913 57.3299 57.3299 59.112 56.3576 60.0842C56.3576 60.2466 53.927 62.6772 53.927 66.89C53.927 71.1028 56.3576 73.6957 56.3576 73.6957C57.3299 74.668 57.4913 76.2887 56.519 77.4224ZM48.0935 84.2281C46.9589 85.039 45.5005 84.7143 44.6906 83.742C44.3659 83.4182 39.3432 76.7749 39.3432 66.89C39.3432 57.0051 44.3659 50.3617 44.6906 50.038C45.5005 49.0657 46.9589 48.741 48.0935 49.5519C49.2271 50.3617 49.3895 51.8201 48.5796 52.7924C48.5796 52.7924 44.2045 58.6259 44.2045 66.89C44.2045 75.1541 48.5796 80.9876 48.5796 80.9876C49.3895 81.9599 49.0657 83.4182 48.0935 84.2281Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="67"
                    y1="17"
                    x2="67"
                    y2="117"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF9A33" />
                    <stop offset="1" stop-color="#FF7734" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <img alt="img" src={mic.src} className="object-fit " />
        </div>
      </div>
      <div className="font-normal w-[90%] flex justify-between mx-auto my-[4rem]">
        <h3 className="cursor-pointer">2021 © Founders Mafia</h3>
        <h3 className="cursor-pointer hidden lg:inline-flex">
          helo@foundersmafia.org
        </h3>
        <h3>Privacy Policy</h3>
      </div>
    </div>
  );
};

export default LPodcasts;
