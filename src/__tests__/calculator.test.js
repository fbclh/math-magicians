import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('Check if Calculator page renders correctly', () => {
  const tree = renderer.create(<Calculator />);
  expect(tree).toMatchSnapshot();
});
