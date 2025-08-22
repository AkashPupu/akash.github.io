# Portfolio Website

A modern, responsive portfolio website built with React and Create React App, featuring a component-based architecture with CSS modules.

## Features

- ⚡ Fast development with Create React App
- 🎨 CSS Modules for scoped styling
- 📱 Fully responsive design
- 🎯 Component-based architecture
- 🔧 Built-in ESLint for code quality
- 🎭 Modern CSS with custom properties
- 🧪 Testing setup with Jest and React Testing Library

## Project Structure

```
portfolio/
├── public/
│   ├── index.html           # Main HTML template
│   ├── manifest.json        # PWA manifest
│   ├── robots.txt          # SEO robots file
│   └── favicon.ico         # Website icon
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.module.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.module.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   ├── Projects.module.css
│   │   │   ├── ProjectCard.jsx
│   │   │   └── ProjectCard.module.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.module.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.module.css
│   ├── styles/
│   │   └── globals.css      # Global styles & CSS variables
│   ├── App.jsx             # Main app component
│   ├── App.module.css      # App component styles
│   └── index.js            # React entry point
├── package.json            # Dependencies & scripts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm start` - Start development server (runs on port 3000)
- `npm run build` - Build for production
- `npm test` - Run tests in watch mode
- `npm run eject` - Eject from Create React App (one-way operation)

## Customization

### Colors and Styling

The project uses CSS custom properties defined in `src/styles/globals.css`. You can easily customize the color scheme by modifying these variables:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #64748b;
  --accent-color: #f59e0b;
  /* ... other variables */
}
```

### Content

1. **Personal Information**: Update the Hero component in `src/components/Hero/Hero.jsx`
2. **About Section**: Modify the About component and skills array
3. **Projects**: Update the projects array in `src/components/Projects/Projects.jsx`
4. **Contact**: The contact form logs to console - integrate with your preferred form handling service

### Adding New Components

1. Create a new folder in `src/components/`
2. Add your component file (`.jsx`) and styles (`.module.css`)
3. Import and use in `App.jsx` or other components

## CSS Modules

This project uses CSS Modules for component-scoped styling. Each component has its own `.module.css` file that gets automatically scoped to prevent style conflicts.

Example usage:
```jsx
import React from 'react';
import styles from './Component.module.css';

const Component = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Hello World</h1>
  </div>
);

export default Component;
```

## Testing

The project comes with Jest and React Testing Library pre-configured. You can write tests for your components:

```bash
npm test          # Run tests in watch mode
npm run test:ci   # Run tests once (for CI)
```

## Responsive Design

The website is fully responsive with breakpoints at:
- Mobile: up to 768px
- Tablet: 768px - 1024px
- Desktop: 1024px and above

## Build and Deployment

```bash
npm run build     # Creates optimized production build in 'build' folder
```

The build folder can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

## Browser Support

Create React App supports all modern browsers:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Key Differences from Vite

- Uses webpack instead of Vite for bundling
- Slower development server startup but more mature ecosystem
- Built-in testing setup with Jest
- More opinionated project structure
- Hot reloading instead of HMR
- Runs on port 3000 by default

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE). 

## EmailJS Setup for Contact Form

The contact form is configured to send emails using EmailJS. Follow these steps to set it up:

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:
```
Subject: New Contact Form Message from {{from_name}}

Hello Akash,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```
4. Save the template and note down your **Template ID**

### 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (User ID)

### 5. Update Contact Component
Open `src/components/Contact/Contact.jsx` and replace the placeholder values:

```javascript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',    // Replace with your Service ID
  'YOUR_TEMPLATE_ID',   // Replace with your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_name: 'Akash Chakraborty',
  },
  'YOUR_PUBLIC_KEY'     // Replace with your Public Key
)
```

### 6. Test the Form
1. Start your development server: `npm start`
2. Fill out the contact form with test data
3. Check your email inbox for the message

### Security Notes
- EmailJS public key is safe to use in frontend code
- The free plan includes 200 emails per month
- All emails will be sent to the email address associated with your EmailJS service

### Troubleshooting
- Make sure all IDs are correct and match your EmailJS dashboard
- Check browser console for any error messages
- Verify your EmailJS service is properly configured
- Ensure your email provider allows EmailJS to send emails 