import React from "react"
import { Nav, NavDropdown, NavLink } from "react-bootstrap"

const SubMenu = (props) => {

    // console.log(props.children)
    const subMenu =
        props.children.length > 0 ? (
            <NavDropdown className="" title={props.title}>
                {props.children.map(child => {
                    return (
                        <NavDropdown.Item >
                            {child.title}
                        </NavDropdown.Item>
                    )
                })}
            </NavDropdown >
        ) : (
            <NavLink>{props.title}</NavLink>
        );

    return (
        <div className="Menus">
            <Nav className="">{subMenu}</Nav>
        </div>
    );
};

export default SubMenu;