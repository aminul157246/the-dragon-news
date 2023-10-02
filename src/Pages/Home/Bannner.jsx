
import Marquee from 'react-fast-marquee';

const Banner = () => {
    return (
        <div className='flex gap-6'>
            <button className=' btn-secondary px-4 py-2'>Latest</button>
            
            <Marquee  pauseOnHover = {true} speed={ 200}
            className='font-bold'>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default Banner;