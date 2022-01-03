import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import * as NotFound from '../../assets/lottie/404-lottie.json'

const App404Page = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: NotFound,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <>
            <Link to="/">
                <Lottie options={defaultOptions} />
            </Link>
        </>
    )
}

export default App404Page
