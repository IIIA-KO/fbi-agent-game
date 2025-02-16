---
sidebar_position: 4
---

# API Endpoints

## Swagger Documentation

Access interactive API documentation at:

```curl
http://localhost:4308/api-docs
```

## Get Agent Status

```curl
GET http://localhost:4308/agent/status
```

### Response:

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

## Perform Action

```curl
POST http://localhost:4308/agent/action
Content-Type: application/json
{
"action": "give_coffee"
}
```

### Available actions:

- `give_coffee`
- `give_donuts`
- `take_break`
- `buy_coffee`
- `buy_donuts`

## Reset Game

```curl
POST http://localhost:4308/agent/reset
```

### Response:

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
