import React from "react"
import SubMenu from "./SubMenu"
import { Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap'
import menus from '../data/menus'


export default function MainMenu() {

    const subMenus = menus.map(subMenu => {
        return (
            <SubMenu
                title={subMenu.title}
                position={subMenu.position}
                children={subMenu.children}
            />
        )
    })


    return (
        <div>

            <Navbar bg="light" class="d-flex justify-content-around align-items-center">
                <NavDropdown className="bg-warning text-white p-3" title="Browser categories" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                {subMenus}
                <div className="ms-5 px-5">30 Days Free Return</div>
            </Navbar>

        </div >
    )
}
