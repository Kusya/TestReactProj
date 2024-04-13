import { MouseEventHandler } from "react";

export default function Square({ value, onSquareClick }: {
    value: string;
    onSquareClick: MouseEventHandler;
}) {//
    //const [value, setValue] = useState<string | null>(null);
    return (
      <button 
        className="square"
        onClick={onSquareClick}    
      >
        {value}
      </button>
    );
  }