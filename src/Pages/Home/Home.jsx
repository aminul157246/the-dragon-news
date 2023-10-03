
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Header/Navbar/Navbar";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Banner from "./Bannner";
import NewsCards from "./NewsCards";


const Home = () => {



    return (
        <div className="max-w-6xl mx-auto">
            <Header></Header>
            <Banner></Banner>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2 border">
                    <NewsCards></NewsCards>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;