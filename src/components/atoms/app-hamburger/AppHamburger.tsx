import { useEffect, useRef, useState } from 'react'
import "./AppHamburger.css"


const Hamburger = ({ handleClick }: any) => {
    const [isOpen, open] = useState(false);


    const ref = useRef(null);

    const buttonClicked = (state: boolean) => {
        open(state);
        handleClick(state)
    }

    const handleClickOutside = (event: any) => {
        console.log(event.target, ref.current)
        if (ref.current && !(ref.current as HTMLDivElement).contains(event.target)) {
            console.log("fired")
            open(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return (
        <div ref={ref} onClick={() => { buttonClicked(!isOpen) }} className={isOpen ? "open" : ""} id="app_hamburger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Hamburger;
