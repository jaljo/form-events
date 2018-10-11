import {
  default as reducer,
  INITIAL_STATE,
  open,
  mounted,
  close,
  closed,
} from './SeoPanel'

describe('Redux :: State :: SeoPanel', () => {
  it('reduces to initial state by default', () => {
    expect(reducer()).toEqual(INITIAL_STATE);
  });

  it('reduces open action', () => {
    expect(
      reducer(INITIAL_STATE, open())
    ).toEqual({
      ...INITIAL_STATE,
      isOpened: true,
    });
  });

  it('reduces mounted action', () => {
    expect(
      reducer(INITIAL_STATE, mounted())
    ).toEqual({
      ...INITIAL_STATE,
      isOpening: true,
    });
  });

  const openedPanelStateMock = {
    ...INITIAL_STATE,
    isOpening: true,
    isOpened: true,
  }

  it('reduces close action', () => {
    expect(
      reducer(openedPanelStateMock, close())
    ).toEqual({
      ...openedPanelStateMock,
      isOpening: false,
    });
  });

  it('reduces closed action', () => {
    expect(
      reducer(openedPanelStateMock, closed())
    ).toEqual({
      ...openedPanelStateMock,
      isOpened: false,
    });
  });
});
