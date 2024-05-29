import React from 'react'
import styled from '@emotion/styled'
import { Link, useLocation } from 'react-router-dom'

const MainLayout = ({ children }: { children: React.ReactElement }) => {
  const location = useLocation()

  return (
    <Main>
      <Header>
        <div>My best app</div>
        <Nav>
          <ul>
            <li>
              <StyledLink to={'/'} className={location.pathname === '/' ? 'active' : ''}>
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to={'/form'} className={location.pathname === '/form' ? 'active' : ''}>
                Form
              </StyledLink>
            </li>
          </ul>
        </Nav>
      </Header>
      <Content>{children}</Content>
      <Footer>My contacts: tg:@frontendBro</Footer>
    </Main>
  )
}

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    li {
      :not(:last-child) {
        margin-right: 8px;
      }
    }
  }
`

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  padding: 10px 20px;
  border-bottom: 2px solid transparent;
  font-size: 16px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }

  &.active {
    outline: none;
    border-color: #007bff;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 24px;
  border-bottom: 1px solid #007bff;
`

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: auto;
  align-items: flex-start;

  @media (max-width: 480px) {
    align-items: stretch;
  }
`

const Footer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #007bff;
`

export default MainLayout
