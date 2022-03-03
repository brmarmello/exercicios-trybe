import store from '../store';

describe.only('testing real store', () => {
  test('checks if loginReducer starts with {}', () => {
    const { loginReducer } = store.getState();
    const totalKeys = Object.keys(loginReducer).length;
    expect(totalKeys).toBe(0);
  });

  test('after dispatch change user should be a user {}', async () => {
    expect.assertions(1);
    store.subscribe(() => {
      const { loginReducer } = store.getState();
      expect(loginReducer.email).toBe('teste@teste.com');
    });
    store.dispatch({
      type: 'LOGIN',
      value: { email: 'teste@teste.com', password: 'abc' },
    });
  });
});
