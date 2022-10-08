import React, { useState, useEffect } from 'react';
import { db, getFirestore, getDocs, collection }from '../firebase/firebase-config'
import './QuizPage.css';

function QuizPage() {

	// write script to generate json file formatted similarly to this js dict.
	// import json and images into firebase.
	// write quiz to use data from firebase.
	// make sure admin uploads are storing data properly in firebase.
	const answers = [];
	const questions = [];
	const colRef = collection(db, 'artworks');
	getDocs(colRef).then((snapshot) => {
		// console.log(snapshot.docs);
		snapshot.docs.forEach((doc) => {
			answers.push({ ...doc.data(), id: doc.id })
		})
		// console.log(answers);
		answers.forEach((answer) => {
			questions.push({questionText: 'What is the style of this artwork?',
			answerOptions: [
				{ answerText: answer['style'], isCorrect: true },
				{ answerText: 'london', isCorrect: false },
				{ answerText: 'Paris', isCorrect: false },
				{ answerText: 'Dublin', isCorrect: false },
			]})
		})
		console.log(questions)
	})
	.catch(err => {
		console.log(err.message);
	})
	// console.log(answers)

	// const questions = populate_questions(answers);

	// function populate_questions(answers) {
	// 	answers.forEach((answer) => {
	// 		questions.push({questionText: 'What is the style of this artwork?',
	// 		answerOptions: [
	// 			{ answerText: answer['style'], isCorrect: true },
	// 			{ answerText: 'london', isCorrect: false },
	// 			{ answerText: 'Paris', isCorrect: false },
	// 			{ answerText: 'Dublin', isCorrect: false },
	// 		]})
	// 	})
	// 	// const questions = [
	// 	// 	{
	// 	// 		questionText: 'What is the capital of France?',
	// 	// 		answerOptions: [
	// 	// 			{ answerText: 'New York', isCorrect: false },
	// 	// 			{ answerText: 'London', isCorrect: false },
	// 	// 			{ answerText: 'Paris', isCorrect: true },
	// 	// 			{ answerText: 'Dublin', isCorrect: false },
	// 	// 		],
	// 	// 	},
	// 	//];
	// 	return questions
	// }
	

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
export default QuizPage;