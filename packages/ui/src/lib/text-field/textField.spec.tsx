import { render } from '@testing-library/react'

import { TextField } from './textField'

describe('TextField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextField />)
    expect(baseElement).toBeTruthy()
  })
})
