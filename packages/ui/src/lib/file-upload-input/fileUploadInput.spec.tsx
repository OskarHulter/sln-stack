import { render } from '@testing-library/react'

import { FileUploadInput } from './fileUploadInput'

describe('FileUploadInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FileUploadInput />)
    expect(baseElement).toBeTruthy()
  })
})
