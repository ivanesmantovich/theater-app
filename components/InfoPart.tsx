const InfoPart = ({ firstPart, secondPart }) => {
  return (
    <div className="mb-3">
      <div className="font-semibold text-xl">{firstPart}</div>
      <div>{secondPart}</div>
    </div>
  );
};

export default InfoPart;
