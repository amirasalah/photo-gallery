import { render, screen } from '@testing-library/react'

import UserDetails from '../userDetails'

describe('User Details Component', () => {
    it('should render the user details', () => {
        render(<UserDetails firstName='Amira' lastName='Salah' imageURL='' />)

        expect(screen.getByText(/amira/i)).toBeInTheDocument()
        expect(screen.getByText(/salah/i)).toBeInTheDocument()
    })
})
