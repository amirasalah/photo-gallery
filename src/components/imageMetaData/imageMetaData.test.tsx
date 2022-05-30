import { render, screen } from '@testing-library/react'

import ImageMetaData from '../imageMetaData'

describe('Image Metadata Component', () => {
    it('should render the image metadata', () => {
        render(<ImageMetaData likesCount={100} datePosted='2022-03-31T10:33:43-04:00' />)

        expect(screen.getByText(/liked 100 times/i)).toBeInTheDocument()
        expect(screen.getByText(/2022-03-31t10:33:43-04:00/i)).toBeInTheDocument()
    })
})
