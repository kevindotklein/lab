import { Handle, MenuList, MenuListItem } from 'react95';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  width: fit-content;
  margin: 0 auto;
`;

const NavbarLink = styled.a`
  text-decoration: none;
  color: black;
  /* font-weight: bold; */
  /* font-size: larger; */
  font-size: 1.2rem;

  &:hover {
    color: white;
  }
`;

export default function MainNavbar() {
  return (
    <NavbarWrapper>
      <MenuList inline>
        <MenuListItem square disabled>
          <span role="img" aria-label="💾">💾</span>
        </MenuListItem>
        <Handle size={38} />
        <MenuListItem>
          <NavbarLink href="/projects">Projects</NavbarLink>
        </MenuListItem>
        <MenuListItem>
          <NavbarLink href="/posts">Posts</NavbarLink>
        </MenuListItem>
        <MenuListItem>
          <NavbarLink href="/about">About</NavbarLink>
        </MenuListItem>
      </MenuList>
    </NavbarWrapper>
  );
}
