interface AnimatedInputProps {
  label: string;
  type: string;
  id: string;
  content: string;
  elementFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default AnimatedInputProps;
