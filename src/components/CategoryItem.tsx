import { Link } from "react-router-dom";

export default function CategoryItem({
    icon: Icon,
    to = "#",
    color,
    bgColor,
    children,
    className,
}: {
    icon?: React.ComponentType<{
        className?: string;
        style?: React.CSSProperties;
    }> | null;
    to?: string;
    color?: string;
    children?: string;
    bgColor?: string;
    className?: string;
}) {
    const colorCode = color || "#1B75E8";
    const colorBgCode = bgColor || "#EAF6FF";
    
    return (
        <Link
            to={to}
            className={`flex items-center gap-2 p-4 rounded-lg ${
                className ? className + " " : ""
            }scale border transition-all duration-300 ease-in-out border-transparent`}
            style={{ backgroundColor: colorBgCode }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colorCode;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
            }}
        >
            <div
                className="p-3 rounded-full flex items-center justify-center border border-dotted"
                style={{
                    backgroundColor: `${colorCode}1A`,
                    borderColor: `${colorCode}`,
                }}
            >
                {Icon && (
                    <Icon
                        className="w-[34px] h-[34px]"
                        style={{ color: colorCode }}
                    />
                )}
            </div>
            <span className="text-[#0E2A46] text-lg font-bold">{children}</span>
        </Link>
    );
}
