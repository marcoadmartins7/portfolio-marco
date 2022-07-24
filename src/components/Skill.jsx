const Skill = ({ tech, techName }) => {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
      <img className="w-20 mt-4 mx-auto" src={tech} />
      <p className="my-4 font-bold text-2xl">{techName}</p>
    </div>
  );
};

export default Skill;
