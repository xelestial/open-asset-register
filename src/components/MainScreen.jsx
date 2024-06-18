import '../App.css'
import Header from './Header';
import Footer from './Footer';
import ContentContainer from '../containers/content/ContentContainer';

const MainScreen = () => {
    return (
        <>
        <Header> </Header> 
        <div className="main-screen">
            <ContentContainer> </ContentContainer>    
        </div>
        <Footer> </Footer>
        </>
    );
  }

  export default MainScreen;