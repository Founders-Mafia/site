import gay from "../public/EricDaGay.png";
import producer from "../public/producer.png";
import racist from "../public/edmund.png";

const members = [
  {
    img: gay,
    name: "Eric Zhu",
    post: "Founder & Host",
  },
  {
    img: producer,
    name: "Mat Sherman",
    post: "Producer",
  },
  {
    img: racist,
    name: "Edmund Elbert",
    post: "Marketing Chief",
  },
];
const Member = () => {
  return (
    <div className="w-[90%] mt-[5rem]  ml-auto mr-auto hidden lg:flex justify-around">
      {members.map(({ img, name, post }) => {
        return (
          <div className="flex flex-col justfiy-center w-[20%] items-center">
            <img src={img.src} className="w-[100%]" alt="img.png" />
            <h3 className="font-bold mt-4">{name}</h3>
            <p className="text-[#787878]">{post}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Member;
