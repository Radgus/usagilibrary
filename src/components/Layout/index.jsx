import Header from '../Header';
import Footer from '../Footer';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../resource/colors';
import Dropdown from '../../pages/Dropdown/components/Dropdown';


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: ${colors.secondary_bg};
  flex: 1 0 auto;
  `;

const Sidebar = styled.div`
  padding: 4rem 2rem;
  border-right: 0.1rem solid black;
`;

const MainArea = styled.div`
  padding: 4rem 2rem;
`;

const Layout = ({ children }) => (
  <>
    <Header/>
    <Container>
      <Sidebar>
        <h2 style={{textAlign: 'center'}}>Menu</h2>
        <br />
        <Dropdown
          title='DropDown'
          url="/dropdown"
        />
        <br />
        <Dropdown
          title='Buttons'
          url="/buttons"
        />
        <br />
        <Dropdown
          title='Cards'
          url="/cards"
        />
        <br />
        <Dropdown
          title='Forms'
          url="/forms"
        />
        <br />
        <Dropdown
          title='Seekers'
          url="/seekers"
        />
      </Sidebar>
      <MainArea>
        { children }
      </MainArea>
    </Container>
    <Footer/>
  </>
);

Layout.propTypes = {
  children: PropTypes.element,
}

export default Layout;
