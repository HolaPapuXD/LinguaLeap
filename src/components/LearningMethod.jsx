const checkAnswer = (userAnswer) => {
  if (!userAnswer) return false;
  
  // Limpiamos la respuesta del usuario y la respuesta correcta
  const cleanUserAnswer = userAnswer.trim().toLowerCase();
  const cleanCorrectAnswer = currentExercise.correctAnswer.trim().toLowerCase();
  
  // Verificamos si coinciden sin puntuación
  return cleanUserAnswer === cleanCorrectAnswer;
};

const handlePronunciationResult = (result) => {
  if (!result || !result.text) {
    setPronunciationScore(0);
    return;
  }

  // Limpiamos el texto reconocido y el texto esperado
  const recognizedText = result.text.trim().toLowerCase();
  const expectedText = currentExercise.text.trim().toLowerCase();
  
  // Removemos la puntuación de ambos textos
  const recognizedTextNoPunctuation = recognizedText.replace(/[.,!?;:]/g, '');
  const expectedTextNoPunctuation = expectedText.replace(/[.,!?;:]/g, '');
  
  // Calculamos la similitud
  const similarity = calculateSimilarity(recognizedTextNoPunctuation, expectedTextNoPunctuation);
  const score = Math.round(similarity * 100);
  
  setPronunciationScore(score);
  setPronunciationFeedback(score >= 80 ? '¡Excelente pronunciación!' : 
                          score >= 60 ? 'Buen intento, pero puedes mejorar' : 
                          'Necesitas más práctica');
}; 