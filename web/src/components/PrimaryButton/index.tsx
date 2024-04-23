const PrimaryButton = ({
  buttonMessage,
  buttonFunction,
}: {
  buttonMessage: string;
  buttonFunction: () => void;
}) => {
  return (
    <button
      className="px-8 sm:px-4 md:px-6 py-2 font-bold text-lg sm:text-sm md:text-base rounded text-white bg-purple-500 hover:bg-purple-400"
      onClick={() => buttonFunction()}
    >
      {buttonMessage}
    </button>
  );
};

export default PrimaryButton;
