import LeftBar from "@/components/previews/LeftBar";
import RightBar from "@/components/previews/RightBar";
import TopBar from "@/components/previews/TopBar";

const RootPage = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto px-4 py-2">
            <TopBar />
            <div className="container mt-20">
                <LeftBar />
                <div>ddd</div>
                <RightBar />
            </div>
        </div>
    );
};

export default RootPage;
