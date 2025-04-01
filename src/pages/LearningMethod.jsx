import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { levels } from '../data/levels';
import '../styles/LearningMethod.css';

const LearningMethod = () => {
  const { levelId, topicId, methodId } = useParams();
  const level = levels.find(l => l.id === levelId);
  const topic = level?.topics.find(t => t.id === topicId);
  const method = topic?.learningMethods.find(m => m.id === methodId);

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    correct: 0,
    incorrect: 0,
    total: 0,
    percentage: 0
  });
  const [tempAnswer, setTempAnswer] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [audioElement, setAudioElement] = useState(null);
  const [speechSynthesis, setSpeechSynthesis] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const currentExercise = method?.exercises?.[currentExerciseIndex];

  useEffect(() => {
    // Limpiar respuestas guardadas del localStorage al cargar la página
    localStorage.removeItem(`answers_${levelId}_${topicId}_${methodId}`);
    setAnswers({});
  }, [levelId, topicId, methodId]);

  useEffect(() => {
    // Guardar respuestas en localStorage cuando cambien
    localStorage.setItem(`answers_${levelId}_${topicId}_${methodId}`, JSON.stringify(answers));
  }, [answers, levelId, topicId, methodId]);

  useEffect(() => {
    // Inicializar la síntesis de voz
    if ('speechSynthesis' in window) {
      const synthesis = window.speechSynthesis;
      setSpeechSynthesis(synthesis);
    }
  }, []);

  const playAudio = () => {
    if (speechSynthesis && currentExercise?.text) {
      // Cancelar cualquier síntesis en curso
      speechSynthesis.cancel();
      
      // Crear nueva síntesis
      const utterance = new SpeechSynthesisUtterance(currentExercise.text);
      utterance.lang = 'en-US'; // Configurar el idioma en inglés
      utterance.rate = 0.9; // Velocidad ligeramente más lenta para mejor comprensión
      utterance.pitch = 1; // Tono normal
      utterance.volume = 1; // Volumen máximo
      
      // Reproducir la síntesis
      speechSynthesis.speak(utterance);
    }
  };

  // Limpiar la síntesis cuando el componente se desmonte
  useEffect(() => {
    return () => {
      if (speechSynthesis) {
        speechSynthesis.cancel();
      }
    };
  }, [speechSynthesis]);

  useEffect(() => {
    // Prevenir clic derecho y eventos de copia
    const preventCopy = (e) => {
      if (currentExercise?.type === 'grammar' || 
          currentExercise?.type === 'writing' || 
          currentExercise?.type === 'sentence-building' || 
          currentExercise?.type === 'fill-blank' || 
          currentExercise?.type === 'multiple-choice') {
        e.preventDefault();
      }
    };

    // Prevenir clic derecho
    const preventContextMenu = (e) => {
      if (currentExercise?.type === 'grammar' || 
          currentExercise?.type === 'writing' || 
          currentExercise?.type === 'sentence-building' || 
          currentExercise?.type === 'fill-blank' || 
          currentExercise?.type === 'multiple-choice') {
        e.preventDefault();
      }
    };

    // Prevenir atajos de teclado
    const preventKeyboardShortcuts = (e) => {
      if (currentExercise?.type === 'grammar' || 
          currentExercise?.type === 'writing' || 
          currentExercise?.type === 'sentence-building' || 
          currentExercise?.type === 'fill-blank' || 
          currentExercise?.type === 'multiple-choice') {
        // Prevenir Ctrl+C, Ctrl+V, Ctrl+X
        if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'v' || e.key === 'x')) {
          e.preventDefault();
        }
        // Prevenir F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        if ((e.key === 'F12') || 
            ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
            ((e.ctrlKey || e.metaKey) && e.key === 'u')) {
          e.preventDefault();
        }
      }
    };

    // Agregar event listeners
    document.addEventListener('copy', preventCopy);
    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('keydown', preventKeyboardShortcuts);

    // Limpiar event listeners al desmontar
    return () => {
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('keydown', preventKeyboardShortcuts);
    };
  }, [currentExercise?.type]);

  if (!method) {
    return (
      <div className="learning-method-page">
        <div className="error">
          <h2>Method not found</h2>
          <Link to={`/level/${levelId}/topic/${topicId}`} className="btn btn-primary">
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }

  if (!method.exercises || method.exercises.length === 0) {
    return (
      <div className="learning-method-page">
        <div className="error">
          <h2>No exercises available</h2>
          <p>This learning method doesn't have any exercises yet.</p>
          <Link to={`/level/${levelId}/topic/${topicId}`} className="btn btn-primary">
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }

  if (!currentExercise) {
    return (
      <div className="learning-method-page">
        <div className="error">
          <h2>Exercise not found</h2>
          <Link to={`/level/${levelId}/topic/${topicId}`} className="btn btn-primary">
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }

  useEffect(() => {
    console.log('useEffect para reconocimiento de voz iniciado');
    console.log('Estado actual:', {
      currentExerciseIndex,
      currentExerciseType: currentExercise?.type,
      recognition: !!recognition
    });

    // Inicializar el reconocimiento de voz solo si el ejercicio actual es de tipo pronunciación
    if (currentExercise.type === 'pronunciation' && 'webkitSpeechRecognition' in window) {
      console.log('Inicializando nuevo reconocimiento de voz...');
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'en-US';
      recognition.maxAlternatives = 3;

      recognition.onresult = (event) => {
        console.log('Resultado de reconocimiento de voz recibido:', event.results[0][0].transcript);
        const transcript = event.results[0][0].transcript;
        setTranscript(transcript);
        setIsRecording(false);
        
        // Calcular puntuación con más flexibilidad
        const expectedText = currentExercise.text.toLowerCase().trim();
        const userText = transcript.toLowerCase().trim();
        
        // Remover puntuación y espacios extra
        const cleanExpected = expectedText.replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
        const cleanUser = userText.replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ');
        
        // Calcular similitud con más tolerancia
        const similarity = calculateSimilarity(cleanUser, cleanExpected);
        const score = Math.round(similarity * 100);
        
        console.log('Puntuación calculada:', {
          expectedText: cleanExpected,
          userText: cleanUser,
          similarity,
          score
        });
        
        // Solo actualizar si la puntuación es mejor que la anterior
        setCurrentScore(prevScore => {
          const newScore = Math.max(prevScore, score);
          setShowScore(true);
          return newScore;
        });
        
        // Actualizar respuestas solo si la puntuación es mejor que la anterior
        setAnswers(prev => {
          const currentAnswer = prev[currentExerciseIndex];
          const newScore = Math.max(currentAnswer?.score || 0, score);
          
          const newAnswers = {
            ...prev,
            [currentExerciseIndex]: {
              transcript,
              score: newScore,
              isCorrect: newScore >= 70
            }
          };
          console.log('Respuestas actualizadas:', newAnswers);
          return newAnswers;
        });
      };

      recognition.onerror = (event) => {
        console.error('Error en el reconocimiento de voz:', event.error);
        setIsRecording(false);
        
        let errorMessage = 'Hubo un error al acceder al micrófono. ';
        switch (event.error) {
          case 'no-speech':
            errorMessage = 'No se detectó ningún sonido. Por favor, intenta hablar más fuerte.';
            break;
          case 'aborted':
            errorMessage = 'La grabación fue interrumpida. Por favor, intenta de nuevo.';
            break;
          case 'audio-capture':
            errorMessage = 'No se pudo acceder al micrófono. Por favor, verifica los permisos del navegador.';
            break;
          case 'network':
            errorMessage = 'Error de red. Por favor, verifica tu conexión a internet.';
            break;
          case 'not-allowed':
            errorMessage = 'El acceso al micrófono fue denegado. Por favor, permite el acceso en la configuración del navegador.';
            break;
          case 'service-not-available':
            errorMessage = 'El servicio de reconocimiento de voz no está disponible. Por favor, intenta más tarde.';
            break;
          case 'bad-grammar':
            errorMessage = 'Error en la gramática. Por favor, intenta de nuevo.';
            break;
          case 'language-not-supported':
            errorMessage = 'El idioma no está soportado. Por favor, intenta en español.';
            break;
          default:
            errorMessage = 'Por favor, asegúrate de que tu navegador tiene permiso para usar el micrófono.';
        }
        
        alert(errorMessage);
      };

      recognition.onend = () => {
        console.log('Reconocimiento de voz finalizado');
        setIsRecording(false);
      };

      setRecognition(recognition);
      console.log('Reconocimiento de voz configurado y guardado en el estado');
    } else if (!('webkitSpeechRecognition' in window)) {
      console.warn('El navegador no soporta el reconocimiento de voz');
      alert('Tu navegador no soporta el reconocimiento de voz. Por favor, usa Chrome o Edge.');
    }

    // Limpiar el reconocimiento cuando el componente se desmonte o cambie de ejercicio
    return () => {
      console.log('Limpiando reconocimiento de voz...');
      if (recognition) {
        recognition.stop();
      }
    };
  }, [currentExerciseIndex, currentExercise]);

  const startRecording = () => {
    console.log('Iniciando grabación...');
    if (recognition) {
      try {
        // Limpiar estados anteriores
        setTranscript('');
        setShowScore(false);
        setCurrentScore(0);
        
        recognition.start();
        setIsRecording(true);
        console.log('Grabación iniciada correctamente');
      } catch (error) {
        console.error('Error al iniciar la grabación:', error);
        alert('No se pudo iniciar la grabación. Por favor, intenta de nuevo.');
      }
    }
  };

  const stopRecording = () => {
    console.log('Deteniendo grabación...');
    if (recognition) {
      try {
        recognition.stop();
        setIsRecording(false);
        console.log('Grabación detenida correctamente');
      } catch (error) {
        console.error('Error al detener la grabación:', error);
        alert('No se pudo detener la grabación. Por favor, intenta de nuevo.');
      }
    }
  };

  const calculateSimilarity = (str1, str2) => {
    // Convertir a minúsculas y dividir en palabras
    const words1 = str1.toLowerCase().split(/\s+/);
    const words2 = str2.toLowerCase().split(/\s+/);
    
    // Crear conjuntos de palabras
    const set1 = new Set(words1);
    const set2 = new Set(words2);
    
    // Calcular intersección y unión
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    
    // Calcular similitud de Jaccard
    const jaccardSimilarity = intersection.size / union.size;
    
    // Calcular similitud de Levenshtein para palabras individuales
    const levenshteinSimilarity = words1.reduce((acc, word1, i) => {
      if (i >= words2.length) return acc;
      const word2 = words2[i];
      const distance = levenshteinDistance(word1, word2);
      const maxLength = Math.max(word1.length, word2.length);
      return acc + (1 - distance / maxLength);
    }, 0) / Math.max(words1.length, words2.length);
    
    // Combinar ambas métricas
    return (jaccardSimilarity * 0.6) + (levenshteinSimilarity * 0.4);
  };

  const levenshteinDistance = (str1, str2) => {
    const matrix = Array(str2.length + 1).fill(null).map(() => 
      Array(str1.length + 1).fill(null)
    );

    for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;

    for (let j = 1; j <= str2.length; j++) {
      for (let i = 1; i <= str1.length; i++) {
        const substitutionCost = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1,
          matrix[j - 1][i - 1] + substitutionCost
        );
      }
    }

    return matrix[str2.length][str1.length];
  };

  const handleAnswer = (selectedAnswer) => {
    console.log('handleAnswer llamado con:', {
      selectedAnswer,
      currentExerciseIndex,
      currentExerciseType: currentExercise?.type,
      currentExercise,
      currentAnswers: answers
    });

    if (answers[currentExerciseIndex] !== undefined) {
      console.log('Ya existe una respuesta para este ejercicio');
      return;
    }

    let isCorrect;
    if (currentExercise.type === 'multiple-choice') {
      isCorrect = selectedAnswer === currentExercise.correct;
    } else if (currentExercise.type === 'fill-blank') {
      // Limpiar puntos al final de ambas respuestas para comparar
      const cleanUserAnswer = selectedAnswer.toLowerCase().trim().replace(/\.$/, '');
      const cleanCorrectAnswer = currentExercise.answer.toLowerCase().trim().replace(/\.$/, '');
      isCorrect = cleanUserAnswer === cleanCorrectAnswer;
    } else if (currentExercise.type === 'pronunciation') {
      // Para ejercicios de pronunciación, comparamos con el texto original
      const userAnswer = selectedAnswer.toLowerCase().trim();
      const correctAnswer = currentExercise.text.toLowerCase().trim();
      
      // Dividimos las palabras para comparar
      const userWords = userAnswer.split(/\s+/);
      const correctWords = correctAnswer.split(/\s+/);
      
      // Contamos palabras correctas
      let correctWordsCount = 0;
      userWords.forEach((word, index) => {
        if (correctWords[index] && word === correctWords[index]) {
          correctWordsCount++;
        }
      });
      
      // Calculamos el porcentaje de palabras correctas
      const percentage = (correctWordsCount / correctWords.length) * 100;
      
      // Consideramos correcto si el 80% o más de las palabras son correctas
      isCorrect = percentage >= 80;
      
      console.log('Resultado de pronunciación:', {
        userAnswer,
        correctAnswer,
        correctWordsCount,
        totalWords: correctWords.length,
        percentage,
        isCorrect
      });
      
      // Guardamos información detallada para mostrar en el feedback
      const newAnswers = {
        ...answers,
        [currentExerciseIndex]: {
          selected: selectedAnswer,
          isCorrect,
          percentage,
          correctWordsCount,
          totalWords: correctWords.length
        }
      };
      setAnswers(newAnswers);
      
      // Si es correcto, avanzamos al siguiente ejercicio
      if (isCorrect) {
        if (currentExerciseIndex === method.exercises.length - 1) {
          const correctCount = Object.values(newAnswers).filter(a => a.isCorrect).length;
          setResults({
            correct: correctCount,
            incorrect: method.exercises.length - correctCount,
            total: method.exercises.length,
            percentage: Math.round((correctCount / method.exercises.length) * 100)
          });
          setShowResults(true);
        } else {
          setCurrentExerciseIndex(prev => prev + 1);
          setTempAnswer('');
          setTranscript('');
        }
      }
      
      return;
    } else if (currentExercise.type === 'sentence-building') {
      // Limpiar puntos al final de ambas respuestas para comparar
      const cleanUserAnswer = selectedAnswer.toLowerCase().trim().replace(/\.$/, '');
      const cleanCorrectAnswer = currentExercise.correct.toLowerCase().trim().replace(/\.$/, '');
      isCorrect = cleanUserAnswer === cleanCorrectAnswer;
    } else if (currentExercise.type === 'writing' || currentExercise.type === 'short-essay') {
      console.log('Manejando ejercicio de escritura/short-essay:', {
        selectedAnswer,
        currentExercise,
        type: currentExercise.type
      });
      
      // Para ejercicios de escritura, consideramos correcto si el texto no está vacío
      isCorrect = selectedAnswer.trim().length > 0;
      
      console.log('Resultado de la validación de escritura:', {
        isCorrect,
        answerLength: selectedAnswer.trim().length
      });
      
      // Guardamos la respuesta con feedback
      const newAnswers = {
        ...answers,
        [currentExerciseIndex]: {
          selected: selectedAnswer,
          isCorrect,
          feedback: isCorrect ? '¡Buen trabajo! Tu respuesta es correcta.' : 'Por favor, escribe una respuesta.'
        }
      };
      
      console.log('Actualizando respuestas de escritura:', newAnswers);
      setAnswers(newAnswers);
      
      // Mostrar feedback inmediato
      setShowFeedback(true);
      setIsCorrect(isCorrect);
      
      // Avanzamos al siguiente ejercicio después de un breve delay
      setTimeout(() => {
        if (currentExerciseIndex === method.exercises.length - 1) {
          console.log('Último ejercicio completado, mostrando resultados');
          const correctCount = Object.values(newAnswers).filter(a => a.isCorrect).length;
          setResults({
            correct: correctCount,
            incorrect: method.exercises.length - correctCount,
            total: method.exercises.length,
            percentage: Math.round((correctCount / method.exercises.length) * 100)
          });
          setShowResults(true);
        } else {
          console.log('Avanzando al siguiente ejercicio');
          setCurrentExerciseIndex(prev => prev + 1);
          setTempAnswer('');
          setShowFeedback(false);
        }
      }, 1500);
      return;
    } else if (currentExercise.type === 'grammar') {
      isCorrect = selectedAnswer === currentExercise.correct;
      
      // Guardamos la respuesta con feedback
      const newAnswers = {
        ...answers,
        [currentExerciseIndex]: {
          selected: selectedAnswer,
          isCorrect,
          feedback: isCorrect ? 'Correct! ' + currentExercise.explanation : 'Incorrect. ' + currentExercise.explanation
        }
      };
      setAnswers(newAnswers);
      
      // Avanzamos al siguiente ejercicio después de un breve delay
      setTimeout(() => {
        if (currentExerciseIndex === method.exercises.length - 1) {
          const correctCount = Object.values(newAnswers).filter(a => a.isCorrect).length;
          setResults({
            correct: correctCount,
            incorrect: method.exercises.length - correctCount,
            total: method.exercises.length,
            percentage: Math.round((correctCount / method.exercises.length) * 100)
          });
          setShowResults(true);
        } else {
          setCurrentExerciseIndex(prev => prev + 1);
          setTempAnswer('');
        }
      }, 1500);
      return;
    } else {
      isCorrect = true; // Para otros tipos de ejercicios
    }

    console.log('Resultado final:', {
      isCorrect,
      currentExerciseType: currentExercise.type
    });

    // Actualizar el estado de respuestas
    const newAnswers = {
      ...answers,
      [currentExerciseIndex]: {
        selected: selectedAnswer,
        isCorrect
      }
    };
    setAnswers(newAnswers);

    // Mostrar feedback inmediato
    setShowFeedback(true);
    setIsCorrect(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }

    // Avanzar al siguiente ejercicio después de un breve delay
    setTimeout(() => {
      if (currentExerciseIndex === method.exercises.length - 1) {
        const correctCount = Object.values(newAnswers).filter(a => a.isCorrect).length;
        setResults({
          correct: correctCount,
          incorrect: method.exercises.length - correctCount,
          total: method.exercises.length,
          percentage: Math.round((correctCount / method.exercises.length) * 100)
        });
        setShowResults(true);
      } else {
        console.log('Avanzando al siguiente ejercicio:', currentExerciseIndex + 1);
        setCurrentExerciseIndex(prev => prev + 1);
        setTempAnswer('');
        setShowFeedback(false);
        setUserAnswer('');
      }
    }, 1500);
  };

  const handleFillBlankSubmit = () => {
    if (tempAnswer.trim() !== '') {
      handleAnswer(tempAnswer);
    }
  };

  const handleFillBlankKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleFillBlankSubmit();
    }
  };

  const handleNextExercise = () => {
    console.log('=== Proceso de Calificación Final ===');
    
    // Calcular resultados finales usando la mejor puntuación de cada ejercicio
    const totalExercises = method.exercises.length;
    const correctExercises = Object.values(answers).filter(a => {
      if (a.score !== undefined) {
        return a.score >= 70;
      }
      return a.isCorrect;
    }).length;
    const incorrectExercises = totalExercises - correctExercises;
    const percentage = Math.round((correctExercises / totalExercises) * 100);
    
    console.log('Resultados detallados:');
    console.log('Total de ejercicios:', totalExercises);
    console.log('Ejercicios correctos:', correctExercises);
    console.log('Ejercicios incorrectos:', incorrectExercises);
    console.log('Porcentaje de aciertos:', percentage + '%');
    
    // Mostrar detalles de cada ejercicio
    console.log('\nDetalles por ejercicio:');
    Object.entries(answers).forEach(([index, answer]) => {
      const exercise = method.exercises[parseInt(index)];
      console.log(`\nEjercicio ${parseInt(index) + 1}:`);
      console.log('Pregunta:', exercise.question || exercise.text);
      console.log('Tu respuesta:', answer.selected || answer.transcript);
      console.log('Respuesta correcta:', exercise.answer || exercise.correct);
      console.log('¿Es correcta?:', answer.isCorrect ? '✅ Sí' : '❌ No');
      if (answer.score !== undefined) {
        console.log('Puntuación de pronunciación:', answer.score + '%');
      }
    });
    
    setResults({
      correct: correctExercises,
      incorrect: incorrectExercises,
      total: totalExercises,
      percentage
    });
    setShowResults(true);
  };

  const handleSubmit = () => {
    const isAnswerCorrect = userAnswer.toLowerCase().trim() === currentExercise?.answer.toLowerCase().trim();
    
    console.log('=== Proceso de Calificación ===');
    console.log('Respuesta del usuario:', userAnswer);
    console.log('Respuesta correcta:', currentExercise?.answer);
    console.log('¿Es correcta?:', isAnswerCorrect ? '✅ Sí' : '❌ No');
    
    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect) {
      setScore(score + 1);
      console.log('Puntuación actual:', score + 1);
    }
    
    console.log('=== Feedback ===');
    console.log('Color aplicado:', isAnswerCorrect ? 'Verde (Correcto)' : 'Rojo (Incorrecto)');
    console.log('Mensaje mostrado:', isAnswerCorrect ? '¡Correcto! 🎉' : `Incorrecto. La respuesta correcta es: ${currentExercise?.answer}`);
    
    setShowFeedback(true);
  };

  const handleNext = () => {
    setCurrentExerciseIndex(prev => prev + 1);
    setUserAnswer('');
    setShowFeedback(false);
    // Limpiar estados de grabación
    setTranscript('');
    setShowScore(false);
    setCurrentScore(0);
    setIsRecording(false);
  };

  const renderExercise = () => {
    if (currentExercise.type === 'pronunciation') {
      return (
        <div className="pronunciation-exercise">
          <p className="text-to-speak">{currentExercise.text}</p>
          <div className="pronunciation-controls">
            <button
              className="btn btn-secondary"
              onClick={playAudio}
              disabled={!speechSynthesis}
            >
              Escuchar Pronunciación
            </button>
          </div>
          <div className="recording-controls">
            <button
              className={`btn ${isRecording ? 'btn-secondary' : 'btn-primary'}`}
              onClick={isRecording ? stopRecording : startRecording}
              disabled={!recognition}
            >
              {isRecording ? 'Detener Grabación' : 'Iniciar Grabación'}
            </button>
          </div>
          {transcript && (
            <div className="transcript-section">
              <h3>Lo que dijiste:</h3>
              <p>{transcript}</p>
            </div>
          )}
          {showScore && (
            <div className={`score-section ${currentScore >= 70 ? 'correct' : 'incorrect'}`}>
              <h3>Tu Puntuación: {currentScore}%</h3>
              <p>{currentScore >= 70 ? '¡Excelente pronunciación!' : 'Sigue practicando para mejorar tu pronunciación.'}</p>
            </div>
          )}
          {(transcript || showScore) && (
            <button 
              className="btn btn-primary next-button" 
              onClick={currentExerciseIndex === method.exercises.length - 1 ? handleNextExercise : handleNext}
            >
              {currentExerciseIndex === method.exercises.length - 1 ? 'Ver Resultados' : 'Siguiente Ejercicio'}
            </button>
          )}
        </div>
      );
    }

    if (currentExercise.type === 'sentence-building') {
      return (
        <div className="sentence-building-exercise">
          <div className="exercise-prompt">
            <h3>Arrange the words to form a correct sentence:</h3>
          </div>
          <div className="sentence-words">
            {currentExercise.words.map((word, index) => (
              <button
                key={index}
                className="word-button"
                onClick={() => setTempAnswer(prev => prev + (prev ? ' ' : '') + word)}
                disabled={showFeedback}
              >
                {word}
              </button>
            ))}
          </div>
          <div className="sentence-input">
            <input
              type="text"
              value={tempAnswer}
              onChange={(e) => setTempAnswer(e.target.value)}
              onKeyPress={handleFillBlankKeyPress}
              placeholder="Your sentence..."
              className="sentence-field"
              disabled={showFeedback}
            />
            <button 
              className="btn btn-primary"
              onClick={handleFillBlankSubmit}
              disabled={!tempAnswer.trim() || showFeedback}
            >
              Submit
            </button>
          </div>
          {showFeedback && (
            <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? '¡Correcto! 🎉' : `Incorrecto. La respuesta correcta es: ${currentExercise.correct}`}
            </div>
          )}
        </div>
      );
    }

    if (currentExercise.type === 'writing') {
      return (
        <div className="writing-exercise">
          <div className="exercise-prompt">
            <h3>{currentExercise.prompt || currentExercise.topic}</h3>
            {currentExercise.example && (
              <div className="example">
                <p>Example:</p>
                <p>{currentExercise.example}</p>
              </div>
            )}
            {currentExercise.wordLimit && (
              <p className="word-limit">Word limit: {currentExercise.wordLimit} words</p>
            )}
          </div>
          <div className="writing-input">
            <textarea
              value={tempAnswer}
              onChange={(e) => setTempAnswer(e.target.value)}
              placeholder="Write your answer here..."
              rows="6"
              className="writing-textarea"
              disabled={showFeedback}
            />
          </div>
          <div className="writing-actions">
            <button 
              className="btn btn-primary"
              onClick={() => handleAnswer(tempAnswer)}
              disabled={!tempAnswer.trim() || showFeedback}
            >
              Submit
            </button>
          </div>
          {showFeedback && (
            <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? '¡Correcto! 🎉' : `Incorrecto. La respuesta correcta es: ${currentExercise.answer}`}
            </div>
          )}
        </div>
      );
    }

    if (currentExercise.type === 'short-essay') {
      return (
        <div className="writing-exercise">
          <div className="exercise-prompt">
            <h3>{currentExercise.topic}</h3>
            {currentExercise.wordLimit && (
              <p className="word-limit">Word limit: {currentExercise.wordLimit} words</p>
            )}
          </div>
          <div className="writing-input">
            <textarea
              value={tempAnswer}
              onChange={(e) => setTempAnswer(e.target.value)}
              placeholder="Write your essay here..."
              rows="8"
              className="writing-textarea"
              disabled={showFeedback}
            />
          </div>
          <div className="writing-actions">
            <button 
              className="btn btn-primary"
              onClick={() => handleAnswer(tempAnswer)}
              disabled={!tempAnswer.trim() || showFeedback}
            >
              Submit
            </button>
          </div>
          {showFeedback && (
            <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? '¡Correcto! 🎉' : `Incorrecto. La respuesta correcta es: ${currentExercise.answer}`}
            </div>
          )}
        </div>
      );
    }

    if (currentExercise.type === 'grammar') {
      return (
        <div className="grammar-exercise">
          <div className="exercise-prompt">
            <h3>{currentExercise.question}</h3>
            {currentExercise.context && (
              <p className="context">{currentExercise.context}</p>
            )}
          </div>
          <div className="grammar-options">
            {currentExercise.options.map((option, index) => (
              <button
                key={index}
                className={`grammar-option ${answers[currentExerciseIndex]?.selected === option ? 
                  (answers[currentExerciseIndex]?.isCorrect ? 'correct' : 'incorrect') : ''}`}
                onClick={() => handleAnswer(option)}
                disabled={showFeedback}
              >
                {option}
              </button>
            ))}
          </div>
          {showFeedback && (
            <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? (
                <p>Correct! {currentExercise.explanation}</p>
              ) : (
                <p>Incorrect. {currentExercise.explanation}</p>
              )}
            </div>
          )}
        </div>
      );
    }

    if (currentExercise.type === 'multiple-choice') {
      return (
        <div className="multiple-choice-exercise">
          <div className="exercise-prompt">
            <h3>{currentExercise.question}</h3>
          </div>
          <div className="options-grid">
            {currentExercise.options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${answers[currentExerciseIndex]?.selected === option ? 
                  (answers[currentExerciseIndex]?.isCorrect ? 'correct' : 'incorrect') : ''}`}
                onClick={() => handleAnswer(option)}
                disabled={showFeedback}
              >
                {option}
              </button>
            ))}
          </div>
          {showFeedback && (
            <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? '¡Correcto! 🎉' : `Incorrecto. La respuesta correcta es: ${currentExercise.correct}`}
            </div>
          )}
        </div>
      );
    }

    if (currentExercise.type === 'fill-blank') {
      return (
        <div className="fill-blank-exercise">
          <div className="exercise-prompt">
            <h3>{currentExercise.question}</h3>
          </div>
          <div className="fill-blank-input">
            <input
              type="text"
              value={tempAnswer}
              onChange={(e) => setTempAnswer(e.target.value)}
              onKeyPress={handleFillBlankKeyPress}
              placeholder="Type your answer..."
              className="fill-blank-field"
              disabled={showFeedback}
            />
            <button 
              className="btn btn-primary"
              onClick={handleFillBlankSubmit}
              disabled={!tempAnswer.trim() || showFeedback}
            >
              Submit
            </button>
          </div>
          {showFeedback && (
            <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? '¡Correcto! 🎉' : `Incorrecto. La respuesta correcta es: ${currentExercise.answer}`}
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="learning-method-page">
      <div className="method-header">
        <Link to={`/level/${levelId}/topic/${topicId}`} className="back-button">
          <i className="bx bx-arrow-back"></i>
          Back to {topic.title}
        </Link>
        <h1>{method.name}</h1>
        <p>{method.description}</p>
      </div>

      <div className="method-content">
        {showResults ? (
          <div className="results-container">
            <h2>Resultados Finales</h2>
            <div className="results-summary">
              <div className="result-item">
                <h3>Puntuación Total</h3>
                <p className={`score ${results.percentage >= 70 ? 'good' : 'needs-improvement'}`}>
                  {results.percentage}%
                </p>
              </div>
              <div className="result-item">
                <h3>Ejercicios Correctos</h3>
                <p>{results.correct} de {results.total}</p>
              </div>
              <div className="result-item">
                <h3>Ejercicios Incorrectos</h3>
                <p>{results.incorrect} de {results.total}</p>
              </div>
            </div>
            <div className="results-actions">
              <button className="btn btn-primary" onClick={() => {
                setShowResults(false);
                setCurrentExerciseIndex(0);
                setAnswers({});
                setTranscript('');
                setShowScore(false);
                setCurrentScore(0);
              }}>
                Intentar de Nuevo
              </button>
              <Link to={`/level/${levelId}/topic/${topicId}`} className="btn btn-secondary">
                Volver a Temas
              </Link>
            </div>
          </div>
        ) : (
          <div className="exercise-content">
            <div className="exercise-header">
              <h2>Exercise {currentExerciseIndex + 1} of {method.exercises.length}</h2>
            </div>
            {renderExercise()}
          </div>
        )}
      </div>
      
      {/* Agregar mensaje de ayuda para el reconocimiento de voz */}
      {currentExercise?.type === 'pronunciation' && !showResults && (
        <div className="voice-recognition-help">
          <h3>Consejos para usar el reconocimiento de voz:</h3>
          <ul>
            <li>Asegúrate de que tu navegador tiene permiso para usar el micrófono</li>
            <li>Usa un navegador compatible (Chrome o Edge)</li>
            <li>Habla claramente y en un lugar tranquilo</li>
            <li>Si hay error, intenta recargar la página</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LearningMethod;