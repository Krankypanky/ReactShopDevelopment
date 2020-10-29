import React from "react";

const Navigation = (props) => {
    const { navTitle } = props;
    // const navTitle = props.navTitle;
    navTitle = 3;


    return <nav>
        <h2> Aktueller Titel: {navTitle === "" ? "Aktuell gibt es keinen titel" : navTitle}</h2>
    </nav>

}
export default Navigation;