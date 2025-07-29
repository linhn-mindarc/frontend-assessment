# Frontend Assessment - Completed

A responsive web application built with Vue.js and Tailwind CSS, featuring two main exercises demonstrating modern frontend development practices.

## Live Demo

- **Exercise 1**: [https://linhnguyen-dl8.pages.dev/exercise1](https://linhnguyen-dl8.pages.dev/exercise1)
- **Exercise 2 & Bonus**: [https://linhnguyen-dl8.pages.dev/exercise2](https://linhnguyen-dl8.pages.dev/exercise2)

## Exercises Overview

### Exercise 1
A pixel-perfect responsive page implementation based on provided designs.

**Features:**
- ✅ Exact design match
- ✅ Fully responsive layout
- ✅ Desktop and mobile optimized
- ✅ Modern CSS Grid and Flexbox

### Exercise 2
Dynamic data display with responsive behavior using `data.json`.

**Features:**
- ✅ Desktop tabs interface
- ✅ Mobile accordion interface
- ✅ Single active item at a time
- ✅ First item opens on load
- ✅ Toggle functionality (close if already open)
- ✅ Smooth animations and transitions
- ✅ Enhanced UX design

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **Framework**: Vue.js 3 (Composition API)
- **Styling**: Tailwind CSS + SCSS
- **Build Tool**: Vite
- **Deployment**: Cloudflare Pages

## Key Features

- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Component Architecture**: Modular, reusable Vue components
- **Smooth Animations**: CSS transitions and Vue transitions
- **Accessibility**: Semantic HTML and keyboard navigation
- **Performance**: Optimized bundle size and lazy loading

## Bonus: JavaScript Quirk Explanation

**Question**: Why does `('b' + 'a' + + 'a' + 'a').toLowerCase()` result in `'banana'`?

**Answer**: This is a classic JavaScript type coercion example:
```javascript
('b' + 'a' + + 'a' + 'a').toLowerCase()
//  'b' + 'a' = 'ba' (string concatenation)
//  '+ + 'a' = NaN (unary plus converts 'a' to number, resulting in NaN)
//  'ba' + NaN = 'baNaN' (NaN is converted to string 'NaN')
//  ''baNaN' + 'a' = 'baNaNa' (string concatenation)
//  .toLowerCase() = 'banana' (converts to lowercase)
```

The key is the unary plus operator (+) before the second `'a'` which converts it to `NaN`.

