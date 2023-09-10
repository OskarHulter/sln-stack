import { render } from '@testing-library/react'

import { FormDemo } from './formDemo'

describe('FormDemo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormDemo />)
    expect(baseElement).toBeTruthy()
  })
})
