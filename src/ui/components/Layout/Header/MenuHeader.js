import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,  
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import TopbarHeader from './TopbarHeader';

import Logo from '../../../../assets/images/logo.png';
import shop_bag from '../../../../assets/images/icons/shop-bag.svg';
import heart from '../../../../assets/images/icons/heart.svg';
import { Link } from 'react-router-dom';

const MenuHeader = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<TopbarHeader />
			<div className="Header-mainMenu">
				<Navbar expand="xl" dark>
					<NavbarBrand href="/">
						<img src={Logo} alt="" className="Header-logo"/>
					</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="m-auto" navbar>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Servicios
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										Peluqueria
									</DropdownItem>
									<DropdownItem>
										Maquillaje
									</DropdownItem>
									<DropdownItem>
										Uñas
									</DropdownItem>
									<DropdownItem>
										Estética
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
							<NavItem>
								<Link className="nav-link" to="/products">Productos</Link>
							</NavItem>
							<NavItem>
								<Link className="nav-link" to="/weedings">Bodas</Link>
							</NavItem>
							<NavItem>
								<Link className="nav-link" to="/styles">Estilos</Link>
							</NavItem>
							<NavItem>
								<Link className="nav-link" to="/blog">Blog</Link>
							</NavItem>
						</Nav>
						<Link className="d-block text-center nav-link">Iniciar Sesión</Link>
						<Link className="btn-purple Header-btnBooking" to="/reserve">Reserva</Link>
						<Nav navbar>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									ES
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										Es
									</DropdownItem>
									<DropdownItem>
										En
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
						<div className="text-center">
							<Link to="/wishlist"className="nav-link icon">
								<img src={heart} alt=""/>
							</Link>
							<Link className="nav-link icon" to="">
								<img src={shop_bag} alt=""/>
							</Link>
						</div>
					</Collapse>
				</Navbar>
			</div>
		</div>
	);
}

export default MenuHeader;