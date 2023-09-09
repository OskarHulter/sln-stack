import { render } from '@testing-library/react'

import NextForms from './next-forms'

describe('NextForms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NextForms />)
    expect(baseElement).toBeTruthy()
  })
})
