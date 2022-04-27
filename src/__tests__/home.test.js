import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('Check if Home page renders correctly', () => {
  const tree = renderer.create(<Home />);
  expect(tree).toMatchSnapshot();
});
