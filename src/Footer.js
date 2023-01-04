import React from 'react'

export default function Footer({length}) {
    const today = new Date()
    return (
        <footer className='footer'>
            <p>Copyright (Paul Kamau) &copy;{today.getFullYear()}</p>
        </footer>
    )
}