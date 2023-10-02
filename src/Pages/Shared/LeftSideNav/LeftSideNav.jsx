import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories , setCategories] = useState([])
    

    useEffect(()=> {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[])
    console.log(categories);
    return (
        <div className="space-y-6">
            <h2 className="font-bold mt-3">All categories</h2>
            {
                categories.map(category => <Link to={`/category/${category.id}`} key={category.id}
                className="block font-bold"
                >
                    {category.name}
                </Link>) 
            }
        </div>
    );
};

export default LeftSideNav;