# Insurance Website Project Overview

## Project Description
A Next.js-based insurance agency website using a customized version of the Bastun template. The website focuses on providing insurance services with a clean, professional interface and streamlined navigation.

## Core Dependencies
```json
{
  "next": "14.2.5",
  "react": "^18",
  "react-dom": "^18",
  "aos": "^3.0.0-beta.6",
  "swiper": "^11.1.9"
}
```

## Key Features
- Insurance-focused homepage layout (home-6 template)
- Simplified navigation without e-commerce features
- Black theme throughout the site
- Mobile-responsive design
- "Get Quote" call-to-action buttons

## Custom Components
1. **CustomPageWrapper** (`src/components/shared/wrappers/CustomPageWrapper.js`)
   - Main layout wrapper for all pages
   - Handles theme context and common functionality
   - Removes e-commerce related providers

2. **CustomHeader** (`src/components/layout/header/CustomHeader.js`)
   - Customized header component
   - Implements black theme
   - Manages mobile menu integration

3. **CustomNavbar** (`src/components/layout/header/CustomNavbar.js`)
   - Simplified navigation menu
   - Insurance-focused menu items
   - Removed dropdown complexity

4. **CustomHeaderRight** (`src/components/layout/header/CustomHeaderRight.js`)
   - Simplified header actions
   - "Get Quote" button integration
   - Removed cart and e-commerce features

5. **CustomMobileMenu** (`src/components/layout/header/CustomMobileMenu.js`)
   - Mobile-friendly navigation
   - Matches desktop navigation items
   - Simplified structure

## Page Structure
1. **Home** (`/home-6`)
   - Insurance agency landing page
   - Hero section with insurance messaging
   - Service highlights and features

2. **Services** (`/services/1`)
   - Detailed service information
   - Insurance coverage details
   - Service-specific content

3. **About** (`/about`)
   - Company information
   - Team and expertise
   - Agency values

4. **FAQ** (`/faq`)
   - Common insurance questions
   - Policy information
   - Coverage explanations

5. **Blog** (`/blogs`)
   - Insurance industry news
   - Tips and advice
   - Industry insights

6. **Contact** (`/contact`)
   - Contact form
   - Agency location
   - Support information

## Theme Configuration
- Black theme throughout
- Insurance-focused color scheme
- Consistent styling across all pages

## SEO Optimization
Each page includes custom metadata focused on insurance-related keywords and descriptions.

## Development Notes
- The site uses Next.js 14's app router
- Custom components are built on top of the Bastun template
- E-commerce functionality has been removed
- Navigation is simplified for insurance focus
