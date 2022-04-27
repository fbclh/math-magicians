import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

it('Check if Navbar page renders correctly', () => {
  const tree = renderer.create(<Navbar />);
  expect(tree).toMatchSnapshot();
});
