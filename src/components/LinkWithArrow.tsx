import { Link } from 'react-router-dom';
import { ILink } from '../types/types';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function LinkWithArrow({
  to = '',
  href = undefined,
  clickHandler,
  children,
  className,
  showArrow,
  fullRounded,
  disabled,
  type: Type = Link,
  reverseIcon = false,
}: ILink) {
  return (
    <Type
      to={to}
      href={href}
      onClick={clickHandler}
      disabled={disabled}
      className={`${className} bg-[#704FE6] text-white pl-6 ${
        !showArrow && 'pr-6'
      } w-fit ${
        fullRounded ? 'rounded-full' : 'rounded'
      } flex items-center space-x-2 scale ${
        reverseIcon && 'flex flex-row-reverse !pl-0 pr-4 gap-2'
      }`}
    >
      <span className="py-2">{children}</span>
      {showArrow && (
        <span
          className={`md:ml-4 ml-2 h-[40px] w-[40px] flex items-center justify-center rounded-full bg-[#785DD7] my-1 mr-1 ${
            reverseIcon && '!ml-1 rotate-180'
          } `}
        >
          <FaArrowRightLong className="text-xl" />
        </span>
      )}
    </Type>
  );
}
