import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '.';
import store from '../../redux/configureStore';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
  const linkElement = screen.getByText(/Rockets/i);
  expect(linkElement).toBeInTheDocument();
});
