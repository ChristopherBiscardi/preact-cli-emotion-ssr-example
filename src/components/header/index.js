import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import styled, {withComponent, css} from 'preact-emotion';

const Header = styled('header')`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 56px;
	padding: 0;
	background: #673AB7;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	z-index: 50;
`
const H1 = styled('h1')`
	float: left;
	margin: 0;
	padding: 0 15px;
	font-size: 24px;
	line-height: 56px;
	font-weight: 400;
	color: #FFF;
`
const Nav = styled('nav')`
	float: right;
	font-size: 100%;
`
const link = css`
	display: inline-block;
	height: 56px;
	line-height: 56px;
	padding: 0 15px;
	min-width: 50px;
	text-align: center;
	background: rgba(255,255,255,0);
	text-decoration: none;
	color: #FFF;
	will-change: background-color;
        &:hover,&:active {
          background: rgba(0,0,0,0.2);
        }
`
const eActive = css`
    background: rgba(0,0,0,0.4);
`
export default class HeaderBar extends Component {
	render() {
		return (
			<Header>
				<H1>Preact App</H1>
				<Nav>
				  <Link class={link} activeClassName={eActive} href="/">Home</Link>
				  <Link class={link} activeClassName={eActive} href="/profile">Me</Link>
				  <Link class={link} activeClassName={eActive} href="/profile/john">John</Link>
				</Nav>
			</Header>
		);
	}
}
