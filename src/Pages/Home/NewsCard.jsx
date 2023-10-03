import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {title, image_url , details, _id} = news;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-16  ">
                <figure><img src={image_url}alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    
                        {
                            details.length > 200 ? 
                            <p>
                                {details.slice(0,200)} <Link to={`/news/${_id}`} className='font-bold text-blue-700'>Read more...</Link>
                                </p>
                                : 
                                <p>{details}</p>
                            
                        }
                    
                    
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news : PropTypes.object,
}


export default NewsCard;