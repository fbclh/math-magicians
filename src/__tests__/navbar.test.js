import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/NavBar';

it('Check if Navbar page renders correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
