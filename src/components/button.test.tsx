import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react';

// test subject 
import Button from './Button';

describe('Button', () => {
  it('should display text', () => {
    const { getByText }  = render(<Button scale="small" kind="primary" outline={false}>Click Me</Button>);
    getByText('Click Me');
  });

  it("should handle click events", () => {
    const onClickMock = jest.fn((): void => {});
    const { getByText } = render(
      <Button
        onClick={onClickMock}
      >
        Button Text
      </Button>
    );

    const btn = getByText('Button Text');
    fireEvent.click(btn);
    expect(onClickMock).toBeCalled();
  });

  it('should have correct css style value', () => {
    const { getByText } = render(<Button>Btn Text</Button>);
    const btn = getByText('Btn Text');
    expect(btn).toHaveStyle({
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
    });
  });
});
