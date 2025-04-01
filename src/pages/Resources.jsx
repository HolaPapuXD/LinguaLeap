import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Resources.css';

function Resources() {
  useEffect(() => {
    console.log('Resources component mounted');
  }, []);

  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedResource, setSelectedResource] = useState(null);
  const [exerciseStates, setExerciseStates] = useState({});
  const [feedback, setFeedback] = useState({});

  const resources = {
    beginner: [
      {
        title: 'Basic Grammar Guide',
        description: 'Essential grammar rules for beginners',
        type: 'interactive',
        level: 'Beginner',
        content: {
          sections: [
            {
              title: 'Present Simple',
              content: 'Learn how to use the present simple tense for facts, habits, and routines.',
              exercises: [
                {
                  question: 'Complete the sentence: "She ___ English every day."',
                  options: ['study', 'studies', 'studying', 'studied'],
                  answer: 'studies',
                  explanation: 'En el presente simple, agregamos -s o -es al verbo cuando el sujeto es he, she, o it (tercera persona singular). Esto es porque "she" es un sujeto en tercera persona singular.'
                },
                {
                  question: 'Which sentence is correct?',
                  options: [
                    'I am go to school',
                    'I go to school',
                    'I going to school',
                    'I goes to school'
                  ],
                  answer: 'I go to school',
                  explanation: 'En presente simple, usamos la forma base del verbo (go) con la primera persona singular (I) y sujetos plurales. No usamos "am" con la forma base del verbo en presente simple.'
                },
                {
                  question: 'Complete: "My brother ___ (work) in a hospital."',
                  options: ['work', 'works', 'working', 'worked'],
                  answer: 'works',
                  explanation: 'En presente simple, agregamos -s al verbo cuando el sujeto es he, she, it o un nombre singular. "My brother" es un sujeto singular, por lo que usamos "works".'
                },
                {
                  question: 'Which sentence is correct?',
                  options: [
                    'They plays football every weekend',
                    'They play football every weekend',
                    'They playing football every weekend',
                    'They played football every weekend'
                  ],
                  answer: 'They play football every weekend',
                  explanation: 'Con sujetos plurales (they, we, you) y la primera persona singular (I), usamos la forma base del verbo sin -s. "They" es plural, por lo que usamos "play".'
                },
                {
                  question: 'Complete: "The sun ___ (rise) in the east."',
                  options: ['rise', 'rises', 'rising', 'rose'],
                  answer: 'rises',
                  explanation: 'Este es un hecho general o una verdad universal. En presente simple, con he/she/it usamos la forma con -s. "The sun" es un sujeto singular, por lo que usamos "rises".'
                },
                {
                  question: 'Which sentence is correct?',
                  options: [
                    'She don\'t like coffee',
                    'She doesn\'t like coffee',
                    'She not like coffee',
                    'She no like coffee'
                  ],
                  answer: 'She doesn\'t like coffee',
                  explanation: 'En presente simple negativo, usamos don\'t/doesn\'t + verbo base. Con he/she/it usamos doesn\'t. "She" es tercera persona singular, por lo que usamos "doesn\'t".'
                },
                {
                  question: 'Complete: "___ you speak Spanish?"',
                  options: ['Do', 'Does', 'Is', 'Are'],
                  answer: 'Do',
                  explanation: 'En presente simple interrogativo, usamos Do/Does + sujeto + verbo base. Con you/we/they/I usamos Do. "You" es segunda persona, por lo que usamos "Do".'
                },
                {
                  question: 'Which sentence is correct?',
                  options: [
                    'Does she works here?',
                    'Does she work here?',
                    'Do she work here?',
                    'Is she work here?'
                  ],
                  answer: 'Does she work here?',
                  explanation: 'En presente simple interrogativo con he/she/it, usamos Does + sujeto + verbo base (sin -s). "She" es tercera persona singular, por lo que usamos "Does" y "work" sin -s.'
                },
                {
                  question: 'Complete: "My parents ___ (live) in Madrid."',
                  options: ['live', 'lives', 'living', 'lived'],
                  answer: 'live',
                  explanation: 'Con sujetos plurales usamos la forma base del verbo sin -s. "My parents" es plural, por lo que usamos "live" sin -s.'
                },
                {
                  question: 'Which sentence is correct?',
                  options: [
                    'The cat sleep on the sofa',
                    'The cat sleeps on the sofa',
                    'The cat sleeping on the sofa',
                    'The cat slept on the sofa'
                  ],
                  answer: 'The cat sleeps on the sofa',
                  explanation: 'En presente simple, con he/she/it o nombres singulares, agregamos -s al verbo. "The cat" es un sujeto singular, por lo que usamos "sleeps".'
                },
                {
                  question: 'Complete: "___ your sister ___ (study) at university?"',
                  options: ['Do/study', 'Does/study', 'Is/study', 'Are/study'],
                  answer: 'Does/study',
                  explanation: 'En presente simple interrogativo con he/she/it, usamos Does + sujeto + verbo base. "Your sister" es tercera persona singular, por lo que usamos "Does" y "study" sin -s.'
                },
                {
                  question: 'Which sentence is correct?',
                  options: [
                    'I not drink coffee',
                    'I don\'t drink coffee',
                    'I doesn\'t drink coffee',
                    'I no drink coffee'
                  ],
                  answer: 'I don\'t drink coffee',
                  explanation: 'En presente simple negativo, usamos don\'t/doesn\'t + verbo base. Con I/you/we/they usamos don\'t. "I" es primera persona, por lo que usamos "don\'t".'
                }
              ]
            },
            {
              title: 'Basic Questions',
              content: 'Learn how to form and answer basic questions in English.',
              exercises: [
                {
                  question: 'Which is the correct question form?',
                  options: [
                    'Where you are from?',
                    'Where are you from?',
                    'You are from where?',
                    'From where you are?'
                  ],
                  answer: 'Where are you from?',
                  explanation: 'En inglés, las preguntas con "to be" siguen el patrón: Palabra interrogativa + verbo to be + sujeto. "Where are you from?" es la forma correcta.'
                },
                {
                  question: 'Complete the question: "___ do you live?"',
                  options: ['What', 'Where', 'When', 'Who'],
                  answer: 'Where',
                  explanation: 'Usamos "Where" para preguntar sobre lugares o ubicaciones. "What" es para cosas, "When" para tiempo, y "Who" para personas.'
                }
              ]
            }
          ]
        }
      },
      {
        title: 'Basic Vocabulary',
        description: 'Essential everyday vocabulary for beginners',
        type: 'interactive',
        level: 'Beginner',
        content: {
          sections: [
            {
              title: 'Numbers and Colors',
              content: 'Learn basic numbers and colors in English.',
              exercises: [
                {
                  question: 'Which is the correct spelling?',
                  options: [
                    'twenty-one',
                    'twenty one',
                    'twentyone',
                    'twenty-1'
                  ],
                  answer: 'twenty-one',
                  explanation: 'En inglés, los números compuestos se escriben con un guión entre las palabras. "Twenty-one" es la forma correcta.'
                },
                {
                  question: 'What color is the sky on a clear day?',
                  options: ['blue', 'blu', 'blew', 'bloo'],
                  answer: 'blue',
                  explanation: 'El color del cielo en un día despejado es "blue". Las otras opciones son errores de ortografía comunes.'
                }
              ]
            }
          ]
        }
      }
    ],
    intermediate: [
      {
        title: 'Advanced Grammar',
        description: 'Complex grammar structures and usage',
        type: 'interactive',
        level: 'Intermediate',
        content: {
          sections: [
            {
              title: 'Present Perfect',
              content: 'Learn how to use the present perfect tense.',
              exercises: [
                {
                  question: 'Which sentence is correct?',
                  options: [
                    'I have never been to Paris',
                    'I have never go to Paris',
                    'I have never going to Paris',
                    'I have never went to Paris'
                  ],
                  answer: 'I have never been to Paris',
                  explanation: 'En el presente perfecto, usamos el participio pasado del verbo. "Been" es el participio pasado de "be". No usamos la forma base (go), la forma -ing (going), ni el pasado simple (went).'
                },
                {
                  question: 'Complete the sentence: "She ___ (live) here for five years."',
                  options: ['has lived', 'have lived', 'has live', 'have live'],
                  answer: 'has lived',
                  explanation: 'En presente perfecto con "for" o "since", usamos have/has + participio pasado. Como el sujeto es "she" (tercera persona singular), usamos "has".'
                }
              ]
            },
            {
              title: 'Conditional Sentences',
              content: 'Learn how to use different types of conditional sentences.',
              exercises: [
                {
                  question: 'Which is the correct first conditional?',
                  options: [
                    'If it rains tomorrow, I will stay home',
                    'If it will rain tomorrow, I stay home',
                    'If it rains tomorrow, I stay home',
                    'If it will rain tomorrow, I will stay home'
                  ],
                  answer: 'If it rains tomorrow, I will stay home',
                  explanation: 'En el primer condicional, usamos presente simple en la cláusula "if" y futuro simple (will + verbo base) en la cláusula principal.'
                }
              ]
            }
          ]
        }
      },
      {
        title: 'Business English',
        description: 'Professional vocabulary and expressions',
        type: 'interactive',
        level: 'Intermediate',
        content: {
          sections: [
            {
              title: 'Email Writing',
              content: 'Learn how to write professional emails.',
              exercises: [
                {
                  question: 'Choose the best opening for a formal email:',
                  options: [
                    'Hey there!',
                    'Dear Sir/Madam,',
                    'Hi!',
                    'Yo!'
                  ],
                  answer: 'Dear Sir/Madam,',
                  explanation: '"Dear Sir/Madam" es la apertura más formal y profesional para un correo de negocios. Las otras opciones son demasiado informales para la comunicación formal.'
                },
                {
                  question: 'Which closing is most appropriate for a business email?',
                  options: [
                    'See ya!',
                    'Best regards,',
                    'Bye!',
                    'Cheers!'
                  ],
                  answer: 'Best regards,',
                  explanation: '"Best regards" es un cierre formal y profesional apropiado para correos de negocios. Las otras opciones son demasiado informales.'
                }
              ]
            }
          ]
        }
      }
    ],
    advanced: [
      {
        title: 'Academic English',
        description: 'Advanced academic writing and research',
        type: 'interactive',
        level: 'Advanced',
        content: {
          sections: [
            {
              title: 'Essay Structure',
              content: 'Learn how to structure academic essays.',
              exercises: [
                {
                  question: 'What should come first in an academic essay?',
                  options: [
                    'Conclusion',
                    'Body paragraphs',
                    'Introduction',
                    'References'
                  ],
                  answer: 'Introduction',
                  explanation: 'La introducción debe ir primero porque presenta el tema, proporciona contexto y describe los puntos principales que se discutirán en el ensayo. La conclusión va al final y los párrafos del cuerpo en medio.'
                },
                {
                  question: 'Which is the best thesis statement?',
                  options: [
                    'This essay is about climate change',
                    'Climate change is a problem',
                    'Climate change is a significant global challenge that requires immediate action from governments, businesses, and individuals',
                    'I think climate change is bad'
                  ],
                  answer: 'Climate change is a significant global challenge that requires immediate action from governments, businesses, and individuals',
                  explanation: 'Una buena tesis debe ser específica, argumentativa y presentar una posición clara. La tercera opción es la mejor porque es detallada, presenta un argumento y sugiere la dirección del ensayo.'
                }
              ]
            }
          ]
        }
      },
      {
        title: 'Idioms and Expressions',
        description: 'Common idioms and their usage',
        type: 'interactive',
        level: 'Advanced',
        content: {
          sections: [
            {
              title: 'Common Idioms',
              content: 'Learn and practice common English idioms.',
              exercises: [
                {
                  question: 'What does "It\'s raining cats and dogs" mean?',
                  options: [
                    'Animals are falling from the sky',
                    'It\'s raining very heavily',
                    'There are many pets outside',
                    'The weather is nice'
                  ],
                  answer: 'It\'s raining very heavily',
                  explanation: '"It\'s raining cats and dogs" es un modismo que significa que está lloviendo muy fuerte. Es una expresión común en inglés para describir una lluvia intensa, no animales cayendo literalmente del cielo.'
                },
                {
                  question: 'What does "Break a leg" mean?',
                  options: [
                    'To hurt yourself',
                    'To wish someone good luck',
                    'To run very fast',
                    'To dance'
                  ],
                  answer: 'To wish someone good luck',
                  explanation: '"Break a leg" es una expresión idiomática que se usa para desear buena suerte a alguien, especialmente antes de una actuación. Es una forma supersticiosa de decir "good luck".'
                }
              ]
            }
          ]
        }
      }
    ]
  };

  const filterResources = () => {
    if (selectedLevel === 'all') {
      return [...resources.beginner, ...resources.intermediate, ...resources.advanced];
    }
    return resources[selectedLevel] || [];
  };

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
    setExerciseStates({});
    setFeedback({});
  };

  const handleBack = () => {
    setSelectedResource(null);
    setExerciseStates({});
    setFeedback({});
  };

  const handleAnswer = (resourceIndex, sectionIndex, exerciseIndex, answer) => {
    const exercise = selectedResource.content.sections[sectionIndex].exercises[exerciseIndex];
    const isCorrect = answer === exercise.answer;
    
    setExerciseStates(prev => ({
      ...prev,
      [`${resourceIndex}-${sectionIndex}-${exerciseIndex}`]: {
        answered: true,
        isCorrect
      }
    }));

    setFeedback(prev => ({
      ...prev,
      [`${resourceIndex}-${sectionIndex}-${exerciseIndex}`]: {
        message: isCorrect ? '¡Correcto! 🎉' : '¡Intenta de nuevo! 💪',
        isCorrect,
        explanation: exercise.explanation
      }
    }));

    if (isCorrect) {
      setTimeout(() => {
        setFeedback(prev => ({
          ...prev,
          [`${resourceIndex}-${sectionIndex}-${exerciseIndex}`]: {
            ...prev[`${resourceIndex}-${sectionIndex}-${exerciseIndex}`],
            message: '¡Excelente trabajo! Has completado este ejercicio.'
          }
        }));
      }, 2000);
    }
  };

  if (selectedResource) {
    return (
      <div className="resource-detail">
        <button className="back-button" onClick={handleBack}>
          <i className="bx bx-arrow-back"></i> Back to Resources
        </button>
        <h1>{selectedResource.title}</h1>
        <p className="resource-description">{selectedResource.description}</p>
        
        {selectedResource.content.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="resource-section">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
            
            {section.exercises.map((exercise, exerciseIndex) => {
              const stateKey = `${selectedResource.title}-${sectionIndex}-${exerciseIndex}`;
              const exerciseState = exerciseStates[stateKey];
              const feedbackData = feedback[stateKey];

              return (
                <div key={exerciseIndex} className="exercise">
                  <h3>Exercise {exerciseIndex + 1}</h3>
                  <p className="question">{exercise.question}</p>
                  <div className="options">
                    {exercise.options.map((option, optIndex) => (
                      <button 
                        key={optIndex}
                        className={`option-button ${
                          exerciseState?.answered && option === exercise.answer
                            ? exerciseState.isCorrect
                              ? 'correct'
                              : 'incorrect'
                            : ''
                        }`}
                        onClick={() => !exerciseState?.answered && handleAnswer(selectedResource.title, sectionIndex, exerciseIndex, option)}
                        disabled={exerciseState?.answered}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {feedbackData && (
                    <div className={`feedback ${feedbackData.isCorrect ? 'correct' : 'incorrect'}`}>
                      <p className="feedback-message">{feedbackData.message}</p>
                      {exerciseState?.answered && (
                        <div className="explanation">
                          <h4>¿Por qué?</h4>
                          <p>{feedbackData.explanation}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="resources-page">
      <div className="resources-header">
        <h1>Learning Resources</h1>
        <p>Access study materials tailored to your English level</p>
      </div>

      <div className="resources-filters">
        <button 
          className={`filter-btn ${selectedLevel === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedLevel('all')}
        >
          All Levels
        </button>
        <button 
          className={`filter-btn ${selectedLevel === 'beginner' ? 'active' : ''}`}
          onClick={() => setSelectedLevel('beginner')}
        >
          Beginner
        </button>
        <button 
          className={`filter-btn ${selectedLevel === 'intermediate' ? 'active' : ''}`}
          onClick={() => setSelectedLevel('intermediate')}
        >
          Intermediate
        </button>
        <button 
          className={`filter-btn ${selectedLevel === 'advanced' ? 'active' : ''}`}
          onClick={() => setSelectedLevel('advanced')}
        >
          Advanced
        </button>
      </div>

      <div className="resources-grid">
        {filterResources().map((resource, index) => (
          <div key={index} className="resource-card" onClick={() => handleResourceClick(resource)}>
            <div className="resource-icon">
              <i className="bx bx-book-reader"></i>
            </div>
            <div className="resource-content">
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <span className="resource-level">{resource.level}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="resources-cta">
        <h2>Want to practice what you've learned?</h2>
        <p>Try our interactive exercises and get instant feedback on your progress</p>
        <Link to="/levels" className="btn btn-primary">
          Start Practicing
        </Link>
      </div>
    </div>
  );
}

export default Resources; 