type Props = {
  className?: string;
  content: string;
};

export default function InfoBtn({ className, content }: Props) {
  return (
    <button className={`block bg-custom-purple px-4 py-2 text-custom-black rounded-xl ${className}`}>
      {content}
    </button>
  );
}
