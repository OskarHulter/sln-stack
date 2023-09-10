import { render } from '@testing-library/react'
import { FormExample } from './formExample'

describe('FormExample', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormExample />)
    expect(baseElement).toBeTruthy()
  })
})
