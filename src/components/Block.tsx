interface blockProps {
  value: string | null;
  onClick: () => void;
}
const Block: React.FC<blockProps> = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="flex cursor-pointer justify-center items-center text-4xl font-medium h-20 w-20 border border-black"
    >
      {props.value}
    </div>
  );
};

export default Block;
