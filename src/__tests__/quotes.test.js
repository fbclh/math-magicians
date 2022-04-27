import renderer from 'react-test-renderer';
import Quotes from '../components/Quotes';

it('Check if Quotes page renders correctly', () => {
  const tree = renderer.create(<Quotes />);
  expect(tree).toMatchSnapshot();
});
