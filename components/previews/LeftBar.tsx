import {
    IconDefinition,
    faHeart,
    faHome,
    faPeopleLine,
    faPlus,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const LeftBar = () => {
    return (
        <div className="border-r-2 border-slate-200 flex flex-col gap-y-4">
            <LeftBarLink icon={faHome} text="Home" href="/" />
            <LeftBarLink icon={faSearch} text="Search" href="/search" />
            <LeftBarLink icon={faHeart} text="Activity" href="/activity" />
            <LeftBarLink icon={faPlus} text="Create" href="/create" />
            <LeftBarLink
                icon={faPeopleLine}
                text="Communities"
                href="/communities"
            />
        </div>
    );
};

const LeftBarLink = ({
    icon,
    text,
    href,
}: {
    icon: IconDefinition;
    text: string;
    href: string;
}) => {
    return (
        <Link href={href} className="flex items-center gap-x-2 button">
            <FontAwesomeIcon icon={icon} width={32} height={32} />
            <p className="text-lg hidden md:block">{text}</p>
        </Link>
    );
};

export default LeftBar;
