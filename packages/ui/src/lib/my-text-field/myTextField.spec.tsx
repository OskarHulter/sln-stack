import { render } from '@testing-library/react'
import { MyTextField } from './myTextField'

describe('MyTextField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyTextField />)
    expect(baseElement).toBeTruthy()
  })
})
