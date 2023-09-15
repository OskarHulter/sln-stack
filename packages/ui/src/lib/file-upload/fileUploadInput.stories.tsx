import type { Meta, StoryObj } from '@storybook/react'
import { FileUploadInput } from './fileUploadInput'

import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

const meta: Meta<typeof FileUploadInput> = {
  component: FileUploadInput,
  title: 'FileUploadInput',
}
export default meta
type Story = StoryObj<typeof FileUploadInput>

export const Primary = {
  args: {},
}

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/Welcome to FileUploadInput!/gi)).toBeTruthy()
  },
}
