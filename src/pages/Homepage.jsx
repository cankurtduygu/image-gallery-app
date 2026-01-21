import Picture from '../components/Picture';
import  data  from '../helper/data.js';

const Homepage = () => {
    // console.log(data);

  return (
    <div>
    <h1>Image Gallery</h1>
    <div className='pictures'>

    {data.map( (item,index) => (
        <div key={index} className='imageContainer'>
            <Picture data={item} />
        </div>
    ) )}
    
    

    </div>
    </div>
  )
}

export default Homepage