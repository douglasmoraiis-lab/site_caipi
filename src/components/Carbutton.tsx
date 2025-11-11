import { ShoppingCart } from "lucide-react";

interface Props {
  onClick: () => void;
  count: number;
}

export default function CartButton({ onClick, count }: Props) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-black p-4 rounded-full shadow-xl transition"
    >
      <ShoppingCart size={24} />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 rounded-full">
          {count}
        </span>
      )}
    </button>
  );
}
