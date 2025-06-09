import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Hero from '../landing_page/home/Hero';

describe('Hero Component', () => {
    test('renders correctly', () => {
        render(<Hero />);
        const heroImage = screen.getAllByAltText("Hero");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });
})
