---
sidebar_position: 2
---

# Installation

## Prerequisites

- Docker
- Docker Compose

## Quick Start

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

## Docker Services

The project includes these containerized services:

| Service     | Port  | Description                     |
|-------------|-------|---------------------------------|
| Frontend    | 3000  | Angular application            |
| Backend     | 4308  | Node.js API server             |
| Documentation | 3001 | Docusaurus knowledge base      |
| Storybook   | 6006  | UI component development environment |