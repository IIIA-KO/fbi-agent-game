# FBI Agent Management Game

A web-based game where players manage an FBI agent's well-being by strategically balancing vital statistics and resources to keep the agent operational.

## Overview

Players must manage an FBI agent's energy, stress, and mood levels while strategically using limited resources like coffee, donuts, and breaks. The game challenges players to make tactical decisions about resource usage and acquisition to prevent the agent from reaching critical conditions.

### Key Features

- Real-time status monitoring
- Resource management system
- Strategic decision-making
- Dynamic game state updates

## Installation

### Prerequisites

- Docker
- Docker Compose

### Quick Start

1. Clone the repository

    ```bash
    git clone https://github.com/IIIA-KO/fbi-agent-game
    cd fbi-agent-game
    ```

2. Build and start the containers

    ```bash
    docker-compose up --build -d
    ```

3. Access the application:

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:4308`
- Storybook: `http://localhost:6006`
- Documentation: `http://localhost:3001`

## Game Rules

### Agent Status

- Energy (0-100%): Decreases over time and when buying resources
- Stress (0-100%): Increases over time, affected by coffee consumption
- Mood (0-100%): Decreases over time, improved by donuts

### Resources

- Coffee: Increases energy but adds stress
- Donuts: Improves mood and slightly boosts energy
- Breaks: Reduces stress but costs energy

### Resource Costs

- Coffee: 20 energy for 3 units
- Donuts: 15 energy for 2 units
- Breaks: Limited and cannot be replenished

## API Endpoints

### Swagger Documentation

Access interactive API documentation at:

```curl
http://localhost:4308/api-docs
```

### Get Agent Status

```curl
GET http://localhost:4308/agent/status
```

Response:

```json
{
    "agentStatus": 
    {
        "energy": 100,
        "stress": 0,
        "mood": 100,
        "isAlive": true
    },
    "resources": 
    {
        "coffee": 5,
        "donuts": 3,
        "breakTime": 3
    },
    "gameOver": false,
    "message": ""
}
```

### Perform Action

```curl
POST http://localhost:4308/agent/action
Content-Type: application/json
{
    "action": "give_coffee"
}
```

### Reset Game

```curl
POST http://localhost:4308/agent/reset
```

Response:

```json
{
    "agentStatus": 
    {
        "energy": 100,
        "stress": 0,
        "mood": 100,
        "isAlive": true
    },
    "resources": 
    {
        "coffee": 5,
        "donuts": 3,
        "breakTime": 3
    },
    "gameOver": false,
    "message": "Game reset! Good luck!"
    }
```

Available actions:

- `give_coffee`
- `give_donuts`
- `take_break`
- `buy_coffee`
- `buy_donuts`



## Technical Stack

### Backend

- Node.js
- Express.js
- CORS middleware

### Frontend

- Angular 19
- TypeScript
- RxJS for state management

### Deployment

- Docker
- Docker Compose

## Development

### Running Frontend in Development Mode

```bash
cd fbi-agent-game-frontend
npm install
ng serve
```

Access the development server at `http://localhost:4200`

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
