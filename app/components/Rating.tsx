import { BsFillStarFill } from "react-icons/bs";

type Props = {
  className?: string;
};

export default function Rating({ className }: Props) {
  return (
    <div className={`flex gap-1 ${className}`}>
      {[...Array(5)].map((_, index) => (
        <BsFillStarFill key={index} color="#FFB236" />
      ))}
    </div>
  );
}
