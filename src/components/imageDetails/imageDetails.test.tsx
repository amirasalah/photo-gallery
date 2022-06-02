import { render, screen } from '@testing-library/react'

import ImageDetails from '../imageDetails'

describe('Image Details Component', () => {
    it('should render the image details', () => {
        render(<ImageDetails title='The Cat' description='A cat' />)

        expect(screen.getByText(/the cat/i)).toBeInTheDocument()
        expect(screen.getByText(/a cat/i)).toBeInTheDocument()
    })
})
