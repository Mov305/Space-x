import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Profile from '.';
import store from '../../redux/configureStore';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );
  const linkElement = screen.getByText(/Rocket/i);
  expect(linkElement).toBeInTheDocument();
});
