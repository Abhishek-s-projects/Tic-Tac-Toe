# Tic-Tac-Toe (Kattam-Zero)

A classic Tic-Tac-Toe game implementation combining multiple programming languages for a complete gaming experience.

## 🎮 Project Overview

This project implements the timeless Tic-Tac-Toe game (also known as Noughts and Crosses) with a modern interface. The game is built using a blend of technologies including C for core logic, JavaScript for interactivity, HTML for structure, and CSS for styling.

## 📊 Technology Stack

- **C** (42.8%) - Core game logic and algorithms
- **JavaScript** (35%) - Client-side interactivity and game state management
- **CSS** (11.2%) - Styling and responsive design
- **HTML** (11%) - Page structure and markup

## ✨ Features

- **Classic Gameplay** - Traditional 3x3 grid Tic-Tac-Toe rules
- **Interactive Interface** - Click-based move selection
- **Game Status Display** - Real-time updates on game state
- **Win Detection** - Automatic detection of winning combinations
- **Draw Detection** - Identifies when the game ends in a draw
- **Responsive Design** - Works on various screen sizes

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript for modifications

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Abhishek-s-projects/Tic-Tac-Toe.git
cd Tic-Tac-Toe
```

2. Open the game in your browser:
   - Simply open `index.html` in your web browser
   - Or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

3. Visit `http://localhost:8000` (or the port shown in your terminal)

## 🎯 How to Play

1. **Game Board**: The 3x3 grid displays the game state
2. **Make Your Move**: Click on any empty cell to place your mark (X)
3. **Computer Response**: The computer automatically makes its move (O)
4. **Win Conditions**:
   - Get three of your marks in a row, column, or diagonal to win
   - If all cells are filled with no winner, the game is a draw
5. **New Game**: Click the reset button to start a fresh game

## 📁 Project Structure

```
Tic-Tac-Toe/
├── README.md           # Project documentation
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript game logic
└── [C files]           # Core algorithm implementations
```

## 🔧 Development

### Modifying the Game

- **Game Logic**: Edit the C files or JavaScript functions to change game behavior
- **Styling**: Modify `style.css` for visual changes
- **HTML Structure**: Update `index.html` to add new features or layout changes

### Building (if applicable)

If C code needs compilation:
```bash
gcc -o tic_tac_toe main.c
```

## 🎮 Game Rules

1. The game is played on a 3×3 grid
2. Players take turns marking cells
3. The first player to get three marks in a row (horizontally, vertically, or diagonally) wins
4. If all nine cells are filled without a winner, the game is a draw
5. The game cannot continue after a win or draw

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Abhishek-s-projects**

Feel free to fork this repository and submit pull requests for any improvements!

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the game:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📧 Support

If you encounter any issues or have suggestions, please open an [issue](https://github.com/Abhishek-s-projects/Tic-Tac-Toe/issues) on GitHub.

---

**Enjoy playing Tic-Tac-Toe! 🎲**
