# Online CV - Frontend Developer Portfolio

Modern online CV portfolio website built with Vue.js technologies. This project represents a professional portfolio website showcasing the skills, experience, and projects of a Frontend developer.

## 🚀 Technologies

The project is built using the following technologies and tools:

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend tooling
- **Vue Router** - Official router for Vue.js
- **Pinia** - State management for Vue
- **Tailwind CSS** - Utility-first CSS framework
- **PrimeVue** - Rich UI component library
- **Vue i18n** - Internationalization plugin (support for Serbian and English)
- **FormKit** - Form building framework
- **Axios** - HTTP client
- **Vue Final Modal** - Modal solution for Vue 3
- **VueUse** - Collection of Vue Composition Utilities

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- Yarn or npm

### Installation Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd emana.live
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Run the development server:
```bash
yarn dev
# or
npm run dev
```

4. Open your browser at `http://localhost:5173`

## 🛠️ Available Commands

- `yarn dev` - Runs the development server
- `yarn build` - Builds the project for production
- `yarn preview` - Previews the production build locally

## 📁 Project Structure

```
src/
├── assets/          # Static resources (CSS, fonts, images)
├── components/      # Vue components
├── layouts/         # Layout components
├── locales/         # i18n translations (sr.json, en.json)
├── middleware/      # Router middleware
├── modules/         # Feature modules
│   └── home/       # Home module with components, routes, and store
├── plugins/         # Vue plugins
│   ├── axios/      # Axios configuration
│   └── i18n/       # i18n configuration
└── router/         # Vue Router configuration
```

## 🎨 Features

- ✅ Responsive design (mobile-first approach)
- ✅ Internationalization (Serbian and English)
- ✅ Modern UI with Tailwind CSS and PrimeVue
- ✅ Component-based architecture
- ✅ State management with Pinia
- ✅ Form handling with FormKit
- ✅ Modal system with Vue Final Modal

## 🌐 Internationalization

The project supports multiple languages through Vue i18n:
- **Serbian (sr)** - Default language
- **English (en)**

Translations are located in the `src/locales/` directory.

## 📝 Code Style

- Vue 3 Composition API with `<script setup>` syntax
- TypeScript support
- Functional and declarative programming approach
- DRY principles and modularization
- Composables for reusable logic
- PascalCase for components
- CVA (class-variance-authority) for component variants

## 🔧 Configuration

### Axios

Axios is configured in `src/plugins/axios/index.js` with base URL and credentials settings.

### Router

Vue Router is configured in `src/router/index.js` with middleware support for authentication.

## 📄 License

Private project - Online CV Portfolio
