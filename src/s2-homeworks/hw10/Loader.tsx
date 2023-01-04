import s from './Loader.module.css'
import {Oval} from "react-loader-spinner";

export const Loader = () => {
return <div>
    <Oval
        height={80}
        width={80}
        color="#512DE4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#FFFFFF00"
        strokeWidth={2}
        strokeWidthSecondary={2}

    />
</div>
}
