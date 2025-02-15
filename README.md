# FBI Agent Management Game

## Description

A web-based game where players manage an FBI agent's well-being by balancing their energy, stress, and mood levels. Players must strategically use limited resources like coffee, donuts, and breaks to keep the agent operational while managing the energy cost of acquiring new resources.

## Game Rules

### Agent Status

The agent has three vital statistics that players must monitor:

- **Energy** (0-100%): Decreases over time and when buying resources
- **Stress** (0-100%): Increases over time, affected by coffee consumption
- **Mood** (0-100%): Decreases over time, improved by donuts

### Resources

Players manage three types of resources:

- **Coffee**: Increases energy but adds stress
- **Donuts**: Improves mood and slightly boosts energy
- **Breaks**: Reduces stress but costs energy

### Resource Management

- Resources are limited and must be purchased using agent's energy
- Coffee costs 20 energy for 3 units
- Donuts cost 15 energy for 2 units
- Breaks are limited and cannot be replenished

### Game Over Conditions

The game ends if any of these occur:

- Energy reaches 0% (Agent collapses from exhaustion)
- Stress reaches 100% (Agent has a mental breakdown)
- Mood reaches 0% (Agent quits the FBI)

### Passive Effects

Every 10 seconds:

- Energy decreases by 2%
- Stress increases by 3%
- Mood decreases by 1%

## Technical Stack

### Backend

- Node.js
- Express.js
- CORS middleware
- In-memory game state management

### Frontend

- Angular 19
- TypeScript
- RxJS for state management
- HTTP Client for API communication

### Deployment

- Docker
- Docker Compose for service orchestration

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Installation and Running

1. Clone the repository

    ```bach
    git clone https://github.com/IIIA-KO/fbi-agent-game
    ```

2. Build and start the containers:

    ```bash
    docker-compose up --build
    ```

3. Access the game:

- Open your browser and navigate to `http://localhost:3000`
- The backend API will be available at `http://localhost:4308`
