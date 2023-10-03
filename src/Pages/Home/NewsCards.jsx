import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const NewsCards = () => {


    
    const newses = useLoaderData()
    console.log(newses);



    return (
        <div>
            {
                newses.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default NewsCards;