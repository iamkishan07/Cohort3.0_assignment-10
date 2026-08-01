const StatCard = ({ number, title }) => {
  return (
    <div className="border border-gray-700 rounded-3xl p-8 text-center hover:border-lime-400 transition duration-300">
      <h2 className="text-4xl text-lime-400 font-bold">{number}</h2>

      <p className="text-gray-500 mt-2">{title}</p>
    </div>
  );
};

export default StatCard;
