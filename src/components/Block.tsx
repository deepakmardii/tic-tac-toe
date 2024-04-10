interface blockProps {
  value: string | null;
}
const Block: React.FC<blockProps> = (props) => {
  return <div className="h-20 w-20 border border-black"></div>;
};

export default Block;
