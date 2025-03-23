type ButtonProps = {
  name: string;
  onClick?: () => void;
};

export default function Button({ name, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="h-full w-full bg-[#0E3F70] text-white border border-black border-4 hover:bg-[#0B3259] transition-colors duration-200 cursor-pointer rounded-[10] text-2xl"
    >
      {name}
    </button>
  );
}
