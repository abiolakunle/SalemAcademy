import "./AppHeroBanner.css"

import styled, { css } from 'styled-components';

const AppHeroBanner = ({ backgroundImageUrl }: any) => {
    return (
        <div className="app-hero-image" style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>

            <div className="app-hero-image darken-overlay">
                <div></div>
            </div>

            <div className="app-hero-text">

                <h2>Open Days</h2><br />
                <ColoredLineButton borderColor="var(--pink2)" >Apply Now</ColoredLineButton>
            </div>
        </div>
    )
}

// const ColoredLineButton = ({ children, borderColor }: { children: string }) => {

//     return (<>
//         <button>{children}</button>
//     </>);
// }

const ColoredLineButton = styled.button<ColoredLineButtonProps>`

  border:${({ borderColor }: any) => borderColor} solid 1px;
      outline: 0;
    display: inline-block;
    padding: 1.2em 1.2em;
    color: #ffffff;
    background-color: transparent;
    text-align: center;
    letter-spacing: 4px;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;

`;
type ColoredLineButtonProps = {
    borderColor: string
}
export default AppHeroBanner



