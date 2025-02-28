# File Structure Documentation

## Custom Components
All custom components are located in their respective directories under `src/components/`:

```
src/components/
├── layout/
│   └── header/
│       ├── CustomHeader.js         # Main header component
│       ├── CustomHeaderLarge.js    # Desktop header layout
│       ├── CustomHeaderRight.js    # Right section with quote button
│       ├── CustomNavbar.js        # Main navigation menu
│       └── CustomMobileMenu.js    # Mobile navigation menu
└── shared/
    └── wrappers/
        └── CustomPageWrapper.js   # Main layout wrapper
```

## Page Components
Pages are organized using Next.js app router structure:

```
src/app/
├── page.js                # Root page (redirects to /home-6)
├── home-6/
│   └── page.js           # Insurance homepage
├── services/
│   └── [id]/
│       └── page.js       # Service details page
├── about/
│   └── page.js           # About page
├── faq/
│   └── page.js           # FAQ page
├── blogs/
│   ├── page.js           # Blog listing page
│   └── [id]/
│       └── page.js       # Blog detail page
└── contact/
    └── page.js           # Contact page
```

## Template Components Still in Use
Original template components that are still being used:

```
src/components/
├── layout/
│   └── main/
│       ├── Home6Main.js      # Insurance homepage content
│       ├── AboutMain.js      # About page content
│       ├── BlogsMain.js      # Blog listing content
│       ├── ContactMain.js    # Contact page content
│       └── FaqMain.js        # FAQ page content
└── shared/
    ├── buttons/
    │   └── ButtonPrimary.js  # Primary button component
    └── others/
        └── ThemeController.js # Theme control component
```

## Assets and Styles
```
src/assets/
├── css/
│   ├── bootstrap.min.css
│   ├── responsive.css
│   └── [other style files]
└── img/
    └── [image assets]
```

## Documentation
```
docs/
├── project-overview.md    # Project overview and features
├── file-structure.md     # This file structure documentation
└── .clinerules           # AI assistant rules and context
```

## Configuration Files
```
├── package.json          # Project dependencies and scripts
├── next.config.mjs       # Next.js configuration
├── jsconfig.json         # JavaScript configuration
└── .eslintrc.json       # ESLint configuration
```

## Key Files and Their Purposes

### Custom Components
- **CustomPageWrapper.js**: Main layout wrapper that provides consistent structure and theming across all pages
- **CustomHeader.js**: Header component with insurance-focused navigation and styling
- **CustomNavbar.js**: Simplified navigation menu without e-commerce features
- **CustomHeaderRight.js**: Header actions section with "Get Quote" button
- **CustomMobileMenu.js**: Mobile-friendly navigation menu

### Pages
- **page.js (root)**: Handles redirection to insurance homepage
- **home-6/page.js**: Insurance-focused homepage with hero section and features
- **services/[id]/page.js**: Dynamic service details page with insurance offerings
- **about/page.js**: Company information and team page
- **faq/page.js**: Frequently asked questions about insurance services
- **blogs/page.js**: Insurance-related blog posts and articles
- **contact/page.js**: Contact form and agency information

### Configuration
- **package.json**: Project dependencies and npm scripts
- **next.config.mjs**: Next.js configuration including routing and build settings
- **jsconfig.json**: JavaScript path aliases and compiler options

## Notes for Developers
1. All custom components are prefixed with "Custom" to distinguish from template components
2. The navigation structure is defined in CustomNavbar.js and CustomMobileMenu.js
3. Page metadata is defined in each page component for SEO
4. The black theme is consistently applied through CustomPageWrapper.js
5. E-commerce related components and features have been removed
