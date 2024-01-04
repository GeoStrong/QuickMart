import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Header from './Header';

const Home = () => {
  const { email } = useSelector((state) => state.account);

  console.log(email);

  return (
    <Container className="mt-3">
      <Header />
    </Container>
  );
};
export default Home;
