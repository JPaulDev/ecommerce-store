/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/future/image';
import Link from 'next/link';
import { forwardRef, Fragment } from 'react';
import styled from 'styled-components';
import { useUI } from '../../../../contexts/UIContext';
import { useCloseOnEscape } from '../../../../hooks';
import { ADVERTS, DROPDOWN_MENUS } from './dropdown-data';

function DropdownMenu({ menu, id }, ref) {
  const { handleCloseDropdown } = useUI();
  const openMenu = menu.toLowerCase().trim();

  const dropdown = DROPDOWN_MENUS[openMenu];
  const dropdownAdverts = ADVERTS[openMenu];

  useCloseOnEscape(handleCloseDropdown);

  return (
    <Container data-testid="dropdown-menu" id={id} ref={ref}>
      {dropdown.map((column, index) => (
        <div key={index}>
          {column.map((item) => (
            <Fragment key={item.category}>
              <Category>{item.category}</Category>

              <List>
                {item.links.map((link) => (
                  <li key={link.text}>
                    <Link href={link.href}>
                      <a onClick={handleCloseDropdown}>{link.text}</a>
                    </Link>
                  </li>
                ))}
              </List>
            </Fragment>
          ))}
        </div>
      ))}

      <AdvertsContainer>
        {dropdownAdverts.map((image, index) => (
          <Image key={index} src={image} alt="" />
        ))}
      </AdvertsContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  box-shadow: ${({ theme }) => theme.boxShadows.xl};
  display: flex;
  left: 50%;
  position: absolute;
  width: min(100%, 1100px);

  > div {
    flex: 1;
    padding: 30px;
  }
`;

const Category = styled.div`
  --color-main: ${({ theme }) => theme.colors.orange[500]};

  border-bottom: 1px solid var(--color-main);
  color: var(--color-main);
  font-weight: 600;
  margin-bottom: 10px;
  padding-bottom: 5px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  list-style: none;
  margin-bottom: 10px;

  a {
    color: ${({ theme }) => theme.colors.stone[600]};
    text-decoration: none;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.stone[600]};
    }
  }
`;

const AdvertsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.zinc[200]};
  flex-direction: column;
  display: none;
  row-gap: 15px;

  > img {
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    box-shadow: ${({ theme }) => theme.boxShadows.lg};
  }

  @media ${({ theme }) => theme.breakpoints.desktopSm} {
    display: flex;
  }
`;

export default forwardRef(DropdownMenu);
