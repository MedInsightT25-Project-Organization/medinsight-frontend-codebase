

import icon from '../assets/MEDINSIGHT ICON.png'
const Loader = () => (
    <div className="h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary">

            <img src={icon} alt="icon" />

        </div>
    </div>
);

export default Loader;