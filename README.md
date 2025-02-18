# FBI Agent Management Game

This repository was created for the course **Software Standardization and Documentation**. The **FBI Agent Management Game** is a web-based game where players manage an FBI agent's well-being by strategically balancing vital statistics and resources to keep the agent operational.

## Table of Contents

- [FBI Agent Management Game](#fbi-agent-management-game)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Key Features](#key-features)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Quick Start](#quick-start)
  - [Game Rules](#game-rules)
  - [API Documentation](#api-documentation)
  - [Technical Stack](#technical-stack)
  - [Development](#development)
    - [Running Frontend in Development Mode](#running-frontend-in-development-mode)
    - [Running Backend in Development Mode](#running-backend-in-development-mode)
  - [License](#license)
  - [Author](#author)
  - [Contributing](#contributing)

## Overview

Players must manage an FBI agent's energy, stress, and mood levels while strategically using limited resources like coffee, donuts, and breaks. The game challenges players to make tactical decisions about resource usage and acquisition to prevent the agent from reaching critical conditions.

## Key Features

- Real-time status monitoring
- Resource management system
- Strategic decision-making
- Dynamic game state updates

## Installation

### Prerequisites

- Docker
- Docker Compose

### Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/IIIA-KO/fbi-agent-game
   cd fbi-agent-game
   ```

2. Build and start the containers:
   ```bash
   docker-compose up --build -d
   ```

3. Access the application:
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:4308`
   - Documentation: `http://localhost:3001`
   - Storybook: `http://localhost:6006`

## Game Rules

- **Agent Status**: Manage energy, stress, and mood levels.
- **Resources**: Use coffee, donuts, and breaks strategically.

## API Documentation

For detailed API endpoints, responses, and usage, please refer to the [Wiki](https://github.com/IIIA-KO/fbi-agent-game/wiki).

## Technical Stack

- **Backend**: Node.js, Express.js
- **Frontend**: Angular 19, TypeScript
- **Deployment**: Docker, Docker Compose

## Development

### Running Frontend in Development Mode

```bash
cd fbi-agent-game-frontend
npm install
ng serve
```

Access the development server at `http://localhost:4200`.

### Running Backend in Development Mode

```bash
cd fbi-agent-game-backend
npm install
node server.js
```

## License

This project is licensed under the ISC License.

## Author

Illia Kotvitskyi

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
