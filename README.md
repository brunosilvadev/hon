# Homeowner Notebook

A web application for homeowners to organize and track important information about their property through categorized cards.

## Overview

Homeowner Notebook is an Angular-based frontend application that allows users to create, organize, and view information cards related to home ownership. Each card can contain details about maintenance, repairs, improvements, or any other homeowner-related notes, organized by categories.

## Features

- **Card Management**: Create and view information cards with name and content
- **Category Organization**: Categorize cards for easy organization (e.g., maintenance, repairs, upgrades)
- **Timeline View**: Display all cards in a responsive grid layout
- **Modal Interface**: User-friendly modal dialog for adding new cards
- **Real-time Updates**: Timeline refreshes automatically after adding new cards

## Tech Stack

- **Framework**: Angular 16
- **UI Library**: Bootstrap 5.3.1
- **Language**: TypeScript 5.1.3
- **HTTP Client**: Angular HttpClient for API communication

## Project Structure

```
src/app/
├── models/              # Data models
│   ├── card.ts         # Card interface (cardId, cardName, cardContent, categoryId)
│   ├── category.ts     # Category interface
│   └── sample.ts       # Sample interface
├── services/           # API services
│   └── hon.service.ts  # Main service for API calls
└── modules/
    └── home/           # Home module components
        ├── add-button/ # Button and modal for adding cards
        ├── insert/     # Form component for card creation
        └── timeline/   # Display component for card grid
```

## Prerequisites

- Node.js and npm
- Angular CLI (`npm install -g @angular/cli`)
- Backend API running on `http://localhost:5154/`

## Backend API Requirements

The application expects a REST API with the following endpoints:

- `GET /cards` - List all cards
- `GET /categories` - List all categories
- `POST /add-card` - Create a new card
- `GET /list` - List samples
- `POST /create` - Create a sample

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Run the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you make changes to source files.

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build the project for production
- `npm run watch` - Build in watch mode
- `npm test` - Execute unit tests via Karma

## Usage

1. Ensure the backend API is running on `http://localhost:5154/`
2. Start the development server
3. Click "New Card" button to open the modal
4. Fill in the card name, content, and select a category
5. Submit to add the card to your timeline
6. View all cards in the grid layout below

## Data Models

### Card
- `cardId`: Unique identifier
- `cardName`: Title of the card
- `cardContent`: Main content/description
- `categoryid`: Associated category ID
- `category`: Optional category object

### Category
- `categoryId`: Unique identifier
- `categoryName`: Name of the category

## License

See LICENSE file for details.
