import './Skeleton.css';

const Skeleton = ({ width = '100%', height = '20px', borderRadius = '8px', style = {} }) => {
  
  return (

    <div className="skeleton"
      style={{ width, height, borderRadius, ...style }}
    >

    </div>
  )
}

export default Skeleton;