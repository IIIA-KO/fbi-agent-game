const express = require('express');
const cors = require('cors');
const app = express();
const port = 4308;

app.use(cors());
app.use(express.json());

let gameState = {
    agentStatus: {
        energy: 100,
        stress: 0,
        mood: 100,
        isAlive: true
    },
    resources: {
        coffee: 5,
        donuts: 3,
        breakTime: 3  // breaks available
    },
    gameOver: false,
    message: ''
};

// Helper function to clamp values between 0 and 100
const clamp = (value) => Math.min(100, Math.max(0, value));

// Check agent's vital signs
const checkAgentStatus = () => {
    const { energy, stress, mood } = gameState.agentStatus;
    
    if (energy <= 0) {
        gameState.gameOver = true;
        gameState.message = 'Game Over: Agent collapsed from exhaustion!';
        gameState.agentStatus.isAlive = false;
    }
    else if (stress >= 100) {
        gameState.gameOver = true;
        gameState.message = 'Game Over: Agent had a mental breakdown!';
        gameState.agentStatus.isAlive = false;
    }
    else if (mood <= 0) {
        gameState.gameOver = true;
        gameState.message = 'Game Over: Agent quit the FBI!';
        gameState.agentStatus.isAlive = false;
    }
};

// Passive effects that happen over time
const applyPassiveEffects = () => {
    if (!gameState.gameOver) {
        gameState.agentStatus.energy = clamp(gameState.agentStatus.energy - 2);
        gameState.agentStatus.stress = clamp(gameState.agentStatus.stress + 3);
        gameState.agentStatus.mood = clamp(gameState.agentStatus.mood - 1);
        checkAgentStatus();
    }
};

// Start passive effects timer
setInterval(applyPassiveEffects, 10000); // Every 10 seconds

app.get('/agent/status', (req, res) => {
    res.json(gameState);
});

app.post('/agent/action', (req, res) => {
    if (gameState.gameOver) {
        return res.json(gameState);
    }

    const { action } = req.body;
    let actionPerformed = false;

    switch (action) {
        case 'give_coffee':
            if (gameState.resources.coffee > 0) {
                gameState.agentStatus.energy = clamp(gameState.agentStatus.energy + 15);
                gameState.agentStatus.stress = clamp(gameState.agentStatus.stress + 5); // Coffee increases stress
                gameState.resources.coffee--;
                actionPerformed = true;
                gameState.message = 'Coffee consumed! Energy up, but stress increased.';
            } else {
                gameState.message = 'No coffee available!';
            }
            break;

        case 'give_donuts':
            if (gameState.resources.donuts > 0) {
                gameState.agentStatus.mood = clamp(gameState.agentStatus.mood + 20);
                gameState.agentStatus.energy = clamp(gameState.agentStatus.energy + 5);
                gameState.resources.donuts--;
                actionPerformed = true;
                gameState.message = 'Donut eaten! Mood improved significantly.';
            } else {
                gameState.message = 'No donuts left!';
            }
            break;

        case 'take_break':
            if (gameState.resources.breakTime > 0) {
                gameState.agentStatus.stress = clamp(gameState.agentStatus.stress - 30);
                gameState.agentStatus.energy = clamp(gameState.agentStatus.energy - 10);
                gameState.resources.breakTime--;
                actionPerformed = true;
                gameState.message = 'Break taken! Stress reduced but energy decreased.';
            } else {
                gameState.message = 'No more breaks available!';
            }
            break;

        case 'buy_coffee':
            if (gameState.agentStatus.energy >= 20) {
                gameState.resources.coffee += 3;
                gameState.agentStatus.energy = clamp(gameState.agentStatus.energy - 20);
                actionPerformed = true;
                gameState.message = 'Bought 3 coffees at the cost of energy!';
            } else {
                gameState.message = 'Not enough energy to buy coffee!';
            }
            break;

        case 'buy_donuts':
            if (gameState.agentStatus.energy >= 15) {
                gameState.resources.donuts += 2;
                gameState.agentStatus.energy = clamp(gameState.agentStatus.energy - 15);
                actionPerformed = true;
                gameState.message = 'Bought 2 donuts at the cost of energy!';
            } else {
                gameState.message = 'Not enough energy to buy donuts!';
            }
            break;

        default:
            gameState.message = 'Invalid action!';
            return res.status(400).json(gameState);
    }

    if (actionPerformed) {
        checkAgentStatus();
    }

    res.json(gameState);
});

// Reset game endpoint
app.post('/agent/reset', (req, res) => {
    gameState = {
        agentStatus: {
            energy: 100,
            stress: 0,
            mood: 100,
            isAlive: true
        },
        resources: {
            coffee: 5,
            donuts: 3,
            breakTime: 3
        },
        gameOver: false,
        message: 'Game reset! Good luck!'
    };
    res.json(gameState);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});