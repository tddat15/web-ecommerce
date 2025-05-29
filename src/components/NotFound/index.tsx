import {Link} from "react-router-dom";

const NotFound: React.FC = () => {
  return (<>
    <div style={{textAlign: 'center', padding: '2rem'}}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for does not exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
  </>)
}

export default NotFound;