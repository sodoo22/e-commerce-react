import React from "react"
import SubMenu from "./SubMenu"
import { Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap'
import menus from '../data/menus'


export default function NavMenu() {

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

            <Navbar bg="light" className="d-flex justify-content-between align-items-center">
                <NavDropdown className="bg-warning text-white p-4" title="Browser categories" id="nav-dropdown">
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
