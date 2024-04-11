import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  className?: string;
  onClick: () => void;
  img: string;
  alt?: string;
}

const Button = ({ className, onClick, img, alt }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'flex size-16 items-center justify-center rounded-xl text-8xl',
        className,
      )}
      onClick={onClick}
    >
      <img src={img} alt={alt} />
    </button>
  );
};

export default Button;
