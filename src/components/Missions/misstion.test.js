import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from '.';
import store from '../../redux/configureStore';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
  const linkElement = screen.getByText(/Missions/i);
  expect(linkElement).toBeInTheDocument();
});
