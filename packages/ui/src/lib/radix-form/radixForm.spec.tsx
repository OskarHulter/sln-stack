import { render } from '@testing-library/react'

import { RadixForm } from './radixForm'

describe('RadixForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RadixForm />)
    expect(baseElement).toBeTruthy()
  })
})
