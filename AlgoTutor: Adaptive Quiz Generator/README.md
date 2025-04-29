# AlgoTutor: Adaptive Quiz Generator

## Purpose
AlgoTutor is a JavaScript-based mini-project designed to create an adaptive quiz generator. The tool dynamically adjusts the difficulty of questions based on the user's performance, providing a personalized learning experience.

## Main Algorithm Steps
1. **Initialization**: Load a question bank categorized by difficulty levels (easy, medium, hard).  
2. **Question Selection**: Start with a medium-difficulty question.  
3. **User Response Evaluation**:  
    - If the user answers correctly, increase the difficulty level.  
    - If the user answers incorrectly, decrease the difficulty level.  
4. **Adaptive Loop**: Repeat the process, selecting questions based on the updated difficulty level.  
5. **Termination**: End the quiz after a predefined number of questions or when the user opts to exit.  
6. **Result Summary**: Display the user's performance, including accuracy and difficulty progression.

## Base Algorithms Used
- **Binary Search**: To efficiently select questions from the sorted question bank.  
- **Weighted Scoring**: To calculate user performance and adjust difficulty dynamically.  
- **Random Sampling**: To ensure variety in question selection within a difficulty level.

## Sample Input and Output

### Input
- Question Bank:  
  ```json
  [
     {"question": "2 + 2 = ?", "difficulty": "easy", "answer": 4},
     {"question": "12 x 12 = ?", "difficulty": "medium", "answer": 144},
     {"question": "Solve for x: 2x + 3 = 7", "difficulty": "hard", "answer": 2}
  ]
  ```
- User Responses:  
  - Q1: Correct  
  - Q2: Incorrect  
  - Q3: Correct  

### Output
```json
{
  "questions_attempted": 3,
  "correct_answers": 2,
  "final_difficulty_level": "medium",
  "accuracy": "66.67%"
}
```

## Future Enhancements
- Add support for multiple-choice questions.  
- Integrate with a database for scalable question storage.  
- Implement a timer for time-bound quizzes.  
