import Logo from "../generals/Logo";
import UserControlWidget from "../widgets/UserControlWidget";

const TopBar = () => {
    return (
        <div className="py-4 fixed top-0 left-0 right-0 h-fit w-full max-w-screen-xl mx-auto bg-black flex justify-between items-center z-10">
            <Logo />
            <UserControlWidget />
        </div>
    );
};

export default TopBar;
