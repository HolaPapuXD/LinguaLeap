export const levels = [
  {
    id: 'a1',
    name: 'Beginner (A1)',
    description: 'Start your English journey here',
    icon: 'bxs-bulb',
    topics: [
      {
        id: 'a1-1',
        title: 'Basic Greetings',
        description: 'Learn how to greet people and introduce yourself',
        icon: 'bxs-message-rounded-dots',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bxs-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which greeting is most formal?',
                options: ['Hi', 'Hello', 'Hey', 'Yo'],
                correct: 'Hello'
              },
              {
                type: 'fill-blank',
                question: 'Complete the sentence: "____ are you?"',
                answer: 'How',
                hint: 'A question word used to ask about someone\'s well-being'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct response to "Nice to meet you"?',
                options: ['Nice to meet you too', 'Thank you', 'Goodbye', 'Hello'],
                correct: 'Nice to meet you too'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "My name ___ John"',
                answer: 'is',
                hint: 'The verb "to be" in present tense for he/she/it'
              },
              {
                type: 'multiple-choice',
                question: 'Which greeting is appropriate for the evening?',
                options: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
                correct: 'Good evening'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "____ to meet you!"',
                answer: 'Nice',
                hint: 'A word expressing pleasure or satisfaction'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct response to "How are you?"?',
                options: ['I am fine', 'I fine am', 'Fine I am', 'Am I fine'],
                correct: 'I am fine'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "____ your name?"',
                answer: 'What\'s',
                hint: 'Contraction of "What is"'
              },
              {
                type: 'multiple-choice',
                question: 'Which greeting is most informal?',
                options: ['Hello', 'Hi', 'Hey', 'Yo'],
                correct: 'Yo'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "____ are you from?"',
                answer: 'Where',
                hint: 'Question word for location'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct response to "Good morning"?',
                options: ['Good morning', 'Good night', 'Good evening', 'Good afternoon'],
                correct: 'Good morning'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "____ you later!"',
                answer: 'See',
                hint: 'A common farewell expression'
              },
              {
                type: 'multiple-choice',
                question: 'Which greeting is appropriate for leaving?',
                options: ['Hello', 'Goodbye', 'Hi', 'Hey'],
                correct: 'Goodbye'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "____ you soon!"',
                answer: 'See',
                hint: 'A common farewell expression'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct response to "Have a nice day"?',
                options: ['You too', 'Thank you', 'Goodbye', 'Hello'],
                correct: 'You too'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "____ to see you!"',
                answer: 'Nice',
                hint: 'Expressing pleasure'
              },
              {
                type: 'multiple-choice',
                question: 'Which greeting is appropriate for the afternoon?',
                options: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
                correct: 'Good afternoon'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "____ you doing?"',
                answer: 'How',
                hint: 'Question word for asking about someone\'s state'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct response to "See you later"?',
                options: ['See you later', 'Goodbye', 'Hello', 'Hi'],
                correct: 'See you later'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "____ to meet you too!"',
                answer: 'Nice',
                hint: 'Expressing pleasure in return'
              },
              {
                type: 'multiple-choice',
                question: 'Which greeting is appropriate for the morning?',
                options: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
                correct: 'Good morning'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "____ your day!"',
                answer: 'Have',
                hint: 'A common farewell expression'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct response to "Goodbye"?',
                options: ['Goodbye', 'Hello', 'Hi', 'Hey'],
                correct: 'Goodbye'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "____ you tomorrow!"',
                answer: 'See',
                hint: 'A common farewell expression'
              },
              {
                type: 'multiple-choice',
                question: 'Which greeting is appropriate for bedtime?',
                options: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
                correct: 'Good night'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'Hello, how are you?',
                audio: '/audio/hello.mp3',
                feedback: 'Focus on the "h" sound in "hello".'
              },
              {
                type: 'pronunciation',
                text: 'Good morning, everyone!',
                audio: '/audio/good-morning.mp3',
                feedback: 'Pay attention to the "g" sound in "good".'
              },
              {
                type: 'pronunciation',
                text: 'Nice to meet you too!',
                audio: '/audio/nice-to-meet-you.mp3',
                feedback: 'Focus on the "t" sound in "meet".'
              },
              {
                type: 'pronunciation',
                text: 'Where are you from?',
                audio: '/audio/where-from.mp3',
                feedback: 'Pay attention to the "w" sound in "where".'
              },
              {
                type: 'pronunciation',
                text: 'What\'s your name?',
                audio: '/audio/whats-name.mp3',
                feedback: 'Focus on the "n" sound in "name".'
              },
              {
                type: 'pronunciation',
                text: 'I am fine, thank you.',
                audio: '/audio/fine-thank-you.mp3',
                feedback: 'Pay attention to the "th" sound in "thank".'
              },
              {
                type: 'pronunciation',
                text: 'Have a nice day!',
                audio: '/audio/nice-day.mp3',
                feedback: 'Focus on the "d" sound in "day".'
              },
              {
                type: 'pronunciation',
                text: 'See you later!',
                audio: '/audio/see-later.mp3',
                feedback: 'Pay attention to the "l" sound in "later".'
              },
              {
                type: 'pronunciation',
                text: 'Good afternoon, everyone!',
                audio: '/audio/good-afternoon.mp3',
                feedback: 'Focus on the "a" sound in "afternoon".'
              },
              {
                type: 'pronunciation',
                text: 'How are you doing?',
                audio: '/audio/how-doing.mp3',
                feedback: 'Pay attention to the "d" sound in "doing".'
              },
              {
                type: 'pronunciation',
                text: 'Good evening, sir!',
                audio: '/audio/good-evening.mp3',
                feedback: 'Focus on the "v" sound in "evening".'
              },
              {
                type: 'pronunciation',
                text: 'What\'s up?',
                audio: '/audio/whats-up.mp3',
                feedback: 'Pay attention to the "p" sound in "up".'
              },
              {
                type: 'pronunciation',
                text: 'Good night, everyone!',
                audio: '/audio/good-night.mp3',
                feedback: 'Focus on the "n" sound in "night".'
              },
              {
                type: 'pronunciation',
                text: 'Welcome to our office!',
                audio: '/audio/welcome-office.mp3',
                feedback: 'Focus on the "w" sound in "welcome".'
              },
              {
                type: 'pronunciation',
                text: 'It’s nice to see you!',
                audio: '/audio/nice-see-you.mp3',
                feedback: 'Pay attention to the "s" sound in "see".'
              },
              {
                type: 'pronunciation',
                text: 'Hey, how’s it going?',
                audio: '/audio/hows-it-going.mp3',
                feedback: 'Focus on the "g" sound in "going".'
              },
              {
                type: 'pronunciation',
                text: 'Hi, long time no see!',
                audio: '/audio/long-time-no-see.mp3',
                feedback: 'Pay attention to the "l" sound in "long".'
              },
              {
                type: 'pronunciation',
                text: 'How have you been?',
                audio: '/audio/how-have-you-been.mp3',
                feedback: 'Focus on the "h" sound in "how".'
              },
              {
                type: 'pronunciation',
                text: 'See you tomorrow!',
                audio: '/audio/see-you-tomorrow.mp3',
                feedback: 'Pay attention to the "r" sound in "tomorrow".'
              },
              {
                type: 'pronunciation',
                text: 'It’s been a pleasure meeting you!',
                audio: '/audio/pleasure-meeting-you.mp3',
                feedback: 'Focus on the "pl" sound in "pleasure".'
              },
              {
                type: 'pronunciation',
                text: 'Have a great evening!',
                audio: '/audio/great-evening.mp3',
                feedback: 'Pay attention to the "gr" sound in "great".'
              },
              {
                type: 'pronunciation',
                text: 'How was your day?',
                audio: '/audio/how-was-your-day.mp3',
                feedback: 'Focus on the "w" sound in "was".'
              },
              {
                type: 'pronunciation',
                text: 'See you next time!',
                audio: '/audio/see-you-next-time.mp3',
                feedback: 'Pay attention to the "n" sound in "next".'
              },
              {
                type: 'pronunciation',
                text: 'Hope you have a great day!',
                audio: '/audio/hope-great-day.mp3',
                feedback: 'Focus on the "h" sound in "hope".'
              },
              {
                type: 'pronunciation',
                text: 'Glad to see you again!',
                audio: '/audio/glad-see-you.mp3',
                feedback: 'Pay attention to the "g" sound in "glad".'
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              {
                type: 'sentence-building',
                words: ['am', 'I', 'fine', 'thank', 'you'],
                correct: 'I am fine, thank you.'
              },
              {
                type: 'short-essay',
                topic: 'Write a short introduction about yourself (name, country, and one hobby)',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['to', 'nice', 'meet', 'you', 'too'],
                correct: 'Nice to meet you too.'
              },
              {
                type: 'fill-blank',
                question: 'Complete the conversation:\nA: Hello! ____ are you?\nB: I am fine, thank you!',
                answer: 'How',
                hint: 'Question word for asking about someone\'s well-being'
              },
              {
                type: 'sentence-building',
                words: ['from', 'are', 'where', 'you'],
                correct: 'Where are you from?'
              },
              {
                type: 'short-essay',
                topic: 'Write a dialogue between two people meeting for the first time',
                wordLimit: 100
              },
              {
                type: 'sentence-building',
                words: ['morning', 'good', 'everyone'],
                correct: 'Good morning, everyone!'
              },
              {
                type: 'fill-blank',
                question: 'Complete the conversation:\nA: ____ to meet you!\nB: Nice to meet you too!',
                answer: 'Nice',
                hint: 'Expressing pleasure'
              },
              {
                type: 'sentence-building',
                words: ['name', 'what\'s', 'your'],
                correct: 'What\'s your name?'
              },
              {
                type: 'short-essay',
                topic: 'Write about your typical morning greeting routine',
                wordLimit: 75
              },
              {
                type: 'sentence-building',
                words: ['day', 'have', 'nice', 'a'],
                correct: 'Have a nice day!'
              },
              {
                type: 'fill-blank',
                question: 'Complete the conversation:\nA: Goodbye!\nB: ____ you later!',
                answer: 'See',
                hint: 'Common farewell expression'
              },
              {
                type: 'sentence-building',
                words: ['doing', 'how', 'are', 'you'],
                correct: 'How are you doing?'
              },
              {
                type: 'short-essay',
                topic: 'Write about different ways to greet people in different situations',
                wordLimit: 100
              },
              {
                type: 'sentence-building',
                words: ['evening', 'good', 'sir'],
                correct: 'Good evening, sir!'
              },
              {
                type: 'fill-blank',
                question: 'Complete the conversation:\nA: ____ are you from?\nB: I am from Spain.',
                answer: 'Where',
                hint: 'Question word for location'
              },
              {
                type: 'sentence-building',
                words: ['up', 'what\'s'],
                correct: 'What\'s up?'
              },
              {
                type: 'short-essay',
                topic: 'Write about cultural differences in greetings',
                wordLimit: 100
              },
              {
                type: 'sentence-building',
                words: ['night', 'good', 'everyone'],
                correct: 'Good night, everyone!'
              },
              {
                type: 'fill-blank',
                question: 'Complete the conversation:\nA: ____ you tomorrow!\nB: See you tomorrow!',
                answer: 'See',
                hint: 'Common farewell expression'
              },
              {
                type: 'sentence-building',
                words: ['afternoon', 'good', 'everyone'],
                correct: 'Good afternoon, everyone!'
              },
              {
                type: 'short-essay',
                topic: 'Write about your favorite way to greet people and why',
                wordLimit: 75
              },
              {
                type: 'sentence-building',
                words: ['doctor', 'good', 'morning'],
                correct: 'Good morning, doctor!'
              },
              {
                type: 'fill-blank',
                question: 'Complete the conversation:\nA: ____ to see you!\nB: Good to see you too!',
                answer: 'Good',
                hint: 'Expressing pleasure'
              },
              {
                type: 'short-essay',
                topic: 'Write about how greetings differ between your culture and English-speaking cultures',
                wordLimit: 100
              }
            ]
          }
        ]
      },
      {
        id: 'a1-2',
        title: 'Numbers and Colors',
        description: 'Master basic numbers and colors in English',
        icon: 'bx-palette',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which number comes after 12?',
                options: ['13', '14', '15', '16'],
                correct: '13'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The sky is ___"',
                answer: 'blue',
                hint: 'A primary color'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct spelling of "15"?',
                options: ['fiveteen', 'fifteen', 'fivteen', 'fivty'],
                correct: 'fifteen'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The grass is ___"',
                answer: 'green',
                hint: 'A color associated with nature'
              },
              {
                type: 'multiple-choice',
                question: 'Which number is spelled correctly?',
                options: ['twenty', 'tweny', 'twenti', 'twentee'],
                correct: 'twenty'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The sun is ___"',
                answer: 'yellow',
                hint: 'A bright, warm color'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct spelling of "30"?',
                options: ['thirty', 'threety', 'thrity', 'threty'],
                correct: 'thirty'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The apple is ___"',
                answer: 'red',
                hint: 'A primary color'
              },
              {
                type: 'multiple-choice',
                question: 'Which number comes before 100?',
                options: ['99', '98', '97', '96'],
                correct: '99'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The clouds are ___"',
                answer: 'white',
                hint: 'A light color'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct spelling of "40"?',
                options: ['forty', 'fourty', 'fortee', 'fourtee'],
                correct: 'forty'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The night sky is ___"',
                answer: 'black',
                hint: 'A dark color'
              },
              {
                type: 'multiple-choice',
                question: 'Which number is spelled correctly?',
                options: ['fifty', 'fivty', 'fivety', 'fiftee'],
                correct: 'fifty'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The orange is ___"',
                answer: 'orange',
                hint: 'A fruit and a color'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct spelling of "60"?',
                options: ['sixty', 'sixtee', 'sixti', 'sixety'],
                correct: 'sixty'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The grapes are ___"',
                answer: 'purple',
                hint: 'A royal color'
              },
              {
                type: 'multiple-choice',
                question: 'Which number comes after 99?',
                options: ['100', '101', '102', '103'],
                correct: '100'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The banana is ___"',
                answer: 'yellow',
                hint: 'A bright color'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct spelling of "70"?',
                options: ['seventy', 'seventee', 'seventi', 'seventy'],
                correct: 'seventy'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The snow is ___"',
                answer: 'white',
                hint: 'A pure color'
              },
              {
                type: 'multiple-choice',
                question: 'Which number is spelled correctly?',
                options: ['eighty', 'eighty', 'eigty', 'eigtee'],
                correct: 'eighty'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The coffee is ___"',
                answer: 'brown',
                hint: 'A warm, dark color'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct spelling of "90"?',
                options: ['ninety', 'ninty', 'ninety', 'nintee'],
                correct: 'ninety'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The rose is ___"',
                answer: 'red',
                hint: 'A romantic color'
              },
              {
                type: 'multiple-choice',
                question: 'Which number comes before 1000?',
                options: ['999', '998', '997', '996'],
                correct: '999'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'What is your favorite color?',
                audio: '/audio/color-question.mp3',
                feedback: 'Focus on the "c" sound in "color".'
              },
              {
                type: 'pronunciation',
                text: 'The rainbow has seven colors.',
                audio: '/audio/rainbow.mp3',
                feedback: 'Focus on the "r" sound in "rainbow".'
              },
              {
                type: 'pronunciation',
                text: 'Twenty-five students in the class.',
                audio: '/audio/numbers.mp3',
                feedback: 'Focus on the "t" sound in "twenty".'
              },
              {
                type: 'pronunciation',
                text: 'Primary colors are red, blue, and yellow.',
                audio: '/audio/primary-colors.mp3',
                feedback: 'Focus on the "p" sound in "primary".'
              },
              {
                type: 'pronunciation',
                text: 'The sky is light blue today.',
                audio: '/audio/sky-color.mp3',
                feedback: 'Focus on the "l" sound in "light".'
              },
              {
                type: 'pronunciation',
                text: 'My favorite number is seven.',
                audio: '/audio/favorite-number.mp3',
                feedback: 'Focus on the "s" sound in "seven".'
              },
              {
                type: 'pronunciation',
                text: 'There are thirty days in a month.',
                audio: '/audio/days.mp3',
                feedback: 'Focus on the "th" sound in "thirty".'
              },
              {
                type: 'pronunciation',
                text: 'The leaves are turning yellow.',
                audio: '/audio/leaves.mp3',
                feedback: 'Focus on the "y" sound in "yellow".'
              },
              {
                type: 'pronunciation',
                text: 'I have forty-two books.',
                audio: '/audio/books.mp3',
                feedback: 'Focus on the "f" sound in "forty".'
              },
              {
                type: 'pronunciation',
                text: 'The traffic light is red.',
                audio: '/audio/traffic.mp3',
                feedback: 'Focus on the "r" sound in "red".'
              },
              {
                type: 'pronunciation',
                text: 'The ocean is deep blue.',
                audio: '/audio/ocean.mp3',
                feedback: 'Focus on the "d" sound in "deep".'
              },
              {
                type: 'pronunciation',
                text: 'There are sixty seconds in a minute.',
                audio: '/audio/seconds.mp3',
                feedback: 'Focus on the "s" sound in "seconds".'
              },
              {
                type: 'pronunciation',
                text: 'The grass is fresh green.',
                audio: '/audio/grass.mp3',
                feedback: 'Focus on the "g" sound in "grass".'
              },
              {
                type: 'pronunciation',
                text: 'I see five apples on the table.',
                audio: '/audio/five-apples.mp3',
                feedback: 'Focus on the "f" sound in "five".'
              },
              {
                type: 'pronunciation',
                text: 'The sun looks bright yellow.',
                audio: '/audio/sun-yellow.mp3',
                feedback: 'Focus on the "y" sound in "yellow".'
              },
              {
                type: 'pronunciation',
                text: 'There are ten fingers on two hands.',
                audio: '/audio/ten-fingers.mp3',
                feedback: 'Focus on the "t" sound in "ten".'
              },
              {
                type: 'pronunciation',
                text: 'How many stars can you count?',
                audio: '/audio/stars-count.mp3',
                feedback: 'Focus on the "s" sound in "stars".'
              },
              {
                type: 'pronunciation',
                text: 'The door is painted dark brown.',
                audio: '/audio/door-brown.mp3',
                feedback: 'Focus on the "d" sound in "door".'
              },
              {
                type: 'pronunciation',
                text: 'The balloon is bright red.',
                audio: '/audio/balloon-red.mp3',
                feedback: 'Focus on the "b" sound in "balloon".'
              },
              {
                type: 'pronunciation',
                text: 'She bought three blue shirts.',
                audio: '/audio/three-shirts.mp3',
                feedback: 'Focus on the "th" sound in "three".'
              },
              {
                type: 'pronunciation',
                text: 'A watermelon is green outside and red inside.',
                audio: '/audio/watermelon.mp3',
                feedback: 'Focus on the "g" sound in "green".'
              },
              {
                type: 'pronunciation',
                text: 'The moon looks white at night.',
                audio: '/audio/moon-white.mp3',
                feedback: 'Focus on the "w" sound in "white".'
              },
              {
                type: 'pronunciation',
                text: 'There are twelve months in a year.',
                audio: '/audio/twelve-months.mp3',
                feedback: 'Focus on the "t" sound in "twelve".'
              },
              {
                type: 'pronunciation',
                text: 'The road signs are yellow and black.',
                audio: '/audio/road-signs.mp3',
                feedback: 'Focus on the "r" sound in "road".'
              },
              {
                type: 'pronunciation',
                text: 'I like the color purple.',
                audio: '/audio/color-purple.mp3',
                feedback: 'Focus on the "p" sound in "purple".'
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              {
                type: 'sentence-building',
                words: ['is', 'my', 'favorite', 'red', 'color'],
                correct: 'Red is my favorite color.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "There are ___ days in a week"',
                answer: 'seven',
                hint: 'A number between six and eight'
              },
              {
                type: 'sentence-building',
                words: ['colors', 'are', 'primary', 'what', 'the'],
                correct: 'What are the primary colors?'
              },
              {
                type: 'short-essay',
                topic: 'Write about your favorite color and why you like it',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['have', 'I', 'ten', 'fingers'],
                correct: 'I have ten fingers.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The rainbow has ___ colors"',
                answer: 'seven',
                hint: 'A number between six and eight'
              },
              {
                type: 'sentence-building',
                words: ['is', 'the', 'sky', 'blue'],
                correct: 'The sky is blue.'
              },
              {
                type: 'short-essay',
                topic: 'Write about how numbers are used in your daily life',
                wordLimit: 75
              },
              {
                type: 'sentence-building',
                words: ['are', 'there', 'how', 'many', 'months'],
                correct: 'How many months are there?'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I have ___ books"',
                answer: 'twenty',
                hint: 'A number between nineteen and twenty-one'
              },
              {
                type: 'sentence-building',
                words: ['is', 'the', 'sun', 'yellow'],
                correct: 'The sun is yellow.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your favorite number and its significance',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['are', 'there', 'how', 'many', 'days'],
                correct: 'How many days are there?'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The traffic light has ___ colors"',
                answer: 'three',
                hint: 'A number between two and four'
              },
              {
                type: 'sentence-building',
                words: ['is', 'the', 'grass', 'green'],
                correct: 'The grass is green.'
              },
              {
                type: 'short-essay',
                topic: 'Write about how colors affect your mood',
                wordLimit: 75
              },
              {
                type: 'sentence-building',
                words: ['have', 'I', 'five', 'toes'],
                correct: 'I have five toes.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "There are ___ hours in a day"',
                answer: 'twenty-four',
                hint: 'A number between twenty-three and twenty-five'
              },
              {
                type: 'sentence-building',
                words: ['is', 'the', 'moon', 'white'],
                correct: 'The moon is white.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your favorite season and its colors',
                wordLimit: 75
              },
              {
                type: 'sentence-building',
                words: ['are', 'there', 'how', 'many', 'seasons'],
                correct: 'How many seasons are there?'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I have ___ fingers"',
                answer: 'ten',
                hint: 'A number between nine and eleven'
              },
              {
                type: 'sentence-building',
                words: ['is', 'the', 'cloud', 'white'],
                correct: 'The cloud is white.'
              },
              {
                type: 'short-essay',
                topic: 'Write about how numbers and colors are used in traffic signs',
                wordLimit: 75
              },
              {
                type: 'sentence-building',
                words: ['have', 'I', 'two', 'hands'],
                correct: 'I have two hands.'
              }
            ]
          }
        ]
      },
      {
        id: 'a1-3',
        title: 'Family and Friends',
        description: 'Learn vocabulary about family and relationships',
        icon: 'bx-group',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which word means "mother\'s sister"?',
                options: ['Aunt', 'Uncle', 'Cousin', 'Sister'],
                correct: 'Aunt'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "My father\'s father is my ___"',
                answer: 'grandfather',
                hint: 'The father of your father'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct word for "mother\'s brother"?',
                options: ['Uncle', 'Aunt', 'Cousin', 'Brother'],
                correct: 'Uncle'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "My mother\'s mother is my ___"',
                answer: 'grandmother',
                hint: 'The mother of your mother'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "sister\'s husband"?',
                options: ['Brother-in-law', 'Sister-in-law', 'Uncle', 'Cousin'],
                correct: 'Brother-in-law'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "My brother\'s wife is my ___"',
                answer: 'sister-in-law',
                hint: 'The wife of your brother'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct word for "father\'s sister"?',
                options: ['Aunt', 'Uncle', 'Cousin', 'Sister'],
                correct: 'Aunt'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "My sister\'s husband is my ___"',
                answer: 'brother-in-law',
                hint: 'The husband of your sister'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "mother\'s brother\'s son"?',
                options: ['Cousin', 'Nephew', 'Uncle', 'Brother'],
                correct: 'Cousin'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "My brother\'s son is my ___"',
                answer: 'nephew',
                hint: 'The son of your brother'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct word for "father\'s brother\'s daughter"?',
                options: ['Cousin', 'Niece', 'Aunt', 'Sister'],
                correct: 'Cousin'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "My sister\'s daughter is my ___"',
                answer: 'niece',
                hint: 'The daughter of your sister'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "husband\'s mother"?',
                options: ['Mother-in-law', 'Step-mother', 'Grandmother', 'Aunt'],
                correct: 'Mother-in-law'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "My wife\'s father is my ___"',
                answer: 'father-in-law',
                hint: 'The father of your wife'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct word for "wife\'s sister"?',
                options: ['Sister-in-law', 'Sister', 'Cousin', 'Aunt'],
                correct: 'Sister-in-law'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "My husband\'s brother is my ___"',
                answer: 'brother-in-law',
                hint: 'The brother of your husband'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "father\'s second wife"?',
                options: ['Step-mother', 'Mother-in-law', 'Aunt', 'Grandmother'],
                correct: 'Step-mother'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "My mother\'s second husband is my ___"',
                answer: 'step-father',
                hint: 'The second husband of your mother'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct word for "mother\'s sister\'s daughter"?',
                options: ['Cousin', 'Sister', 'Niece', 'Aunt'],
                correct: 'Cousin'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "My father\'s brother\'s son is my ___"',
                answer: 'cousin',
                hint: 'The son of your father\'s brother'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "wife\'s brother"?',
                options: ['Brother-in-law', 'Brother', 'Uncle', 'Cousin'],
                correct: 'Brother-in-law'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "My husband\'s sister is my ___"',
                answer: 'sister-in-law',
                hint: 'The sister of your husband'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct word for "father\'s father\'s wife"?',
                options: ['Grandmother', 'Aunt', 'Mother-in-law', 'Step-mother'],
                correct: 'Grandmother'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "My mother\'s mother\'s husband is my ___"',
                answer: 'grandfather',
                hint: 'The husband of your mother\'s mother'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "sister\'s son"?',
                options: ['Nephew', 'Cousin', 'Brother', 'Uncle'],
                correct: 'Nephew'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'This is my family.',
                audio: '/audio/family.mp3',
                feedback: 'Focus on the "f" sound in "family".'
              },
              {
                type: 'pronunciation',
                text: 'My grandmother lives with us.',
                audio: '/audio/grandmother.mp3',
                feedback: 'Focus on the "g" sound in "grandmother".'
              },
              {
                type: 'pronunciation',
                text: 'My uncle works in the city.',
                audio: '/audio/uncle.mp3',
                feedback: 'Focus on the "u" sound in "uncle".'
              },
              {
                type: 'pronunciation',
                text: 'My nephew is very cute.',
                audio: '/audio/nephew.mp3',
                feedback: 'Focus on the "n" sound in "nephew".'
              },
              {
                type: 'pronunciation',
                text: 'My sister-in-law is kind.',
                audio: '/audio/sister-in-law.mp3',
                feedback: 'Focus on the "s" sound in "sister".'
              },
              {
                type: 'pronunciation',
                text: 'My niece loves to play.',
                audio: '/audio/niece.mp3',
                feedback: 'Focus on the "n" sound in "niece".'
              },
              {
                type: 'pronunciation',
                text: 'My grandfather tells stories.',
                audio: '/audio/grandfather.mp3',
                feedback: 'Focus on the "g" sound in "grandfather".'
              },
              {
                type: 'pronunciation',
                text: 'My brother-in-law is friendly.',
                audio: '/audio/brother-in-law.mp3',
                feedback: 'Focus on the "b" sound in "brother".'
              },
              {
                type: 'pronunciation',
                text: 'My mother-in-law cooks well.',
                audio: '/audio/mother-in-law.mp3',
                feedback: 'Focus on the "m" sound in "mother".'
              },
              {
                type: 'pronunciation',
                text: 'My step-father is nice.',
                audio: '/audio/step-father.mp3',
                feedback: 'Focus on the "s" sound in "step".'
              },
              {
                type: 'pronunciation',
                text: 'My cousin lives nearby.',
                audio: '/audio/cousin.mp3',
                feedback: 'Focus on the "c" sound in "cousin".'
              },
              {
                type: 'pronunciation',
                text: 'My aunt visits often.',
                audio: '/audio/aunt.mp3',
                feedback: 'Focus on the "a" sound in "aunt".'
              },
              {
                type: 'pronunciation',
                text: 'My father-in-law is wise.',
                audio: '/audio/father-in-law.mp3',
                feedback: 'Focus on the "f" sound in "father".'
              },
              {
                type: 'pronunciation',
                text: 'We have a big family.',
                audio: '/audio/big-family.mp3',
                feedback: 'Focus on the "b" sound in "big".'
              },
              {
                type: 'pronunciation',
                text: 'My son is five years old.',
                audio: '/audio/son.mp3',
                feedback: 'Focus on the "s" sound in "son".'
              },
              {
                type: 'pronunciation',
                text: 'My daughter loves music.',
                audio: '/audio/daughter.mp3',
                feedback: 'Focus on the "d" sound in "daughter".'
              },
              {
                type: 'pronunciation',
                text: 'My parents are kind.',
                audio: '/audio/parents.mp3',
                feedback: 'Focus on the "p" sound in "parents".'
              },
              {
                type: 'pronunciation',
                text: 'My family likes to travel.',
                audio: '/audio/travel.mp3',
                feedback: 'Focus on the "t" sound in "travel".'
              },
              {
                type: 'pronunciation',
                text: 'I love my family.',
                audio: '/audio/love-family.mp3',
                feedback: 'Focus on the "l" sound in "love".'
              },
              {
                type: 'pronunciation',
                text: 'We are a happy family.',
                audio: '/audio/happy-family.mp3',
                feedback: 'Focus on the "h" sound in "happy".'
              },
              {
                type: 'pronunciation',
                text: 'She is my little sister.',
                audio: '/audio/little-sister.mp3',
                feedback: 'Focus on the "l" sound in "little".'
              },
              {
                type: 'pronunciation',
                text: 'We have dinner together.',
                audio: '/audio/dinner.mp3',
                feedback: 'Focus on the "d" sound in "dinner".'
              },
              {
                type: 'pronunciation',
                text: 'My father is very tall.',
                audio: '/audio/father-tall.mp3',
                feedback: 'Focus on the "t" sound in "tall".'
              },
              {
                type: 'pronunciation',
                text: 'My best friend is kind.',
                audio: '/audio/best-friend.mp3',
                feedback: 'Focus on the "b" sound in "best".'
              },
              {
                type: 'pronunciation',
                text: 'Grandparents tell great stories.',
                audio: '/audio/great-stories.mp3',
                feedback: 'Focus on the "gr" sound in "great".'
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              {
                type: 'sentence-building',
                words: ['have', 'I', 'sister', 'one', 'a'],
                correct: 'I have one sister.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "My mother\'s sister is my ___"',
                answer: 'aunt',
                hint: 'The sister of your mother'
              },
              {
                type: 'sentence-building',
                words: ['is', 'my', 'father', 'tall'],
                correct: 'My father is tall.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your immediate family members',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['have', 'I', 'brothers', 'two'],
                correct: 'I have two brothers.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "My father\'s brother is my ___"',
                answer: 'uncle',
                hint: 'The brother of your father'
              },
              {
                type: 'sentence-building',
                words: ['is', 'my', 'mother', 'kind'],
                correct: 'My mother is kind.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your favorite family tradition',
                wordLimit: 75
              },
              {
                type: 'sentence-building',
                words: ['live', 'my', 'grandparents', 'with', 'us'],
                correct: 'My grandparents live with us.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "My sister\'s husband is my ___"',
                answer: 'brother-in-law',
                hint: 'The husband of your sister'
              },
              {
                type: 'sentence-building',
                words: ['is', 'my', 'cousin', 'funny'],
                correct: 'My cousin is funny.'
              },
              {
                type: 'short-essay',
                topic: 'Write about a special family moment',
                wordLimit: 75
              },
              {
                type: 'sentence-building',
                words: ['have', 'I', 'niece', 'a', 'cute'],
                correct: 'I have a cute niece.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "My brother\'s son is my ___"',
                answer: 'nephew',
                hint: 'The son of your brother'
              },
              {
                type: 'sentence-building',
                words: ['is', 'my', 'aunt', 'friendly'],
                correct: 'My aunt is friendly.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your family\'s favorite activities',
                wordLimit: 75
              },
              {
                type: 'sentence-building',
                words: ['have', 'I', 'uncle', 'an', 'old'],
                correct: 'I have an old uncle.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "My mother\'s mother is my ___"',
                answer: 'grandmother',
                hint: 'The mother of your mother'
              },
              {
                type: 'sentence-building',
                words: ['is', 'my', 'grandfather', 'wise'],
                correct: 'My grandfather is wise.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your family\'s values and beliefs',
                wordLimit: 75
              },
              {
                type: 'sentence-building',
                words: ['have', 'I', 'sister-in-law', 'a', 'nice'],
                correct: 'I have a nice sister-in-law.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "My wife\'s father is my ___"',
                answer: 'father-in-law',
                hint: 'The father of your wife'
              },
              {
                type: 'sentence-building',
                words: ['is', 'my', 'brother-in-law', 'tall'],
                correct: 'My brother-in-law is tall.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your family\'s future plans',
                wordLimit: 75
              },
              {
                type: 'sentence-building',
                words: ['have', 'I', 'family', 'big', 'a'],
                correct: 'I have a big family.'
              }
            ]
          }
        ]
      },
      {
        id: 'a1-4',
        title: 'Daily Routine',
        description: 'Talk about your daily activities',
        icon: 'bx-time',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which verb is used for daily routines?',
                options: ['am', 'is', 'are', 'do'],
                correct: 'do'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ up at 7 AM"',
                answer: 'wake',
                hint: 'The verb for starting your day'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct form of "brush" for daily routine?',
                options: ['brush', 'brushes', 'brushing', 'brushed'],
                correct: 'brush'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ my teeth every morning"',
                answer: 'brush',
                hint: 'A daily hygiene activity'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to start your day"?',
                options: ['wake up', 'sleep in', 'go to bed', 'take a nap'],
                correct: 'wake up'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ breakfast at 8 AM"',
                answer: 'have',
                hint: 'The verb for eating meals'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct form of "get dressed"?',
                options: ['get dress', 'gets dressed', 'getting dressed', 'got dressed'],
                correct: 'get dressed'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ to work by bus"',
                answer: 'go',
                hint: 'The verb for movement'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to finish work"?',
                options: ['get off work', 'start work', 'work out', 'work on'],
                correct: 'get off work'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ lunch at noon"',
                answer: 'have',
                hint: 'The verb for eating meals'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct form of "take a shower"?',
                options: ['take shower', 'takes shower', 'taking shower', 'took shower'],
                correct: 'take a shower'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ dinner at 7 PM"',
                answer: 'have',
                hint: 'The verb for eating meals'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to go to sleep"?',
                options: ['go to bed', 'wake up', 'get up', 'stay up'],
                correct: 'go to bed'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ my homework in the evening"',
                answer: 'do',
                hint: 'The verb for completing tasks'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct form of "watch TV"?',
                options: ['watch TV', 'watches TV', 'watching TV', 'watched TV'],
                correct: 'watch TV'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ to bed at 10 PM"',
                answer: 'go',
                hint: 'The verb for movement'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to exercise"?',
                options: ['work out', 'work in', 'work on', 'work at'],
                correct: 'work out'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ my email in the morning"',
                answer: 'check',
                hint: 'The verb for reviewing messages'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct form of "make coffee"?',
                options: ['make coffee', 'makes coffee', 'making coffee', 'made coffee'],
                correct: 'make coffee'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ my keys before leaving"',
                answer: 'check',
                hint: 'The verb for verifying items'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to prepare for the day"?',
                options: ['get ready', 'get up', 'get down', 'get in'],
                correct: 'get ready'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ my clothes for tomorrow"',
                answer: 'prepare',
                hint: 'The verb for getting things ready'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct form of "read a book"?',
                options: ['read a book', 'reads a book', 'reading a book', 'readed a book'],
                correct: 'read a book'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ my phone before bed"',
                answer: 'check',
                hint: 'The verb for reviewing messages'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to end your day"?',
                options: ['go to sleep', 'wake up', 'get up', 'stay up'],
                correct: 'go to sleep'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'I wake up early every morning',
                audio: '/audio/wake-up.mp3',
                feedback: 'Focus on the "w" sound in "wake"'
              },
              {
                type: 'pronunciation',
                text: 'I have breakfast at 8 AM',
                audio: '/audio/breakfast.mp3',
                feedback: 'Focus on the "b" sound in "breakfast"'
              },
              {
                type: 'pronunciation',
                text: 'I take a shower every day',
                audio: '/audio/shower.mp3',
                feedback: 'Focus on the "sh" sound in "shower"'
              },
              {
                type: 'pronunciation',
                text: 'I get off work at 5 PM',
                audio: '/audio/work.mp3',
                feedback: 'Focus on the "w" sound in "work"'
              },
              {
                type: 'pronunciation',
                text: 'I do my homework in the evening',
                audio: '/audio/homework.mp3',
                feedback: 'Focus on the "h" sound in "homework"'
              },
              {
                type: 'pronunciation',
                text: 'I watch TV before bed',
                audio: '/audio/tv.mp3',
                feedback: 'Focus on the "t" sound in "TV"'
              },
              {
                type: 'pronunciation',
                text: 'I check my email every morning',
                audio: '/audio/email.mp3',
                feedback: 'Focus on the "e" sound in "email"'
              },
              {
                type: 'pronunciation',
                text: 'I prepare my clothes for tomorrow',
                audio: '/audio/prepare.mp3',
                feedback: 'Focus on the "p" sound in "prepare"'
              },
              {
                type: 'pronunciation',
                text: 'I make coffee in the morning',
                audio: '/audio/coffee.mp3',
                feedback: 'Focus on the "c" sound in "coffee"'
              },
              {
                type: 'pronunciation',
                text: 'I check my phone before bed',
                audio: '/audio/phone.mp3',
                feedback: 'Focus on the "p" sound in "phone"'
              },
              {
                type: 'pronunciation',
                text: 'I go to sleep at 10 PM',
                audio: '/audio/sleep.mp3',
                feedback: 'Focus on the "s" sound in "sleep"'
              },
              {
                type: 'pronunciation',
                text: 'I read a book every night',
                audio: '/audio/book.mp3',
                feedback: 'Focus on the "b" sound in "book"'
              },
              {
                type: 'pronunciation',
                text: 'I have a busy schedule',
                audio: '/audio/schedule.mp3',
                feedback: 'Focus on the "s" sound in "schedule"'
              },
              {
                type: 'pronunciation',
                text: 'I brush my teeth after meals',
                audio: '/audio/teeth.mp3',
                feedback: 'Focus on the "th" sound in "teeth"'
              },
              {
                type: 'pronunciation',
                text: 'I drive to work every day',
                audio: '/audio/drive.mp3',
                feedback: 'Focus on the "d" sound in "drive"'
              },
              {
                type: 'pronunciation',
                text: 'I listen to music in the evening',
                audio: '/audio/music.mp3',
                feedback: 'Focus on the "m" sound in "music"'
              },
              {
                type: 'pronunciation',
                text: 'I take the bus to work',
                audio: '/audio/bus.mp3',
                feedback: 'Focus on the "b" sound in "bus"'
              },
              {
                type: 'pronunciation',
                text: 'I write in my journal every night',
                audio: '/audio/journal.mp3',
                feedback: 'Focus on the "j" sound in "journal"'
              },
              {
                type: 'pronunciation',
                text: 'I eat dinner with my family',
                audio: '/audio/dinner.mp3',
                feedback: 'Focus on the "d" sound in "dinner"'
              },
              {
                type: 'pronunciation',
                text: 'I set my alarm before bed',
                audio: '/audio/alarm.mp3',
                feedback: 'Focus on the "a" sound in "alarm"'
              },
              {
                type: 'pronunciation',
                text: 'I do yoga in the morning',
                audio: '/audio/yoga.mp3',
                feedback: 'Focus on the "y" sound in "yoga"'
              },
              {
                type: 'pronunciation',
                text: 'I pack my lunch for work',
                audio: '/audio/lunch.mp3',
                feedback: 'Focus on the "l" sound in "lunch"'
              },
              {
                type: 'pronunciation',
                text: 'I go jogging in the park',
                audio: '/audio/jogging.mp3',
                feedback: 'Focus on the "j" sound in "jogging"'
              },
              {
                type: 'pronunciation',
                text: 'I wash my hands before eating',
                audio: '/audio/wash.mp3',
                feedback: 'Focus on the "w" sound in "wash"'
              },
              {
                type: 'pronunciation',
                text: 'I stretch before exercising',
                audio: '/audio/stretch.mp3',
                feedback: 'Focus on the "st" sound in "stretch"'
              }
            ]            
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              {
                type: 'sentence-building',
                words: ['at', 'wake', 'up', '7', 'I'],
                correct: 'I wake up at 7.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ my teeth every morning"',
                answer: 'brush',
                hint: 'A daily hygiene activity'
              },
              {
                type: 'sentence-building',
                words: ['breakfast', 'have', 'I', '8', 'at'],
                correct: 'I have breakfast at 8.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your morning routine',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['work', 'to', 'go', 'I', 'bus', 'by'],
                correct: 'I go to work by bus.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ lunch at noon"',
                answer: 'have',
                hint: 'The verb for eating meals'
              },
              {
                type: 'sentence-building',
                words: ['shower', 'take', 'I', 'a', 'day', 'every'],
                correct: 'I take a shower every day.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your work schedule',
                wordLimit: 75
              },
              {
                type: 'sentence-building',
                words: ['homework', 'do', 'I', 'evening', 'in', 'the'],
                correct: 'I do my homework in the evening.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ dinner at 7 PM"',
                answer: 'have',
                hint: 'The verb for eating meals'
              },
              {
                type: 'sentence-building',
                words: ['TV', 'watch', 'I', 'bed', 'before'],
                correct: 'I watch TV before bed.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your evening routine',
                wordLimit: 75
              },
              {
                type: 'sentence-building',
                words: ['email', 'check', 'I', 'morning', 'every'],
                correct: 'I check my email every morning.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ to bed at 10 PM"',
                answer: 'go',
                hint: 'The verb for movement'
              },
              {
                type: 'sentence-building',
                words: ['coffee', 'make', 'I', 'morning', 'in', 'the'],
                correct: 'I make coffee in the morning.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your weekend routine',
                wordLimit: 75
              },
              {
                type: 'sentence-building',
                words: ['phone', 'check', 'I', 'bed', 'before'],
                correct: 'I check my phone before bed.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ my clothes for tomorrow"',
                answer: 'prepare',
                hint: 'The verb for getting things ready'
              },
              {
                type: 'sentence-building',
                words: ['book', 'read', 'I', 'night', 'every'],
                correct: 'I read a book every night.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your exercise routine',
                wordLimit: 75
              },
              {
                type: 'sentence-building',
                words: ['schedule', 'busy', 'have', 'I', 'a'],
                correct: 'I have a busy schedule.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ to sleep at 10 PM"',
                answer: 'go',
                hint: 'The verb for movement'
              },
              {
                type: 'sentence-building',
                words: ['ready', 'get', 'I', 'morning', 'in', 'the'],
                correct: 'I get ready in the morning.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your ideal daily routine',
                wordLimit: 75
              },
              {
                type: 'sentence-building',
                words: ['keys', 'check', 'I', 'leaving', 'before'],
                correct: 'I check my keys before leaving.'
              }
            ]
          }
        ]
      },
      {
        id: 'a1-5',
        title: 'Food and Drinks',
        description: 'Learn about food and ordering at restaurants',
        icon: 'bx-food-menu',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which word means "I want"?',
                options: ['I would like', 'I am', 'I do', 'I have'],
                correct: 'I would like'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ like a coffee"',
                answer: 'would',
                hint: 'A polite way to express desire'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct form of "order" in a restaurant?',
                options: ['I order', 'I would like to order', 'I am ordering', 'I ordered'],
                correct: 'I would like to order'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "___ you like something to drink?"',
                answer: 'Would',
                hint: 'A polite way to ask about preferences'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to ask for the bill"?',
                options: ['check please', 'bill please', 'pay please', 'money please'],
                correct: 'check please'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ like to see the menu"',
                answer: 'would',
                hint: 'A polite way to request something'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct form of "recommend"?',
                options: ['can you recommend', 'do you recommend', 'are you recommending', 'did you recommend'],
                correct: 'can you recommend'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "___ you like dessert?"',
                answer: 'Would',
                hint: 'A polite way to ask about preferences'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to make a reservation"?',
                options: ['book a table', 'save a table', 'keep a table', 'hold a table'],
                correct: 'book a table'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ like to make a reservation"',
                answer: 'would',
                hint: 'A polite way to request something'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct form of "bring"?',
                options: ['could you bring', 'do you bring', 'are you bringing', 'did you bring'],
                correct: 'could you bring'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "___ you like to see the wine list?"',
                answer: 'Would',
                hint: 'A polite way to ask about preferences'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to ask for more"?',
                options: ['refill', 'more please', 'again please', 'another one'],
                correct: 'refill'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ like to try the special"',
                answer: 'would',
                hint: 'A polite way to express desire'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct form of "have"?',
                options: ['I would like to have', 'I am having', 'I have', 'I had'],
                correct: 'I would like to have'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "___ you like to share an appetizer?"',
                answer: 'Would',
                hint: 'A polite way to ask about preferences'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to ask for the waiter"?',
                options: ['excuse me', 'hey waiter', 'come here', 'attention'],
                correct: 'excuse me'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ like to see the dessert menu"',
                answer: 'would',
                hint: 'A polite way to request something'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct form of "take"?',
                options: ['I would like to take', 'I am taking', 'I take', 'I took'],
                correct: 'I would like to take'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "___ you like to split the bill?"',
                answer: 'Would',
                hint: 'A polite way to ask about preferences'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to ask for a table"?',
                options: ['table for two', 'two seats', 'two places', 'two spots'],
                correct: 'table for two'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ like to see the daily specials"',
                answer: 'would',
                hint: 'A polite way to request something'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct form of "get"?',
                options: ['could you get', 'do you get', 'are you getting', 'did you get'],
                correct: 'could you get'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "___ you like to see the chef\'s recommendations?"',
                answer: 'Would',
                hint: 'A polite way to ask about preferences'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to ask for the restroom"?',
                options: ['where is the restroom', 'bathroom please', 'toilet please', 'washroom please'],
                correct: 'where is the restroom'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'I would like a coffee',
                audio: '/audio/coffee.mp3',
                feedback: 'Focus on the "c" sound in "coffee"'
              },
              {
                type: 'pronunciation',
                text: 'Could you bring me a glass of water?',
                audio: '/audio/water.mp3',
                feedback: 'Focus on the "w" sound in "water"'
              },
              {
                type: 'pronunciation',
                text: 'What are the daily specials?',
                audio: '/audio/specials.mp3',
                feedback: 'Focus on the "s" sound in "specials"'
              },
              {
                type: 'pronunciation',
                text: 'Could I see the wine list?',
                audio: '/audio/wine.mp3',
                feedback: 'Focus on the "w" sound in "wine"'
              },
              {
                type: 'pronunciation',
                text: 'Is this dish vegetarian?',
                audio: '/audio/vegetarian.mp3',
                feedback: 'Focus on the "v" sound in "vegetarian"'
              },
              {
                type: 'pronunciation',
                text: 'Could I get a refill?',
                audio: '/audio/refill.mp3',
                feedback: 'Focus on the "r" sound in "refill"'
              },
              {
                type: 'pronunciation',
                text: "What's your signature dish?",
                audio: '/audio/signature.mp3',
                feedback: 'Focus on the "s" sound in "signature"'
              },
              {
                type: 'pronunciation',
                text: 'Is this dish gluten-free?',
                audio: '/audio/gluten.mp3',
                feedback: 'Focus on the "g" sound in "gluten"'
              },
              {
                type: 'pronunciation',
                text: 'Could I have a table by the window?',
                audio: '/audio/window.mp3',
                feedback: 'Focus on the "w" sound in "window"'
              },
              {
                type: 'pronunciation',
                text: "What's the soup of the day?",
                audio: '/audio/soup.mp3',
                feedback: 'Focus on the "s" sound in "soup"'
              },
              {
                type: 'pronunciation',
                text: 'Could I get a to-go box?',
                audio: '/audio/to-go.mp3',
                feedback: 'Focus on the "t" sound in "to-go"'
              },
              {
                type: 'pronunciation',
                text: 'Is this dish spicy?',
                audio: '/audio/spicy.mp3',
                feedback: 'Focus on the "s" sound in "spicy"'
              },
              {
                type: 'pronunciation',
                text: 'Could I see the chef\'s recommendations?',
                audio: '/audio/chef.mp3',
                feedback: 'Focus on the "ch" sound in "chef"'
              },
              {
                type: 'pronunciation',
                text: 'I love trying new flavors',
                audio: '/audio/flavors.mp3',
                feedback: 'Focus on the "f" sound in "flavors"'
              },
              {
                type: 'pronunciation',
                text: 'Can I get extra napkins?',
                audio: '/audio/napkins.mp3',
                feedback: 'Focus on the "n" sound in "napkins"'
              },
              {
                type: 'pronunciation',
                text: 'Do you serve breakfast all day?',
                audio: '/audio/breakfast.mp3',
                feedback: 'Focus on the "b" sound in "breakfast"'
              },
              {
                type: 'pronunciation',
                text: 'Could you make it less salty?',
                audio: '/audio/salty.mp3',
                feedback: 'Focus on the "s" sound in "salty"'
              },
              {
                type: 'pronunciation',
                text: 'I prefer my steak medium rare',
                audio: '/audio/steak.mp3',
                feedback: 'Focus on the "st" sound in "steak"'
              },
              {
                type: 'pronunciation',
                text: 'Can I have a glass of orange juice?',
                audio: '/audio/orange.mp3',
                feedback: 'Focus on the "o" sound in "orange"'
              },
              {
                type: 'pronunciation',
                text: 'This meal is delicious',
                audio: '/audio/delicious.mp3',
                feedback: 'Focus on the "d" sound in "delicious"'
              },
              {
                type: 'pronunciation',
                text: 'Could you recommend a dessert?',
                audio: '/audio/dessert.mp3',
                feedback: 'Focus on the "d" sound in "dessert"'
              },
              {
                type: 'pronunciation',
                text: 'Do you have any sugar-free options?',
                audio: '/audio/sugar-free.mp3',
                feedback: 'Focus on the "s" sound in "sugar"'
              },
              {
                type: 'pronunciation',
                text: 'I would like a bottle of sparkling water',
                audio: '/audio/sparkling.mp3',
                feedback: 'Focus on the "sp" sound in "sparkling"'
              },
              {
                type: 'pronunciation',
                text: 'The food presentation is beautiful',
                audio: '/audio/presentation.mp3',
                feedback: 'Focus on the "p" sound in "presentation"'
              },
              {
                type: 'pronunciation',
                text: 'Does this contain dairy?',
                audio: '/audio/dairy.mp3',
                feedback: 'Focus on the "d" sound in "dairy"'
              }
            ]            
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              {
                type: 'sentence-building',
                words: ['like', 'I', 'tea', 'would', 'a'],
                correct: 'I would like a tea.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ like a coffee"',
                answer: 'would',
                hint: 'A polite way to express desire'
              },
              {
                type: 'sentence-building',
                words: ['menu', 'the', 'see', 'I', 'would', 'like', 'to'],
                correct: 'I would like to see the menu.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your favorite food (50 words)',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['water', 'glass', 'of', 'a', 'like', 'I', 'would'],
                correct: 'I would like a glass of water.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "___ you like something to drink?"',
                answer: 'Would',
                hint: 'A polite way to ask about preferences'
              },
              {
                type: 'sentence-building',
                words: ['check', 'the', 'get', 'we', 'could', 'please'],
                correct: 'Could we get the check, please?'
              },
              {
                type: 'short-essay',
                topic: 'Write about your favorite restaurant (50 words)',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['reservation', 'make', 'to', 'like', 'I', 'would', 'a'],
                correct: 'I would like to make a reservation.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ like to see the dessert menu"',
                answer: 'would',
                hint: 'A polite way to request something'
              },
              {
                type: 'sentence-building',
                words: ['recommend', 'can', 'you', 'something', 'good'],
                correct: 'Can you recommend something good?'
              },
              {
                type: 'short-essay',
                topic: 'Write about your favorite drink (50 words)',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['table', 'window', 'by', 'the', 'like', 'I', 'would', 'a'],
                correct: 'I would like a table by the window.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "___ you like to share an appetizer?"',
                answer: 'Would',
                hint: 'A polite way to ask about preferences'
              },
              {
                type: 'sentence-building',
                words: ['spicy', 'is', 'this', 'dish', 'how'],
                correct: 'How spicy is this dish?'
              },
              {
                type: 'short-essay',
                topic: 'Write about your favorite meal of the day (50 words)',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['vegetarian', 'have', 'do', 'you', 'options'],
                correct: 'Do you have vegetarian options?'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ like to try the special"',
                answer: 'would',
                hint: 'A polite way to express desire'
              },
              {
                type: 'sentence-building',
                words: ['dessert', 'like', 'would', 'you', 'to', 'see', 'the', 'menu'],
                correct: 'Would you like to see the dessert menu?'
              },
              {
                type: 'short-essay',
                topic: 'Write about your favorite dessert (50 words)',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['bill', 'split', 'to', 'like', 'would', 'you', 'the'],
                correct: 'Would you like to split the bill?'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ like to see the daily specials"',
                answer: 'would',
                hint: 'A polite way to request something'
              },
              {
                type: 'sentence-building',
                words: ['allergies', 'have', 'I', 'food', 'some'],
                correct: 'I have some food allergies.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your favorite restaurant dish (50 words)',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['to-go', 'box', 'a', 'get', 'could', 'I'],
                correct: 'Could I get a to-go box?'
              },
              {
                type: 'sentence-building',
                words: ['I', 'need', 'to', 'save', 'money'],
                correct: 'I need to save money'
              },
              {
                type: 'sentence-building',
                words: ['the', 'price', 'is', 'too', 'high'],
                correct: 'The price is too high'
              }
            ]
          }
        ]
      },
      {
        id: 'a1-6',
        title: 'Home and Furniture',
        description: 'Describe your home and its contents',
        icon: 'bx-home',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which preposition is used for location?',
                options: ['in', 'at', 'on', 'by'],
                correct: 'in'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The sofa is ___ the living room"',
                answer: 'in',
                hint: 'Use this preposition for rooms'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct form of "there is" for plural?',
                options: ['there is', 'there are', 'there have', 'there has'],
                correct: 'there are'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "___ three chairs in the kitchen"',
                answer: 'There are',
                hint: 'Use this for plural objects'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "belonging to me"?',
                options: ['my', 'mine', 'me', 'myself'],
                correct: 'my'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "This is ___ bedroom"',
                answer: 'my',
                hint: 'Use this possessive adjective'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct form of "this" for plural?',
                options: ['this', 'these', 'those', 'that'],
                correct: 'these'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "___ are my books"',
                answer: 'These',
                hint: 'Use this for nearby plural objects'
              },
              {
                type: 'multiple-choice',
                question: 'Which preposition is used for surfaces?',
                options: ['in', 'at', 'on', 'by'],
                correct: 'on'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The lamp is ___ the table"',
                answer: 'on',
                hint: 'Use this preposition for surfaces'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct form of "there is" for singular?',
                options: ['there is', 'there are', 'there have', 'there has'],
                correct: 'there is'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "___ a sofa in the living room"',
                answer: 'There is',
                hint: 'Use this for singular objects'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "belonging to you"?',
                options: ['your', 'yours', 'you', 'yourself'],
                correct: 'your'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "Is this ___ house?"',
                answer: 'your',
                hint: 'Use this possessive adjective'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct form of "this" for singular?',
                options: ['this', 'these', 'those', 'that'],
                correct: 'this'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "___ is my bedroom"',
                answer: 'This',
                hint: 'Use this for nearby singular objects'
              },
              {
                type: 'multiple-choice',
                question: 'Which preposition is used for specific locations?',
                options: ['in', 'at', 'on', 'by'],
                correct: 'at'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The keys are ___ the door"',
                answer: 'at',
                hint: 'Use this preposition for specific points'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct form of "there is" for questions?',
                options: ['is there', 'are there', 'have there', 'has there'],
                correct: 'is there'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "___ a bathroom upstairs?"',
                answer: 'Is there',
                hint: 'Use this for singular questions'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "belonging to him"?',
                options: ['his', 'he', 'him', 'himself'],
                correct: 'his'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "This is ___ room"',
                answer: 'his',
                hint: 'Use this possessive adjective'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct form of "this" for questions?',
                options: ['is this', 'are these', 'is that', 'are those'],
                correct: 'is this'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "___ your house?"',
                answer: 'Is this',
                hint: 'Use this for singular questions'
              },
              {
                type: 'multiple-choice',
                question: 'Which preposition is used for movement?',
                options: ['in', 'at', 'on', 'to'],
                correct: 'to'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'This is my house',
                audio: '/audio/house.mp3',
                feedback: 'Focus on the "h" sound in "house"'
              },
              {
                type: 'pronunciation',
                text: 'The sofa is in the living room',
                audio: '/audio/sofa.mp3',
                feedback: 'Focus on the "s" sound in "sofa"'
              },
              {
                type: 'pronunciation',
                text: 'My bedroom is upstairs',
                audio: '/audio/bedroom.mp3',
                feedback: 'Focus on the "b" sound in "bedroom"'
              },
              {
                type: 'pronunciation',
                text: 'There are two windows in my room',
                audio: '/audio/windows.mp3',
                feedback: 'Focus on the "w" sound in "windows"'
              },
              {
                type: 'pronunciation',
                text: 'The kitchen is very modern',
                audio: '/audio/kitchen.mp3',
                feedback: 'Focus on the "k" sound in "kitchen"'
              },
              {
                type: 'pronunciation',
                text: 'My desk is near the window',
                audio: '/audio/desk.mp3',
                feedback: 'Focus on the "d" sound in "desk"'
              },
              {
                type: 'pronunciation',
                text: 'The bathroom is clean',
                audio: '/audio/bathroom.mp3',
                feedback: 'Focus on the "b" sound in "bathroom"'
              },
              {
                type: 'pronunciation',
                text: 'I have a big closet',
                audio: '/audio/closet.mp3',
                feedback: 'Focus on the "c" sound in "closet"'
              },
              {
                type: 'pronunciation',
                text: 'The garden is beautiful',
                audio: '/audio/garden.mp3',
                feedback: 'Focus on the "g" sound in "garden"'
              },
              {
                type: 'pronunciation',
                text: 'My house has two floors',
                audio: '/audio/floors.mp3',
                feedback: 'Focus on the "f" sound in "floors"'
              },
              {
                type: 'pronunciation',
                text: 'The living room is spacious',
                audio: '/audio/spacious.mp3',
                feedback: 'Focus on the "s" sound in "spacious"'
              },
              {
                type: 'pronunciation',
                text: 'I need new furniture',
                audio: '/audio/furniture.mp3',
                feedback: 'Focus on the "f" sound in "furniture"'
              },
              {
                type: 'pronunciation',
                text: 'The walls are white',
                audio: '/audio/walls.mp3',
                feedback: 'Focus on the "w" sound in "walls"'
              },
              {
                type: 'pronunciation',
                text: 'There is a carpet in my room',
                audio: '/audio/carpet.mp3',
                feedback: 'Focus on the "c" sound in "carpet"'
              },
              {
                type: 'pronunciation',
                text: 'I have a wooden floor',
                audio: '/audio/wooden.mp3',
                feedback: 'Focus on the "w" sound in "wooden"'
              },
              {
                type: 'pronunciation',
                text: 'The bookshelf is full of books',
                audio: '/audio/bookshelf.mp3',
                feedback: 'Focus on the "b" sound in "bookshelf"'
              },
              {
                type: 'pronunciation',
                text: 'I turn on the lamp at night',
                audio: '/audio/lamp.mp3',
                feedback: 'Focus on the "l" sound in "lamp"'
              },
              {
                type: 'pronunciation',
                text: 'There is a clock on the wall',
                audio: '/audio/clock.mp3',
                feedback: 'Focus on the "cl" sound in "clock"'
              },
              {
                type: 'pronunciation',
                text: 'The ceiling is very high',
                audio: '/audio/ceiling.mp3',
                feedback: 'Focus on the "c" sound in "ceiling"'
              },
              {
                type: 'pronunciation',
                text: 'I have a mirror in my room',
                audio: '/audio/mirror.mp3',
                feedback: 'Focus on the "m" sound in "mirror"'
              },
              {
                type: 'pronunciation',
                text: 'The door is open',
                audio: '/audio/door.mp3',
                feedback: 'Focus on the "d" sound in "door"'
              },
              {
                type: 'pronunciation',
                text: 'The curtains are blue',
                audio: '/audio/curtains.mp3',
                feedback: 'Focus on the "c" sound in "curtains"'
              },
              {
                type: 'pronunciation',
                text: 'The stairs lead to my bedroom',
                audio: '/audio/stairs.mp3',
                feedback: 'Focus on the "st" sound in "stairs"'
              },
              {
                type: 'pronunciation',
                text: 'The chimney is tall',
                audio: '/audio/chimney.mp3',
                feedback: 'Focus on the "ch" sound in "chimney"'
              },
              {
                type: 'pronunciation',
                text: 'There is a table in the dining room',
                audio: '/audio/table.mp3',
                feedback: 'Focus on the "t" sound in "table"'
              }
            ]            
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              {
                type: 'sentence-building',
                words: ['is', 'my', 'house', 'big', 'very'],
                correct: 'My house is very big.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The sofa is ___ the living room"',
                answer: 'in',
                hint: 'Use this preposition for rooms'
              },
              {
                type: 'sentence-building',
                words: ['are', 'there', 'three', 'bedrooms', 'in', 'my', 'house'],
                correct: 'There are three bedrooms in my house.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your home (50 words)',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['is', 'my', 'room', 'clean', 'very'],
                correct: 'My room is very clean.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The lamp is ___ the table"',
                answer: 'on',
                hint: 'Use this preposition for surfaces'
              },
              {
                type: 'sentence-building',
                words: ['have', 'I', 'new', 'furniture', 'some'],
                correct: 'I have some new furniture.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your favorite room (50 words)',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['is', 'the', 'kitchen', 'modern', 'very'],
                correct: 'The kitchen is very modern.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The keys are ___ the door"',
                answer: 'at',
                hint: 'Use this preposition for specific points'
              },
              {
                type: 'sentence-building',
                words: ['are', 'there', 'two', 'bathrooms', 'in', 'the', 'house'],
                correct: 'There are two bathrooms in the house.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your bedroom (50 words)',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['is', 'my', 'desk', 'near', 'the', 'window'],
                correct: 'My desk is near the window.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The books are ___ the shelf"',
                answer: 'on',
                hint: 'Use this preposition for surfaces'
              },
              {
                type: 'sentence-building',
                words: ['have', 'I', 'big', 'closet', 'a'],
                correct: 'I have a big closet.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your living room (50 words)',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['is', 'the', 'garden', 'beautiful', 'very'],
                correct: 'The garden is very beautiful.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The cat is ___ the chair"',
                answer: 'under',
                hint: 'Use this preposition for position below'
              },
              {
                type: 'sentence-building',
                words: ['are', 'there', 'many', 'plants', 'in', 'my', 'garden'],
                correct: 'There are many plants in my garden.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your kitchen (50 words)',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['is', 'my', 'house', 'near', 'the', 'park'],
                correct: 'My house is near the park.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The pictures are ___ the wall"',
                answer: 'on',
                hint: 'Use this preposition for surfaces'
              },
              {
                type: 'sentence-building',
                words: ['have', 'I', 'new', 'carpet', 'a'],
                correct: 'I have a new carpet.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your bathroom (50 words)',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['is', 'the', 'garage', 'big', 'very'],
                correct: 'The garage is very big.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'a2',
    name: 'Elementary (A2)',
    description: 'Build your foundation',
    icon: 'bxs-book-open',
    topics: [
      {
        id: 'a2-1',
        title: 'Past Simple',
        description: 'Learn to talk about past events',
        icon: 'bx-time-five',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which is the correct past simple form of "walk"?',
                options: ['walked', 'walking', 'walks', 'walk'],
                correct: 'walked'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "Yesterday, I ___ to the park"',
                answer: 'went',
                hint: 'The past simple form of "go"'
              },
              {
                type: 'multiple-choice',
                question: 'What is the past simple of "eat"?',
                options: ['eated', 'ate', 'eaten', 'eating'],
                correct: 'ate'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ her homework last night"',
                answer: 'did',
                hint: 'The past simple form of "do"'
              },
              {
                type: 'multiple-choice',
                question: 'Which is the correct past simple form of "study"?',
                options: ['studied', 'studyed', 'studying', 'studies'],
                correct: 'studied'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "We ___ to the cinema last weekend"',
                answer: 'went',
                hint: 'The past simple form of "go"'
              },
              {
                type: 'multiple-choice',
                question: 'What is the past simple of "write"?',
                options: ['wrote', 'written', 'writed', 'writing'],
                correct: 'wrote'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "He ___ a letter to his friend"',
                answer: 'wrote',
                hint: 'The past simple form of "write"'
              },
              {
                type: 'multiple-choice',
                question: 'Which is the correct past simple form of "play"?',
                options: ['played', 'playd', 'playing', 'plays'],
                correct: 'played'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "They ___ football yesterday"',
                answer: 'played',
                hint: 'The past simple form of "play"'
              },
              {
                type: 'multiple-choice',
                question: 'What is the past simple of "see"?',
                options: ['saw', 'seen', 'seed', 'seeing'],
                correct: 'saw'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ my friend at the mall"',
                answer: 'saw',
                hint: 'The past simple form of "see"'
              },
              {
                type: 'multiple-choice',
                question: 'Which is the correct past simple form of "visit"?',
                options: ['visited', 'visitted', 'visiting', 'visits'],
                correct: 'visited'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ her grandmother last week"',
                answer: 'visited',
                hint: 'The past simple form of "visit"'
              },
              {
                type: 'multiple-choice',
                question: 'What is the past simple of "take"?',
                options: ['took', 'taken', 'taked', 'taking'],
                correct: 'took'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "He ___ a photo of the sunset"',
                answer: 'took',
                hint: 'The past simple form of "take"'
              },
              {
                type: 'multiple-choice',
                question: 'Which is the correct past simple form of "watch"?',
                options: ['watched', 'watchd', 'watching', 'watches'],
                correct: 'watched'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "We ___ a movie last night"',
                answer: 'watched',
                hint: 'The past simple form of "watch"'
              },
              {
                type: 'multiple-choice',
                question: 'What is the past simple of "drink"?',
                options: ['drank', 'drunk', 'drinked', 'drinking'],
                correct: 'drank'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ coffee this morning"',
                answer: 'drank',
                hint: 'The past simple form of "drink"'
              },
              {
                type: 'multiple-choice',
                question: 'Which is the correct past simple form of "cook"?',
                options: ['cooked', 'cookd', 'cooking', 'cooks'],
                correct: 'cooked'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ dinner for her family"',
                answer: 'cooked',
                hint: 'The past simple form of "cook"'
              },
              {
                type: 'multiple-choice',
                question: 'What is the past simple of "buy"?',
                options: ['bought', 'buyed', 'boughten', 'buying'],
                correct: 'bought'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "They ___ a new car last month"',
                answer: 'bought',
                hint: 'The past simple form of "buy"'
              },
              {
                type: 'multiple-choice',
                question: 'Which is the correct past simple form of "travel"?',
                options: ['travelled', 'traveled', 'travelling', 'travels'],
                correct: 'travelled'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'I went to the cinema yesterday',
                audio: '/audio/past-simple/went.mp3',
                feedback: 'Focus on the "t" sound in "went"'
              },
              {
                type: 'pronunciation',
                text: 'She ate breakfast at 8 AM',
                audio: '/audio/past-simple/ate.mp3',
                feedback: 'Focus on the "a" sound in "ate"'
              },
              {
                type: 'pronunciation',
                text: 'We played tennis last weekend',
                audio: '/audio/past-simple/played.mp3',
                feedback: 'Focus on the "d" sound in "played"'
              },
              {
                type: 'pronunciation',
                text: 'He wrote an email to his boss',
                audio: '/audio/past-simple/wrote.mp3',
                feedback: 'Focus on the "r" sound in "wrote"'
              },
              {
                type: 'pronunciation',
                text: 'They visited their grandparents',
                audio: '/audio/past-simple/visited.mp3',
                feedback: 'Focus on the "t" sound in "visited"'
              },
              {
                type: 'pronunciation',
                text: 'I took many photos on holiday',
                audio: '/audio/past-simple/took.mp3',
                feedback: 'Focus on the "k" sound in "took"'
              },
              {
                type: 'pronunciation',
                text: 'We watched a good movie',
                audio: '/audio/past-simple/watched.mp3',
                feedback: 'Focus on the "t" sound in "watched"'
              },
              {
                type: 'pronunciation',
                text: 'She drank coffee this morning',
                audio: '/audio/past-simple/drank.mp3',
                feedback: 'Focus on the "r" sound in "drank"'
              },
              {
                type: 'pronunciation',
                text: 'He cooked dinner last night',
                audio: '/audio/past-simple/cooked.mp3',
                feedback: 'Focus on the "k" sound in "cooked"'
              },
              {
                type: 'pronunciation',
                text: 'They bought a new house',
                audio: '/audio/past-simple/bought.mp3',
                feedback: 'Focus on the "t" sound in "bought"'
              },
              {
                type: 'pronunciation',
                text: 'I travelled to Paris last summer',
                audio: '/audio/past-simple/travelled.mp3',
                feedback: 'Focus on the "l" sound in "travelled"'
              },
              {
                type: 'pronunciation',
                text: 'She studied English yesterday',
                audio: '/audio/past-simple/studied.mp3',
                feedback: 'Focus on the "d" sound in "studied"'
              },
              {
                type: 'pronunciation',
                text: 'I saw my friend at the park',
                audio: '/audio/past-simple/saw.mp3',
                feedback: 'Focus on the vowel sound in "saw"'
              },
              {
                type: 'pronunciation',
                text: 'We drove to the beach last Sunday',
                audio: '/audio/past-simple/drove.mp3',
                feedback: 'Focus on the "v" sound in "drove"'
              },
              {
                type: 'pronunciation',
                text: 'They made a cake for the party',
                audio: '/audio/past-simple/made.mp3',
                feedback: 'Focus on the "d" sound in "made"'
              },
              {
                type: 'pronunciation',
                text: 'She read a book in bed',
                audio: '/audio/past-simple/read.mp3',
                feedback: 'Remember "read" in past tense is pronounced like "red"'
              },
              {
                type: 'pronunciation',
                text: 'I spoke to my teacher after class',
                audio: '/audio/past-simple/spoke.mp3',
                feedback: 'Focus on the "o" sound in "spoke"'
              },
              {
                type: 'pronunciation',
                text: 'We had lunch at the new restaurant',
                audio: '/audio/past-simple/had.mp3',
                feedback: 'Focus on the "d" sound in "had"'
              },
              {
                type: 'pronunciation',
                text: 'He felt tired after work',
                audio: '/audio/past-simple/felt.mp3',
                feedback: 'Focus on the "t" sound in "felt"'
              },
              {
                type: 'pronunciation',
                text: 'They slept until noon on Saturday',
                audio: '/audio/past-simple/slept.mp3',
                feedback: 'Focus on the "pt" sound at the end of "slept"'
              },
              {
                type: 'pronunciation',
                text: 'I found my keys under the sofa',
                audio: '/audio/past-simple/found.mp3',
                feedback: 'Focus on the "ou" sound in "found"'
              },
              {
                type: 'pronunciation',
                text: 'She met her boyfriend at the café',
                audio: '/audio/past-simple/met.mp3',
                feedback: 'Focus on the short "e" sound in "met"'
              },
              {
                type: 'pronunciation',
                text: 'We spent all our money at the mall',
                audio: '/audio/past-simple/spent.mp3',
                feedback: 'Focus on the "sp" sound at the beginning of "spent"'
              },
              {
                type: 'pronunciation',
                text: 'He caught the bus to work',
                audio: '/audio/past-simple/caught.mp3',
                feedback: 'Focus on the "aught" sound in "caught"'
              },
              {
                type: 'pronunciation',
                text: 'They told me about their holiday',
                audio: '/audio/past-simple/told.mp3',
                feedback: 'Focus on the "old" sound in "told"'
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              {
                type: 'sentence-building',
                words: ['yesterday', 'I', 'played', 'tennis'],
                correct: 'I played tennis yesterday.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "Yesterday, I ___ to the park"',
                answer: 'went',
                hint: 'The past simple form of "go"'
              },
              {
                type: 'sentence-building',
                words: ['last', 'week', 'she', 'visited', 'her', 'grandmother'],
                correct: 'Last week she visited her grandmother.'
              },
              {
                type: 'short-essay',
                topic: 'Write about what you did last weekend (50 words)',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['morning', 'this', 'I', 'drank', 'coffee'],
                correct: 'This morning I drank coffee.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ her homework last night"',
                answer: 'did',
                hint: 'The past simple form of "do"'
              },
              {
                type: 'sentence-building',
                words: ['weekend', 'last', 'we', 'watched', 'a', 'movie'],
                correct: 'Last weekend we watched a movie.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your last holiday (50 words)',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['yesterday', 'he', 'cooked', 'dinner'],
                correct: 'Yesterday he cooked dinner.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "They ___ a new car last month"',
                answer: 'bought',
                hint: 'The past simple form of "buy"'
              },
              {
                type: 'sentence-building',
                words: ['summer', 'last', 'I', 'travelled', 'to', 'Paris'],
                correct: 'Last summer I travelled to Paris.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your last birthday celebration (50 words)',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['night', 'last', 'she', 'wrote', 'an', 'email'],
                correct: 'Last night she wrote an email.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "We ___ to the cinema last weekend"',
                answer: 'went',
                hint: 'The past simple form of "go"'
              },
              {
                type: 'sentence-building',
                words: ['morning', 'this', 'they', 'ate', 'breakfast'],
                correct: 'This morning they ate breakfast.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your last day at school (50 words)',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['week', 'last', 'I', 'studied', 'English'],
                correct: 'Last week I studied English.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "He ___ a photo of the sunset"',
                answer: 'took',
                hint: 'The past simple form of "take"'
              },
              {
                type: 'sentence-building',
                words: ['yesterday', 'we', 'played', 'football'],
                correct: 'Yesterday we played football.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your last family gathering (50 words)',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['morning', 'this', 'she', 'drank', 'tea'],
                correct: 'This morning she drank tea.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ my friend at the mall"',
                answer: 'saw',
                hint: 'The past simple form of "see"'
              },
              {
                type: 'sentence-building',
                words: ['weekend', 'last', 'they', 'visited', 'the', 'museum'],
                correct: 'Last weekend they visited the museum.'
              },
              {
                type: 'short-essay',
                topic: 'Write about your last shopping experience (50 words)',
                wordLimit: 50
              },
              {
                type: 'sentence-building',
                words: ['yesterday', 'he', 'watched', 'TV'],
                correct: 'Yesterday he watched TV.'
              }
            ]
          }
        ]
      },
      {
        id: 'a2-2',
        title: 'Future Plans',
        description: 'Express your future intentions',
        icon: 'bx-calendar',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which form is used for planned future events?',
                options: ['will', 'going to', 'present continuous', 'present simple'],
                correct: 'going to'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ meet my friends tomorrow"',
                answer: 'am going to',
                hint: 'Use "going to" for planned events'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence correctly uses "going to" for future plans?',
                options: [
                  'I going to visit Paris next summer',
                  'I am going to visit Paris next summer',
                  'I go to visit Paris next summer',
                  'I will going to visit Paris next summer'
                ],
                correct: 'I am going to visit Paris next summer'
              },
              {
                type: 'fill-blank',
                question: 'Complete the sentence: "Next weekend, I ___ (study) for my English exam."',
                answer: 'am going to study',
                hint: 'Use "going to" + base verb for planned future actions'
              },
              {
                type: 'multiple-choice',
                question: 'Choose the correct future form: "I ___ to the cinema tomorrow."',
                options: [
                  'am going',
                  'am going to go',
                  'will going',
                  'going'
                ],
                correct: 'am going to go'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "Next month, we ___ (move) to a new apartment."',
                answer: 'are going to move',
                hint: 'Use "going to" for planned future events'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence uses the correct future tense?',
                options: [
                  'I will to visit my grandmother next week',
                  'I am going to visit my grandmother next week',
                  'I going visit my grandmother next week',
                  'I will going visit my grandmother next week'
                ],
                correct: 'I am going to visit my grandmother next week'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "In the summer, they ___ (travel) to Spain."',
                answer: 'are going to travel',
                hint: 'Use "going to" for planned future actions'
              },
              {
                type: 'multiple-choice',
                question: 'Choose the correct form: "What ___ you ___ this evening?"',
                options: [
                  'are / going to do',
                  'are / going do',
                  'will / going to do',
                  'are / will do'
                ],
                correct: 'are / going to do'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "Next year, I ___ (learn) to drive."',
                answer: 'am going to learn',
                hint: 'Use "going to" for future plans'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: [
                  'She going to start university next year',
                  'She is going to start university next year',
                  'She will going to start university next year',
                  'She is going start university next year'
                ],
                correct: 'She is going to start university next year'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "Tomorrow, we ___ (have) a meeting at 2 PM."',
                answer: 'are going to have',
                hint: 'Use "going to" for scheduled future events'
              },
              {
                type: 'multiple-choice',
                question: 'Choose the correct future form: "___ you ___ to the party?"',
                options: [
                  'Are / going to come',
                  'Will / going to come',
                  'Are / going come',
                  'Will / come'
                ],
                correct: 'Are / going to come'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "Next week, he ___ (start) his new job."',
                answer: 'is going to start',
                hint: 'Use "going to" for planned future events'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence uses the correct future tense?',
                options: [
                  'They going to buy a new car next month',
                  'They are going to buy a new car next month',
                  'They will going to buy a new car next month',
                  'They are going buy a new car next month'
                ],
                correct: 'They are going to buy a new car next month'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "In December, we ___ (celebrate) Christmas with family."',
                answer: 'are going to celebrate',
                hint: 'Use "going to" for planned future events'
              },
              {
                type: 'multiple-choice',
                question: 'Choose the correct form: "___ she ___ to university next year?"',
                options: [
                  'Is / going to go',
                  'Will / going to go',
                  'Is / going go',
                  'Will / go'
                ],
                correct: 'Is / going to go'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "Next summer, I ___ (visit) my grandparents."',
                answer: 'am going to visit',
                hint: 'Use "going to" for future plans'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: [
                  'We going to have dinner at 7 PM',
                  'We are going to have dinner at 7 PM',
                  'We will going to have dinner at 7 PM',
                  'We are going have dinner at 7 PM'
                ],
                correct: 'We are going to have dinner at 7 PM'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "Tomorrow morning, she ___ (take) the train to work."',
                answer: 'is going to take',
                hint: 'Use "going to" for planned future actions'
              },
              {
                type: 'multiple-choice',
                question: 'Choose the correct future form: "___ they ___ to the beach this weekend?"',
                options: [
                  'Are / going to go',
                  'Will / going to go',
                  'Are / going go',
                  'Will / go'
                ],
                correct: 'Are / going to go'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "Next month, I ___ (start) learning French."',
                answer: 'am going to start',
                hint: 'Use "going to" for future plans'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "Next year, they ___ (move) to a bigger house."',
                answer: 'are going to move',
                hint: 'Use "going to" for future plans'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: [
                  'I going to finish my homework tonight',
                  'I am going to finish my homework tonight',
                  'I will going to finish my homework tonight',
                  'I am going finish my homework tonight'
                ],
                correct: 'I am going to finish my homework tonight'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "Tomorrow evening, we ___ (watch) a movie together."',
                answer: 'are going to watch',
                hint: 'Use "going to" for planned future activities'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'I am going to visit Paris next summer',
                audio: '/audio/future-plans/future-plans-1.mp3',
                feedback: 'Focus on the "g" sound in "going"'
              },
              {
                type: 'pronunciation',
                text: 'She is going to start university next year',
                audio: '/audio/future-plans/future-plans-2.mp3',
                feedback: 'Focus on the "st" sound in "start"'
              },
              {
                type: 'pronunciation',
                text: 'We are going to have dinner at 7 PM',
                audio: '/audio/future-plans/future-plans-3.mp3',
                feedback: 'Focus on the "h" sound in "have"'
              },
              {
                type: 'pronunciation',
                text: 'They are going to travel to Spain',
                audio: '/audio/future-plans/future-plans-4.mp3',
                feedback: 'Focus on the "tr" sound in "travel"'
              },
              {
                type: 'pronunciation',
                text: 'He is going to take the train tomorrow',
                audio: '/audio/future-plans/future-plans-5.mp3',
                feedback: 'Focus on the "t" sound in "take"'
              },
              {
                type: 'pronunciation',
                text: 'I am going to study English next month',
                audio: '/audio/future-plans/future-plans-6.mp3',
                feedback: 'Focus on the "st" sound in "study"'
              },
              {
                type: 'pronunciation',
                text: 'We are going to celebrate Christmas together',
                audio: '/audio/future-plans/future-plans-7.mp3',
                feedback: 'Focus on the "br" sound in "celebrate"'
              },
              {
                type: 'pronunciation',
                text: 'She is going to learn to drive next year',
                audio: '/audio/future-plans/future-plans-8.mp3',
                feedback: 'Focus on the "l" sound in "learn"'
              },
              {
                type: 'pronunciation',
                text: 'They are going to move to a new house',
                audio: '/audio/future-plans/future-plans-9.mp3',
                feedback: 'Focus on the "m" sound in "move"'
              },
              {
                type: 'pronunciation',
                text: 'I am going to finish my homework tonight',
                audio: '/audio/future-plans/future-plans-10.mp3',
                feedback: 'Focus on the "f" sound in "finish"'
              },
              {
                type: 'pronunciation',
                text: 'He is going to meet his friends tomorrow',
                audio: '/audio/future-plans/future-plans-11.mp3',
                feedback: 'Focus on the "m" sound in "meet"'
              },
              {
                type: 'pronunciation',
                text: 'We are going to watch a movie together',
                audio: '/audio/future-plans/future-plans-12.mp3',
                feedback: 'Focus on the "w" sound in "watch"'
              },
              {
                type: 'pronunciation',
                text: 'She is going to start a new job next week',
                audio: '/audio/future-plans/future-plans-13.mp3',
                feedback: 'Focus on the "j" sound in "job"'
              },
              {
                type: 'pronunciation',
                text: 'They are going to buy a new car',
                audio: '/audio/future-plans/future-plans-14.mp3',
                feedback: 'Focus on the "b" sound in "buy"'
              },
              {
                type: 'pronunciation',
                text: 'I am going to visit my grandparents',
                audio: '/audio/future-plans/future-plans-15.mp3',
                feedback: 'Focus on the "gr" sound in "grandparents"'
              },
              {
                type: 'pronunciation',
                text: 'He is going to take a vacation next month',
                audio: '/audio/future-plans/future-plans-16.mp3',
                feedback: 'Focus on the "v" sound in "vacation"'
              },
              {
                type: 'pronunciation',
                text: 'We are going to organize a party',
                audio: '/audio/future-plans/future-plans-17.mp3',
                feedback: 'Focus on the "p" sound in "party"'
              },
              {
                type: 'pronunciation',
                text: 'She is going to learn French next year',
                audio: '/audio/future-plans/future-plans-18.mp3',
                feedback: 'Focus on the "F" sound in "French"'
              },
              {
                type: 'pronunciation',
                text: 'They are going to plant a garden',
                audio: '/audio/future-plans/future-plans-19.mp3',
                feedback: 'Focus on the "pl" sound in "plant"'
              },
              {
                type: 'pronunciation',
                text: 'I am going to cook dinner tonight',
                audio: '/audio/future-plans/future-plans-20.mp3',
                feedback: 'Focus on the "c" sound in "cook"'
              },
              {
                type: 'pronunciation',
                text: 'He is going to play tennis tomorrow',
                audio: '/audio/future-plans/future-plans-21.mp3',
                feedback: 'Focus on the "pl" sound in "play"'
              },
              {
                type: 'pronunciation',
                text: 'We are going to visit the museum',
                audio: '/audio/future-plans/future-plans-22.mp3',
                feedback: 'Focus on the "m" sound in "museum"'
              },
              {
                type: 'pronunciation',
                text: 'She is going to start a new project',
                audio: '/audio/future-plans/future-plans-23.mp3',
                feedback: 'Focus on the "pr" sound in "project"'
              },
              {
                type: 'pronunciation',
                text: 'They are going to clean the house',
                audio: '/audio/future-plans/future-plans-24.mp3',
                feedback: 'Focus on the "cl" sound in "clean"'
              },
              {
                type: 'pronunciation',
                text: 'I am going to read a new book',
                audio: '/audio/future-plans/future-plans-25.mp3',
                feedback: 'Focus on the "r" sound in "read"'
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              {
                type: 'sentence-building',
                words: ['going', 'am', 'to', 'study', 'I', 'tomorrow'],
                correct: 'I am going to study tomorrow.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'start', 'she', 'university', 'next', 'year'],
                correct: 'She is going to start university next year.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'have', 'we', 'dinner', 'at', '7', 'PM'],
                correct: 'We are going to have dinner at 7 PM.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'travel', 'they', 'Spain', 'to', 'next', 'month'],
                correct: 'They are going to travel to Spain next month.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'take', 'he', 'the', 'train', 'tomorrow'],
                correct: 'He is going to take the train tomorrow.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'am', 'to', 'study', 'I', 'English', 'next', 'month'],
                correct: 'I am going to study English next month.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'celebrate', 'we', 'Christmas', 'together'],
                correct: 'We are going to celebrate Christmas together.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'learn', 'she', 'drive', 'to', 'next', 'year'],
                correct: 'She is going to learn to drive next year.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'move', 'they', 'new', 'house', 'to', 'a'],
                correct: 'They are going to move to a new house.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'am', 'to', 'finish', 'I', 'homework', 'my', 'tonight'],
                correct: 'I am going to finish my homework tonight.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'meet', 'he', 'friends', 'his', 'tomorrow'],
                correct: 'He is going to meet his friends tomorrow.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'watch', 'we', 'movie', 'a', 'together'],
                correct: 'We are going to watch a movie together.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'start', 'she', 'new', 'job', 'a', 'next', 'week'],
                correct: 'She is going to start a new job next week.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'buy', 'they', 'new', 'car', 'a'],
                correct: 'They are going to buy a new car.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'am', 'to', 'visit', 'I', 'grandparents', 'my'],
                correct: 'I am going to visit my grandparents.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'take', 'he', 'vacation', 'a', 'next', 'month'],
                correct: 'He is going to take a vacation next month.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'organize', 'we', 'party', 'a'],
                correct: 'We are going to organize a party.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'learn', 'she', 'French', 'next', 'year'],
                correct: 'She is going to learn French next year.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'plant', 'they', 'garden', 'a'],
                correct: 'They are going to plant a garden.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'am', 'to', 'cook', 'I', 'dinner', 'tonight'],
                correct: 'I am going to cook dinner tonight.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'play', 'he', 'tennis', 'tomorrow'],
                correct: 'He is going to play tennis tomorrow.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'visit', 'we', 'museum', 'the'],
                correct: 'We are going to visit the museum.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'start', 'she', 'project', 'new', 'a'],
                correct: 'She is going to start a new project.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'clean', 'they', 'house', 'the'],
                correct: 'They are going to clean the house.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'am', 'to', 'read', 'I', 'book', 'new', 'a'],
                correct: 'I am going to read a new book.'
              }
            ]
          }
        ]
      },
      {
        id: 'a2-3',
        title: 'Travel and Tourism',
        description: 'Learn travel-related vocabulary and phrases',
        icon: 'bx-plane',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which preposition is used with "arrive"?',
                options: ['in', 'at', 'on', 'to'],
                correct: 'at'
              },
              {
                type: 'multiple-choice',
                question: 'Choose the correct preposition: "I\'m going ___ vacation next month."',
                options: ['in', 'on', 'at', 'to'],
                correct: 'on'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "We ___ (visit) the museum tomorrow."',
                answer: 'are going to visit',
                hint: 'Use "going to" for planned future events'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: [
                  'I am going to travel to Paris next summer',
                  'I going to travel to Paris next summer',
                  'I will going to travel to Paris next summer',
                  'I am going travel to Paris next summer'
                ],
                correct: 'I am going to travel to Paris next summer'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ (pack) her suitcase tonight."',
                answer: 'is going to pack',
                hint: 'Use "going to" for planned future actions'
              },
              {
                type: 'multiple-choice',
                question: 'Choose the correct form: "___ you ___ to the airport tomorrow?"',
                options: [
                  'Are / going to go',
                  'Will / going to go',
                  'Are / going go',
                  'Will / go'
                ],
                correct: 'Are / going to go'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "They ___ (stay) at a hotel in the city center."',
                answer: 'are going to stay',
                hint: 'Use "going to" for planned future events'
              },
              {
                type: 'multiple-choice',
                question: 'Which preposition is used with "depart"?',
                options: ['from', 'at', 'in', 'to'],
                correct: 'from'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "He ___ (check) in at 2 PM."',
                answer: 'is going to check',
                hint: 'Use "going to" for planned future actions'
              },
              {
                type: 'multiple-choice',
                question: 'Choose the correct form: "___ she ___ her passport?"',
                options: [
                  'Is / going to bring',
                  'Will / going to bring',
                  'Is / going bring',
                  'Will / bring'
                ],
                correct: 'Is / going to bring'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "We ___ (explore) the city tomorrow."',
                answer: 'are going to explore',
                hint: 'Use "going to" for planned future events'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: [
                  'They are going to take a tour of the city',
                  'They going to take a tour of the city',
                  'They will going to take a tour of the city',
                  'They are going take a tour of the city'
                ],
                correct: 'They are going to take a tour of the city'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ (visit) the famous landmarks."',
                answer: 'am going to visit',
                hint: 'Use "going to" for planned future actions'
              },
              {
                type: 'multiple-choice',
                question: 'Choose the correct preposition: "The flight leaves ___ 10 AM."',
                options: ['in', 'at', 'on', 'to'],
                correct: 'at'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ (take) photos of the sights."',
                answer: 'is going to take',
                hint: 'Use "going to" for planned future actions'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: [
                  'We are going to rent a car at the airport',
                  'We going to rent a car at the airport',
                  'We will going to rent a car at the airport',
                  'We are going rent a car at the airport'
                ],
                correct: 'We are going to rent a car at the airport'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "They ___ (try) local food."',
                answer: 'are going to try',
                hint: 'Use "going to" for planned future events'
              },
              {
                type: 'multiple-choice',
                question: 'Choose the correct form: "___ you ___ souvenirs?"',
                options: [
                  'Are / going to buy',
                  'Will / going to buy',
                  'Are / going buy',
                  'Will / buy'
                ],
                correct: 'Are / going to buy'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "He ___ (book) a guided tour."',
                answer: 'is going to book',
                hint: 'Use "going to" for planned future actions'
              },
              {
                type: 'multiple-choice',
                question: 'Which preposition is used with "land"?',
                options: ['in', 'at', 'on', 'to'],
                correct: 'at'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "We ___ (stay) for a week."',
                answer: 'are going to stay',
                hint: 'Use "going to" for planned future events'
              },
              {
                type: 'multiple-choice',
                question: 'Choose the correct form: "___ she ___ her luggage?"',
                options: [
                  'Is / going to check',
                  'Will / going to check',
                  'Is / going check',
                  'Will / check'
                ],
                correct: 'Is / going to check'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ (visit) the local markets."',
                answer: 'am going to visit',
                hint: 'Use "going to" for planned future actions'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: [
                  'They are going to take a boat tour',
                  'They going to take a boat tour',
                  'They will going to take a boat tour',
                  'They are going take a boat tour'
                ],
                correct: 'They are going to take a boat tour'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ (pack) her camera."',
                answer: 'is going to pack',
                hint: 'Use "going to" for planned future actions'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'I am going to book a hotel room',
                audio: '/audio/travel/travel-1.mp3',
                feedback: 'Focus on the "b" sound in "book"'
              },
              {
                type: 'pronunciation',
                text: 'We are going to visit the museum',
                audio: '/audio/travel/travel-2.mp3',
                feedback: 'Focus on the "v" sound in "visit"'
              },
              {
                type: 'pronunciation',
                text: 'She is going to pack her suitcase',
                audio: '/audio/travel/travel-3.mp3',
                feedback: 'Focus on the "p" sound in "pack"'
              },
              {
                type: 'pronunciation',
                text: 'They are going to stay at a hotel',
                audio: '/audio/travel/travel-4.mp3',
                feedback: 'Focus on the "st" sound in "stay"'
              },
              {
                type: 'pronunciation',
                text: 'He is going to check in at the airport',
                audio: '/audio/travel/travel-5.mp3',
                feedback: 'Focus on the "ch" sound in "check"'
              },
              {
                type: 'pronunciation',
                text: 'I am going to explore the city',
                audio: '/audio/travel/travel-6.mp3',
                feedback: 'Focus on the "x" sound in "explore"'
              },
              {
                type: 'pronunciation',
                text: 'We are going to take a tour',
                audio: '/audio/travel/travel-7.mp3',
                feedback: 'Focus on the "t" sound in "take"'
              },
              {
                type: 'pronunciation',
                text: 'She is going to visit landmarks',
                audio: '/audio/travel/travel-8.mp3',
                feedback: 'Focus on the "l" sound in "landmarks"'
              },
              {
                type: 'pronunciation',
                text: 'They are going to rent a car',
                audio: '/audio/travel/travel-9.mp3',
                feedback: 'Focus on the "r" sound in "rent"'
              },
              {
                type: 'pronunciation',
                text: 'He is going to try local food',
                audio: '/audio/travel/travel-10.mp3',
                feedback: 'Focus on the "tr" sound in "try"'
              },
              {
                type: 'pronunciation',
                text: 'I am going to buy souvenirs',
                audio: '/audio/travel/travel-11.mp3',
                feedback: 'Focus on the "b" sound in "buy"'
              },
              {
                type: 'pronunciation',
                text: 'We are going to book a tour',
                audio: '/audio/travel/travel-12.mp3',
                feedback: 'Focus on the "b" sound in "book"'
              },
              {
                type: 'pronunciation',
                text: 'She is going to stay for a week',
                audio: '/audio/travel/travel-13.mp3',
                feedback: 'Focus on the "st" sound in "stay"'
              },
              {
                type: 'pronunciation',
                text: 'They are going to check luggage',
                audio: '/audio/travel/travel-14.mp3',
                feedback: 'Focus on the "ch" sound in "check"'
              },
              {
                type: 'pronunciation',
                text: 'He is going to visit markets',
                audio: '/audio/travel/travel-15.mp3',
                feedback: 'Focus on the "m" sound in "markets"'
              },
              {
                type: 'pronunciation',
                text: 'I am going to take photos',
                audio: '/audio/travel/travel-16.mp3',
                feedback: 'Focus on the "ph" sound in "photos"'
              },
              {
                type: 'pronunciation',
                text: 'We are going to pack bags',
                audio: '/audio/travel/travel-17.mp3',
                feedback: 'Focus on the "p" sound in "pack"'
              },
              {
                type: 'pronunciation',
                text: 'She is going to arrive early',
                audio: '/audio/travel/travel-18.mp3',
                feedback: 'Focus on the "r" sound in "arrive"'
              },
              {
                type: 'pronunciation',
                text: 'They are going to depart soon',
                audio: '/audio/travel/travel-19.mp3',
                feedback: 'Focus on the "d" sound in "depart"'
              },
              {
                type: 'pronunciation',
                text: 'He is going to land safely',
                audio: '/audio/travel/travel-20.mp3',
                feedback: 'Focus on the "l" sound in "land"'
              },
              {
                type: 'pronunciation',
                text: 'I am going to travel abroad',
                audio: '/audio/travel/travel-21.mp3',
                feedback: 'Focus on the "tr" sound in "travel"'
              },
              {
                type: 'pronunciation',
                text: 'We are going to explore places',
                audio: '/audio/travel/travel-22.mp3',
                feedback: 'Focus on the "pl" sound in "places"'
              },
              {
                type: 'pronunciation',
                text: 'She is going to visit sights',
                audio: '/audio/travel/travel-23.mp3',
                feedback: 'Focus on the "s" sound in "sights"'
              },
              {
                type: 'pronunciation',
                text: 'They are going to take pictures',
                audio: '/audio/travel/travel-24.mp3',
                feedback: 'Focus on the "p" sound in "pictures"'
              },
              {
                type: 'pronunciation',
                text: 'He is going to book tickets',
                audio: '/audio/travel/travel-25.mp3',
                feedback: 'Focus on the "t" sound in "tickets"'
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              {
                type: 'sentence-building',
                words: ['going', 'am', 'to', 'book', 'I', 'hotel', 'room', 'a'],
                correct: 'I am going to book a hotel room.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'visit', 'we', 'museum', 'the'],
                correct: 'We are going to visit the museum.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'pack', 'she', 'suitcase', 'her'],
                correct: 'She is going to pack her suitcase.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'stay', 'they', 'hotel', 'at', 'a'],
                correct: 'They are going to stay at a hotel.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'check', 'he', 'airport', 'at', 'the', 'in'],
                correct: 'He is going to check in at the airport.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'am', 'to', 'explore', 'I', 'city', 'the'],
                correct: 'I am going to explore the city.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'take', 'we', 'tour', 'a'],
                correct: 'We are going to take a tour.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'visit', 'she', 'landmarks', 'the'],
                correct: 'She is going to visit the landmarks.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'rent', 'they', 'car', 'a'],
                correct: 'They are going to rent a car.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'try', 'he', 'food', 'local'],
                correct: 'He is going to try local food.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'am', 'to', 'buy', 'I', 'souvenirs'],
                correct: 'I am going to buy souvenirs.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'book', 'we', 'tour', 'a'],
                correct: 'We are going to book a tour.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'stay', 'she', 'week', 'for', 'a'],
                correct: 'She is going to stay for a week.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'check', 'they', 'luggage', 'their'],
                correct: 'They are going to check their luggage.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'visit', 'he', 'markets', 'the'],
                correct: 'He is going to visit the markets.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'am', 'to', 'take', 'I', 'photos'],
                correct: 'I am going to take photos.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'pack', 'we', 'bags', 'our'],
                correct: 'We are going to pack our bags.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'arrive', 'she', 'early'],
                correct: 'She is going to arrive early.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'depart', 'they', 'soon'],
                correct: 'They are going to depart soon.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'land', 'he', 'safely'],
                correct: 'He is going to land safely.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'am', 'to', 'travel', 'I', 'abroad'],
                correct: 'I am going to travel abroad.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'explore', 'we', 'places', 'new'],
                correct: 'We are going to explore new places.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'visit', 'she', 'sights', 'the'],
                correct: 'She is going to visit the sights.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'take', 'they', 'pictures'],
                correct: 'They are going to take pictures.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'book', 'he', 'tickets'],
                correct: 'He is going to book tickets.'
              }
            ]
          }
        ]
      },
      {
        id: 'a2-4',
        title: 'Health and Fitness',
        description: 'Talk about health and exercise',
        icon: 'bx-heart',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: [
                  'I am going to exercise tomorrow',
                  'I going to exercise tomorrow',
                  'I will going to exercise tomorrow',
                  'I am going exercise tomorrow'
                ],
                correct: 'I am going to exercise tomorrow'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ (start) a new diet next week."',
                answer: 'is going to start',
                hint: 'Use "going to" for planned future actions'
              },
              {
                type: 'multiple-choice',
                question: 'Choose the correct form: "___ you ___ to the gym?"',
                options: [
                  'Are / going to go',
                  'Will / going to go',
                  'Are / going go',
                  'Will / go'
                ],
                correct: 'Are / going to go'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "They ___ (join) a sports club."',
                answer: 'are going to join',
                hint: 'Use "going to" for planned future events'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: [
                  'He is going to run a marathon',
                  'He going to run a marathon',
                  'He will going to run a marathon',
                  'He is going run a marathon'
                ],
                correct: 'He is going to run a marathon'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ (eat) more vegetables."',
                answer: 'am going to eat',
                hint: 'Use "going to" for planned future actions'
              },
              {
                type: 'multiple-choice',
                question: 'Choose the correct form: "___ she ___ yoga?"',
                options: [
                  'Is / going to try',
                  'Will / going to try',
                  'Is / going try',
                  'Will / try'
                ],
                correct: 'Is / going to try'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "We ___ (drink) more water."',
                answer: 'are going to drink',
                hint: 'Use "going to" for planned future events'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: [
                  'They are going to play tennis',
                  'They going to play tennis',
                  'They will going to play tennis',
                  'They are going play tennis'
                ],
                correct: 'They are going to play tennis'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "He ___ (sleep) more hours."',
                answer: 'is going to sleep',
                hint: 'Use "going to" for planned future actions'
              },
              {
                type: 'multiple-choice',
                question: 'Choose the correct form: "___ you ___ swimming?"',
                options: [
                  'Are / going to go',
                  'Will / going to go',
                  'Are / going go',
                  'Will / go'
                ],
                correct: 'Are / going to go'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ (walk) to work."',
                answer: 'is going to walk',
                hint: 'Use "going to" for planned future events'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: [
                  'I am going to lift weights',
                  'I going to lift weights',
                  'I will going to lift weights',
                  'I am going lift weights'
                ],
                correct: 'I am going to lift weights'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "They ___ (practice) meditation."',
                answer: 'are going to practice',
                hint: 'Use "going to" for planned future actions'
              },
              {
                type: 'multiple-choice',
                question: 'Choose the correct form: "___ he ___ cycling?"',
                options: [
                  'Is / going to start',
                  'Will / going to start',
                  'Is / going start',
                  'Will / start'
                ],
                correct: 'Is / going to start'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "We ___ (stretch) before exercise."',
                answer: 'are going to stretch',
                hint: 'Use "going to" for planned future events'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: [
                  'She is going to eat healthy',
                  'She going to eat healthy',
                  'She will going to eat healthy',
                  'She is going eat healthy'
                ],
                correct: 'She is going to eat healthy'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ (take) vitamins daily."',
                answer: 'am going to take',
                hint: 'Use "going to" for planned future actions'
              },
              {
                type: 'multiple-choice',
                question: 'Choose the correct form: "___ they ___ jogging?"',
                options: [
                  'Are / going to start',
                  'Will / going to start',
                  'Are / going start',
                  'Will / start'
                ],
                correct: 'Are / going to start'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "He ___ (rest) after training."',
                answer: 'is going to rest',
                hint: 'Use "going to" for planned future events'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: [
                  'We are going to stay active',
                  'We going to stay active',
                  'We will going to stay active',
                  'We are going stay active'
                ],
                correct: 'We are going to stay active'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "They ___ (follow) a diet plan."',
                answer: 'are going to follow',
                hint: 'Use "going to" for planned future actions'
              },
              {
                type: 'multiple-choice',
                question: 'Choose the correct form: "___ you ___ healthy?"',
                options: [
                  'Are / going to eat',
                  'Will / going to eat',
                  'Are / going eat',
                  'Will / eat'
                ],
                correct: 'Are / going to eat'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ (exercise) regularly."',
                answer: 'is going to exercise',
                hint: 'Use "going to" for planned future events'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: [
                  'I am going to stay fit',
                  'I going to stay fit',
                  'I will going to stay fit',
                  'I am going stay fit'
                ],
                correct: 'I am going to stay fit'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'I am going to exercise tomorrow',
                audio: '/audio/health-1.mp3',
                feedback: 'Focus on the "ex" sound in "exercise"'
              },
              {
                type: 'pronunciation',
                text: 'She is going to start a diet',
                audio: '/audio/health-2.mp3',
                feedback: 'Focus on the "st" sound in "start"'
              },
              {
                type: 'pronunciation',
                text: 'We are going to join a club',
                audio: '/audio/health-3.mp3',
                feedback: 'Focus on the "j" sound in "join"'
              },
              {
                type: 'pronunciation',
                text: 'He is going to run a marathon',
                audio: '/audio/health-4.mp3',
                feedback: 'Focus on the "r" sound in "run"'
              },
              {
                type: 'pronunciation',
                text: 'I am going to eat vegetables',
                audio: '/audio/health-5.mp3',
                feedback: 'Focus on the "v" sound in "vegetables"'
              },
              {
                type: 'pronunciation',
                text: 'She is going to try yoga',
                audio: '/audio/health-6.mp3',
                feedback: 'Focus on the "y" sound in "yoga"'
              },
              {
                type: 'pronunciation',
                text: 'We are going to drink water',
                audio: '/audio/health-7.mp3',
                feedback: 'Focus on the "dr" sound in "drink"'
              },
              {
                type: 'pronunciation',
                text: 'They are going to play tennis',
                audio: '/audio/health-8.mp3',
                feedback: 'Focus on the "t" sound in "tennis"'
              },
              {
                type: 'pronunciation',
                text: 'He is going to sleep more',
                audio: '/audio/health-9.mp3',
                feedback: 'Focus on the "sl" sound in "sleep"'
              },
              {
                type: 'pronunciation',
                text: 'I am going to go swimming',
                audio: '/audio/health-10.mp3',
                feedback: 'Focus on the "sw" sound in "swimming"'
              },
              {
                type: 'pronunciation',
                text: 'She is going to walk to work',
                audio: '/audio/health-11.mp3',
                feedback: 'Focus on the "w" sound in "walk"'
              },
              {
                type: 'pronunciation',
                text: 'We are going to lift weights',
                audio: '/audio/health-12.mp3',
                feedback: 'Focus on the "l" sound in "lift"'
              },
              {
                type: 'pronunciation',
                text: 'They are going to practice meditation',
                audio: '/audio/health-13.mp3',
                feedback: 'Focus on the "m" sound in "meditation"'
              },
              {
                type: 'pronunciation',
                text: 'He is going to start cycling',
                audio: '/audio/health-14.mp3',
                feedback: 'Focus on the "c" sound in "cycling"'
              },
              {
                type: 'pronunciation',
                text: 'I am going to stretch before exercise',
                audio: '/audio/health-15.mp3',
                feedback: 'Focus on the "str" sound in "stretch"'
              },
              {
                type: 'pronunciation',
                text: 'She is going to eat healthy',
                audio: '/audio/health-16.mp3',
                feedback: 'Focus on the "h" sound in "healthy"'
              },
              {
                type: 'pronunciation',
                text: 'We are going to take vitamins',
                audio: '/audio/health-17.mp3',
                feedback: 'Focus on the "v" sound in "vitamins"'
              },
              {
                type: 'pronunciation',
                text: 'They are going to start jogging',
                audio: '/audio/health-18.mp3',
                feedback: 'Focus on the "j" sound in "jogging"'
              },
              {
                type: 'pronunciation',
                text: 'He is going to rest after training',
                audio: '/audio/health-19.mp3',
                feedback: 'Focus on the "r" sound in "rest"'
              },
              {
                type: 'pronunciation',
                text: 'I am going to stay active',
                audio: '/audio/health-20.mp3',
                feedback: 'Focus on the "st" sound in "stay"'
              },
              {
                type: 'pronunciation',
                text: 'She is going to follow a diet',
                audio: '/audio/health-21.mp3',
                feedback: 'Focus on the "f" sound in "follow"'
              },
              {
                type: 'pronunciation',
                text: 'We are going to eat healthy food',
                audio: '/audio/health-22.mp3',
                feedback: 'Focus on the "h" sound in "healthy"'
              },
              {
                type: 'pronunciation',
                text: 'They are going to exercise regularly',
                audio: '/audio/health-23.mp3',
                feedback: 'Focus on the "r" sound in "regularly"'
              },
              {
                type: 'pronunciation',
                text: 'He is going to stay fit',
                audio: '/audio/health-24.mp3',
                feedback: 'Focus on the "f" sound in "fit"'
              },
              {
                type: 'pronunciation',
                text: 'I am going to be healthy',
                audio: '/audio/health-25.mp3',
                feedback: 'Focus on the "h" sound in "healthy"'
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pencil',
            description: 'Practice writing and sentence structure',
            exercises: [
              {
                type: 'sentence-building',
                words: ['going', 'am', 'to', 'exercise', 'I', 'tomorrow'],
                correct: 'I am going to exercise tomorrow.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'start', 'she', 'diet', 'a'],
                correct: 'She is going to start a diet.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'join', 'we', 'club', 'a'],
                correct: 'We are going to join a club.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'run', 'he', 'marathon', 'a'],
                correct: 'He is going to run a marathon.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'am', 'to', 'eat', 'I', 'vegetables'],
                correct: 'I am going to eat vegetables.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'try', 'she', 'yoga'],
                correct: 'She is going to try yoga.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'drink', 'we', 'water'],
                correct: 'We are going to drink water.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'play', 'they', 'tennis'],
                correct: 'They are going to play tennis.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'sleep', 'he', 'more'],
                correct: 'He is going to sleep more.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'am', 'to', 'go', 'I', 'swimming'],
                correct: 'I am going to go swimming.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'walk', 'she', 'work', 'to'],
                correct: 'She is going to walk to work.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'lift', 'we', 'weights'],
                correct: 'We are going to lift weights.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'practice', 'they', 'meditation'],
                correct: 'They are going to practice meditation.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'start', 'he', 'cycling'],
                correct: 'He is going to start cycling.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'am', 'to', 'stretch', 'I', 'exercise', 'before'],
                correct: 'I am going to stretch before exercise.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'eat', 'she', 'healthy'],
                correct: 'She is going to eat healthy.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'am', 'to', 'take', 'I', 'vitamins'],
                correct: 'I am going to take vitamins.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'start', 'they', 'jogging'],
                correct: 'They are going to start jogging.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'rest', 'he', 'training', 'after'],
                correct: 'He is going to rest after training.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'am', 'to', 'stay', 'I', 'active'],
                correct: 'I am going to stay active.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'follow', 'they', 'diet', 'a'],
                correct: 'They are going to follow a diet.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'eat', 'we', 'healthy', 'food'],
                correct: 'We are going to eat healthy food.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'are', 'to', 'exercise', 'they', 'regularly'],
                correct: 'They are going to exercise regularly.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'is', 'to', 'stay', 'he', 'fit'],
                correct: 'He is going to stay fit.'
              },
              {
                type: 'sentence-building',
                words: ['going', 'am', 'to', 'be', 'I', 'healthy'],
                correct: 'I am going to be healthy.'
              }
            ]
          }
        ]
      },
      {
        id: 'a2-5',
        title: 'Work and Jobs',
        description: 'Discuss work and careers',
        icon: 'bx-briefcase',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which tense is used for current job?',
                options: ['present simple', 'present continuous', 'past simple', 'future'],
                correct: 'present simple'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ (work) as a teacher."',
                answer: 'work',
                hint: 'Use present simple for regular jobs'
              },
              {
                type: 'multiple-choice',
                question: 'Which preposition is used with "work"?',
                options: ['in', 'at', 'on', 'for'],
                correct: 'at'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ (start) work at 9 AM."',
                answer: 'starts',
                hint: 'Use present simple for regular schedules'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: [
                  'I work at a hospital',
                  'I work in a hospital',
                  'I work on a hospital',
                  'I work for a hospital'
                ],
                correct: 'I work at a hospital'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "They ___ (have) a meeting every Monday."',
                answer: 'have',
                hint: 'Use present simple for regular events'
              },
              {
                type: 'multiple-choice',
                question: 'Which tense is used for temporary jobs?',
                options: ['present continuous', 'present simple', 'past simple', 'future'],
                correct: 'present continuous'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ (work) on a special project this month."',
                answer: 'am working',
                hint: 'Use present continuous for temporary situations'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to leave your job"?',
                options: ['quit', 'quite', 'quiet', 'quick'],
                correct: 'quit'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ (look) for a new job."',
                answer: 'is looking',
                hint: 'Use present continuous for current actions'
              },
              {
                type: 'multiple-choice',
                question: 'Which tense is used for past jobs?',
                options: ['past simple', 'present perfect', 'past continuous', 'present simple'],
                correct: 'past simple'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ (work) there for five years."',
                answer: 'worked',
                hint: 'Use past simple for completed periods'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to start a new job"?',
                options: ['begin', 'start', 'commence', 'initiate'],
                correct: 'start'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "He ___ (join) the company last year."',
                answer: 'joined',
                hint: 'Use past simple for specific past events'
              },
              {
                type: 'multiple-choice',
                question: 'Which tense is used for future jobs?',
                options: ['going to', 'will', 'present continuous', 'present simple'],
                correct: 'going to'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ (start) my new job next month."',
                answer: 'am going to start',
                hint: 'Use going to for planned future events'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to apply for a job"?',
                options: ['apply', 'applicate', 'application', 'applicant'],
                correct: 'apply'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ (apply) for several positions."',
                answer: 'has applied',
                hint: 'Use present perfect for recent actions'
              },
              {
                type: 'multiple-choice',
                question: 'Which tense is used for job experience?',
                options: ['present perfect', 'past simple', 'present continuous', 'past perfect'],
                correct: 'present perfect'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ (work) in this field for ten years."',
                answer: 'have worked',
                hint: 'Use present perfect for ongoing experience'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to get a promotion"?',
                options: ['promote', 'promotion', 'promoting', 'promoted'],
                correct: 'promote'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "He ___ (get) promoted last month."',
                answer: 'got',
                hint: 'Use past simple for specific past events'
              },
              {
                type: 'multiple-choice',
                question: 'Which tense is used for job interviews?',
                options: ['present perfect', 'past simple', 'present continuous', 'past perfect'],
                correct: 'present perfect'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ (have) three interviews this week."',
                answer: 'have had',
                hint: 'Use present perfect for recent events'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to retire"?',
                options: ['retire', 'retirement', 'retiring', 'retired'],
                correct: 'retire'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'I work as a teacher',
                audio: '/audio/work-jobs/work-1.mp3',
                feedback: 'Focus on the "w" sound in "work"'
              },
              {
                type: 'pronunciation',
                text: 'I start work at nine',
                audio: '/audio/work-jobs/work-2.mp3',
                feedback: 'Focus on the "st" sound in "start"'
              },
              {
                type: 'pronunciation',
                text: 'I have a meeting',
                audio: '/audio/work-jobs/work-3.mp3',
                feedback: 'Focus on the "m" sound in "meeting"'
              },
              {
                type: 'pronunciation',
                text: 'I work in an office',
                audio: '/audio/work-jobs/work-4.mp3',
                feedback: 'Focus on the "f" sound in "office"'
              },
              {
                type: 'pronunciation',
                text: 'I quit my job',
                audio: '/audio/work-jobs/work-5.mp3',
                feedback: 'Focus on the "q" sound in "quit"'
              },
              {
                type: 'pronunciation',
                text: 'I am looking for work',
                audio: '/audio/work-jobs/work-6.mp3',
                feedback: 'Focus on the "l" sound in "looking"'
              },
              {
                type: 'pronunciation',
                text: 'I have work experience',
                audio: '/audio/work-jobs/work-7.mp3',
                feedback: 'Focus on the "x" sound in "experience"'
              },
              {
                type: 'pronunciation',
                text: 'I got promoted',
                audio: '/audio/work-jobs/work-8.mp3',
                feedback: 'Focus on the "p" sound in "promoted"'
              },
              {
                type: 'pronunciation',
                text: 'I had an interview',
                audio: '/audio/work-jobs/work-9.mp3',
                feedback: 'Focus on the "i" sound in "interview"'
              },
              {
                type: 'pronunciation',
                text: 'I want to retire',
                audio: '/audio/work-jobs/work-10.mp3',
                feedback: 'Focus on the "r" sound in "retire"'
              },
              {
                type: 'pronunciation',
                text: 'I work from home',
                audio: '/audio/work-jobs/work-11.mp3',
                feedback: 'Focus on the "h" sound in "home"'
              },
              {
                type: 'pronunciation',
                text: 'I have a deadline',
                audio: '/audio/work-jobs/work-12.mp3',
                feedback: 'Focus on the "d" sound in "deadline"'
              },
              {
                type: 'pronunciation',
                text: 'I need a break',
                audio: '/audio/work-jobs/work-13.mp3',
                feedback: 'Focus on the "b" sound in "break"'
              },
              {
                type: 'pronunciation',
                text: 'I attend meetings',
                audio: '/audio/work-jobs/work-14.mp3',
                feedback: 'Focus on the "tt" sound in "attend"'
              },
              {
                type: 'pronunciation',
                text: 'I send emails',
                audio: '/audio/work-jobs/work-15.mp3',
                feedback: 'Focus on the "s" sound in "send"'
              },
              {
                type: 'pronunciation',
                text: 'I make phone calls',
                audio: '/audio/work-jobs/work-16.mp3',
                feedback: 'Focus on the "ph" sound in "phone"'
              },
              {
                type: 'pronunciation',
                text: 'I give presentations',
                audio: '/audio/work-jobs/work-17.mp3',
                feedback: 'Focus on the "pr" sound in "presentations"'
              },
              {
                type: 'pronunciation',
                text: 'I talk to clients',
                audio: '/audio/work-jobs/work-18.mp3',
                feedback: 'Focus on the "cl" sound in "clients"'
              },
              {
                type: 'pronunciation',
                text: 'I work in a team',
                audio: '/audio/work-jobs/work-19.mp3',
                feedback: 'Focus on the "t" sound in "team"'
              },
              {
                type: 'pronunciation',
                text: 'I need a vacation',
                audio: '/audio/work-jobs/work-20.mp3',
                feedback: 'Focus on the "v" sound in "vacation"'
              },
              {
                type: 'pronunciation',
                text: 'I have a new job',
                audio: '/audio/work-jobs/work-21.mp3',
                feedback: 'Focus on the "j" sound in "job"'
              },
              {
                type: 'pronunciation',
                text: 'I write reports',
                audio: '/audio/work-jobs/work-22.mp3',
                feedback: 'Focus on the "wr" sound in "write"'
              },
              {
                type: 'pronunciation',
                text: 'I work with customers',
                audio: '/audio/work-jobs/work-23.mp3',
                feedback: 'Focus on the "c" sound in "customers"'
              },
              {
                type: 'pronunciation',
                text: 'I finish at five',
                audio: '/audio/work-jobs/work-24.mp3',
                feedback: 'Focus on the "f" sound in "finish"'
              },
              {
                type: 'pronunciation',
                text: 'I earn a salary',
                audio: '/audio/work-jobs/work-25.mp3',
                feedback: 'Focus on the "s" sound in "salary"'
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              {
                type: 'sentence-building',
                words: ['as', 'I', 'work', 'a', 'doctor'],
                correct: 'I work as a doctor'
              },
              {
                type: 'sentence-building',
                words: ['at', 'start', 'I', '9', 'AM'],
                correct: 'I start at 9 AM'
              },
              {
                type: 'sentence-building',
                words: ['have', 'I', 'meeting', 'a', 'today'],
                correct: 'I have a meeting today'
              },
              {
                type: 'sentence-building',
                words: ['in', 'work', 'I', 'office', 'an'],
                correct: 'I work in an office'
              },
              {
                type: 'sentence-building',
                words: ['my', 'quit', 'I', 'job', 'last', 'month'],
                correct: 'I quit my job last month'
              },
              {
                type: 'sentence-building',
                words: ['for', 'looking', 'I', 'am', 'work'],
                correct: 'I am looking for work'
              },
              {
                type: 'sentence-building',
                words: ['experience', 'have', 'I', 'years', 'five', 'of'],
                correct: 'I have five years of experience'
              },
              {
                type: 'sentence-building',
                words: ['promoted', 'got', 'I', 'last', 'week'],
                correct: 'I got promoted last week'
              },
              {
                type: 'sentence-building',
                words: ['interview', 'had', 'I', 'an', 'yesterday'],
                correct: 'I had an interview yesterday'
              },
              {
                type: 'sentence-building',
                words: ['retire', 'to', 'want', 'I', 'early'],
                correct: 'I want to retire early'
              },
              {
                type: 'sentence-building',
                words: ['home', 'from', 'work', 'I'],
                correct: 'I work from home'
              },
              {
                type: 'sentence-building',
                words: ['deadline', 'have', 'I', 'a', 'tomorrow'],
                correct: 'I have a deadline tomorrow'
              },
              {
                type: 'sentence-building',
                words: ['break', 'need', 'I', 'a'],
                correct: 'I need a break'
              },
              {
                type: 'sentence-building',
                words: ['salary', 'good', 'I', 'a', 'have'],
                correct: 'I have a good salary'
              },
              {
                type: 'sentence-building',
                words: ['colleagues', 'nice', 'my', 'are'],
                correct: 'My colleagues are nice'
              },
              {
                type: 'sentence-building',
                words: ['boss', 'my', 'is', 'understanding'],
                correct: 'My boss is understanding'
              },
              {
                type: 'sentence-building',
                words: ['workload', 'heavy', 'my', 'is'],
                correct: 'My workload is heavy'
              },
              {
                type: 'sentence-building',
                words: ['career', 'my', 'enjoy', 'I'],
                correct: 'I enjoy my career'
              },
              {
                type: 'sentence-building',
                words: ['skills', 'improving', 'am', 'my', 'I'],
                correct: 'I am improving my skills'
              },
              {
                type: 'sentence-building',
                words: ['responsibilities', 'many', 'have', 'I'],
                correct: 'I have many responsibilities'
              },
              {
                type: 'sentence-building',
                words: ['schedule', 'flexible', 'my', 'is'],
                correct: 'My schedule is flexible'
              },
              {
                type: 'sentence-building',
                words: ['benefits', 'good', 'company', 'offers', 'my'],
                correct: 'My company offers good benefits'
              },
              {
                type: 'sentence-building',
                words: ['future', 'bright', 'my', 'is', 'career'],
                correct: 'My career future is bright'
              },
              {
                type: 'sentence-building',
                words: ['opportunities', 'many', 'are', 'there'],
                correct: 'There are many opportunities'
              },
              {
                type: 'sentence-building',
                words: ['work', 'hard', 'I', 'to', 'succeed'],
                correct: 'I work hard to succeed'
              }
            ]
          }
        ]
      },
      {
        id: 'a2-6',
        title: 'Shopping and Money',
        description: 'Learn about shopping and financial matters',
        icon: 'bx-cart',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which question is correct for prices?',
                options: ['How much is it?', 'How many is it?', 'What price is it?', 'How is the price?'],
                correct: 'How much is it?'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "This shirt ___ (cost) twenty dollars."',
                answer: 'costs',
                hint: 'Use present simple for prices'
              },
              {
                type: 'multiple-choice',
                question: 'Which preposition is used with prices?',
                options: ['for', 'at', 'in', 'on'],
                correct: 'for'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ (buy) this jacket last week."',
                answer: 'bought',
                hint: 'Use past simple for past purchases'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: [
                  'I spent money on clothes',
                  'I spent money in clothes',
                  'I spent money at clothes',
                  'I spent money for clothes'
                ],
                correct: 'I spent money on clothes'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ (pay) with her credit card."',
                answer: 'paid',
                hint: 'Use past simple for past payments'
              },
              {
                type: 'multiple-choice',
                question: 'Which tense is used for shopping plans?',
                options: ['going to', 'will', 'present continuous', 'present simple'],
                correct: 'going to'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ (buy) a new phone next month."',
                answer: 'am going to buy',
                hint: 'Use going to for planned purchases'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to give money back"?',
                options: ['refund', 'return', 'refuse', 'receive'],
                correct: 'refund'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "Can I ___ (return) this item?"',
                answer: 'return',
                hint: 'Use base form after modal verbs'
              },
              {
                type: 'multiple-choice',
                question: 'Which tense is used for recent purchases?',
                options: ['present perfect', 'past simple', 'present continuous', 'past perfect'],
                correct: 'present perfect'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ (just/buy) a new laptop."',
                answer: 'have just bought',
                hint: 'Use present perfect for recent events'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to reduce the price"?',
                options: ['discount', 'discounts', 'discounting', 'discounted'],
                correct: 'discount'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "The store ___ (offer) a 20% discount."',
                answer: 'is offering',
                hint: 'Use present continuous for current offers'
              },
              {
                type: 'multiple-choice',
                question: 'Which tense is used for shopping habits?',
                options: ['present simple', 'present continuous', 'past simple', 'future'],
                correct: 'present simple'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ (usually/shop) on weekends."',
                answer: 'usually shop',
                hint: 'Use present simple for regular habits'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to save money"?',
                options: ['save', 'saving', 'saved', 'saves'],
                correct: 'save'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ (save) money for a new car."',
                answer: 'is saving',
                hint: 'Use present continuous for ongoing actions'
              },
              {
                type: 'multiple-choice',
                question: 'Which tense is used for shopping experience?',
                options: ['present perfect', 'past simple', 'present continuous', 'past perfect'],
                correct: 'present perfect'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ (never/buy) anything online."',
                answer: 'have never bought',
                hint: 'Use present perfect for experience'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to exchange money"?',
                options: ['exchange', 'exchanging', 'exchanged', 'exchanges'],
                correct: 'exchange'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ (exchange) dollars for euros."',
                answer: 'exchanged',
                hint: 'Use past simple for completed actions'
              },
              {
                type: 'multiple-choice',
                question: 'Which tense is used for shopping preferences?',
                options: ['present simple', 'present continuous', 'past simple', 'future'],
                correct: 'present simple'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ (prefer) shopping in person."',
                answer: 'prefer',
                hint: 'Use present simple for preferences'
              },
              {
                type: 'multiple-choice',
                question: 'Which word means "to compare prices"?',
                options: ['compare', 'comparing', 'compared', 'compares'],
                correct: 'compare'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'How much does this cost?',
                audio: '/audio/shopping.mp3',
                feedback: 'Focus on the "c" sound in "cost"'
              },
              {
                type: 'pronunciation',
                text: 'I bought this yesterday',
                audio: '/audio/bought.mp3',
                feedback: 'Focus on the "b" sound in "bought"'
              },
              {
                type: 'pronunciation',
                text: 'I spent too much money',
                audio: '/audio/spent.mp3',
                feedback: 'Focus on the "sp" sound in "spent"'
              },
              {
                type: 'pronunciation',
                text: 'I am going shopping',
                audio: '/audio/shopping.mp3',
                feedback: 'Focus on the "sh" sound in "shopping"'
              },
              {
                type: 'pronunciation',
                text: 'Can I get a refund?',
                audio: '/audio/refund.mp3',
                feedback: 'Focus on the "r" sound in "refund"'
              },
              {
                type: 'pronunciation',
                text: 'I just bought a new phone',
                audio: '/audio/bought.mp3',
                feedback: 'Focus on the "b" sound in "bought"'
              },
              {
                type: 'pronunciation',
                text: 'There\'s a discount today',
                audio: '/audio/discount.mp3',
                feedback: 'Focus on the "d" sound in "discount"'
              },
              {
                type: 'pronunciation',
                text: 'I usually shop online',
                audio: '/audio/shop.mp3',
                feedback: 'Focus on the "sh" sound in "shop"'
              },
              {
                type: 'pronunciation',
                text: 'I am saving money',
                audio: '/audio/saving.mp3',
                feedback: 'Focus on the "s" sound in "saving"'
              },
              {
                type: 'pronunciation',
                text: 'I have never bought online',
                audio: '/audio/bought.mp3',
                feedback: 'Focus on the "b" sound in "bought"'
              },
              {
                type: 'pronunciation',
                text: 'I exchanged my money',
                audio: '/audio/exchanged.mp3',
                feedback: 'Focus on the "x" sound in "exchanged"'
              },
              {
                type: 'pronunciation',
                text: 'I prefer shopping in person',
                audio: '/audio/prefer.mp3',
                feedback: 'Focus on the "p" sound in "prefer"'
              },
              {
                type: 'pronunciation',
                text: 'Let\'s compare prices',
                audio: '/audio/compare.mp3',
                feedback: 'Focus on the "c" sound in "compare"'
              },
              {
                type: 'pronunciation',
                text: 'This dress is on sale',
                audio: '/audio/sale.mp3',
                feedback: 'Focus on the "s" sound in "sale"'
              },
              {
                type: 'pronunciation',
                text: 'I need to check my wallet',
                audio: '/audio/wallet.mp3',
                feedback: 'Focus on the "w" sound in "wallet"'
              },
              {
                type: 'pronunciation',
                text: 'Can I pay by credit card?',
                audio: '/audio/credit.mp3',
                feedback: 'Focus on the "cr" sound in "credit"'
              },
              {
                type: 'pronunciation',
                text: 'Do you have smaller change?',
                audio: '/audio/change.mp3',
                feedback: 'Focus on the "ch" sound in "change"'
              },
              {
                type: 'pronunciation',
                text: 'This shirt costs thirty dollars',
                audio: '/audio/costs.mp3',
                feedback: 'Focus on the "th" sound in "thirty"'
              },
              {
                type: 'pronunciation',
                text: 'I\'m looking for a bargain',
                audio: '/audio/bargain.mp3',
                feedback: 'Focus on the "g" sound in "bargain"'
              },
              {
                type: 'pronunciation',
                text: 'The cashier gave me my receipt',
                audio: '/audio/cashier.mp3',
                feedback: 'Focus on the "sh" sound in "cashier"'
              },
              {
                type: 'pronunciation',
                text: 'I want to buy these shoes',
                audio: '/audio/buy.mp3',
                feedback: 'Focus on the "b" sound in "buy"'
              },
              {
                type: 'pronunciation',
                text: 'Is there a sale this weekend?',
                audio: '/audio/sale.mp3',
                feedback: 'Focus on the "s" sound in "sale"'
              },
              {
                type: 'pronunciation',
                text: 'Can I try it on first?',
                audio: '/audio/try.mp3',
                feedback: 'Focus on the "tr" sound in "try"'
              },
              {
                type: 'pronunciation',
                text: 'I need to save for vacation',
                audio: '/audio/save.mp3',
                feedback: 'Focus on the "v" sound in "save"'
              },
              {
                type: 'pronunciation',
                text: 'The price is too expensive',
                audio: '/audio/expensive.mp3',
                feedback: 'Focus on the "ex" sound in "expensive"'
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              {
                type: 'sentence-building',
                words: ['costs', 'this', 'ten', 'dollars'],
                correct: 'This costs ten dollars.'
              },
              {
                type: 'sentence-building',
                words: ['bought', 'I', 'shirt', 'a', 'new'],
                correct: 'I bought a new shirt.'
              },
              {
                type: 'sentence-building',
                words: ['spent', 'too', 'money', 'much', 'I'],
                correct: 'I spent too much money.'
              },
              {
                type: 'sentence-building',
                words: ['shopping', 'going', 'am', 'I'],
                correct: 'I am going shopping.'
              },
              {
                type: 'sentence-building',
                words: ['refund', 'get', 'can', 'I', 'a'],
                correct: 'Can I get a refund?'
              },
              {
                type: 'sentence-building',
                words: ['bought', 'just', 'phone', 'new', 'a', 'I'],
                correct: 'I just bought a new phone.'
              },
              {
                type: 'sentence-building',
                words: ['discount', 'today', 'is', 'there', 'a'],
                correct: 'There is a discount today.'
              },
              {
                type: 'sentence-building',
                words: ['online', 'usually', 'shop', 'I'],
                correct: 'I usually shop online.'
              },
              {
                type: 'sentence-building',
                words: ['money', 'am', 'saving', 'I'],
                correct: 'I am saving money.'
              },
              {
                type: 'sentence-building',
                words: ['online', 'never', 'bought', 'have', 'I'],
                correct: 'I have never bought online.'
              },
              {
                type: 'sentence-building',
                words: ['money', 'exchanged', 'my', 'I'],
                correct: 'I exchanged my money.'
              },
              {
                type: 'sentence-building',
                words: ['person', 'prefer', 'shopping', 'in', 'I'],
                correct: 'I prefer shopping in person.'
              },
              {
                type: 'sentence-building',
                words: ['prices', 'compare', 'let\'s'],
                correct: 'Let\'s compare prices.'
              },
              {
                type: 'sentence-building',
                words: ['expensive', 'too', 'is', 'this'],
                correct: 'This is too expensive.'
              },
              {
                type: 'sentence-building',
                words: ['cheap', 'good', 'a', 'deal', 'this', 'is'],
                correct: 'This is a good deal.'
              },
              {
                type: 'sentence-building',
                words: ['card', 'credit', 'with', 'pay', 'I'],
                correct: 'I pay with credit card.'
              },
              {
                type: 'sentence-building',
                words: ['cash', 'have', 'I', 'no'],
                correct: 'I have no cash.'
              },
              {
                type: 'sentence-building',
                words: ['receipt', 'need', 'I', 'a'],
                correct: 'I need a receipt.'
              },
              {
                type: 'sentence-building',
                words: ['sale', 'on', 'is', 'this'],
                correct: 'This is on sale.'
              },
              {
                type: 'sentence-building',
                words: ['price', 'the', 'is', 'right'],
                correct: 'The price is right.'
              },
              {
                type: 'sentence-building',
                words: ['expensive', 'too', 'is', 'it'],
                correct: 'It is too expensive.'
              },
              {
                type: 'sentence-building',
                words: ['afford', 'can\'t', 'it', 'I'],
                correct: 'I can\'t afford it.'
              },
              {
                type: 'sentence-building',
                words: ['budget', 'my', 'over', 'am', 'I'],
                correct: 'I am over my budget.'
              },
              {
                type: 'sentence-building',
                words: ['money', 'save', 'to', 'need', 'I'],
                correct: 'I need to save money.'
              },
              {
                type: 'sentence-building',
                words: ['the', 'price', 'is', 'too', 'high'],
                correct: 'The price is too high'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'b1',
    name: 'Intermediate (B1)',
    description: 'Enhance your skills',
    icon: 'bxs-conversation',
    topics: [
      {
        id: 'b1-1',
        title: 'Present Perfect',
        description: 'Master the present perfect tense',
        icon: 'bx-time',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which auxiliary verb is used with Present Perfect?',
                options: ['have', 'has', 'had', 'having'],
                correct: 'have'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ never ___ to Paris"',
                answer: 'have been',
                hint: 'Use present perfect for experiences'
              },
              {
                type: 'multiple-choice',
                question: 'What is the past participle of "write"?',
                options: ['wrote', 'written', 'writed', 'writing'],
                correct: 'written'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ just ___ her homework"',
                answer: 'has finished',
                hint: 'Use present perfect for recent actions'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: [
                  'I have never been to London',
                  'I have never go to London',
                  'I have never going to London',
                  'I have never went to London'
                ],
                correct: 'I have never been to London'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "They ___ already ___ the movie"',
                answer: 'have seen',
                hint: 'Use present perfect for completed actions'
              },
              {
                type: 'multiple-choice',
                question: 'What is the past participle of "eat"?',
                options: ['ate', 'eaten', 'eated', 'eating'],
                correct: 'eaten'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ just ___ my breakfast"',
                answer: 'have finished',
                hint: 'Use present perfect with "just" for very recent actions'
              },
              {
                type: 'multiple-choice',
                question: 'Which time expression is used with Present Perfect?',
                options: ['yesterday', 'last week', 'ever', 'in 2020'],
                correct: 'ever'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ never ___ sushi"',
                answer: 'has tried',
                hint: 'Use present perfect with "never" for experiences'
              },
              {
                type: 'multiple-choice',
                question: 'What is the past participle of "drink"?',
                options: ['drank', 'drunk', 'drinked', 'drinking'],
                correct: 'drunk'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "We ___ already ___ the project"',
                answer: 'have completed',
                hint: 'Use present perfect with "already" for completed actions'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: [
                  'I have lived here for five years',
                  'I have live here for five years',
                  'I have living here for five years',
                  'I have lived here since five years'
                ],
                correct: 'I have lived here for five years'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "He ___ just ___ from work"',
                answer: 'has come',
                hint: 'Use present perfect with "just" for very recent actions'
              },
              {
                type: 'multiple-choice',
                question: 'What is the past participle of "take"?',
                options: ['took', 'taken', 'taked', 'taking'],
                correct: 'taken'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ never ___ a car"',
                answer: 'have driven',
                hint: 'Use present perfect with "never" for experiences'
              },
              {
                type: 'multiple-choice',
                question: 'Which time expression is used with Present Perfect?',
                options: ['last month', 'since 2020', 'yesterday', 'in 2019'],
                correct: 'since 2020'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "They ___ already ___ the tickets"',
                answer: 'have bought',
                hint: 'Use present perfect with "already" for completed actions'
              },
              {
                type: 'multiple-choice',
                question: 'What is the past participle of "see"?',
                options: ['saw', 'seen', 'seed', 'seeing'],
                correct: 'seen'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ just ___ her keys"',
                answer: 'has lost',
                hint: 'Use present perfect with "just" for very recent actions'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: [
                  'I have been to Paris three times',
                  'I have go to Paris three times',
                  'I have going to Paris three times',
                  'I have went to Paris three times'
                ],
                correct: 'I have been to Paris three times'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "We ___ never ___ to Japan"',
                answer: 'have been',
                hint: 'Use present perfect with "never" for experiences'
              },
              {
                type: 'multiple-choice',
                question: 'What is the past participle of "give"?',
                options: ['gave', 'given', 'gived', 'giving'],
                correct: 'given'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "He ___ already ___ his homework"',
                answer: 'has done',
                hint: 'Use present perfect with "already" for completed actions'
              },
              {
                type: 'multiple-choice',
                question: 'Which time expression is used with Present Perfect?',
                options: ['last year', 'for two years', 'in 2018', 'yesterday'],
                correct: 'for two years'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'I have never been to London',
                audio: '/audio/present-perfect.mp3',
                feedback: 'Focus on the "h" sound in "have"'
              },
              {
                type: 'pronunciation',
                text: 'She has just finished her homework',
                audio: '/audio/just-finished.mp3',
                feedback: 'Focus on the "j" sound in "just"'
              },
              {
                type: 'pronunciation',
                text: 'I have lived here for five years',
                audio: '/audio/lived-here.mp3',
                feedback: 'Focus on the "l" sound in "lived"'
              },
              {
                type: 'pronunciation',
                text: 'They have already seen the movie',
                audio: '/audio/already-seen.mp3',
                feedback: 'Focus on the "a" sound in "already"'
              },
              {
                type: 'pronunciation',
                text: 'I have never tried sushi',
                audio: '/audio/never-tried.mp3',
                feedback: 'Focus on the "n" sound in "never"'
              },
              {
                type: 'pronunciation',
                text: 'She has just arrived from work',
                audio: '/audio/just-arrived.mp3',
                feedback: 'Focus on the "a" sound in "arrived"'
              },
              {
                type: 'pronunciation',
                text: 'We have been friends since childhood',
                audio: '/audio/been-friends.mp3',
                feedback: 'Focus on the "b" sound in "been"'
              },
              {
                type: 'pronunciation',
                text: 'He has already finished his project',
                audio: '/audio/already-finished.mp3',
                feedback: 'Focus on the "f" sound in "finished"'
              },
              {
                type: 'pronunciation',
                text: 'I have never driven a car',
                audio: '/audio/never-driven.mp3',
                feedback: 'Focus on the "d" sound in "driven"'
              },
              {
                type: 'pronunciation',
                text: 'They have just bought a new house',
                audio: '/audio/just-bought.mp3',
                feedback: 'Focus on the "b" sound in "bought"'
              },
              {
                type: 'pronunciation',
                text: 'I have lived here since 2010',
                audio: '/audio/lived-since.mp3',
                feedback: 'Focus on the "s" sound in "since"'
              },
              {
                type: 'pronunciation',
                text: 'She has never been to Paris',
                audio: '/audio/never-paris.mp3',
                feedback: 'Focus on the "p" sound in "Paris"'
              },
              {
                type: 'pronunciation',
                text: 'We have already met before',
                audio: '/audio/already-met.mp3',
                feedback: 'Focus on the "m" sound in "met"'
              },
              {
                type: 'pronunciation',
                text: 'I have worked here for three months',
                audio: '/audio/worked-here.mp3',
                feedback: 'Focus on the "w" sound in "worked"'
              },
              {
                type: 'pronunciation',
                text: 'Have you ever traveled to Japan?',
                audio: '/audio/ever-traveled.mp3',
                feedback: 'Focus on the "v" sound in "ever"'
              },
              {
                type: 'pronunciation',
                text: 'She has recently published a book',
                audio: '/audio/recently-published.mp3',
                feedback: 'Focus on the "p" sound in "published"'
              },
              {
                type: 'pronunciation',
                text: 'They have completed the project early',
                audio: '/audio/completed.mp3',
                feedback: 'Focus on the "c" sound in "completed"'
              },
              {
                type: 'pronunciation',
                text: 'I have known him since university',
                audio: '/audio/known.mp3',
                feedback: 'Focus on the "kn" sound in "known"'
              },
              {
                type: 'pronunciation',
                text: 'He has already eaten lunch',
                audio: '/audio/already-eaten.mp3',
                feedback: 'Focus on the "t" sound in "eaten"'
              },
              {
                type: 'pronunciation',
                text: 'We have visited three countries this year',
                audio: '/audio/visited.mp3',
                feedback: 'Focus on the "v" sound in "visited"'
              },
              {
                type: 'pronunciation',
                text: 'She has learned two languages',
                audio: '/audio/learned.mp3',
                feedback: 'Focus on the "l" sound in "learned"'
              },
              {
                type: 'pronunciation',
                text: 'Have you heard the latest news?',
                audio: '/audio/heard.mp3',
                feedback: 'Focus on the "h" sound in "heard"'
              },
              {
                type: 'pronunciation',
                text: 'I have just received your email',
                audio: '/audio/received.mp3',
                feedback: 'Focus on the "c" sound in "received"'
              },
              {
                type: 'pronunciation',
                text: 'They have achieved great results',
                audio: '/audio/achieved.mp3',
                feedback: 'Focus on the "ch" sound in "achieved"'
              },
              {
                type: 'pronunciation',
                text: 'I have always wanted to visit Italy',
                audio: '/audio/always-wanted.mp3',
                feedback: 'Focus on the "w" sound in "wanted"'
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              {
                type: 'sentence-building',
                words: ['have', 'I', 'never', 'seen', 'the', 'Eiffel Tower'],
                correct: 'I have never seen the Eiffel Tower.'
              },
              {
                type: 'sentence-building',
                words: ['has', 'she', 'just', 'finished', 'her', 'homework'],
                correct: 'She has just finished her homework.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ lived here ___ five years"',
                answer: 'have for',
                hint: 'Use present perfect with duration'
              },
              {
                type: 'sentence-building',
                words: ['have', 'they', 'already', 'seen', 'the', 'movie'],
                correct: 'They have already seen the movie.'
              },
              {
                type: 'sentence-building',
                words: ['has', 'he', 'never', 'tried', 'sushi'],
                correct: 'He has never tried sushi.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ just ___ from work"',
                answer: 'has arrived',
                hint: 'Use present perfect with "just"'
              },
              {
                type: 'sentence-building',
                words: ['have', 'we', 'been', 'friends', 'since', 'childhood'],
                correct: 'We have been friends since childhood.'
              },
              {
                type: 'sentence-building',
                words: ['has', 'he', 'already', 'finished', 'his', 'project'],
                correct: 'He has already finished his project.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ never ___ a car"',
                answer: 'have driven',
                hint: 'Use present perfect with "never"'
              },
              {
                type: 'sentence-building',
                words: ['have', 'they', 'just', 'bought', 'a', 'new', 'house'],
                correct: 'They have just bought a new house.'
              },
              {
                type: 'sentence-building',
                words: ['have', 'I', 'lived', 'here', 'since', '2010'],
                correct: 'I have lived here since 2010.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ never ___ to Paris"',
                answer: 'has been',
                hint: 'Use present perfect with "never"'
              },
              {
                type: 'sentence-building',
                words: ['has', 'she', 'just', 'started', 'her', 'new', 'job'],
                correct: 'She has just started her new job.'
              },
              {
                type: 'sentence-building',
                words: ['have', 'we', 'already', 'planned', 'our', 'trip'],
                correct: 'We have already planned our trip.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ lived here ___ 2010"',
                answer: 'have since',
                hint: 'Use present perfect with a specific date'
              },
              {
                type: 'sentence-building',
                words: ['has', 'he', 'never', 'been', 'to', 'Japan'],
                correct: 'He has never been to Japan.'
              },
              {
                type: 'sentence-building',
                words: ['have', 'they', 'just', 'moved', 'to', 'a', 'new', 'city'],
                correct: 'They have just moved to a new city.'
              },
              {
                type: 'sentence-building',
                words: ['has', 'she', 'never', 'seen', 'a', 'whale'],
                correct: 'She has never seen a whale.'
              },
              {
                type: 'sentence-building',
                words: ['have', 'we', 'just', 'met', 'our', 'new', 'teacher'],
                correct: 'We have just met our new teacher.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "They ___ already ___ dinner"',
                answer: 'have had',
                hint: 'Use present perfect with "already"'
              },
              {
                type: 'sentence-building',
                words: ['has', 'he', 'ever', 'climbed', 'a', 'mountain'],
                correct: 'Has he ever climbed a mountain?'
              },
              {
                type: 'sentence-building',
                words: ['have', 'I', 'just', 'received', 'a', 'message'],
                correct: 'I have just received a message.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "She ___ never ___ such a beautiful sunset"',
                answer: 'has seen',
                hint: 'Use present perfect with "never"'
              },
              {
                type: 'sentence-building',
                words: ['have', 'they', 'already', 'completed', 'the', 'assignment'],
                correct: 'They have already completed the assignment.'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "I ___ just ___ my passport"',
                answer: 'have lost',
                hint: 'Use present perfect with "just"'
              }
            ]
          }
        ]
      },
      {
        id: 'b1-2',
        title: 'Conditionals',
        description: 'Learn different types of conditionals',
        icon: 'bx-git-branch',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which conditional is used for real situations?',
                options: ['Zero', 'First', 'Second', 'Third'],
                correct: 'Zero'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "If it rains tomorrow, I ___ at home"',
                answer: 'will stay',
                hint: 'Use first conditional for possible future events'
              },
              {
                type: 'multiple-choice',
                question: 'Which conditional is used for hypothetical situations in the present?',
                options: ['Zero', 'First', 'Second', 'Third'],
                correct: 'Second'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "If I ___ a car, I would drive to work"',
                answer: 'had',
                hint: 'Use second conditional for hypothetical situations'
              },
              {
                type: 'multiple-choice',
                question: 'Which conditional is used for regrets about the past?',
                options: ['Zero', 'First', 'Second', 'Third'],
                correct: 'Third'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "If she had studied harder, she ___ the exam"',
                answer: 'would have passed',
                hint: 'Use third conditional for past regrets'
              },
              {
                type: 'multiple-choice',
                question: 'Which conditional is used for general truths?',
                options: ['Zero', 'First', 'Second', 'Third'],
                correct: 'Zero'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "If you heat ice, it ___"',
                answer: 'melts',
                hint: 'Use zero conditional for general truths'
              },
              {
                type: 'multiple-choice',
                question: 'Which conditional is used for possible future outcomes?',
                options: ['Zero', 'First', 'Second', 'Third'],
                correct: 'First'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "If we ___ now, we will catch the bus"',
                answer: 'leave',
                hint: 'Use first conditional for future possibilities'
              },
              {
                type: 'multiple-choice',
                question: 'Which conditional is used with "would have"?',
                options: ['Zero', 'First', 'Second', 'Third'],
                correct: 'Third'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "If I had woken up earlier, I ___ the train"',
                answer: 'would have caught',
                hint: 'Use third conditional for past situations'
              },
              {
                type: 'multiple-choice',
                question: 'Which conditional is used for unlikely future situations?',
                options: ['Zero', 'First', 'Second', 'Third'],
                correct: 'Second'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "If I ___ rich, I would travel the world"',
                answer: 'were',
                hint: 'Use second conditional for hypothetical situations'
              },
              {
                type: 'multiple-choice',
                question: 'Which conditional is used for scientific facts?',
                options: ['Zero', 'First', 'Second', 'Third'],
                correct: 'Zero'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "If you mix red and blue, you ___ purple"',
                answer: 'get',
                hint: 'Use zero conditional for facts'
              },
              {
                type: 'multiple-choice',
                question: 'Which conditional structure is correct?',
                options: ['If + past simple, would + base verb', 'If + present simple, will + base verb', 'If + past perfect, would have + past participle', 'All of the above'],
                correct: 'All of the above'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "If you study hard, you ___ the test"',
                answer: 'will pass',
                hint: 'Use first conditional for possible future events'
              },
              {
                type: 'multiple-choice',
                question: 'Which conditional uses "If + past perfect"?',
                options: ['Zero', 'First', 'Second', 'Third'],
                correct: 'Third'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "If she ___ the invitation, she would have come"',
                answer: 'had received',
                hint: 'Use third conditional for past regrets'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "If we ___ enough money, we would buy a house"',
                answer: 'had',
                hint: 'Use second conditional for hypothetical situations'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "If he ___ the lottery, he will buy a car"',
                answer: 'wins',
                hint: 'Use first conditional for future possibilities'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "If you touch fire, it ___ you"',
                answer: 'burns',
                hint: 'Use zero conditional for facts'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "If I ___ a dog, I would name it Max"',
                answer: 'had',
                hint: 'Use second conditional for imaginary situations'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "If she ___ more time, she would learn French"',
                answer: 'had',
                hint: 'Use second conditional for hypothetical situations'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'If I were rich, I would travel the world',
                audio: '/audio/conditionals1.mp3',
                feedback: 'Focus on the "w" sound in "were"'
              },
              {
                type: 'pronunciation',
                text: 'If it rains, the ground gets wet',
                audio: '/audio/conditionals2.mp3',
                feedback: 'Pay attention to the "r" sound in "rains"'
              },
              {
                type: 'pronunciation',
                text: 'If she had studied, she would have passed',
                audio: '/audio/conditionals3.mp3',
                feedback: 'Practice linking "would have" together smoothly'
              },
              {
                type: 'pronunciation',
                text: 'If we leave now, we will be on time',
                audio: '/audio/conditionals4.mp3',
                feedback: 'Emphasize "will" to express certainty'
              },
              {
                type: 'pronunciation',
                text: 'If you touch fire, it burns',
                audio: '/audio/conditionals5.mp3',
                feedback: 'Ensure clear enunciation of "burns"'
              },
              {
                type: 'pronunciation',
                text: 'If he had taken the train, he would have arrived earlier',
                audio: '/audio/conditionals6.mp3',
                feedback: 'Focus on the contraction "he’d" instead of "he had"'
              },
              {
                type: 'pronunciation',
                text: 'If I see him, I will say hello',
                audio: '/audio/conditionals7.mp3',
                feedback: 'Make sure "will" doesn’t sound like "’ll" too much'
              },
              {
                type: 'pronunciation',
                text: 'If she calls, tell her I’m busy',
                audio: '/audio/conditionals8.mp3',
                feedback: 'Practice natural intonation with "tell her"'
              },
              {
                type: 'pronunciation',
                text: 'If they had known, they would not have come',
                audio: '/audio/conditionals9.mp3',
                feedback: 'Focus on "would not have" contraction'
              },
              {
                type: 'pronunciation',
                text: 'If you had eaten more, you wouldn’t be hungry',
                audio: '/audio/conditionals10.mp3',
                feedback: 'Smoothly connect "had eaten"'
              },
              {
                type: 'pronunciation',
                text: 'If we had taken a taxi, we would have been there on time',
                audio: '/audio/conditionals11.mp3',
                feedback: 'Emphasize "would have been" for clarity'
              },
              {
                type: 'pronunciation',
                text: 'If I were you, I would take the job',
                audio: '/audio/conditionals12.mp3',
                feedback: 'Pay attention to the "r" sound in "were"'
              },
              {
                type: 'pronunciation',
                text: 'If he runs fast, he will win',
                audio: '/audio/conditionals13.mp3',
                feedback: 'Emphasize "will" for certainty'
              },
              {
                type: 'pronunciation',
                text: 'If she were taller, she could be a model',
                audio: '/audio/conditionals14.mp3',
                feedback: 'Ensure clear enunciation of "could be"'
              },
              {
                type: 'pronunciation',
                text: 'If I had known, I would have helped',
                audio: '/audio/conditionals15.mp3',
                feedback: 'Focus on the contraction "I’d" instead of "I had"'
              },
              {
                type: 'pronunciation',
                text: 'If you sleep early, you feel better in the morning',
                audio: '/audio/conditionals16.mp3',
                feedback: 'Ensure a natural pause between "sleep early" and "you feel"'
              },
              {
                type: 'pronunciation',
                text: 'If the weather is nice, we will go for a walk',
                audio: '/audio/conditionals17.mp3',
                feedback: 'Practice fluency in "we will go"'
              },
              {
                type: 'pronunciation',
                text: 'If he speaks slowly, I understand him better',
                audio: '/audio/conditionals18.mp3',
                feedback: 'Enunciate "understand" clearly'
              },
              {
                type: 'pronunciation',
                text: 'If you work hard, you will succeed',
                audio: '/audio/conditionals19.mp3',
                feedback: 'Make sure "will" is pronounced distinctly'
              },
              {
                type: 'pronunciation',
                text: 'If you had called, I would have answered',
                audio: '/audio/conditionals20.mp3',
                feedback: 'Practice the linking of "would have"'
              },
              {
                type: 'pronunciation',
                text: 'If I had time, I would help you',
                audio: '/audio/conditionals21.mp3',
                feedback: 'Ensure clear pronunciation of "would"'
              },
              {
                type: 'pronunciation',
                text: 'If she listens, she learns',
                audio: '/audio/conditionals22.mp3',
                feedback: 'Focus on the "s" sounds in "listens" and "learns"'
              },
              {
                type: 'pronunciation',
                text: 'If you wait a moment, I will help you',
                audio: '/audio/conditionals23.mp3',
                feedback: 'Ensure a natural pause between "wait a moment" and "I will"'
              },
              {
                type: 'pronunciation',
                text: 'If they arrive late, they will miss the show',
                audio: '/audio/conditionals24.mp3',
                feedback: 'Emphasize "will miss" to express certainty'
              },
              {
                type: 'pronunciation',
                text: 'If I had a car, I would drive to work',
                audio: '/audio/conditionals25.mp3',
                feedback: 'Focus on "would drive" for hypothetical situations'
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              {
                type: 'sentence-building',
                words: ['buy', 'would', 'a', 'house', 'I', 'if', 'had', 'money', 'I'],
                correct: 'I would buy a house if I had money.'
              },
              {
                type: 'sentence-building',
                words: ['she', 'pass', 'will', 'the', 'exam', 'if', 'hard', 'studies', 'she'],
                correct: 'If she studies hard, she will pass the exam.'
              },
              {
                type: 'sentence-building',
                words: ['have', 'helped', 'would', 'you', 'I', 'known', 'had', 'about', 'I', 'the', 'problem'],
                correct: 'I would have helped you if I had known about the problem.'
              },
              {
                type: 'sentence-building',
                words: ['we', 'go', 'will', 'to', 'the', 'beach', 'unless', 'it', 'rains'],
                correct: 'We will go to the beach unless it rains.'
              },
              {
                type: 'sentence-building',
                words: ['purple', 'get', 'you', 'if', 'mix', 'red', 'and', 'blue', 'you'],
                correct: 'If you mix red and blue, you get purple.'
              },
              {
                type: 'sentence-building',
                words: ['travel', 'would', 'more', 'you', 'time', 'had', 'if', 'you'],
                correct: 'You would travel more if you had time.'
              },
              {
                type: 'sentence-building',
                words: ['arrived', 'have', 'we', 'would', 'taken', 'the', 'train', 'had', 'we'],
                correct: 'We would have arrived if we had taken the train.'
              },
              {
                type: 'sentence-building',
                words: ['call', 'I', 'will', 'you', 'if', 'need', 'help', 'you'],
                correct: 'I will call you if you need help.'
              },
              {
                type: 'sentence-building',
                words: ['had', 'practiced', 'she', 'more', 'would', 'have', 'passed', 'she', 'if'],
                correct: 'She would have passed if she had practiced more.'
              },
              {
                type: 'sentence-building',
                words: ['water', 'boils', '100°C', 'if', 'you', 'heat', 'it', 'to'],
                correct: 'Water boils if you heat it to 100°C.'
              },
              {
                type: 'sentence-building',
                words: ['would', 'tell', 'you', 'me', 'if', 'knew', 'the', 'answer', 'you'],
                correct: 'You would tell me if you knew the answer.'
              },
              {
                type: 'sentence-building',
                words: ['had', 'not', 'missed', 'would', 'the', 'bus', 'we', 'if', 'we', 'left', 'earlier'],
                correct: 'We would not have missed the bus if we had left earlier.'
              },
              {
                type: 'sentence-building',
                words: ['unless', 'apologizes', 'she', 'talk', 'will', 'not', 'to', 'him', 'she'],
                correct: 'She will not talk to him unless she apologizes.'
              },
              {
                type: 'sentence-building',
                words: ['had', 'listened', 'I', 'would', 'be', 'in', 'trouble', 'not', 'if', 'I'],
                correct: 'I would not be in trouble if I had listened.'
              },
              {
                type: 'sentence-building',
                words: ['will', 'fail', 'you', 'the', 'test', 'unless', 'study', 'you'],
                correct: 'You will fail the test unless you study.'
              },
              {
                type: 'sentence-building',
                words: ['would', 'visit', 'Japan', 'I', 'if', 'could', 'afford', 'it', 'I'],
                correct: 'I would visit Japan if I could afford it.'
              },
              {
                type: 'sentence-building',
                words: ['had', 'not', 'rained', 'we', 'would', 'have', 'gone', 'picnic', 'if', 'it'],
                correct: 'We would have gone on a picnic if it had not rained.'
              },
              {
                type: 'sentence-building',
                words: ['if', 'you', 'see', 'him', 'tell', 'to', 'call', 'me', 'him'],
                correct: 'If you see him, tell him to call me.'
              },
              {
                type: 'sentence-building',
                words: ['would', 'have', 'been', 'happy', 'she', 'if', 'you', 'had', 'invited', 'her'],
                correct: 'She would have been happy if you had invited her.'
              },
              {
                type: 'sentence-building',
                words: ['unless', 'wear', 'a', 'coat', 'you', 'you', 'will', 'cold', 'be'],
                correct: 'You will be cold unless you wear a coat.'
              },
              {
                type: 'sentence-building',
                words: ['had', 'known', 'I', 'would', 'not', 'have', 'come', 'I', 'about', 'the', 'party'],
                correct: 'I would not have come if I had known about the party.'
              },
              {
                type: 'sentence-building',
                words: ['if', 'you', 'heat', 'ice', 'it', 'melts'],
                correct: 'If you heat ice, it melts.'
              },
              {
                type: 'sentence-building',
                words: ['would', 'have', 'finished', 'the', 'project', 'if', 'we', 'had', 'more', 'time', 'we'],
                correct: 'We would have finished the project if we had more time.'
              },
              {
                type: 'sentence-building',
                words: ['unless', 'hurry', 'you', 'up', 'will', 'miss', 'the', 'train', 'you'],
                correct: 'You will miss the train unless you hurry up.'
              },
              {
                type: 'sentence-building',
                words: ['if', 'I', 'were', 'you', 'I', 'would', 'accept', 'the', 'offer'],
                correct: 'If I were you, I would accept the offer.'
              }
            ]
          }
        ]
      },
      {
        id: 'b1-3',
        title: 'Business English',
        description: 'Professional communication skills',
        icon: 'bx-briefcase',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which word describes a formal meeting between an employer and potential employee?',
                options: ['appointment', 'interview', 'date', 'gathering'],
                correct: 'interview'
              },
              {
                type: 'fill-blank',
                question: 'Please ___ the contract before the end of the week.',
                answer: 'sign',
                hint: 'Put your signature on a document'
              },
              {
                type: 'multiple-choice',
                question: 'What do you call the money you earn from your job?',
                options: ['wage', 'salary', 'payment', 'all of these'],
                correct: 'all of these'
              },
              {
                type: 'fill-blank',
                question: 'The company wants to ___ its market share over the next year.',
                answer: 'increase',
                hint: 'Make something larger'
              },
              {
                type: 'multiple-choice',
                question: 'Which department handles employee recruitment?',
                options: ['Human Resources', 'Marketing', 'Finance', 'Operations'],
                correct: 'Human Resources'
              },
              {
                type: 'fill-blank',
                question: 'We need to ___ a meeting to discuss the new project.',
                answer: 'schedule',
                hint: 'Arrange a time for something to happen'
              },
              {
                type: 'multiple-choice',
                question: 'What is a "deadline"?',
                options: ['a new product', 'the final date for completion', 'a type of contract', 'an important client'],
                correct: 'the final date for completion'
              },
              {
                type: 'fill-blank',
                question: 'Could you please ___ me your report by tomorrow?',
                answer: 'send',
                hint: 'Cause something to go from one place to another'
              },
              {
                type: 'multiple-choice',
                question: 'Which of these is NOT typically a department in a company?',
                options: ['Marketing', 'Finance', 'Marketplace', 'Sales'],
                correct: 'Marketplace'
              },
              {
                type: 'fill-blank',
                question: 'We need to ___ our expenses if we want to make a profit this quarter.',
                answer: 'reduce',
                hint: 'Make something smaller in size, amount, or number'
              },
              {
                type: 'multiple-choice',
                question: 'What do you call a short informal meeting that is often held standing up?',
                options: ['conference', 'interview', 'briefing', 'huddle'],
                correct: 'huddle'
              },
              {
                type: 'fill-blank',
                question: 'Our company will ___ a new product next month.',
                answer: 'launch',
                hint: 'Introduce something new to the market'
              },
              {
                type: 'multiple-choice',
                question: 'What is the purpose of a business plan?',
                options: ['to record past transactions', 'to outline future business strategy', 'to advertise products', 'to hire employees'],
                correct: 'to outline future business strategy'
              },
              {
                type: 'fill-blank',
                question: 'The company has decided to ___ its operations to include the Asian market.',
                answer: 'expand',
                hint: 'Become larger or more extensive'
              },
              {
                type: 'multiple-choice',
                question: 'Which term refers to a company\'s main competitors and customers?',
                options: ['supply chain', 'stakeholders', 'marketplace', 'portfolio'],
                correct: 'marketplace'
              },
              {
                type: 'fill-blank',
                question: 'We need to ___ our customers about the changes to our service.',
                answer: 'inform',
                hint: 'Tell someone about facts or information'
              },
              {
                type: 'multiple-choice',
                question: 'What do we call a period of economic decline?',
                options: ['recession', 'inflation', 'investment', 'profit'],
                correct: 'recession'
              },
              {
                type: 'fill-blank',
                question: 'The CEO will ___ the annual report at tomorrow\'s meeting.',
                answer: 'present',
                hint: 'Show or give something formally'
              },
              {
                type: 'multiple-choice',
                question: 'Which of these is an example of a fixed expense for a business?',
                options: ['raw materials', 'staff bonuses', 'office rent', 'marketing campaigns'],
                correct: 'office rent'
              },
              {
                type: 'fill-blank',
                question: 'We need to ___ a solution to this problem as soon as possible.',
                answer: 'find',
                hint: 'Discover or obtain by search or effort'
              },
              {
                type: 'multiple-choice',
                question: 'What is the term for the money a business uses to operate and grow?',
                options: ['capital', 'revenue', 'profit', 'dividend'],
                correct: 'capital'
              },
              {
                type: 'fill-blank',
                question: 'Could you ___ an email to confirm our appointment?',
                answer: 'send',
                hint: 'Cause to go from one place to another'
              },
              {
                type: 'multiple-choice',
                question: 'Which of these is NOT typically included in a job advertisement?',
                options: ['salary range', 'required qualifications', 'company history', 'job responsibilities'],
                correct: 'company history'
              },
              {
                type: 'fill-blank',
                question: 'We need to ___ our marketing strategy to attract younger customers.',
                answer: 'adapt',
                hint: 'Change to make suitable for a new purpose'
              },
              {
                type: 'multiple-choice',
                question: 'What is another term for "firing" an employee?',
                options: ['promoting', 'recruiting', 'terminating', 'resigning'],
                correct: 'terminating'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'I have a meeting with the marketing team tomorrow',
                audio: '/audio/business1.mp3',
                feedback: 'Focus on pronouncing "marketing" clearly with the "t" sound'
              },
              {
                type: 'pronunciation',
                text: 'The quarterly report shows increased profits',
                audio: '/audio/business2.mp3',
                feedback: 'Pay attention to the "r" sound in "quarterly" and "report"'
              },
              {
                type: 'pronunciation',
                text: 'Could you please forward the email to the manager?',
                audio: '/audio/business3.mp3',
                feedback: 'Practice the "w" sound in "forward" and stress on "manager"'
              },
              {
                type: 'pronunciation',
                text: 'We need to schedule a conference call with our clients',
                audio: '/audio/business4.mp3',
                feedback: 'Focus on the "sch" sound in "schedule" and clear pronunciation of "conference"'
              },
              {
                type: 'pronunciation',
                text: 'Our company is launching a new product next month',
                audio: '/audio/business5.mp3',
                feedback: 'Pay attention to the "ch" sound in "launching" and linking "a new"'
              },
              {
                type: 'pronunciation',
                text: 'The investment opportunity looks promising',
                audio: '/audio/business6.mp3',
                feedback: 'Focus on pronouncing all syllables in "opportunity" clearly'
              },
              {
                type: 'pronunciation',
                text: 'I\'d like to discuss the budget for next year',
                audio: '/audio/business7.mp3',
                feedback: 'Practice the "dg" sound in "budget" and stress on "next"'
              },
              {
                type: 'pronunciation',
                text: 'The shareholders expect a higher return on investment',
                audio: '/audio/business8.mp3',
                feedback: 'Pay attention to the "sh" sound in "shareholders" and clear pronunciation of "investment"'
              },
              {
                type: 'pronunciation',
                text: 'We should finalize the contract before Friday',
                audio: '/audio/business9.mp3',
                feedback: 'Focus on the "z" sound in "finalize" and stress on "before"'
              },
              {
                type: 'pronunciation',
                text: 'Could you prepare a presentation for the board meeting?',
                audio: '/audio/business10.mp3',
                feedback: 'Practice pronouncing "presentation" with all syllables and "board" with a clear "r" sound'
              },
              {
                type: 'pronunciation',
                text: 'Our competitors have introduced a similar product',
                audio: '/audio/business11.mp3',
                feedback: 'Pay attention to pronouncing "competitors" with stress on "pe" and clear "t" sounds'
              },
              {
                type: 'pronunciation',
                text: 'We need to reduce our expenses this quarter',
                audio: '/audio/business12.mp3',
                feedback: 'Focus on the "d" sound in "reduce" and "s" in "expenses"'
              },
              {
                type: 'pronunciation',
                text: 'The CEO will announce the restructuring plan tomorrow',
                audio: '/audio/business13.mp3',
                feedback: 'Practice pronouncing each syllable in "restructuring" clearly'
              },
              {
                type: 'pronunciation',
                text: 'I\'ll send you the invoice by the end of the week',
                audio: '/audio/business14.mp3',
                feedback: 'Pay attention to the "v" sound in "invoice" and linking "end of"'
              },
              {
                type: 'pronunciation',
                text: 'We should negotiate better terms with our suppliers',
                audio: '/audio/business15.mp3',
                feedback: 'Focus on all syllables in "negotiate" and the "pl" sound in "suppliers"'
              },
              {
                type: 'pronunciation',
                text: 'The customer service department needs more staff',
                audio: '/audio/business16.mp3',
                feedback: 'Practice the "r" sound in "service" and final "t" in "department"'
              },
              {
                type: 'pronunciation',
                text: 'Could you participate in the webinar next Thursday?',
                audio: '/audio/business17.mp3',
                feedback: 'Pay attention to pronouncing all syllables in "participate" and "webinar"'
              },
              {
                type: 'pronunciation',
                text: 'We\'re planning to expand into the Asian market',
                audio: '/audio/business18.mp3',
                feedback: 'Focus on the "sp" sound in "expand" and clear pronunciation of "Asian"'
              },
              {
                type: 'pronunciation',
                text: 'The deadline for the project has been extended',
                audio: '/audio/business19.mp3',
                feedback: 'Practice the "d" sound in "deadline" and all syllables in "extended"'
              },
              {
                type: 'pronunciation',
                text: 'I need to update the sales forecast for next month',
                audio: '/audio/business20.mp3',
                feedback: 'Pay attention to the "p" sound in "update" and "f" in "forecast"'
              },
              {
                type: 'pronunciation',
                text: 'The revenue has increased by fifteen percent',
                audio: '/audio/business21.mp3',
                feedback: 'Focus on pronouncing "revenue" correctly and clear "n" in "fifteen"'
              },
              {
                type: 'pronunciation',
                text: 'We should improve our digital marketing strategy',
                audio: '/audio/business22.mp3',
                feedback: 'Practice the "pr" sound in "improve" and all syllables in "strategy"'
              },
              {
                type: 'pronunciation',
                text: 'The financial department will audit all expenses',
                audio: '/audio/business23.mp3',
                feedback: 'Pay attention to clear pronunciation of "financial" and "audit"'
              },
              {
                type: 'pronunciation',
                text: 'Could you organize a team-building workshop?',
                audio: '/audio/business24.mp3',
                feedback: 'Focus on the "g" sound in "organize" and hyphenated "team-building"'
              },
              {
                type: 'pronunciation',
                text: 'We need to reschedule the international conference call',
                audio: '/audio/business25.mp3',
                feedback: 'Practice pronouncing "reschedule" and "international" with all syllables clearly'
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              {
                type: 'sentence-building',
                words: ['meeting', 'could', 'reschedule', 'we', 'our', 'tomorrow', 'please', 'you'],
                correct: 'Could you please reschedule our meeting tomorrow?'
              },
              {
                type: 'sentence-building',
                words: ['report', 'send', 'the', 'could', 'me', 'you', 'quarterly'],
                correct: 'Could you send me the quarterly report?'
              },
              {
                type: 'sentence-building',
                words: ['have', 'we', 'to', 'reduce', 'costs', 'our', 'next', 'quarter'],
                correct: 'We have to reduce our costs next quarter.'
              },
              {
                type: 'sentence-building',
                words: ['will', 'if', 'profits', 'increase', 'we', 'expand', 'market', 'our'],
                correct: 'If we expand our market, profits will increase.'
              },
              {
                type: 'sentence-building',
                words: ['the', 'team', 'marketing', 'campaign', 'new', 'is', 'developing', 'a'],
                correct: 'The marketing team is developing a new campaign.'
              },
              {
                type: 'sentence-building',
                words: ['would', 'more', 'hire', 'staff', 'we', 'if', 'had', 'budget', 'we'],
                correct: 'We would hire more staff if we had budget.'
              },
              {
                type: 'sentence-building',
                words: ['you', 'could', 'attend', 'conference', 'next', 'the', 'month'],
                correct: 'Could you attend the conference next month?'
              },
              {
                type: 'sentence-building',
                words: ['sales', 'have', 'by', 'increased', 'ten', 'percent', 'our'],
                correct: 'Our sales have increased by ten percent.'
              },
              {
                type: 'sentence-building',
                words: ['will', 'discuss', 'we', 'the', 'budget', 'meeting', 'at', 'tomorrow\'s'],
                correct: 'We will discuss the budget at tomorrow\'s meeting.'
              },
              {
                type: 'sentence-building',
                words: ['should', 'with', 'negotiate', 'better', 'terms', 'we', 'suppliers', 'our'],
                correct: 'We should negotiate better terms with our suppliers.'
              },
              {
                type: 'sentence-building',
                words: ['has', 'the', 'CEO', 'announced', 'restructuring', 'a', 'plan'],
                correct: 'The CEO has announced a restructuring plan.'
              },
              {
                type: 'sentence-building',
                words: ['if', 'you', 'work', 'hard', 'promotion', 'will', 'get', 'you', 'a'],
                correct: 'If you work hard, you will get a promotion.'
              },
              {
                type: 'sentence-building',
                words: ['need', 'to', 'presentation', 'prepare', 'I', 'for', 'a', 'clients', 'our'],
                correct: 'I need to prepare a presentation for our clients.'
              },
              {
                type: 'sentence-building',
                words: ['could', 'forward', 'to', 'please', 'the', 'you', 'email', 'manager', 'the'],
                correct: 'Could you please forward the email to the manager?'
              },
              {
                type: 'sentence-building',
                words: ['are', 'we', 'launching', 'product', 'a', 'new', 'month', 'next'],
                correct: 'We are launching a new product next month.'
              },
              {
                type: 'sentence-building',
                words: ['would', 'if', 'more', 'had', 'time', 'I', 'the', 'finish', 'I', 'project'],
                correct: 'I would finish the project if I had more time.'
              },
              {
                type: 'sentence-building',
                words: ['team', 'is', 'working', 'deadline', 'the', 'on', 'meeting', 'the'],
                correct: 'The team is working on meeting the deadline.'
              },
              {
                type: 'sentence-building',
                words: ['have', 'scheduled', 'conference', 'we', 'a', 'call', 'tomorrow'],
                correct: 'We have scheduled a conference call tomorrow.'
              },
              {
                type: 'sentence-building',
                words: ['should', 'strategy', 'our', 'marketing', 'we', 'improve'],
                correct: 'We should improve our marketing strategy.'
              },
              {
                type: 'sentence-building',
                words: ['the', 'contract', 'before', 'sign', 'must', 'you', 'Friday'],
                correct: 'You must sign the contract before Friday.'
              },
              {
                type: 'sentence-building',
                words: ['if', 'sales', 'bonus', 'targets', 'will', 'we', 'reach', 'our', 'get', 'we', 'a'],
                correct: 'If we reach our sales targets, we will get a bonus.'
              },
              {
                type: 'sentence-building',
                words: ['are', 'expanding', 'international', 'we', 'into', 'markets'],
                correct: 'We are expanding into international markets.'
              },
              {
                type: 'sentence-building',
                words: ['would', 'more', 'customers', 'if', 'prices', 'we', 'have', 'reduced', 'our'],
                correct: 'We would have more customers if we reduced our prices.'
              },
              {
                type: 'sentence-building',
                words: ['has', 'department', 'HR', 'new', 'implemented', 'a', 'policy'],
                correct: 'HR has implemented a new policy.'
              },
              {
                type: 'sentence-building',
                words: ['could', 'please', 'send', 'the', 'invoice', 'you', 'by', 'email'],
                correct: 'Could you please send the invoice by email?'
              }
            ]
          }
        ]
      },
      {
        id: 'b1-4',
        title: 'Technology',
        description: 'Discuss technology and its impact',
        icon: 'bx-devices',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'I ___ my new laptop last week and I love it.',
                options: ['buy', 'buyed', 'bought', 'buying'],
                correct: 'bought'
              },
              {
                type: 'fill-blank',
                question: 'By 2030, smartphones ___ even more advanced features.',
                answer: 'will have',
                hint: 'Future perfect tense'
              },
              {
                type: 'multiple-choice',
                question: 'If the internet ___ working, try restarting your router.',
                options: ['isn\'t', 'don\'t', 'not', 'doesn\'t'],
                correct: 'isn\'t'
              },
              {
                type: 'fill-blank',
                question: 'She ___ her computer repaired yesterday.',
                answer: 'had',
                hint: 'Causative form (have something done)'
              },
              {
                type: 'multiple-choice',
                question: 'The laptop ___ I bought last month is already outdated.',
                options: ['who', 'what', 'which', 'whom'],
                correct: 'which'
              },
              {
                type: 'fill-blank',
                question: 'We ___ to install the new software before the meeting starts.',
                answer: 'need',
                hint: 'Express necessity'
              },
              {
                type: 'multiple-choice',
                question: 'This app is ___ useful than the previous version.',
                options: ['more', 'most', 'much', 'many'],
                correct: 'more'
              },
              {
                type: 'fill-blank',
                question: 'I ___ using this website since 2015.',
                answer: 'have been',
                hint: 'Present perfect continuous'
              },
              {
                type: 'multiple-choice',
                question: 'You ___ download the update now or wait until later.',
                options: ['could', 'should', 'would', 'must'],
                correct: 'could'
              },
              {
                type: 'fill-blank',
                question: 'The new operating system ___ released next month.',
                answer: 'will be',
                hint: 'Future passive'
              },
              {
                type: 'multiple-choice',
                question: 'How long ___ computers?',
                options: ['do you use', 'are you using', 'have you been using', 'did you use'],
                correct: 'have you been using'
              },
              {
                type: 'fill-blank',
                question: 'If I ___ more time, I would learn programming.',
                answer: 'had',
                hint: 'Second conditional'
              },
              {
                type: 'multiple-choice',
                question: 'My phone battery ___ very quickly these days.',
                options: ['drains', 'is draining', 'has drained', 'drain'],
                correct: 'is draining'
              },
              {
                type: 'fill-blank',
                question: 'By the time you arrive, I ___ the software installation.',
                answer: 'will have finished',
                hint: 'Future perfect tense'
              },
              {
                type: 'multiple-choice',
                question: 'The instructions ___ carefully before attempting to set up the device.',
                options: ['must read', 'must be read', 'must reading', 'must to read'],
                correct: 'must be read'
              },
              {
                type: 'fill-blank',
                question: 'After ___ the tutorial, I understood how to use the application.',
                answer: 'watching',
                hint: 'Gerund after preposition'
              },
              {
                type: 'multiple-choice',
                question: 'I wish I ___ more about computer programming.',
                options: ['know', 'knew', 'have known', 'known'],
                correct: 'knew'
              },
              {
                type: 'fill-blank',
                question: 'The company ___ developing a new app when the funding ran out.',
                answer: 'was',
                hint: 'Past continuous'
              },
              {
                type: 'multiple-choice',
                question: 'Neither my tablet ___ my smartphone is compatible with this software.',
                options: ['or', 'nor', 'and', 'but'],
                correct: 'nor'
              },
              {
                type: 'fill-blank',
                question: 'This is the website ___ I told you about.',
                answer: 'that',
                hint: 'Defining relative clause'
              },
              {
                type: 'multiple-choice',
                question: 'The internet ___ invented by Tim Berners-Lee.',
                options: ['is', 'was', 'has been', 'had been'],
                correct: 'was'
              },
              {
                type: 'fill-blank',
                question: 'We ___ connect to the Wi-Fi. The password is incorrect.',
                answer: 'can\'t',
                hint: 'Negative ability'
              },
              {
                type: 'multiple-choice',
                question: '___ the download finished yet?',
                options: ['Did', 'Has', 'Is', 'Does'],
                correct: 'Has'
              },
              {
                type: 'fill-blank',
                question: 'You ___ turn off your computer during the update process.',
                answer: 'shouldn\'t',
                hint: 'Negative advice'
              },
              {
                type: 'multiple-choice',
                question: 'Our data ___ by a secure server.',
                options: ['protect', 'protects', 'is protected', 'protecting'],
                correct: 'is protected'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'Technology is changing rapidly',
                audio: '/audio/tech1.mp3',
                feedback: 'Focus on the "ch" sound in "technology" and "changing"'
              },
              {
                type: 'pronunciation',
                text: 'I need to update my software',
                audio: '/audio/tech2.mp3',
                feedback: 'Pay attention to the "up" sound in "update" and clear "t" in "software"'
              },
              {
                type: 'pronunciation',
                text: 'The internet connection is very slow today',
                audio: '/audio/tech3.mp3',
                feedback: 'Focus on the "tion" sound in "connection" and linking "is very"'
              },
              {
                type: 'pronunciation',
                text: 'I forgot my password again',
                audio: '/audio/tech4.mp3',
                feedback: 'Practice the "or" sound in "forgot" and stress on "password"'
              },
              {
                type: 'pronunciation',
                text: 'Could you help me install this application?',
                audio: '/audio/tech5.mp3',
                feedback: 'Pay attention to all syllables in "application" and clear "st" in "install"'
              },
              {
                type: 'pronunciation',
                text: 'Artificial intelligence is becoming more advanced',
                audio: '/audio/tech6.mp3',
                feedback: 'Focus on pronouncing "artificial" clearly and stress on "intelligence"'
              },
              {
                type: 'pronunciation',
                text: 'Have you tried turning it off and on again?',
                audio: '/audio/tech7.mp3',
                feedback: 'Practice the rising intonation for questions and clear "ing" in "turning"'
              },
              {
                type: 'pronunciation',
                text: 'My smartphone battery drains too quickly',
                audio: '/audio/tech8.mp3',
                feedback: 'Focus on the "ai" sound in "drains" and clear "t" in "battery"'
              },
              {
                type: 'pronunciation',
                text: 'Virtual reality creates immersive experiences',
                audio: '/audio/tech9.mp3',
                feedback: 'Pay attention to the "v" sound in "virtual" and all syllables in "immersive"'
              },
              {
                type: 'pronunciation',
                text: 'We should back up our important files',
                audio: '/audio/tech10.mp3',
                feedback: 'Practice the phrasal verb "back up" with correct stress and clear "f" in "files"'
              },
              {
                type: 'pronunciation',
                text: 'The wireless network is down at the moment',
                audio: '/audio/tech11.mp3',
                feedback: 'Focus on the "wi" sound in "wireless" and "down" with proper intonation'
              },
              {
                type: 'pronunciation',
                text: 'I need to charge my laptop before the meeting',
                audio: '/audio/tech12.mp3',
                feedback: 'Pay attention to the "ch" sound in "charge" and clear "p" in "laptop"'
              },
              {
                type: 'pronunciation',
                text: 'Social media influences how people communicate',
                audio: '/audio/tech13.mp3',
                feedback: 'Practice the "ence" sound in "influences" and stress on "communicate"'
              },
              {
                type: 'pronunciation',
                text: 'Digital transformation is changing businesses worldwide',
                audio: '/audio/tech14.mp3',
                feedback: 'Focus on all syllables in "transformation" and "businesses"'
              },
              {
                type: 'pronunciation',
                text: 'How often do you upgrade your devices?',
                audio: '/audio/tech15.mp3',
                feedback: 'Pay attention to the question intonation and "up" sound in "upgrade"'
              },
              {
                type: 'pronunciation',
                text: 'Cloud computing offers flexible storage solutions',
                audio: '/audio/tech16.mp3',
                feedback: 'Focus on the "ou" sound in "cloud" and "computing" with correct stress'
              },
              {
                type: 'pronunciation',
                text: 'Have you downloaded the latest version?',
                audio: '/audio/tech17.mp3',
                feedback: 'Practice the "dow" sound in "downloaded" and clear "v" in "version"'
              },
              {
                type: 'pronunciation',
                text: 'Cybersecurity protection is increasingly important',
                audio: '/audio/tech18.mp3',
                feedback: 'Pay attention to all syllables in "cybersecurity" and "increasingly"'
              },
              {
                type: 'pronunciation',
                text: 'The touchscreen is not responding properly',
                audio: '/audio/tech19.mp3',
                feedback: 'Focus on the "ch" sound in "touchscreen" and "ing" in "responding"'
              },
              {
                type: 'pronunciation',
                text: 'Wearable technology is becoming more popular',
                audio: '/audio/tech20.mp3',
                feedback: 'Practice clear pronunciation of "wearable" and stress on "technology"'
              },
              {
                type: 'pronunciation',
                text: 'I prefer to use wireless headphones',
                audio: '/audio/tech21.mp3',
                feedback: 'Pay attention to the "p" sound in "prefer" and clear "h" in "headphones"'
              },
              {
                type: 'pronunciation',
                text: 'The algorithm recommends content based on your preferences',
                audio: '/audio/tech22.mp3',
                feedback: 'Focus on pronouncing "algorithm" and "preferences" with correct syllable stress'
              },
              {
                type: 'pronunciation',
                text: 'Most websites use cookies to track user behavior',
                audio: '/audio/tech23.mp3',
                feedback: 'Practice the "oo" sound in "cookies" and clear "tr" in "track"'
              },
              {
                type: 'pronunciation',
                text: 'Digital literacy is essential in today\'s world',
                audio: '/audio/tech24.mp3',
                feedback: 'Pay attention to all syllables in "digital literacy" and proper stress'
              },
              {
                type: 'pronunciation',
                text: 'Have you tried troubleshooting the connection issue?',
                audio: '/audio/tech25.mp3',
                feedback: 'Focus on the compound word "troubleshooting" with correct stress and clear "tion" in "connection"'
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              {
                type: 'sentence-building',
                words: ['use', 'I', 'my', 'phone', 'every', 'day'],
                correct: 'I use my phone every day.'
              },
              {
                type: 'sentence-building',
                words: ['download', 'you', 'the', 'did', 'new', 'app'],
                correct: 'Did you download the new app?'
              },
              {
                type: 'sentence-building',
                words: ['internet', 'is', 'not', 'working', 'the', 'properly'],
                correct: 'The internet is not working properly.'
              },
              {
                type: 'sentence-building',
                words: ['need', 'I', 'to', 'my', 'update', 'software'],
                correct: 'I need to update my software.'
              },
              {
                type: 'sentence-building',
                words: ['has', 'technology', 'changed', 'our', 'lives'],
                correct: 'Technology has changed our lives.'
              },
              {
                type: 'sentence-building',
                words: ['computer', 'my', 'is', 'running', 'slowly', 'very'],
                correct: 'My computer is running very slowly.'
              },
              {
                type: 'sentence-building',
                words: ['you', 'have', 'tried', 'turning', 'off', 'it', 'and', 'on'],
                correct: 'Have you tried turning it off and on?'
              },
              {
                type: 'sentence-building',
                words: ['password', 'forgot', 'I', 'my', 'again'],
                correct: 'I forgot my password again.'
              },
              {
                type: 'sentence-building',
                words: ['social', 'many', 'people', 'media', 'use', 'daily'],
                correct: 'Many people use social media daily.'
              },
              {
                type: 'sentence-building',
                words: ['battery', 'my', 'phone', 'needs', 'charging'],
                correct: 'My phone battery needs charging.'
              },
              {
                type: 'sentence-building',
                words: ['online', 'you', 'do', 'shop', 'often', 'how'],
                correct: 'How often do you shop online?'
              },
              {
                type: 'sentence-building',
                words: ['artificial', 'becoming', 'intelligence', 'is', 'more', 'advanced'],
                correct: 'Artificial intelligence is becoming more advanced.'
              },
              {
                type: 'sentence-building',
                words: ['help', 'can', 'you', 'me', 'install', 'this', 'app'],
                correct: 'Can you help me install this app?'
              },
              {
                type: 'sentence-building',
                words: ['prefer', 'I', 'to', 'use', 'wireless', 'headphones'],
                correct: 'I prefer to use wireless headphones.'
              },
              {
                type: 'sentence-building',
                words: ['are', 'smartphones', 'becoming', 'increasingly', 'powerful'],
                correct: 'Smartphones are becoming increasingly powerful.'
              },
              {
                type: 'sentence-building',
                words: ['connect', 'how', 'to', 'do', 'Wi-Fi', 'you', 'the'],
                correct: 'How do you connect to the Wi-Fi?'
              },
              {
                type: 'sentence-building',
                words: ['should', 'we', 'back', 'up', 'our', 'important', 'files'],
                correct: 'We should back up our important files.'
              },
              {
                type: 'sentence-building',
                words: ['laptop', 'new', 'bought', 'I', 'a', 'yesterday'],
                correct: 'I bought a new laptop yesterday.'
              },
              {
                type: 'sentence-building',
                words: ['changed', 'has', 'internet', 'the', 'how', 'we', 'communicate'],
                correct: 'How has the internet changed we communicate?'
              },
              {
                type: 'sentence-building',
                words: ['working', 'not', 'is', 'my', 'webcam'],
                correct: 'My webcam is not working.'
              },
              {
                type: 'sentence-building',
                words: ['spend', 'much', 'how', 'time', 'online', 'you', 'do'],
                correct: 'How much time do you spend online?'
              },
              {
                type: 'sentence-building',
                words: ['email', 'sent', 'I', 'you', 'an', 'yesterday', 'have'],
                correct: 'I have sent you an email yesterday.'
              },
              {
                type: 'sentence-building',
                words: ['many', 'people', 'technology', 'rely', 'on', 'daily'],
                correct: 'Many people rely on technology daily.'
              },
              {
                type: 'sentence-building',
                words: ['downloaded', 'have', 'latest', 'you', 'the', 'update'],
                correct: 'Have you downloaded the latest update?'
              },
              {
                type: 'sentence-building',
                words: ['learning', 'am', 'I', 'to', 'code', 'online'],
                correct: 'I am learning to code online.'
              }
            ]
          }
        ]
      },
      {
        id: 'b1-5',
        title: 'Environment',
        description: 'Talk about environmental issues',
        icon: 'bx-leaf',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which modal verb is used for environmental recommendations?',
                options: ['should', 'must', 'can', 'will'],
                correct: 'should'
              },
              {
                "type": "multiple-choice",
                "question": "Deforestation ___ a serious problem for the environment.",
                "options": ["is", "are", "were", "be"],
                "correct": "is"
              },
              {
                "type": "fill-blank",
                "question": "If we don’t reduce pollution, global temperatures ___ .",
                "answer": "will rise",
                "hint": "Future simple tense"
              },
              {
                "type": "multiple-choice",
                "question": "What is the main cause of global warming?",
                "options": ["Deforestation", "Plastic waste", "Carbon emissions", "Recycling"],
                "correct": "Carbon emissions"
              },
              {
                "type": "fill-blank",
                "question": "Solar energy ___ an important role in the future of renewable resources.",
                "answer": "will play",
                "hint": "Future simple tense"
              },
              {
                "type": "multiple-choice",
                "question": "Which of the following is a renewable energy source?",
                "options": ["Coal", "Oil", "Wind power", "Gas"],
                "correct": "Wind power"
              },
              {
                "type": "fill-blank",
                "question": "We should ___ less water to help the environment.",
                "answer": "use",
                "hint": "Base form of the verb"
              },
              {
                "type": "multiple-choice",
                "question": "Which action helps reduce plastic waste?",
                "options": ["Using single-use bags", "Recycling bottles", "Burning plastic", "Throwing it in the ocean"],
                "correct": "Recycling bottles"
              },
              {
                "type": "fill-blank",
                "question": "If we recycle more, we ___ less waste in landfills.",
                "answer": "will have",
                "hint": "Future simple tense"
              },
              {
                "type": "multiple-choice",
                "question": "Which gas is most responsible for the greenhouse effect?",
                "options": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
                "correct": "Carbon dioxide"
              },
              {
                "type": "fill-blank",
                "question": "Many companies ___ eco-friendly packaging to reduce waste.",
                "answer": "are using",
                "hint": "Present continuous"
              },
              {
                "type": "multiple-choice",
                "question": "Why is it important to plant trees?",
                "options": ["They produce oxygen", "They increase pollution", "They consume too much water", "They make the air hotter"],
                "correct": "They produce oxygen"
              },
              {
                "type": "fill-blank",
                "question": "If we continue polluting the oceans, marine life ___ .",
                "answer": "will suffer",
                "hint": "Future simple tense"
              },
              {
                "type": "multiple-choice",
                "question": "What can individuals do to protect the environment?",
                "options": ["Waste more water", "Reduce, reuse, recycle", "Cut down trees", "Drive everywhere"],
                "correct": "Reduce, reuse, recycle"
              },
              {
                "type": "fill-blank",
                "question": "Electric cars ___ less pollution than gasoline cars.",
                "answer": "produce",
                "hint": "Present simple tense"
              },
              {
                "type": "multiple-choice",
                "question": "Which of these actions helps conserve energy?",
                "options": ["Leaving lights on", "Using public transport", "Running the tap", "Throwing away food"],
                "correct": "Using public transport"
              },
              {
                "type": "fill-blank",
                "question": "By 2050, renewable energy ___ more common worldwide.",
                "answer": "will be",
                "hint": "Future simple tense"
              },
              {
                "type": "multiple-choice",
                "question": "What is one of the biggest causes of air pollution?",
                "options": ["Solar energy", "Fossil fuels", "Planting trees", "Drinking water"],
                "correct": "Fossil fuels"
              },
              {
                "type": "fill-blank",
                "question": "If everyone uses bicycles, air pollution ___ .",
                "answer": "will decrease",
                "hint": "Future simple tense"
              },
              {
                "type": "multiple-choice",
                "question": "Which of these is a way to save water?",
                "options": ["Taking long showers", "Turning off the tap while brushing teeth", "Watering plants all day", "Washing clothes every day"],
                "correct": "Turning off the tap while brushing teeth"
              },
              {
                "type": "fill-blank",
                "question": "Factories ___ too many harmful gases into the air.",
                "answer": "release",
                "hint": "Present simple tense"
              },
              {
                "type": "multiple-choice",
                "question": "Which of these materials is biodegradable?",
                "options": ["Plastic", "Glass", "Banana peel", "Aluminum"],
                "correct": "Banana peel"
              },
              {
                "type": "fill-blank",
                "question": "The Amazon rainforest ___ thousands of animal species.",
                "answer": "contains",
                "hint": "Present simple tense"
              },
              {
                "type": "multiple-choice",
                "question": "What is the best way to reduce carbon footprint?",
                "options": ["Drive everywhere", "Eat more meat", "Use renewable energy", "Leave lights on all night"],
                "correct": "Use renewable energy"
              },
              {
                "type": "fill-blank",
                "question": "If we protect wildlife, endangered species ___ .",
                "answer": "will survive",
                "hint": "Future simple tense"
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'We should protect the environment',
                audio: '/audio/environment.mp3',
                feedback: 'Focus on the "p" sound in "protect"'
              },
              {
                "type": "pronunciation",
                "text": "We need to reduce plastic waste.",
                "audio": "/audio/reduce_plastic.mp3",
                "feedback": "Pay attention to the 'r' sound in 'reduce'."
              },
              {
                "type": "pronunciation",
                "text": "Climate change is a global issue.",
                "audio": "/audio/climate_change.mp3",
                "feedback": "Emphasize the 'ch' sound in 'change'."
              },
              {
                "type": "pronunciation",
                "text": "Deforestation is harming our planet.",
                "audio": "/audio/deforestation.mp3",
                "feedback": "Focus on the stress in 'deforestation'."
              },
              {
                "type": "pronunciation",
                "text": "Recycling helps reduce pollution.",
                "audio": "/audio/recycling.mp3",
                "feedback": "Pronounce 'recycling' clearly, especially the 'cy' sound."
              },
              {
                "type": "pronunciation",
                "text": "Solar energy is a great alternative.",
                "audio": "/audio/solar_energy.mp3",
                "feedback": "Ensure you stress 'so' in 'solar'."
              },
              {
                "type": "pronunciation",
                "text": "We must conserve water resources.",
                "audio": "/audio/conserve_water.mp3",
                "feedback": "Pay attention to the 'v' sound in 'conserve'."
              },
              {
                "type": "pronunciation",
                "text": "Biodiversity is essential for ecosystems.",
                "audio": "/audio/biodiversity.mp3",
                "feedback": "Pronounce 'bio' as 'bye-oh' correctly."
              },
              {
                "type": "pronunciation",
                "text": "Air pollution affects our health.",
                "audio": "/audio/air_pollution.mp3",
                "feedback": "Ensure clarity in 'pollution', especially the 'sh' sound."
              },
              {
                "type": "pronunciation",
                "text": "Using renewable energy is important.",
                "audio": "/audio/renewable_energy.mp3",
                "feedback": "Focus on pronouncing 'renewable' correctly."
              },
              {
                "type": "pronunciation",
                "text": "Protecting nature is our responsibility.",
                "audio": "/audio/protecting_nature.mp3",
                "feedback": "Pronounce 'nature' as 'nay-chur'."
              },
              {
                "type": "pronunciation",
                "text": "Ocean pollution is a serious problem.",
                "audio": "/audio/ocean_pollution.mp3",
                "feedback": "Ensure the 'sh' sound in 'pollution' is clear."
              },
              {
                "type": "pronunciation",
                "text": "We should plant more trees.",
                "audio": "/audio/plant_trees.mp3",
                "feedback": "Pay attention to the 'pl' sound in 'plant'."
              },
              {
                "type": "pronunciation",
                "text": "Sustainable living is necessary for our future.",
                "audio": "/audio/sustainable_living.mp3",
                "feedback": "Pronounce 'sustainable' with clear syllables."
              },
              {
                "type": "pronunciation",
                "text": "Wildlife conservation is important.",
                "audio": "/audio/wildlife_conservation.mp3",
                "feedback": "Stress the 'con' in 'conservation'."
              },
              {
                "type": "pronunciation",
                "text": "The greenhouse effect is increasing.",
                "audio": "/audio/greenhouse_effect.mp3",
                "feedback": "Pronounce 'greenhouse' as two separate words."
              },
              {
                "type": "pronunciation",
                "text": "We should reduce our carbon footprint.",
                "audio": "/audio/carbon_footprint.mp3",
                "feedback": "Focus on 'carbon' and 'footprint'."
              },
              {
                "type": "pronunciation",
                "text": "Plastic pollution is harming marine life.",
                "audio": "/audio/plastic_pollution.mp3",
                "feedback": "Pronounce 'plastic' and 'pollution' clearly."
              },
              {
                "type": "pronunciation",
                "text": "Wind energy is a clean power source.",
                "audio": "/audio/wind_energy.mp3",
                "feedback": "Emphasize the 'd' sound in 'wind'."
              },
              {
                "type": "pronunciation",
                "text": "Overfishing is a global issue.",
                "audio": "/audio/overfishing.mp3",
                "feedback": "Pronounce 'over' and 'fishing' distinctly."
              },
              {
                "type": "pronunciation",
                "text": "We must switch to sustainable practices.",
                "audio": "/audio/sustainable_practices.mp3",
                "feedback": "Stress 'sus' in 'sustainable'."
              },
              {
                "type": "pronunciation",
                "text": "The ozone layer protects us from UV rays.",
                "audio": "/audio/ozone_layer.mp3",
                "feedback": "Say 'ozone' as 'oh-zone'."
              },
              {
                "type": "pronunciation",
                "text": "Composting helps reduce food waste.",
                "audio": "/audio/composting.mp3",
                "feedback": "Pronounce 'composting' with a clear 'o' sound."
              },
              {
                "type": "pronunciation",
                "text": "We should clean up our beaches regularly.",
                "audio": "/audio/clean_beaches.mp3",
                "feedback": "Emphasize 'clean' and 'beaches'."
              },
              {
                "type": "pronunciation",
                "text": "Eco-friendly products help the environment.",
                "audio": "/audio/eco_friendly.mp3",
                "feedback": "Focus on 'eco' and 'friendly' pronunciation."
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              {
                type: 'sentence-building',
                words: ['recycle', 'we', 'should', 'more', 'plastic'],
                correct: 'We should recycle more plastic.'
              },
              {
                "type": "sentence-building",
                "words": ["reduce", "we", "should", "plastic", "waste"],
                "correct": "We should reduce plastic waste."
              },
              {
                "type": "sentence-building",
                "words": ["climate", "is", "change", "global", "a", "issue"],
                "correct": "Climate change is a global issue."
              },
              {
                "type": "sentence-building",
                "words": ["deforestation", "our", "harming", "is", "planet"],
                "correct": "Deforestation is harming our planet."
              },
              {
                "type": "sentence-building",
                "words": ["recycling", "helps", "pollution", "reduce"],
                "correct": "Recycling helps reduce pollution."
              },
              {
                "type": "sentence-building",
                "words": ["solar", "is", "great", "energy", "alternative", "a"],
                "correct": "Solar energy is a great alternative."
              },
              {
                "type": "sentence-building",
                "words": ["must", "water", "conserve", "we", "resources"],
                "correct": "We must conserve water resources."
              },
              {
                "type": "sentence-building",
                "words": ["is", "essential", "biodiversity", "for", "ecosystems"],
                "correct": "Biodiversity is essential for ecosystems."
              },
              {
                "type": "sentence-building",
                "words": ["affects", "pollution", "air", "our", "health"],
                "correct": "Air pollution affects our health."
              },
              {
                "type": "sentence-building",
                "words": ["renewable", "energy", "using", "is", "important"],
                "correct": "Using renewable energy is important."
              },
              {
                "type": "sentence-building",
                "words": ["protecting", "nature", "our", "responsibility", "is"],
                "correct": "Protecting nature is our responsibility."
              },
              {
                "type": "sentence-building",
                "words": ["pollution", "serious", "ocean", "problem", "a", "is"],
                "correct": "Ocean pollution is a serious problem."
              },
              {
                "type": "sentence-building",
                "words": ["should", "plant", "trees", "we", "more"],
                "correct": "We should plant more trees."
              },
              {
                "type": "sentence-building",
                "words": ["sustainable", "is", "living", "for", "our", "future", "necessary"],
                "correct": "Sustainable living is necessary for our future."
              },
              {
                "type": "sentence-building",
                "words": ["conservation", "is", "important", "wildlife"],
                "correct": "Wildlife conservation is important."
              },
              {
                "type": "sentence-building",
                "words": ["greenhouse", "effect", "the", "is", "increasing"],
                "correct": "The greenhouse effect is increasing."
              },
              {
                "type": "sentence-building",
                "words": ["carbon", "our", "footprint", "should", "reduce", "we"],
                "correct": "We should reduce our carbon footprint."
              },
              {
                "type": "sentence-building",
                "words": ["marine", "life", "harming", "pollution", "plastic", "is"],
                "correct": "Plastic pollution is harming marine life."
              },
              {
                "type": "sentence-building",
                "words": ["clean", "wind", "source", "a", "is", "energy", "power"],
                "correct": "Wind energy is a clean power source."
              },
              {
                "type": "sentence-building",
                "words": ["issue", "global", "a", "overfishing", "is"],
                "correct": "Overfishing is a global issue."
              },
              {
                "type": "sentence-building",
                "words": ["switch", "sustainable", "practices", "to", "must", "we"],
                "correct": "We must switch to sustainable practices."
              },
              {
                "type": "sentence-building",
                "words": ["ozone", "layer", "protects", "the", "us", "rays", "UV", "from"],
                "correct": "The ozone layer protects us from UV rays."
              },
              {
                "type": "sentence-building",
                "words": ["helps", "reduce", "composting", "waste", "food"],
                "correct": "Composting helps reduce food waste."
              },
              {
                "type": "sentence-building",
                "words": ["should", "clean", "beaches", "up", "we", "our", "regularly"],
                "correct": "We should clean up our beaches regularly."
              },
              {
                "type": "sentence-building",
                "words": ["protect", "to", "important", "is", "wildlife"],
                "correct": "It is important to protect wildlife."
              }
            ]
          }
        ]
      },
      {
        id: 'b1-6',
        title: 'Culture and Society',
        description: 'Discuss cultural differences and social issues',
        icon: 'bx-globe',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              {
                "type": "multiple-choice",
                "question": "Which tense is used for cultural traditions?",
                "options": ["present simple", "present continuous", "past simple", "present perfect"],
                "correct": "present simple"
              },
              {
                "type": "multiple-choice",
                "question": "What is a common greeting in Japan?",
                "options": ["Shaking hands", "Bowing", "High five", "Hugging"],
                "correct": "Bowing"
              },
              {
                "type": "multiple-choice",
                "question": "Which of these is a traditional Indian festival?",
                "options": ["Thanksgiving", "Diwali", "Easter", "Hanukkah"],
                "correct": "Diwali"
              },
              {
                "type": "multiple-choice",
                "question": "What do people traditionally eat on Thanksgiving in the USA?",
                "options": ["Pizza", "Turkey", "Sushi", "Tacos"],
                "correct": "Turkey"
              },
              {
                "type": "multiple-choice",
                "question": "Which country is famous for the carnival festival in Rio de Janeiro?",
                "options": ["Spain", "Mexico", "Brazil", "Italy"],
                "correct": "Brazil"
              },
              {
                "type": "multiple-choice",
                "question": "What is the main language spoken in Canada?",
                "options": ["Spanish", "French", "English", "Both French and English"],
                "correct": "Both French and English"
              },
              {
                "type": "multiple-choice",
                "question": "Which holiday is celebrated with fireworks on July 4th in the USA?",
                "options": ["Christmas", "Independence Day", "Halloween", "Labor Day"],
                "correct": "Independence Day"
              },
              {
                "type": "multiple-choice",
                "question": "Which of the following is an important Chinese cultural tradition?",
                "options": ["Hanukkah", "Chinese New Year", "Thanksgiving", "Oktoberfest"],
                "correct": "Chinese New Year"
              },
              {
                "type": "multiple-choice",
                "question": "Which continent is known for its rich tribal cultures and wildlife?",
                "options": ["Europe", "Asia", "Africa", "Australia"],
                "correct": "Africa"
              },
              {
                "type": "multiple-choice",
                "question": "Which of these is a famous cultural symbol of Scotland?",
                "options": ["Kimono", "Bagpipes", "Flamenco", "Samba"],
                "correct": "Bagpipes"
              },
              {
                "type": "multiple-choice",
                "question": "What is a traditional Spanish dance?",
                "options": ["Salsa", "Flamenco", "Waltz", "Tango"],
                "correct": "Flamenco"
              },
              {
                "type": "multiple-choice",
                "question": "Which festival is known for its colorful masks and costumes in Venice?",
                "options": ["Oktoberfest", "Carnival", "Mardi Gras", "Diwali"],
                "correct": "Carnival"
              },
              {
                "type": "multiple-choice",
                "question": "Which of these is a traditional Japanese dish?",
                "options": ["Pasta", "Sushi", "Croissant", "Burrito"],
                "correct": "Sushi"
              },
              {
                "type": "multiple-choice",
                "question": "What do people usually wear at traditional Indian weddings?",
                "options": ["Jeans and T-shirts", "Sarees and Sherwanis", "Suits and Ties", "Shorts and Sandals"],
                "correct": "Sarees and Sherwanis"
              },
              {
                "type": "multiple-choice",
                "question": "Which religion celebrates Ramadan?",
                "options": ["Christianity", "Islam", "Hinduism", "Buddhism"],
                "correct": "Islam"
              },
              {
                "type": "multiple-choice",
                "question": "What is the national sport of Japan?",
                "options": ["Cricket", "Sumo Wrestling", "Basketball", "Rugby"],
                "correct": "Sumo Wrestling"
              },
              {
                "type": "multiple-choice",
                "question": "Which holiday is associated with decorating eggs?",
                "options": ["Christmas", "Easter", "Halloween", "Thanksgiving"],
                "correct": "Easter"
              },
              {
                "type": "multiple-choice",
                "question": "What is the traditional drink of Argentina?",
                "options": ["Tea", "Coffee", "Mate", "Wine"],
                "correct": "Mate"
              },
              {
                "type": "multiple-choice",
                "question": "Which European country is famous for its castles and fairy tales?",
                "options": ["France", "Germany", "Italy", "Spain"],
                "correct": "Germany"
              },
              {
                "type": "multiple-choice",
                "question": "What is the official language of Brazil?",
                "options": ["Spanish", "Portuguese", "English", "French"],
                "correct": "Portuguese"
              },
              {
                "type": "multiple-choice",
                "question": "Which of these is a famous Native American tradition?",
                "options": ["Powwow", "Tea Ceremony", "Siesta", "Opera"],
                "correct": "Powwow"
              },
              {
                "type": "multiple-choice",
                "question": "Which of these is a traditional Mexican holiday?",
                "options": ["Halloween", "Bastille Day", "Día de los Muertos", "Eid al-Fitr"],
                "correct": "Día de los Muertos"
              },
              {
                "type": "multiple-choice",
                "question": "Which of these is a famous Australian landmark?",
                "options": ["Eiffel Tower", "Great Wall", "Sydney Opera House", "Colosseum"],
                "correct": "Sydney Opera House"
              },
              {
                "type": "multiple-choice",
                "question": "Which of these is a traditional African instrument?",
                "options": ["Violin", "Djembe", "Accordion", "Piano"],
                "correct": "Djembe"
              },
              {
                "type": "multiple-choice",
                "question": "Which of these is a traditional German festival?",
                "options": ["Oktoberfest", "Diwali", "Hanukkah", "Carnival"],
                "correct": "Oktoberfest"
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'Different cultures have different traditions',
                audio: '/audio/culture.mp3',
                feedback: 'Focus on the "t" sound in "traditions"'
              },
              {
                "type": "pronunciation",
                "text": "Cultural traditions are passed down through generations.",
                "audio": "/audio/traditions.mp3",
                "feedback": "Pay attention to the stressed syllables in 'traditions' and 'generations'."
              },
              {
                "type": "pronunciation",
                "text": "Festivals bring communities together to celebrate heritage.",
                "audio": "/audio/festivals.mp3",
                "feedback": "Emphasize the correct vowel sounds in 'festivals' and 'heritage'."
              },
              {
                "type": "pronunciation",
                "text": "Different cultures have different traditions.",
                "audio": "/audio/culture.mp3",
                "feedback": "Focus on the 't' sound in 'traditions'."
              },
              {
                "type": "pronunciation",
                "text": "Pay attention to the pronunciation of 'multicultural' in a sentence.",
                "audio": "/audio/multicultural.mp3",
                "feedback": "Focus on the syllable stress."
              },
              {
                "type": "pronunciation",
                "text": "Focus on the pronunciation of 'heritage' and 'tradition'.",
                "audio": "/audio/heritage_tradition.mp3",
                "feedback": "Pay attention to vowel sounds."
              },
              {
                "type": "pronunciation",
                "text": "Practice saying 'diversity' and 'inclusion' correctly.",
                "audio": "/audio/diversity_inclusion.mp3",
                "feedback": "Focus on clear enunciation."
              },
              {
                "type": "pronunciation",
                "text": "Pronounce 'identity' and 'values' with proper intonation.",
                "audio": "/audio/identity_values.mp3",
                "feedback": "Listen carefully to the vowel length."
              },
              {
                "type": "pronunciation",
                "text": "Speak clearly when saying 'community' and 'tradition'.",
                "audio": "/audio/community_tradition.mp3",
                "feedback": "Break the words into syllables when practicing."
              },
              {
                "type": "pronunciation",
                "text": "Practice the correct pronunciation of 'cultural diversity'.",
                "audio": "/audio/cultural_diversity.mp3",
                "feedback": "Make sure to emphasize the 'diver' part of 'diversity'."
              },
              {
                "type": "pronunciation",
                "text": "Say 'language' and 'communication' with proper stress.",
                "audio": "/audio/language_communication.mp3",
                "feedback": "Focus on the long vowel sounds."
              },
              {
                "type": "pronunciation",
                "text": "Pronounce 'globalization' and 'interaction' accurately.",
                "audio": "/audio/globalization_interaction.mp3",
                "feedback": "Pay attention to the 'z' sound in 'globalization'."
              },
              {
                "type": "pronunciation",
                "text": "Work on the pronunciation of 'migration' and 'integration'.",
                "audio": "/audio/migration_integration.mp3",
                "feedback": "Practice saying them slowly at first."
              },
              {
                "type": "pronunciation",
                "text": "Say 'equality' and 'opportunity' with proper stress.",
                "audio": "/audio/equality_opportunity.mp3",
                "feedback": "Break them into syllables when pronouncing."
              },
              {
                "type": "pronunciation",
                "text": "Pronounce 'tradition' and 'modernity' correctly.",
                "audio": "/audio/tradition_modernity.mp3",
                "feedback": "Emphasize the syllables properly."
              },
              {
                "type": "pronunciation",
                "text": "Work on the pronunciation of 'stereotype' and 'perception'.",
                "audio": "/audio/stereotype_perception.mp3",
                "feedback": "Focus on the first syllables."
              },
              {
                "type": "pronunciation",
                "text": "Say 'respect' and 'tolerance' correctly.",
                "audio": "/audio/respect_tolerance.mp3",
                "feedback": "Watch the 'r' sound in 'respect'."
              },
              {
                "type": "pronunciation",
                "text": "Practice saying 'citizenship' and 'responsibility' with proper intonation.",
                "audio": "/audio/citizenship_responsibility.mp3",
                "feedback": "Be mindful of the stress on 'responsibility'."
              },
              {
                "type": "pronunciation",
                "text": "Focus on the pronunciation of 'influence' and 'behavior'.",
                "audio": "/audio/influence_behavior.mp3",
                "feedback": "Practice smooth transitions between syllables."
              },
              {
                "type": "pronunciation",
                "text": "Pronounce 'celebration' and 'appreciation' with correct stress.",
                "audio": "/audio/celebration_appreciation.mp3",
                "feedback": "Break the words down into syllables."
              },
              {
                "type": "pronunciation",
                "text": "Work on the pronunciation of 'ancestors' and 'heritage'.",
                "audio": "/audio/ancestors_heritage.mp3",
                "feedback": "Emphasize the 'her' sound in 'heritage'."
              },
              {
                "type": "pronunciation",
                "text": "Say 'social norms' and 'customs' correctly.",
                "audio": "/audio/social_norms_customs.mp3",
                "feedback": "Ensure clear articulation of both words."
              },
              {
                "type": "pronunciation",
                "text": "Practice the correct pronunciation of 'beliefs' and 'rituals'.",
                "audio": "/audio/beliefs_rituals.mp3",
                "feedback": "Make sure to pronounce the 's' sound at the end of 'beliefs'."
              },
              {
                "type": "pronunciation",
                "text": "Pronounce 'multiculturalism' and 'coexistence' properly.",
                "audio": "/audio/multiculturalism_coexistence.mp3",
                "feedback": "Take your time with the longer words."
              },
              {
                "type": "pronunciation",
                "text": "Work on the pronunciation of 'identity' and 'heritage'.",
                "audio": "/audio/identity_heritage.mp3",
                "feedback": "Break them into syllables when practicing."
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              {
                "type": "sentence-building",
                "words": ["respect", "we", "should", "other", "cultures"],
                "correct": "We should respect other cultures."
              },
              {
                "type": "sentence-building",
                "words": ["celebrate", "we", "festivals", "together"],
                "correct": "We celebrate festivals together."
              },
              {
                "type": "sentence-building",
                "words": ["important", "is", "heritage", "our"],
                "correct": "Our heritage is important."
              },
              {
                "type": "sentence-building",
                "words": ["learn", "about", "should", "we", "customs"],
                "correct": "We should learn about customs."
              },
              {
                "type": "sentence-building",
                "words": ["traditions", "families", "many", "have"],
                "correct": "Many families have traditions."
              },
              {
                "type": "sentence-building",
                "words": ["language", "culture", "is", "part", "of"],
                "correct": "Language is part of culture."
              },
              {
                "type": "sentence-building",
                "words": ["music", "different", "from", "countries", "comes"],
                "correct": "Music comes from different countries."
              },
              {
                "type": "sentence-building",
                "words": ["traditional", "wear", "clothes", "people", "often"],
                "correct": "People often wear traditional clothes."
              },
              {
                "type": "sentence-building",
                "words": ["history", "we", "should", "our", "know"],
                "correct": "We should know our history."
              },
              {
                "type": "sentence-building",
                "words": ["art", "a", "culture", "form", "of", "is"],
                "correct": "Art is a form of culture."
              },
              {
                "type": "sentence-building",
                "words": ["important", "to", "customs", "understand", "is"],
                "correct": "It is important to understand customs."
              },
              {
                "type": "sentence-building",
                "words": ["different", "food", "countries", "have"],
                "correct": "Different countries have different food."
              },
              {
                "type": "sentence-building",
                "words": ["respect", "beliefs", "should", "everyone", "we"],
                "correct": "We should respect everyone's beliefs."
              },
              {
                "type": "sentence-building",
                "words": ["new", "can", "traditions", "learn", "we"],
                "correct": "We can learn new traditions."
              },
              {
                "type": "sentence-building",
                "words": ["every", "unique", "is", "culture"],
                "correct": "Every culture is unique."
              },
              {
                "type": "sentence-building",
                "words": ["help", "people", "festivals", "understand"],
                "correct": "Festivals help people understand."
              },
              {
                "type": "sentence-building",
                "words": ["important", "languages", "are"],
                "correct": "Languages are important."
              },
              {
                "type": "sentence-building",
                "words": ["customs", "interesting", "are"],
                "correct": "Customs are interesting."
              },
              {
                "type": "sentence-building",
                "words": ["stories", "cultures", "tell", "old"],
                "correct": "Old cultures tell stories."
              },
              {
                "type": "sentence-building",
                "words": ["together", "people", "celebrate"],
                "correct": "People celebrate together."
              },
              {
                "type": "sentence-building",
                "words": ["holidays", "families", "spend", "together"],
                "correct": "Families spend holidays together."
              },
              {
                "type": "sentence-building",
                "words": ["music", "culture", "expresses"],
                "correct": "Music expresses culture."
              },
              {
                "type": "sentence-building",
                "words": ["learn", "traditions", "about"],
                "correct": "Learn about traditions."
              },
              {
                "type": "sentence-building",
                "words": ["dancing", "a", "is", "tradition"],
                "correct": "Dancing is a tradition."
              },
              {
                "type": "sentence-building",
                "words": ["cultural", "important", "are", "exchanges"],
                "correct": "Cultural exchanges are important."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'b2',
    name: 'Upper Intermediate (B2)',
    description: 'Perfect your abilities',
    icon: 'bxs-microphone',
    topics: [
      {
        id: 'b2-1',
        title: 'Advanced Grammar',
        description: 'Master complex grammatical structures',
        icon: 'bx-book-content',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              { //1
                type: 'multiple-choice',
                question: 'Which is the correct passive form of "They built this house"?',
                options: ['This house was built', 'This house is built', 'This house has been built', 'This house had been built'],
                correct: 'This house was built'
              },
              { //2
                type: 'fill-blank',
                question: 'Complete: "He said he ___ to Paris the following week"',
                answer: 'would go',
                hint: 'Use reported speech with future tense'
              },
              { //3
                type: 'multiple-choice',
                question: 'Which modal verb expresses past ability?',
                options: ['could', 'should', 'must', 'will'],
                correct: 'could'
              },
              { //4
                type: 'fill-blank',
                question: 'Complete: "If I ___ known earlier, I would have told you"',
                answer: 'had',
                hint: 'Use third conditional for past regrets'
              },
              { //5
                type: 'multiple-choice',
                question: 'Choose the correct conditional sentence:',
                options: [
                  'Unless you had studied, you would pass the exam',
                  'Unless you study, you won\'t pass the exam',
                  'Unless you studied, you will pass the exam',
                  'Unless you will study, you won\'t pass the exam'
                ],
                correct: 'Unless you study, you won\'t pass the exam'
              },
              { //6
                type: 'fill-blank',
                question: 'Complete: "By this time next year, I ___ my degree"',
                answer: 'will have completed',
                hint: 'Use future perfect tense'
              },
              { //7
                type: 'multiple-choice',
                question: 'Which sentence uses the causative form correctly?',
                options: [
                  'I had my car repair yesterday',
                  'I had my car repairing yesterday',
                  'I had my car repaired yesterday',
                  'I had repaired my car yesterday'
                ],
                correct: 'I had my car repaired yesterday'
              },
              { //8
                type: 'fill-blank',
                question: 'Complete: "No sooner ___ I arrived home ___ it started raining"',
                answer: 'had, than',
                hint: 'Use inverted conditional with past perfect'
              },
              { //9
                type: 'multiple-choice',
                question: 'Which sentence shows correct use of inversion?',
                options: [
                  'Never I have seen such beauty',
                  'Never have I seen such beauty',
                  'Never did I saw such beauty',
                  'Never I saw such beauty'
                ],
                correct: 'Never have I seen such beauty'
              },
              { //10
                type: 'fill-blank',
                question: 'Complete: "She insisted ___ attend the meeting"',
                answer: 'that all employees',
                hint: 'Use formal subjunctive structure'
              },
              { //11
                type: 'multiple-choice',
                question: 'Which sentence uses mixed conditionals correctly?',
                options: [
                  'If I had studied medicine, I will be a doctor now',
                  'If I had studied medicine, I would be a doctor now',
                  'If I studied medicine, I would have been a doctor now',
                  'If I would study medicine, I would be a doctor now'
                ],
                correct: 'If I had studied medicine, I would be a doctor now'
              },
              { //12
                type: 'fill-blank',
                question: 'Complete: "It\'s high time we ___ about our future"',
                answer: 'thought',
                hint: 'Use subjunctive mood after "it\'s high time"'
              },
              { //13
                type: 'multiple-choice',
                question: 'Which sentence uses participle clauses correctly?',
                options: [
                  'Walking down the street, the bus passed me',
                  'Walking down the street, I saw an old friend',
                  'Walking down the street, my phone was ringing',
                  'Walking down the street, the shop was closed'
                ],
                correct: 'Walking down the street, I saw an old friend'
              },
              { //14
                type: 'fill-blank',
                question: 'Complete: "Little ___ she realize the consequences of her actions"',
                answer: 'did',
                hint: 'Use inversion with negative adverb "little"'
              },
              { //15
                type: 'multiple-choice',
                question: 'Which sentence uses the past perfect continuous correctly?',
                options: [
                  'I had been working for six hours when she called',
                  'I have been working for six hours when she called',
                  'I was working for six hours when she called',
                  'I had worked for six hours when she called'
                ],
                correct: 'I had been working for six hours when she called'
              },
              { //16
                type: 'fill-blank',
                question: 'Complete: "Not only ___ she speak French, ___ she also knows Italian"',
                answer: 'does, but',
                hint: 'Use inversion with "not only"'
              },
              { //17
                type: 'multiple-choice',
                question: 'Which sentence shows correct use of the subjunctive?',
                options: [
                  'I suggest that he goes to the doctor',
                  'I suggest that he go to the doctor',
                  'I suggest that he will go to the doctor',
                  'I suggest that he is going to the doctor'
                ],
                correct: 'I suggest that he go to the doctor'
              },
              { //18
                type: 'fill-blank',
                question: 'Complete: "Had I ___ about the meeting, I would have attended"',
                answer: 'known',
                hint: 'Use inverted third conditional'
              },
              { //19
                type: 'multiple-choice',
                question: 'Which sentence uses a reduced relative clause correctly?',
                options: [
                  'The man who walking down the street is my teacher',
                  'The man walking down the street is my teacher',
                  'The man is walking down the street is my teacher',
                  'The man walked down the street is my teacher'
                ],
                correct: 'The man walking down the street is my teacher'
              },
              { //20
                type: 'fill-blank',
                question: 'Complete: "Scarcely ___ we left when it started to rain"',
                answer: 'had',
                hint: 'Use inversion with "scarcely"'
              },
              { //21
                type: 'multiple-choice',
                question: 'Which sentence uses emphatic inversion correctly?',
                options: [
                  'Only then I understood the truth',
                  'Only then did I understand the truth',
                  'Only then I did understand the truth',
                  'Only then understood I the truth'
                ],
                correct: 'Only then did I understand the truth'
              },
              { //22
                type: 'fill-blank',
                question: 'Complete: "Were she ___ the truth, she would tell us"',
                answer: 'to know',
                hint: 'Use conditional with "were + infinitive"'
              },
              { //23
                type: 'multiple-choice',
                question: 'Which sentence uses a cleft structure correctly?',
                options: [
                  'It was in 2010 when I graduated',
                  'It was in 2010 that I graduated',
                  'It was in 2010 which I graduated',
                  'It was in 2010 where I graduated'
                ],
                correct: 'It was in 2010 that I graduated'
              },
              { //24
                type: 'fill-blank',
                question: 'Complete: "Should you ___ any assistance, please don\'t hesitate to ask"',
                answer: 'require',
                hint: 'Use formal conditional with "should"'
              },
              { //25
                type: 'multiple-choice',
                question: 'Which sentence demonstrates correct use of a double comparative?',
                options: [
                  'The more I study, the more I learn',
                  'More I study, more I learn',
                  'The more I study, I learn more',
                  'More I study, the more I learn'
                ],
                correct: 'The more I study, the more I learn'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'The research has been conducted by experts in the field',
                audio: '/audio/passive_voice.mp3',
                feedback: 'Focus on the "t" sound in "conducted" and proper stress on "experts"'
              },
              {
                type: 'pronunciation',
                text: 'Had I known about the meeting, I would have attended it',
                audio: '/audio/inverted_conditional.mp3',
                feedback: 'Pay attention to the inversion structure and stress on "would have"'
              },
              {
                type: 'pronunciation',
                text: 'Not only did she pass the exam, but she also received the highest score',
                audio: '/audio/emphasis_inversion.mp3',
                feedback: 'Focus on the emphasis pattern of "not only" and linking between words'
              },
              {
                type: 'pronunciation',
                text: 'Rarely have I seen such impressive results in such a short time',
                audio: '/audio/negative_adverb_inversion.mp3',
                feedback: 'Notice the inversion after "rarely" and the stress pattern'
              },
              {
                type: 'pronunciation',
                text: 'The project, which was completed ahead of schedule, received high praise',
                audio: '/audio/relative_clauses.mp3',
                feedback: 'Pay attention to the slight pause before and after the relative clause'
              },
              {
                type: 'pronunciation',
                text: 'By the time you arrive, we will have been working for six hours',
                audio: '/audio/future_perfect_continuous.mp3',
                feedback: 'Focus on the rhythm in the future perfect continuous structure'
              },
              {
                type: 'pronunciation',
                text: 'No sooner had she finished the presentation than the questions began',
                audio: '/audio/no_sooner.mp3',
                feedback: 'Pay attention to the inversion and linking between "no sooner" and "had"'
              },
              {
                type: 'pronunciation',
                text: 'Were it not for the delay, we would have finished on time',
                audio: '/audio/subjunctive_conditional.mp3',
                feedback: 'Focus on the subjunctive form "were" regardless of person'
              },
              {
                type: 'pronunciation',
                text: 'Having analyzed the data, the researchers published their findings',
                audio: '/audio/perfect_participle.mp3',
                feedback: 'Pay attention to the "-ing" ending and linking to "the"'
              },
              {
                type: 'pronunciation',
                text: 'It was during the conference that the breakthrough was announced',
                audio: '/audio/cleft_sentence.mp3',
                feedback: 'Focus on the emphasis structure and stress on "during"'
              },
              {
                type: 'pronunciation',
                text: 'What struck me most was how eloquently she expressed her views',
                audio: '/audio/nominal_clause.mp3',
                feedback: 'Pay attention to the stress on "struck" and the rhythm of the sentence'
              },
              {
                type: 'pronunciation',
                text: 'The more you practice these structures, the more natural they will sound',
                audio: '/audio/comparative_correlative.mp3',
                feedback: 'Focus on the parallel structure and rhythm of comparative correlatives'
              },
              {
                type: 'pronunciation',
                text: 'Such was the impact of her speech that everyone stood and applauded',
                audio: '/audio/inversion_such.mp3',
                feedback: 'Pay attention to the inverted structure and emphasis on "such"'
              },
              {
                type: 'pronunciation',
                text: 'Should you have any questions, please do not hesitate to contact us',
                audio: '/audio/conditional_inversion.mp3',
                feedback: 'Focus on the formal conditional structure with inverted "should"'
              },
              {
                type: 'pronunciation',
                text: 'Not until the final results were analyzed did they realize the significance',
                audio: '/audio/negative_adverbial_inversion.mp3',
                feedback: 'Pay attention to the inversion after "not until" and stress pattern'
              },
              {
                type: 'pronunciation',
                text: 'Seldom does one encounter such dedication in today\'s fast-paced world',
                audio: '/audio/seldom_inversion.mp3',
                feedback: 'Focus on the inverted structure and the linking between words'
              },
              {
                type: 'pronunciation',
                text: 'Only by practicing regularly will you master these complex structures',
                audio: '/audio/only_inversion.mp3',
                feedback: 'Pay attention to the inversion after "only" and stress on "regularly"'
              },
              {
                type: 'pronunciation',
                text: 'So engrossed was she in her work that she lost track of time',
                audio: '/audio/so_inversion.mp3',
                feedback: 'Focus on the inversion after "so" and the stress on "engrossed"'
              },
              {
                type: 'pronunciation',
                text: 'Under no circumstances should you reveal this information to anyone',
                audio: '/audio/negative_phrase_inversion.mp3',
                feedback: 'Pay attention to the inversion and emphasis on "no circumstances"'
              },
              {
                type: 'pronunciation',
                text: 'Little did they know that their research would change the field forever',
                audio: '/audio/little_inversion.mp3',
                feedback: 'Focus on the inversion after "little" and linking between words'
              },
              {
                type: 'pronunciation',
                text: 'He insisted that the meeting be postponed until next week',
                audio: '/audio/subjunctive.mp3',
                feedback: 'Pay attention to the subjunctive form "be postponed" after "insisted that"'
              },
              {
                type: 'pronunciation',
                text: 'The professor with whom I discussed the theory has published a new paper',
                audio: '/audio/formal_relative.mp3',
                feedback: 'Focus on the formal relative clause with preposition "with whom"'
              },
              {
                type: 'pronunciation',
                text: 'Never before have I encountered such a challenging problem to solve',
                audio: '/audio/never_inversion.mp3',
                feedback: 'Pay attention to the inversion after "never before" and stress pattern'
              },
              {
                type: 'pronunciation',
                text: 'Had it not been for her intervention, the project would have failed',
                audio: '/audio/negative_conditional_inversion.mp3',
                feedback: 'Focus on the inverted negative conditional structure and linking'
              },
              {
                type: 'pronunciation',
                text: 'Not only must they complete the assignment, but they must also present it',
                audio: '/audio/not_only_must.mp3',
                feedback: 'Pay attention to the emphasis structure with modal verb inversion'
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              {
                type: 'sentence-building',
                words: ['been', 'has', 'the', 'research', 'conducted', 'by', 'experts'],
                correct: 'The research has been conducted by experts.'
              },
              {
                type: 'short-essay',
                topic: 'Write about a scientific discovery using passive voice (150 words)',
                wordLimit: 150
              },
              // #3
              {
                type: 'sentence-building',
                words: ['findings', 'the', 'were', 'published', 'in', 'prestigious', 'journal'],
                correct: 'The findings were published in prestigious journal.'
              },
              // #4
              {
                type: 'short-essay',
                topic: 'Discuss the impact of social media on modern communication (150 words)',
                wordLimit: 150
              },
              // #5
              {
                type: 'sentence-building',
                words: ['have', 'never', 'I', 'seen', 'such', 'extraordinary', 'results'],
                correct: 'Never have I seen such extraordinary results.'
              },
              // #6
              {
                type: 'short-essay',
                topic: 'Analyze the advantages and disadvantages of remote work (150 words)',
                wordLimit: 150
              },
              // #7
              {
                type: 'sentence-building',
                words: ['more', 'the', 'practice', 'you', 'better', 'the', 'become', 'you'],
                correct: 'The more you practice, the better you become.'
              },
              // #8
              {
                type: 'short-essay',
                topic: 'Explain how technology has changed education in the last decade (150 words)',
                wordLimit: 150
              },
              // #9
              {
                type: 'sentence-building',
                words: ['unless', 'immediate', 'action', 'is', 'taken', 'consequences', 'will', 'be', 'severe'],
                correct: 'Unless immediate action is taken, consequences will be severe.'
              },
              // #10
              {
                type: 'short-essay',
                topic: 'Discuss the importance of environmental conservation (150 words)',
                wordLimit: 150
              },
              // #11
              {
                type: 'sentence-building',
                words: ['having', 'completed', 'research', 'the', 'we', 'analyzed', 'results', 'the'],
                correct: 'Having completed the research, we analyzed the results.'
              },
              // #12
              {
                type: 'short-essay',
                topic: 'Describe a significant technological breakthrough and its implications (150 words)',
                wordLimit: 150
              },
              // #13
              {
                type: 'sentence-building',
                words: ['highly', 'it', 'is', 'recommended', 'that', 'students', 'attend'],
                correct: 'It is highly recommended that students attend.'
              },
              // #14
              {
                type: 'short-essay',
                topic: 'Evaluate the role of artificial intelligence in modern society (150 words)',
                wordLimit: 150
              },
              // #15
              {
                type: 'sentence-building',
                words: ['scarcely', 'had', 'we', 'arrived', 'when', 'meeting', 'began', 'the'],
                correct: 'Scarcely had we arrived when the meeting began.'
              },
              // #16
              {
                type: 'short-essay',
                topic: 'Discuss the challenges of maintaining work-life balance (150 words)',
                wordLimit: 150
              },
              // #17
              {
                type: 'sentence-building',
                words: ['project', 'the', 'will', 'have', 'been', 'completed', 'by', 'next', 'month'],
                correct: 'The project will have been completed by next month.'
              },
              // #18
              {
                type: 'short-essay',
                topic: 'Analyze the impact of globalization on local cultures (150 words)',
                wordLimit: 150
              },
              // #19
              {
                type: 'sentence-building',
                words: ['not', 'only', 'did', 'she', 'excel', 'but', 'also', 'led', 'team', 'the'],
                correct: 'Not only did she excel, but also led the team.'
              },
              // #20
              {
                type: 'short-essay',
                topic: 'Discuss the future of renewable energy sources (150 words)',
                wordLimit: 150
              },
              // #21
              {
                type: 'sentence-building',
                words: ['were', 'it', 'not', 'for', 'your', 'help', 'we', 'would', 'have', 'failed'],
                correct: 'Were it not for your help, we would have failed.'
              },
              // #22
              {
                type: 'short-essay',
                topic: 'Evaluate the effectiveness of online learning platforms (150 words)',
                wordLimit: 150
              },
              // #23
              {
                type: 'sentence-building',
                words: ['during', 'conference', 'the', 'breakthrough', 'was', 'announced', 'the'],
                correct: 'During the conference, the breakthrough was announced.'
              },
              // #24
              {
                type: 'short-essay',
                topic: 'Discuss the role of social responsibility in business (150 words)',
                wordLimit: 150
              },
              // #25
              {
                type: 'sentence-building',
                words: ['research', 'indicates', 'significant', 'progress', 'in', 'field', 'this'],
                correct: 'Research indicates significant progress in this field.'
              }
            ]
          }
        ]
      },
      {
        id: 'b2-2',
        title: 'Academic Writing',
        description: 'Develop academic writing skills',
        icon: 'bx-pen',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which phrase is most academic?',
                options: ['This shows', 'This demonstrates', 'This tells us', 'This means'],
                correct: 'This demonstrates'
              },
              {
                type: 'fill-blank',
                question: 'Complete: "According to the research, ___"',
                answer: 'the findings suggest',
                hint: 'Use academic language for research findings'
              },
              // #3
              {
                type: 'multiple-choice',
                question: 'Which is the most appropriate academic phrase?',
                options: ['It\'s clear that', 'It is evident that', 'You can see that', 'We can see that'],
                correct: 'It is evident that'
              },
              // #4
              {
                type: 'fill-blank',
                question: 'Complete: "The data ___ a significant correlation"',
                answer: 'indicate',
                hint: 'Use formal verb agreement with "data"'
              },
              // #5
              {
                type: 'multiple-choice',
                question: 'Select the most academic way to introduce a limitation:',
                options: ['A problem with this is', 'A limitation of this study is', 'This isn\'t perfect because', 'This has issues with'],
                correct: 'A limitation of this study is'
              },
              // #6
              {
                type: 'fill-blank',
                question: 'Complete: "The researchers ___ to control for external variables"',
                answer: 'endeavoured',
                hint: 'Use formal vocabulary for "tried"'
              },
              // #7
              {
                type: 'multiple-choice',
                question: 'Which phrase is most appropriate for academic writing?',
                options: ['In my opinion', 'From my perspective', 'The evidence suggests', 'I think that'],
                correct: 'The evidence suggests'
              },
              // #8
              {
                type: 'fill-blank',
                question: 'Complete: "This phenomenon ___ further investigation"',
                answer: 'warrants',
                hint: 'Use formal vocabulary for "needs"'
              },
              // #9
              {
                type: 'multiple-choice',
                question: 'Choose the most academic way to express disagreement:',
                options: ['I don\'t agree with', 'This contradicts', 'I disagree with', 'This isn\'t right'],
                correct: 'This contradicts'
              },
              // #10
              {
                type: 'fill-blank',
                question: 'Complete: "The findings ___ the initial hypothesis"',
                answer: 'corroborate',
                hint: 'Use academic vocabulary for "support"'
              },
              // #11
              {
                type: 'multiple-choice',
                question: 'Which transition is most academic?',
                options: ['Also', 'Furthermore', 'Plus', 'And also'],
                correct: 'Furthermore'
              },
              // #12
              {
                type: 'fill-blank',
                question: 'Complete: "The results ___ statistical significance"',
                answer: 'demonstrated',
                hint: 'Use formal vocabulary for "showed"'
              },
              // #13
              {
                type: 'multiple-choice',
                question: 'Select the most appropriate conclusion phrase:',
                options: ['To sum up', 'In conclusion', 'To wrap it up', 'Finally'],
                correct: 'In conclusion'
              },
              // #14
              {
                type: 'fill-blank',
                question: 'Complete: "This study ___ to the existing literature"',
                answer: 'contributes',
                hint: 'Use academic vocabulary for "adds"'
              },
              // #15
              {
                type: 'multiple-choice',
                question: 'Which phrase best introduces a methodology?',
                options: ['We did', 'The method used was', 'The study employed', 'We used'],
                correct: 'The study employed'
              },
              // #16
              {
                type: 'fill-blank',
                question: 'Complete: "The analysis ___ several key themes"',
                answer: 'revealed',
                hint: 'Use formal vocabulary for "showed"'
              },
              // #17
              {
                type: 'multiple-choice',
                question: 'Choose the most academic way to express frequency:',
                options: ['A lot of times', 'Frequently', 'Many times', 'On numerous occasions'],
                correct: 'On numerous occasions'
              },
              // #18
              {
                type: 'fill-blank',
                question: 'Complete: "Previous studies have ___ that..."',
                answer: 'established',
                hint: 'Use academic vocabulary for "shown"'
              },
              // #19
              {
                type: 'multiple-choice',
                question: 'Which is the most appropriate citation introduction?',
                options: ['Smith says', 'According to Smith', 'Smith thinks', 'Smith wrote'],
                correct: 'According to Smith'
              },
              // #20
              {
                type: 'fill-blank',
                question: 'Complete: "The findings ___ the importance of..."',
                answer: 'underscore',
                hint: 'Use formal vocabulary for "show"'
              },
              // #21
              {
                type: 'multiple-choice',
                question: 'Select the most academic way to introduce an example:',
                options: ['Like', 'Such as', 'For instance', 'For example'],
                correct: 'For instance'
              },
              // #22
              {
                type: 'fill-blank',
                question: 'Complete: "This approach ___ several advantages"',
                answer: 'presents',
                hint: 'Use formal vocabulary for "has"'
              },
              // #23
              {
                type: 'multiple-choice',
                question: 'Which phrase best introduces a recommendation?',
                options: ['I think we should', 'It is recommended that', 'You should', 'We should'],
                correct: 'It is recommended that'
              },
              // #24
              {
                type: 'fill-blank',
                question: 'Complete: "The literature ___ conflicting evidence"',
                answer: 'yields',
                hint: 'Use academic vocabulary for "shows"'
              },
              // #25
              {
                type: 'multiple-choice',
                question: 'Choose the most academic way to express causation:',
                options: ['Because of this', 'As a result', 'This made', 'This caused'],
                correct: 'As a result'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'The research demonstrates significant findings in the field',
                audio: '/audio/academic1.mp3',
                feedback: 'Focus on the "d" sound in "demonstrates" and stress on "significant"'
              },
              {
                type: 'pronunciation',
                text: 'According to Smith et al., the evidence suggests a correlation',
                audio: '/audio/citation1.mp3',
                feedback: 'Pay attention to the pause after "According to Smith et al." and stress on "correlation"'
              },
              {
                type: 'pronunciation',
                text: 'The methodology implemented was both rigorous and replicable',
                audio: '/audio/methodology1.mp3',
                feedback: 'Focus on the "th" sound in "methodology" and the "r" sound in "rigorous"'
              },
              {
                type: 'pronunciation',
                text: 'The literature review indicates a gap in current understanding',
                audio: '/audio/literature1.mp3',
                feedback: 'Pay attention to the stress pattern in "literature" and "understanding"'
              },
              {
                type: 'pronunciation',
                text: 'This dissertation aims to explore the underlying mechanisms',
                audio: '/audio/dissertation1.mp3',
                feedback: 'Focus on the "th" sound in "this" and clear articulation of "dissertation"'
              },
              {
                type: 'pronunciation',
                text: 'The hypothesis was neither confirmed nor rejected',
                audio: '/audio/hypothesis1.mp3',
                feedback: 'Pay attention to the "th" sound in "hypothesis" and stress on "confirmed"'
              },
              {
                type: 'pronunciation',
                text: 'Furthermore, the results appear to contradict previous studies',
                audio: '/audio/transition1.mp3',
                feedback: 'Focus on the linking between "furthermore" and "the" and clear pronunciation of "contradict"'
              },
              {
                type: 'pronunciation',
                text: 'The validity of the findings is subject to several limitations',
                audio: '/audio/validity1.mp3',
                feedback: 'Pay attention to the stress on "validity" and "limitations"'
              },
              {
                type: 'pronunciation',
                text: 'Notwithstanding these limitations, the study contributes to the field',
                audio: '/audio/concession1.mp3',
                feedback: 'Focus on the clear articulation of "notwithstanding" and stress on "contributes"'
              },
              {
                type: 'pronunciation',
                text: 'It should be noted that these findings are preliminary',
                audio: '/audio/hedging1.mp3',
                feedback: 'Pay attention to the hedging phrase "It should be noted" and stress on "preliminary"'
              },
              {
                type: 'pronunciation',
                text: 'The data were analyzed using statistical methods',
                audio: '/audio/passive1.mp3',
                feedback: 'Focus on the correct use of "were" with "data" and clear pronunciation of "analyzed"'
              },
              {
                type: 'pronunciation',
                text: 'The implications of this research extend beyond the immediate context',
                audio: '/audio/implications1.mp3',
                feedback: 'Pay attention to the stress pattern in "implications" and "immediate"'
              },
              {
                type: 'pronunciation',
                text: 'As evidenced by the results, the correlation is statistically significant',
                audio: '/audio/evidenced1.mp3',
                feedback: 'Focus on the linking between "as" and "evidenced" and clear pronunciation of "statistically"'
              },
              {
                type: 'pronunciation',
                text: 'This paper proposes a novel framework for understanding the phenomenon',
                audio: '/audio/proposal1.mp3',
                feedback: 'Pay attention to the stress on "novel" and clear articulation of "phenomenon"'
              },
              {
                type: 'pronunciation',
                text: 'The theoretical underpinnings of this approach are well-established',
                audio: '/audio/theoretical1.mp3',
                feedback: 'Focus on the clear pronunciation of "theoretical" and "underpinnings"'
              },
              {
                type: 'pronunciation',
                text: 'In contrast to previous research, this study adopts a qualitative approach',
                audio: '/audio/contrast1.mp3',
                feedback: 'Pay attention to the pause after "In contrast to previous research" and stress on "qualitative"'
              },
              {
                type: 'pronunciation',
                text: 'The researchers conducted a comprehensive literature review',
                audio: '/audio/comprehensive1.mp3',
                feedback: 'Focus on the clear articulation of "comprehensive" and stress pattern'
              },
              {
                type: 'pronunciation',
                text: 'The findings substantiate the initial hypothesis proposed by Johnson',
                audio: '/audio/substantiate1.mp3',
                feedback: 'Pay attention to the clear pronunciation of "substantiate" and stress on "initial"'
              },
              {
                type: 'pronunciation',
                text: 'Based on the analysis, it can be inferred that the variables are related',
                audio: '/audio/inferred1.mp3',
                feedback: 'Focus on the clear pronunciation of "inferred" and stress on "variables"'
              },
              {
                type: 'pronunciation',
                text: 'While acknowledging limitations, the study offers valuable insights',
                audio: '/audio/concession2.mp3',
                feedback: 'Pay attention to the linking in "while acknowledging" and stress on "valuable"'
              },
              {
                type: 'pronunciation',
                text: 'The research question addressed in this paper concerns the efficacy of the treatment',
                audio: '/audio/question1.mp3',
                feedback: 'Focus on the clear articulation of "addressed" and "efficacy"'
              },
              {
                type: 'pronunciation',
                text: 'This longitudinal study examines changes over an extended period',
                audio: '/audio/longitudinal1.mp3',
                feedback: 'Pay attention to the clear pronunciation of "longitudinal" and linking between words'
              },
              {
                type: 'pronunciation',
                text: 'The primary objective was to ascertain whether the intervention was effective',
                audio: '/audio/objective1.mp3',
                feedback: 'Focus on the clear articulation of "ascertain" and stress on "intervention"'
              },
              {
                type: 'pronunciation',
                text: 'Subsequently, a follow-up study was conducted to corroborate the findings',
                audio: '/audio/subsequently1.mp3',
                feedback: 'Pay attention to the clear pronunciation of "subsequently" and "corroborate"'
              },
              {
                type: 'pronunciation',
                text: 'In conclusion, the evidence demonstrates a robust correlation between the variables',
                audio: '/audio/conclusion1.mp3',
                feedback: 'Focus on the pause after "In conclusion" and stress on "robust"'
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              // #1 (existing)
              {
                type: 'sentence-building',
                words: ['research', 'the', 'findings', 'significant', 'demonstrates'],
                correct: 'The research demonstrates significant findings.'
              },
              // #2
              {
                type: 'short-essay',
                topic: 'Write a research abstract summarizing a study on climate change (150 words)',
                wordLimit: 150
              },
              // #3
              {
                type: 'sentence-building',
                words: ['methodology', 'the', 'employed', 'yielded', 'results', 'significant'],
                correct: 'The methodology employed yielded significant results.'
              },
              // #4
              {
                type: 'short-essay',
                topic: 'Discuss the limitations of a quantitative research approach (150 words)',
                wordLimit: 150
              },
              // #5
              {
                type: 'sentence-building',
                words: ['evidence', 'the', 'supports', 'hypothesis', 'initial', 'our'],
                correct: 'The evidence supports our initial hypothesis.'
              },
              // #6
              {
                type: 'short-essay',
                topic: 'Analyze the implications of artificial intelligence in academic research (150 words)',
                wordLimit: 150
              },
              // #7
              {
                type: 'sentence-building',
                words: ['data', 'the', 'analysis', 'revealed', 'patterns', 'significant'],
                correct: 'The data analysis revealed significant patterns.'
              },
              // #8
              {
                type: 'short-essay',
                topic: 'Evaluate the effectiveness of different research methodologies (150 words)',
                wordLimit: 150
              },
              // #9
              {
                type: 'sentence-building',
                words: ['literature', 'the', 'review', 'indicates', 'gap', 'research', 'a'],
                correct: 'The literature review indicates a research gap.'
              },
              // #10
              {
                type: 'short-essay',
                topic: 'Discuss the importance of peer review in academic publishing (150 words)',
                wordLimit: 150
              },
              // #11
              {
                type: 'sentence-building',
                words: ['findings', 'these', 'contribute', 'to', 'existing', 'literature', 'the'],
                correct: 'These findings contribute to the existing literature.'
              },
              // #12
              {
                type: 'short-essay',
                topic: 'Explain the role of statistical analysis in research (150 words)',
                wordLimit: 150
              },
              // #13
              {
                type: 'sentence-building',
                words: ['study', 'this', 'aims', 'to', 'investigate', 'the', 'phenomenon'],
                correct: 'This study aims to investigate the phenomenon.'
              },
              // #14
              {
                type: 'short-essay',
                topic: 'Describe the ethical considerations in research methodology (150 words)',
                wordLimit: 150
              },
              // #15
              {
                type: 'sentence-building',
                words: ['results', 'the', 'suggest', 'correlation', 'significant', 'a'],
                correct: 'The results suggest a significant correlation.'
              },
              // #16
              {
                type: 'short-essay',
                topic: 'Analyze the importance of research validity and reliability (150 words)',
                wordLimit: 150
              },
              // #17
              {
                type: 'sentence-building',
                words: ['researchers', 'the', 'conducted', 'longitudinal', 'study', 'a'],
                correct: 'The researchers conducted a longitudinal study.'
              },
              // #18
              {
                type: 'short-essay',
                topic: 'Discuss the challenges of conducting qualitative research (150 words)',
                wordLimit: 150
              },
              // #19
              {
                type: 'sentence-building',
                words: ['implications', 'the', 'warrant', 'further', 'investigation'],
                correct: 'The implications warrant further investigation.'
              },
              // #20
              {
                type: 'short-essay',
                topic: 'Explain the importance of research methodology selection (150 words)',
                wordLimit: 150
              },
              // #21
              {
                type: 'sentence-building',
                words: ['conclusion', 'in', 'hypothesis', 'the', 'was', 'supported'],
                correct: 'In conclusion, the hypothesis was supported.'
              },
              // #22
              {
                type: 'short-essay',
                topic: 'Analyze the role of data collection methods in research (150 words)',
                wordLimit: 150
              },
              // #23
              {
                type: 'sentence-building',
                words: ['evidence', 'empirical', 'supports', 'theoretical', 'framework', 'the'],
                correct: 'Empirical evidence supports the theoretical framework.'
              },
              // #24
              {
                type: 'short-essay',
                topic: 'Discuss the importance of research objectives and questions (150 words)',
                wordLimit: 150
              },
              // #25
              {
                type: 'sentence-building',
                words: ['findings', 'these', 'have', 'implications', 'practical', 'significant'],
                correct: 'These findings have significant practical implications.'
              }
            ]
          }
        ]
      },
      {
        id: 'b2-3',
        title: 'Professional Development',
        description: 'Career and professional growth',
        icon: 'bx-briefcase',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              // #1 (existing)
            {
              type: 'multiple-choice',
              question: 'Which tense is used for career goals?',
              options: ['present perfect', 'future perfect', 'present continuous', 'past perfect'],
              correct: 'future perfect'
            },
            // #2
            {
              type: 'fill-blank',
              question: 'Complete: "By next year, I ___ in this position for five years"',
              answer: 'will have been working',
              hint: 'Use future perfect continuous'
            },
            // #3
            {
              type: 'multiple-choice',
              question: 'Which is the most professional way to express capability?',
              options: ['I can do it', 'I am capable of', 'I\'m able to', 'I know how to'],
              correct: 'I am capable of'
            },
            // #4
            {
              type: 'fill-blank',
              question: 'Complete: "Had I ___ the opportunity earlier, I would have taken it"',
              answer: 'been given',
              hint: 'Use past perfect passive'
            },
            // #5
            {
              type: 'multiple-choice',
              question: 'Which phrase is most appropriate in a job interview?',
              options: ['I wanna work here', 'I would like to work here', 'I want to work here', 'I wish to work here'],
              correct: 'I would like to work here'
            },
            // #6
            {
              type: 'fill-blank',
              question: 'Complete: "Should you ___ any questions, please don\'t hesitate to ask"',
              answer: 'have',
              hint: 'Use formal conditional'
            },
            // #7
            {
              type: 'multiple-choice',
              question: 'Which is the most professional way to decline?',
              options: ['I can\'t', 'I\'m afraid I won\'t be able to', 'No way', 'Not possible'],
              correct: 'I\'m afraid I won\'t be able to'
            },
            // #8
            {
              type: 'fill-blank',
              question: 'Complete: "We ___ to inform you of your successful application"',
              answer: 'are pleased',
              hint: 'Use formal expression of pleasure'
            },
            // #9
            {
              type: 'multiple-choice',
              question: 'Which is the most appropriate for professional emails?',
              options: ['Looking forward to hear from you', 'Looking forward to hearing from you', 'Hope to hear from you', 'Waiting for your reply'],
              correct: 'Looking forward to hearing from you'
            },
            // #10
            {
              type: 'fill-blank',
              question: 'Complete: "The meeting ___ postponed until further notice"',
              answer: 'has been',
              hint: 'Use present perfect passive'
            },
            // #11
            {
              type: 'multiple-choice',
              question: 'Which is the most professional way to suggest a change?',
              options: ['You should', 'I recommend that', 'You must', 'Better to'],
              correct: 'I recommend that'
            },
            // #12
            {
              type: 'fill-blank',
              question: 'Complete: "It is imperative that all employees ___ the new guidelines"',
              answer: 'follow',
              hint: 'Use subjunctive mood'
            },
            // #13
            {
              type: 'multiple-choice',
              question: 'Which is the most appropriate for expressing deadlines?',
              options: ['You need to finish by', 'The deadline is', 'You must finish by', 'Get it done by'],
              correct: 'The deadline is'
            },
            // #14
            {
              type: 'fill-blank',
              question: 'Complete: "Were ___ to arise, please contact HR immediately"',
              answer: 'any issues',
              hint: 'Use conditional with inverted structure'
            },
            // #15
            {
              type: 'multiple-choice',
              question: 'Which is the most professional way to report progress?',
              options: ['We\'re doing good', 'Progress is being made', 'Things are going well', 'It\'s going okay'],
              correct: 'Progress is being made'
            },
            // #16
            {
              type: 'fill-blank',
              question: 'Complete: "The company ___ significant growth over the past year"',
              answer: 'has experienced',
              hint: 'Use present perfect'
            },
            // #17
            {
              type: 'multiple-choice',
              question: 'Which is most appropriate for professional objectives?',
              options: ['I want to', 'My aim is to', 'I\'m gonna', 'I plan on'],
              correct: 'My aim is to'
            },
            // #18
            {
              type: 'fill-blank',
              question: 'Complete: "By the end of this quarter, we ___ our targets"',
              answer: 'will have met',
              hint: 'Use future perfect'
            },
            // #19
            {
              type: 'multiple-choice',
              question: 'Which is the most professional way to delegate?',
              options: ['Can you do this?', 'Would you please handle this?', 'You need to do this', 'This needs doing'],
              correct: 'Would you please handle this?'
            },
            // #20
            {
              type: 'fill-blank',
              question: 'Complete: "The board ___ to review the proposal next week"',
              answer: 'is scheduled',
              hint: 'Use passive voice'
            },
            // #21
            {
              type: 'multiple-choice',
              question: 'Which is most appropriate for professional feedback?',
              options: ['This isn\'t good enough', 'This requires improvement', 'This is bad', 'You need to do better'],
              correct: 'This requires improvement'
            },
            // #22
            {
              type: 'fill-blank',
              question: 'Complete: "All employees ___ to attend the annual meeting"',
              answer: 'are required',
              hint: 'Use passive obligation'
            },
            // #23
            {
              type: 'multiple-choice',
              question: 'Which is the most professional way to express agreement?',
              options: ['Yeah, sure', 'I concur', 'Okay', 'That works'],
              correct: 'I concur'
            },
            // #24
            {
              type: 'fill-blank',
              question: 'Complete: "The new policy ___ effect from next month"',
              answer: 'will take',
              hint: 'Use future simple with formal expression'
            },
            // #25
            {
              type: 'multiple-choice',
              question: 'Which is most appropriate for professional apologies?',
              options: ['Sorry about that', 'I sincerely apologize', 'My bad', 'Oops'],
              correct: 'I sincerely apologize'
            }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'I will have achieved my career goals by the end of next year',
                audio: '/audio/career_goals.mp3',
                feedback: 'Focus on the "h" sound in "have" and clear articulation of "achieved"'
              },
              {
                type: 'pronunciation',
                text: 'The quarterly performance review highlighted my strengths and weaknesses',
                audio: '/audio/performance_review.mp3',
                feedback: 'Pay attention to the "qu" sound in "quarterly" and stress on "performance"'
              },
              {
                type: 'pronunciation',
                text: 'Networking opportunities often arise at industry conferences',
                audio: '/audio/networking.mp3',
                feedback: 'Focus on the "ing" endings and clear pronunciation of "industry"'
              },
              {
                type: 'pronunciation',
                text: 'She has enhanced her leadership skills through executive coaching',
                audio: '/audio/leadership.mp3',
                feedback: 'Pay attention to the "sh" sound in "she" and stress on "leadership"'
              },
              {
                type: 'pronunciation',
                text: 'The workshop provided valuable insights into project management',
                audio: '/audio/workshop.mp3',
                feedback: 'Focus on the "sh" sound in "workshop" and linking between "valuable" and "insights"'
              },
              {
                type: 'pronunciation',
                text: 'Continuous professional development is essential in today\'s job market',
                audio: '/audio/cpd.mp3',
                feedback: 'Pay attention to the stress pattern in "continuous" and "professional"'
              },
              {
                type: 'pronunciation',
                text: 'I have been working on improving my presentation skills',
                audio: '/audio/presentation.mp3',
                feedback: 'Focus on the "ing" sound in "working" and clear articulation of "presentation"'
              },
              {
                type: 'pronunciation',
                text: 'The mentorship program has accelerated my career progression',
                audio: '/audio/mentorship.mp3',
                feedback: 'Pay attention to the "sh" sound in "mentorship" and stress on "accelerated"'
              },
              {
                type: 'pronunciation',
                text: 'She negotiated a promotion based on her recent accomplishments',
                audio: '/audio/promotion.mp3',
                feedback: 'Focus on the stress in "negotiated" and clear pronunciation of "accomplishments"'
              },
              {
                type: 'pronunciation',
                text: 'The company offers reimbursement for professional certifications',
                audio: '/audio/certifications.mp3',
                feedback: 'Pay attention to the "r" sound in "reimbursement" and stress pattern in "certifications"'
              },
              {
                type: 'pronunciation',
                text: 'Developing cross-functional expertise has enhanced my versatility',
                audio: '/audio/cross_functional.mp3',
                feedback: 'Focus on the clear pronunciation of "cross-functional" and stress on "expertise"'
              },
              {
                type: 'pronunciation',
                text: 'The annual appraisal identified several areas for improvement',
                audio: '/audio/appraisal.mp3',
                feedback: 'Pay attention to the "ai" sound in "appraisal" and linking between words'
              },
              {
                type: 'pronunciation',
                text: 'I have enrolled in an online course to upskill in digital marketing',
                audio: '/audio/upskill.mp3',
                feedback: 'Focus on the clear articulation of "enrolled" and stress on "upskill"'
              },
              {
                type: 'pronunciation',
                text: 'The feedback from my colleagues was constructive and actionable',
                audio: '/audio/feedback.mp3',
                feedback: 'Pay attention to the "ee" sound in "feedback" and stress pattern in "constructive"'
              },
              {
                type: 'pronunciation',
                text: 'She has demonstrated exceptional interpersonal skills in team settings',
                audio: '/audio/interpersonal.mp3',
                feedback: 'Focus on the clear pronunciation of "interpersonal" and linking between words'
              },
              {
                type: 'pronunciation',
                text: 'The training session emphasized the importance of time management',
                audio: '/audio/time_management.mp3',
                feedback: 'Pay attention to the "tr" sound in "training" and stress on "emphasized"'
              },
              {
                type: 'pronunciation',
                text: 'I am seeking opportunities to broaden my professional network',
                audio: '/audio/network.mp3',
                feedback: 'Focus on the "ee" sound in "seeking" and clear articulation of "broaden"'
              },
              {
                type: 'pronunciation',
                text: 'The curriculum vitae should highlight relevant qualifications and experience',
                audio: '/audio/cv.mp3',
                feedback: 'Pay attention to the pronunciation of "curriculum vitae" and stress on "qualifications"'
              },
              {
                type: 'pronunciation',
                text: 'She has cultivated a reputation for reliability and excellence',
                audio: '/audio/reputation.mp3',
                feedback: 'Focus on the clear articulation of "cultivated" and stress pattern in "reliability"'
              },
              {
                type: 'pronunciation',
                text: 'The professional development plan outlines objectives for the next quarter',
                audio: '/audio/pdp.mp3',
                feedback: 'Pay attention to the linking between words and clear pronunciation of "objectives"'
              },
              {
                type: 'pronunciation',
                text: 'Acquiring advanced technical skills has enhanced my employability',
                audio: '/audio/technical_skills.mp3',
                feedback: 'Focus on the "qu" sound in "acquiring" and stress on "employability"'
              },
              {
                type: 'pronunciation',
                text: 'The job description emphasized analytical and problem-solving abilities',
                audio: '/audio/job_description.mp3',
                feedback: 'Pay attention to the stress pattern in "analytical" and clear articulation of "problem-solving"'
              },
              {
                type: 'pronunciation',
                text: 'She demonstrated initiative by proposing innovative solutions',
                audio: '/audio/initiative.mp3',
                feedback: 'Focus on the clear pronunciation of "initiative" and stress on "innovative"'
              },
              {
                type: 'pronunciation',
                text: 'The performance indicators reflect my contribution to organizational goals',
                audio: '/audio/indicators.mp3',
                feedback: 'Pay attention to the stress pattern in "indicators" and clear articulation of "organizational"'
              },
              {
                type: 'pronunciation',
                text: 'Effective delegation is a crucial aspect of management expertise',
                audio: '/audio/delegation.mp3',
                feedback: 'Focus on the clear pronunciation of "delegation" and stress on "crucial"'
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              // #1 (existing)
              {
                type: 'sentence-building',
                words: ['will', 'have', 'I', 'my', 'goals', 'achieved', 'career'],
                correct: 'I will have achieved my career goals.'
              },
              // #2
              {
                type: 'short-essay',
                topic: 'Write a cover letter for your dream job position (150 words)',
                wordLimit: 150
              },
              // #3
              {
                type: 'sentence-building',
                words: ['experience', 'extensive', 'have', 'I', 'field', 'this', 'in'],
                correct: 'I have extensive experience in this field.'
              },
              // #4
              {
                type: 'short-essay',
                topic: 'Describe your most significant professional achievement (150 words)',
                wordLimit: 150
              },
              // #5
              {
                type: 'sentence-building',
                words: ['team', 'the', 'has', 'exceeded', 'expectations', 'quarterly'],
                correct: 'The team has exceeded quarterly expectations.'
              },
              // #6
              {
                type: 'short-essay',
                topic: 'Write a proposal for improving workplace efficiency (150 words)',
                wordLimit: 150
              },
              // #7
              {
                type: 'sentence-building',
                words: ['meeting', 'the', 'scheduled', 'been', 'has', 'tomorrow', 'for'],
                correct: 'The meeting has been scheduled for tomorrow.'
              },
              // #8
              {
                type: 'short-essay',
                topic: 'Explain how you would handle a difficult workplace situation (150 words)',
                wordLimit: 150
              },
              // #9
              {
                type: 'sentence-building',
                words: ['feedback', 'constructive', 'provided', 'manager', 'the', 'has'],
                correct: 'The manager has provided constructive feedback.'
              },
              // #10
              {
                type: 'short-essay',
                topic: 'Write a report on recent team performance (150 words)',
                wordLimit: 150
              },
              // #11
              {
                type: 'sentence-building',
                words: ['project', 'the', 'completed', 'be', 'will', 'schedule', 'on'],
                correct: 'The project will be completed on schedule.'
              },
              // #12
              {
                type: 'short-essay',
                topic: 'Describe your ideal work environment and culture (150 words)',
                wordLimit: 150
              },
              // #13
              {
                type: 'sentence-building',
                words: ['skills', 'professional', 'my', 'continuously', 'developing', 'am', 'I'],
                correct: 'I am continuously developing my professional skills.'
              },
              // #14
              {
                type: 'short-essay',
                topic: 'Write an email requesting a meeting with senior management (150 words)',
                wordLimit: 150
              },
              // #15
              {
                type: 'sentence-building',
                words: ['strategy', 'implementation', 'successful', 'led', 'to', 'the'],
                correct: 'The implementation led to successful strategy.'
              },
              // #16
              {
                type: 'short-essay',
                topic: 'Outline your five-year career development plan (150 words)',
                wordLimit: 150
              },
              // #17
              {
                type: 'sentence-building',
                words: ['collaboration', 'team', 'essential', 'success', 'for', 'is'],
                correct: 'Team collaboration is essential for success.'
              },
              // #18
              {
                type: 'short-essay',
                topic: 'Write a project status update for stakeholders (150 words)',
                wordLimit: 150
              },
              // #19
              {
                type: 'sentence-building',
                words: ['objectives', 'quarterly', 'our', 'achieved', 'have', 'we'],
                correct: 'We have achieved our quarterly objectives.'
              },
              // #20
              {
                type: 'short-essay',
                topic: 'Describe how you would implement a new company policy (150 words)',
                wordLimit: 150
              },
              // #21
              {
                type: 'sentence-building',
                words: ['training', 'new', 'program', 'implemented', 'been', 'has'],
                correct: 'The new training program has been implemented.'
              },
              // #22
              {
                type: 'short-essay',
                topic: 'Write a professional development goal statement (150 words)',
                wordLimit: 150
              },
              // #23
              {
                type: 'sentence-building',
                words: ['results', 'significant', 'shown', 'initiative', 'has', 'the'],
                correct: 'The initiative has shown significant results.'
              },
              // #24
              {
                type: 'short-essay',
                topic: 'Compose a team motivation message (150 words)',
                wordLimit: 150
              },
              // #25
              {
                type: 'sentence-building',
                words: ['growth', 'opportunities', 'numerous', 'offers', 'position', 'this'],
                correct: 'This position offers numerous growth opportunities.'
              }
            ]
          }
        ]
      },
      {
        id: 'b2-4',
        title: 'Media and Journalism',
        description: 'Analyze and discuss media content',
        icon: 'bx-news',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
               // #1 (existing)
              {
                type: 'multiple-choice',
                question: 'Which tense is used for news reporting?',
                options: ['present perfect', 'past simple', 'present continuous', 'past perfect'],
                correct: 'present perfect'
              },
              // #2
              {
                type: 'fill-blank',
                question: 'Complete: "The government ___ to make an announcement tomorrow"',
                answer: 'is expected',
                hint: 'Use passive voice for news predictions'
              },
              // #3
              {
                type: 'multiple-choice',
                question: 'Which is the correct passive form for headlines?',
                options: ['Minister resigns', 'Minister has resigned', 'Minister was resigned', 'Minister is resigned'],
                correct: 'Minister resigns'
              },
              // #4
              {
                type: 'fill-blank',
                question: 'Complete: "Sources ___ that negotiations are ongoing"',
                answer: 'have confirmed',
                hint: 'Use present perfect for recent news'
              },
              // #5
              {
                type: 'multiple-choice',
                question: 'Which tense is appropriate for breaking news?',
                options: ['present simple', 'past simple', 'present continuous', 'past continuous'],
                correct: 'present continuous'
              },
              // #6
              {
                type: 'fill-blank',
                question: 'Complete: "The incident ___ place earlier this morning"',
                answer: 'took',
                hint: 'Use past simple for completed events'
              },
              // #7
              {
                type: 'multiple-choice',
                question: 'Which structure is best for reported speech in news?',
                options: [
                  'The minister says he will resign',
                  'The minister said he would resign',
                  'The minister is saying he will resign',
                  'The minister has said he will resign'
                ],
                correct: 'The minister has said he will resign'
              },
              // #8
              {
                type: 'fill-blank',
                question: 'Complete: "It ___ reported that several people were injured"',
                answer: 'has been',
                hint: 'Use passive present perfect'
              },
              // #9
              {
                type: 'multiple-choice',
                question: 'Which is correct for future news events?',
                options: [
                  'The summit will hold next week',
                  'The summit is to be held next week',
                  'The summit holds next week',
                  'The summit being held next week'
                ],
                correct: 'The summit is to be held next week'
              },
              // #10
              {
                type: 'fill-blank',
                question: 'Complete: "Witnesses ___ seeing the suspect flee the scene"',
                answer: 'reported',
                hint: 'Use past simple for witness accounts'
              },
              // #11
              {
                type: 'multiple-choice',
                question: 'Which structure is best for news analysis?',
                options: [
                  'This development means',
                  'This development would mean',
                  'This development will mean',
                  'This development meant'
                ],
                correct: 'This development means'
              },
              // #12
              {
                type: 'fill-blank',
                question: 'Complete: "The company ___ to release its annual report next month"',
                answer: 'is set',
                hint: 'Use fixed expression for scheduled events'
              },
              // #13
              {
                type: 'multiple-choice',
                question: 'Which is correct for ongoing investigations?',
                options: [
                  'Police investigate the case',
                  'Police are investigating the case',
                  'Police investigated the case',
                  'Police have investigated the case'
                ],
                correct: 'Police are investigating the case'
              },
              // #14
              {
                type: 'fill-blank',
                question: 'Complete: "The results ___ to be announced at 3 PM"',
                answer: 'are due',
                hint: 'Use expression for scheduled announcements'
              },
              // #15
              {
                type: 'multiple-choice',
                question: 'Which structure is best for quoting sources?',
                options: [
                  'According to sources say',
                  'Sources say that',
                  'As sources saying',
                  'Sources are saying that'
                ],
                correct: 'Sources say that'
              },
              // #16
              {
                type: 'fill-blank',
                question: 'Complete: "The spokesperson ___ to comment on the allegations"',
                answer: 'declined',
                hint: 'Use past simple for completed responses'
              },
              // #17
              {
                type: 'multiple-choice',
                question: 'Which is correct for headline statistics?',
                options: [
                  'Unemployment rate rises to 5%',
                  'Unemployment rate has risen to 5%',
                  'Unemployment rate rose to 5%',
                  'Unemployment rate rising to 5%'
                ],
                correct: 'Unemployment rate rises to 5%'
              },
              // #18
              {
                type: 'fill-blank',
                question: 'Complete: "Further details ___ as they become available"',
                answer: 'will be released',
                hint: 'Use passive future for upcoming information'
              },
              // #19
              {
                type: 'multiple-choice',
                question: 'Which structure is best for news updates?',
                options: [
                  'We are updating this story',
                  'We update this story',
                  'We updated this story',
                  'We have updated this story'
                ],
                correct: 'We are updating this story'
              },
              // #20
              {
                type: 'fill-blank',
                question: 'Complete: "The minister ___ to resign over the scandal"',
                answer: 'is expected',
                hint: 'Use passive voice for predictions'
              },
              // #21
              {
                type: 'multiple-choice',
                question: 'Which tense is best for historical context in news?',
                options: [
                  'The law has been implemented in 2020',
                  'The law was implemented in 2020',
                  'The law is implemented in 2020',
                  'The law had implemented in 2020'
                ],
                correct: 'The law was implemented in 2020'
              },
              // #22
              {
                type: 'fill-blank',
                question: 'Complete: "Experts ___ that the situation will improve"',
                answer: 'predict',
                hint: 'Use present simple for expert opinions'
              },
              // #23
              {
                type: 'multiple-choice',
                question: 'Which structure is best for news headlines about changes?',
                options: [
                  'Company changes its policy',
                  'Company has changed its policy',
                  'Company changing its policy',
                  'Company to change its policy'
                ],
                correct: 'Company to change its policy'
              },
              // #24
              {
                type: 'fill-blank',
                question: 'Complete: "The investigation ___ ongoing for several months"',
                answer: 'has been',
                hint: 'Use present perfect for continuing situations'
              },
              // #25
              {
                type: 'multiple-choice',
                question: 'Which is correct for news conclusions?',
                options: [
                  'This story develops',
                  'This story is developing',
                  'This story to develop',
                  'This story developed'
                ],
                correct: 'This story is developing'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'The journalist conducted an in-depth investigation into corporate corruption',
                audio: '/audio/investigation.mp3',
                feedback: 'Focus on the stress in "in-DEPTH" and clear pronunciation of "investigation"'
              },
              {
                type: 'pronunciation',
                text: 'The headline captured the essence of the breaking news story',
                audio: '/audio/headline.mp3',
                feedback: 'Pay attention to the "h" sound in "headline" and stress on "breaking"'
              },
              {
                type: 'pronunciation',
                text: 'She interviewed the key witness for an exclusive report',
                audio: '/audio/interview.mp3',
                feedback: 'Focus on the stress pattern in "interviewed" and clear pronunciation of "exclusive"'
              },
              {
                type: 'pronunciation',
                text: 'The editorial criticized the government\'s recent policy decisions',
                audio: '/audio/editorial.mp3',
                feedback: 'Pay attention to the stress in "edi-TOR-ial" and linking between words'
              },
              {
                type: 'pronunciation',
                text: 'Media coverage of the event was both extensive and biased',
                audio: '/audio/coverage.mp3',
                feedback: 'Focus on the clear articulation of "coverage" and stress on "extensive"'
              },
              {
                type: 'pronunciation',
                text: 'The documentary highlighted the plight of refugees worldwide',
                audio: '/audio/documentary.mp3',
                feedback: 'Pay attention to the stress pattern in "documentary" and clear pronunciation of "plight"'
              },
              {
                type: 'pronunciation',
                text: 'The press release announced the launch of their innovative platform',
                audio: '/audio/press_release.mp3',
                feedback: 'Focus on the "pr" sound in "press" and stress on "innovative"'
              },
              {
                type: 'pronunciation',
                text: 'Social media has transformed how news is disseminated globally',
                audio: '/audio/social_media.mp3',
                feedback: 'Pay attention to the clear articulation of "disseminated" and stress on "transformed"'
              },
              {
                type: 'pronunciation',
                text: 'The reporter verified the facts before publishing the article',
                audio: '/audio/verified.mp3',
                feedback: 'Focus on the "v" sound in "verified" and linking between "facts" and "before"'
              },
              {
                type: 'pronunciation',
                text: 'The broadcast was interrupted due to technical difficulties',
                audio: '/audio/broadcast.mp3',
                feedback: 'Pay attention to the "br" sound in "broadcast" and stress on "technical"'
              },
              {
                type: 'pronunciation',
                text: 'Investigative journalism often exposes corruption and malpractice',
                audio: '/audio/investigative.mp3',
                feedback: 'Focus on the clear pronunciation of "investigative" and stress pattern in "corruption"'
              },
              {
                type: 'pronunciation',
                text: 'The feature article explored the implications of artificial intelligence',
                audio: '/audio/feature.mp3',
                feedback: 'Pay attention to the "f" sound in "feature" and clear articulation of "implications"'
              },
              {
                type: 'pronunciation',
                text: 'The correspondent reported live from the conflict zone',
                audio: '/audio/correspondent.mp3',
                feedback: 'Focus on the stress pattern in "correspondent" and clear pronunciation of "conflict"'
              },
              {
                type: 'pronunciation',
                text: 'Media literacy is essential in the era of misinformation',
                audio: '/audio/literacy.mp3',
                feedback: 'Pay attention to the clear articulation of "literacy" and stress on "misinformation"'
              },
              {
                type: 'pronunciation',
                text: 'The publication faced allegations of sensationalism and bias',
                audio: '/audio/allegations.mp3',
                feedback: 'Focus on the stress in "alle-GA-tions" and clear pronunciation of "sensationalism"'
              },
              {
                type: 'pronunciation',
                text: 'The podcast discussed controversial topics with notable experts',
                audio: '/audio/podcast.mp3',
                feedback: 'Pay attention to the "pod" sound in "podcast" and stress on "controversial"'
              },
              {
                type: 'pronunciation',
                text: 'She cited reliable sources to substantiate her claims',
                audio: '/audio/cited.mp3',
                feedback: 'Focus on the "c" sound in "cited" and clear articulation of "substantiate"'
              },
              {
                type: 'pronunciation',
                text: 'The op-ed piece sparked intense debate among readers',
                audio: '/audio/op-ed.mp3',
                feedback: 'Pay attention to the pronunciation of "op-ed" and stress on "intense"'
              },
              {
                type: 'pronunciation',
                text: 'The newspaper retracted the statement following complaints',
                audio: '/audio/retracted.mp3',
                feedback: 'Focus on the clear pronunciation of "retracted" and linking between words'
              },
              {
                type: 'pronunciation',
                text: 'Digital media platforms have revolutionized news consumption',
                audio: '/audio/digital_media.mp3',
                feedback: 'Pay attention to the stress in "digi-TAL" and clear articulation of "revolutionized"'
              },
              {
                type: 'pronunciation',
                text: 'The photojournalist captured the aftermath of the natural disaster',
                audio: '/audio/photojournalist.mp3',
                feedback: 'Focus on the stress pattern in "photojournalist" and clear pronunciation of "aftermath"'
              },
              {
                type: 'pronunciation',
                text: 'Ethical considerations are paramount in responsible journalism',
                audio: '/audio/ethical.mp3',
                feedback: 'Pay attention to the "th" sound in "ethical" and stress on "paramount"'
              },
              {
                type: 'pronunciation',
                text: 'The anchor delivered the breaking news with composure',
                audio: '/audio/anchor.mp3',
                feedback: 'Focus on the clear pronunciation of "anchor" and stress on "composure"'
              },
              {
                type: 'pronunciation',
                text: 'Freedom of the press is a fundamental democratic principle',
                audio: '/audio/freedom.mp3',
                feedback: 'Pay attention to the "fr" sound in "freedom" and clear articulation of "fundamental"'
              },
              {
                type: 'pronunciation',
                text: 'The media conglomerate acquired several local news outlets',
                audio: '/audio/conglomerate.mp3',
                feedback: 'Focus on the stress pattern in "con-GLO-merate" and clear pronunciation of "acquired"'
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              // #1
              {
                type: 'sentence-building',
                words: ['the', 'journalist', 'conducting', 'is', 'an', 'interview', 'with', 'the', 'minister'],
                correct: 'The journalist is conducting an interview with the minister.'
              },
              // #2
              {
                type: 'short-essay',
                topic: 'Discuss the role of social media in modern journalism and how it has changed news reporting (150 words)',
                wordLimit: 150
              },
              // #3
              {
                type: 'sentence-building',
                words: ['breaking', 'news', 'reported', 'was', 'the', 'by', 'all', 'major', 'outlets'],
                correct: 'The breaking news was reported by all major outlets.'
              },
              // #4
              {
                type: 'short-essay',
                topic: 'Write a pitch to an editor for a story about environmental issues in your local community (150 words)',
                wordLimit: 150
              },
              // #5
              {
                type: 'sentence-building',
                words: ['has', 'been', 'criticized', 'for', 'biased', 'the', 'publication', 'coverage'],
                correct: 'The publication has been criticized for biased coverage.'
              },
              // #6
              {
                type: 'short-essay',
                topic: 'Write a review of a documentary you have recently watched, focusing on its journalistic merits (150 words)',
                wordLimit: 150
              },
              // #7
              {
                type: 'sentence-building',
                words: ['are', 'sources', 'their', 'protecting', 'journalists', 'confidential'],
                correct: 'Journalists are protecting their confidential sources.'
              },
              // #8
              {
                type: 'short-essay',
                topic: 'Describe the ethical challenges faced by journalists when reporting on sensitive issues (150 words)',
                wordLimit: 150
              },
              // #9
              {
                type: 'sentence-building',
                words: ['editorial', 'discusses', 'the', 'implications', 'of', 'the', 'new', 'media', 'law'],
                correct: 'The editorial discusses the implications of the new media law.'
              },
              // #10
              {
                type: 'short-essay',
                topic: 'Write a cover letter applying for a position as a digital content editor at a news website (150 words)',
                wordLimit: 150
              },
              // #11
              {
                type: 'sentence-building',
                words: ['freedom', 'of', 'press', 'is', 'essential', 'for', 'democracy', 'the'],
                correct: 'Freedom of the press is essential for democracy.'
              },
              // #12
              {
                type: 'short-essay',
                topic: 'Explain how fact-checking contributes to journalistic integrity in the era of fake news (150 words)',
                wordLimit: 150
              },
              // #13
              {
                type: 'sentence-building',
                words: ['was', 'the', 'broadcast', 'interrupted', 'by', 'breaking', 'news', 'alert', 'a'],
                correct: 'The broadcast was interrupted by a breaking news alert.'
              },
              // #14
              {
                type: 'short-essay',
                topic: 'Write a proposal for a podcast series focusing on investigative journalism (150 words)',
                wordLimit: 150
              },
              // #15
              {
                type: 'sentence-building',
                words: ['story', 'been', 'by', 'has', 'the', 'corroborated', 'multiple', 'sources'],
                correct: 'The story has been corroborated by multiple sources.'
              },
              // #16
              {
                type: 'short-essay',
                topic: 'Discuss the impact of citizen journalism on traditional news reporting (150 words)',
                wordLimit: 150
              },
              // #17
              {
                type: 'sentence-building',
                words: ['whistleblower', 'revealed', 'the', 'confidential', 'information', 'to', 'the', 'press'],
                correct: 'The whistleblower revealed confidential information to the press.'
              },
              // #18
              {
                type: 'short-essay',
                topic: 'Write a reflection on the challenges of maintaining objectivity in journalism (150 words)',
                wordLimit: 150
              },
              // #19
              {
                type: 'sentence-building',
                words: ['press', 'conference', 'held', 'was', 'the', 'by', 'the', 'spokesperson', 'yesterday'],
                correct: 'The press conference was held by the spokesperson yesterday.'
              },
              // #20
              {
                type: 'short-essay',
                topic: 'Describe how you would approach covering a controversial political event for a news outlet (150 words)',
                wordLimit: 150
              },
              // #21
              {
                type: 'sentence-building',
                words: ['deadline', 'journalist', 'the', 'working', 'is', 'meet', 'to', 'the', 'tight'],
                correct: 'The journalist is working to meet the tight deadline.'
              },
              // #22
              {
                type: 'short-essay',
                topic: 'Write a response to a reader who has criticized your publication for political bias (150 words)',
                wordLimit: 150
              },
              // #23
              {
                type: 'sentence-building',
                words: ['headline', 'attention', 'the', 'grabbing', 'was', 'front', 'on', 'page', 'the'],
                correct: 'The attention-grabbing headline was on the front page.'
              },
              // #24
              {
                type: 'short-essay',
                topic: 'Explain how multimedia elements enhance digital journalism (150 words)',
                wordLimit: 150
              },
              // #25
              {
                type: 'sentence-building',
                words: ['interview', 'exclusive', 'an', 'secured', 'reporter', 'with', 'the', 'celebrity', 'the'],
                correct: 'The reporter secured an exclusive interview with the celebrity.'
              }
            ]
          }
        ]
      },
      {
        id: 'b2-5',
        title: 'Science and Technology',
        description: 'Discuss scientific and technological advances',
        icon: 'bx-devices',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              // #1
              {
                type: 'multiple-choice',
                question: 'Which term describes the process of teaching machines to learn from data?',
                options: ['artificial intelligence', 'machine learning', 'data mining', 'neural networking'],
                correct: 'machine learning'
              },
              // #2
              {
                type: 'fill-blank',
                question: 'Scientists ___ a breakthrough in quantum computing last month.',
                answer: 'announced',
                hint: 'Use past simple for a completed action'
              },
              // #3
              {
                type: 'multiple-choice',
                question: 'What does IoT stand for in technology?',
                options: ['Internet of Things', 'Integration of Technology', 'Input Output Transfer', 'Intelligent Online Tools'],
                correct: 'Internet of Things'
              },
              // #4
              {
                type: 'fill-blank',
                question: 'By 2030, renewable energy sources ___ more than 50% of global energy needs.',
                answer: 'will have supplied',
                hint: 'Use future perfect for a completed action in the future'
              },
              // #5
              {
                type: 'multiple-choice',
                question: 'Which technology is primarily used for secure cryptocurrency transactions?',
                options: ['cloud computing', 'blockchain', 'virtual reality', 'augmented reality'],
                correct: 'blockchain'
              },
              // #6
              {
                type: 'fill-blank',
                question: 'The new vaccine ___ extensively before being approved for public use.',
                answer: 'had been tested',
                hint: 'Use past perfect passive for an action completed before another past action'
              },
              // #7
              {
                type: 'multiple-choice',
                question: 'What type of radiation is used in medical imaging procedures like X-rays?',
                options: ['infrared radiation', 'ultraviolet radiation', 'ionizing radiation', 'radio waves'],
                correct: 'ionizing radiation'
              },
              // #8
              {
                type: 'fill-blank',
                question: 'The research team ___ on this project for three years before making their discovery.',
                answer: 'had been working',
                hint: 'Use past perfect continuous for an action that continued up to a point in the past'
              },
              // #9
              {
                type: 'multiple-choice',
                question: 'Which term describes the study of the ethical implications of emerging technologies?',
                options: ['technoethics', 'digital humanities', 'cyberculture', 'technophilosophy'],
                correct: 'technoethics'
              },
              // #10
              {
                type: 'fill-blank',
                question: 'By the time the new operating system is released, developers ___ thousands of compatible applications.',
                answer: 'will have created',
                hint: 'Use future perfect for an action that will be completed before a future time'
              },
              // #11
              {
                type: 'multiple-choice',
                question: 'What does CRISPR technology primarily allow scientists to do?',
                options: ['create virtual simulations', 'edit genetic material', 'enhance digital security', 'improve wireless connectivity'],
                correct: 'edit genetic material'
              },
              // #12
              {
                type: 'fill-blank',
                question: 'The company\'s new smartphone ___ with facial recognition technology and advanced camera features.',
                answer: 'comes equipped',
                hint: 'Use present simple with a set phrase for products and features'
              },
              // #13
              {
                type: 'multiple-choice',
                question: 'Which field focuses on creating machines that can mimic human thought processes?',
                options: ['robotics', 'artificial intelligence', 'quantum computing', 'bioinformatics'],
                correct: 'artificial intelligence'
              },
              // #14
              {
                type: 'fill-blank',
                question: 'Scientists predict that self-driving cars ___ commonplace on our roads by 2035.',
                answer: 'will have become',
                hint: 'Use future perfect for an action completed in the future'
              },
              // #15
              {
                type: 'multiple-choice',
                question: 'What does API stand for in software development?',
                options: ['Advanced Programming Interface', 'Application Programming Interface', 'Automated Protocol Integration', 'Applied Program Interaction'],
                correct: 'Application Programming Interface'
              },
              // #16
              {
                type: 'fill-blank',
                question: 'The latest clinical trials ___ promising results for the experimental treatment.',
                answer: 'have shown',
                hint: 'Use present perfect for a past action with present relevance'
              },
              // #17
              {
                type: 'multiple-choice',
                question: 'Which technology enables computers to understand and interpret human language?',
                options: ['Natural Language Processing', 'Speech Recognition', 'Voice Modulation', 'Audio Analysis'],
                correct: 'Natural Language Processing'
              },
              // #18
              {
                type: 'fill-blank',
                question: 'If the experiment ___ successful, it would revolutionize our understanding of quantum physics.',
                answer: 'proves to be',
                hint: 'Use a conditional structure for a possible future outcome'
              },
              // #19
              {
                type: 'multiple-choice',
                question: 'What is the term for technology that overlays digital information onto the real world?',
                options: ['virtual reality', 'augmented reality', 'mixed reality', 'extended reality'],
                correct: 'augmented reality'
              },
              // #20
              {
                type: 'fill-blank',
                question: 'The research paper ___ in a prestigious scientific journal next month.',
                answer: 'is being published',
                hint: 'Use present continuous passive for a planned future arrangement'
              },
              // #21
              {
                type: 'multiple-choice',
                question: 'Which principle states that the number of transistors on a microchip doubles approximately every two years?',
                options: ['Einstein\'s Theory', 'Newton\'s Law', 'Moore\'s Law', 'Hawking\'s Principle'],
                correct: 'Moore\'s Law'
              },
              // #22
              {
                type: 'fill-blank',
                question: 'By the time the conference begins, the team ___ their presentation on renewable energy.',
                answer: 'will have finished',
                hint: 'Use future perfect for something completed before a future point'
              },
              // #23
              {
                type: 'multiple-choice',
                question: 'What type of energy is generated from the natural heat of the Earth?',
                options: ['solar energy', 'wind energy', 'geothermal energy', 'hydroelectric energy'],
                correct: 'geothermal energy'
              },
              // #24
              {
                type: 'fill-blank',
                question: 'The prototype ___ extensively before going into mass production.',
                answer: 'must be tested',
                hint: 'Use modal passive for necessity'
              },
              // #25
              {
                type: 'multiple-choice',
                question: 'Which technology uses radio waves to identify and track objects through attached tags?',
                options: ['GPS', 'RFID', 'Bluetooth', 'Wi-Fi'],
                correct: 'RFID'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'Scientists have made significant technological breakthroughs this year',
                audio: '/audio/technological.mp3',
                feedback: 'Focus on the stress pattern in "technoLOgical" and clear pronunciation of "breakthroughs"'
              },
              {
                type: 'pronunciation',
                text: 'Artificial intelligence is revolutionizing numerous industries',
                audio: '/audio/artificial_intelligence.mp3',
                feedback: 'Pay attention to the clear articulation of "artificial" and stress on "intelligence"'
              },
              {
                type: 'pronunciation',
                text: 'The researchers published their findings in a peer-reviewed journal',
                audio: '/audio/peer_reviewed.mp3',
                feedback: 'Focus on the "r" sound in "researchers" and linking between "peer" and "reviewed"'
              },
              {
                type: 'pronunciation',
                text: 'Quantum computing may solve problems that classical computers cannot',
                audio: '/audio/quantum.mp3',
                feedback: 'Pay attention to the "qu" sound in "quantum" and stress pattern in "computing"'
              },
              {
                type: 'pronunciation',
                text: 'The laboratory experiment yielded unexpected results',
                audio: '/audio/laboratory.mp3',
                feedback: 'Focus on the stress in "labORatory" and clear pronunciation of "experiment"'
              },
              {
                type: 'pronunciation',
                text: 'Renewable energy sources are becoming increasingly efficient',
                audio: '/audio/renewable.mp3',
                feedback: 'Pay attention to the "re" sound in "renewable" and stress on "increasingly"'
              },
              {
                type: 'pronunciation',
                text: 'The algorithm analyzes large datasets with remarkable accuracy',
                audio: '/audio/algorithm.mp3',
                feedback: 'Focus on the stress pattern in "ALgorithm" and clear articulation of "datasets"'
              },
              {
                type: 'pronunciation',
                text: 'Biotechnology has transformed medical diagnostics and treatment',
                audio: '/audio/biotechnology.mp3',
                feedback: 'Pay attention to the "bio" sound in "biotechnology" and stress on "diagnostics"'
              },
              {
                type: 'pronunciation',
                text: 'The hypothesis was confirmed through rigorous experimentation',
                audio: '/audio/hypothesis.mp3',
                feedback: 'Focus on the "th" sound in "hypothesis" and clear pronunciation of "rigorous"'
              },
              {
                type: 'pronunciation',
                text: 'Machine learning models can identify patterns in complex data',
                audio: '/audio/machine_learning.mp3',
                feedback: 'Pay attention to the "ch" sound in "machine" and linking between "patterns" and "in"'
              },
              {
                type: 'pronunciation',
                text: 'The physicist explained the theoretical implications of the discovery',
                audio: '/audio/physicist.mp3',
                feedback: 'Focus on the "ph" sound in "physicist" and stress pattern in "theoretical"'
              },
              {
                type: 'pronunciation',
                text: 'Nanotechnology operates at the molecular and atomic scale',
                audio: '/audio/nanotechnology.mp3',
                feedback: 'Pay attention to the stress in "nanoTECHnology" and clear articulation of "molecular"'
              },
              {
                type: 'pronunciation',
                text: 'The cybersecurity measures prevented unauthorized access to sensitive data',
                audio: '/audio/cybersecurity.mp3',
                feedback: 'Focus on the clear pronunciation of "cybersecurity" and stress on "unauthorized"'
              },
              {
                type: 'pronunciation',
                text: 'Genetic engineering has raised numerous ethical questions',
                audio: '/audio/genetic.mp3',
                feedback: 'Pay attention to the "g" sound in "genetic" and stress pattern in "engineering"'
              },
              {
                type: 'pronunciation',
                text: 'The empirical evidence contradicted the prevailing theory',
                audio: '/audio/empirical.mp3',
                feedback: 'Focus on the stress in "emPIRical" and clear pronunciation of "contradicted"'
              },
              {
                type: 'pronunciation',
                text: 'Cloud computing has transformed data storage and processing',
                audio: '/audio/cloud_computing.mp3',
                feedback: 'Pay attention to the "cl" sound in "cloud" and stress on "processing"'
              },
              {
                type: 'pronunciation',
                text: 'The autonomous vehicle navigates using sophisticated sensors',
                audio: '/audio/autonomous.mp3',
                feedback: 'Focus on the clear articulation of "autonomous" and stress pattern in "sophisticated"'
              },
              {
                type: 'pronunciation',
                text: 'Sustainable technologies aim to minimize environmental impact',
                audio: '/audio/sustainable.mp3',
                feedback: 'Pay attention to the "st" sound in "sustainable" and linking between "environmental" and "impact"'
              },
              {
                type: 'pronunciation',
                text: 'The innovative methodology yielded groundbreaking results',
                audio: '/audio/innovative.mp3',
                feedback: 'Focus on the stress in "inNOvative" and clear pronunciation of "groundbreaking"'
              },
              {
                type: 'pronunciation',
                text: 'Telecommunications infrastructure requires substantial investment',
                audio: '/audio/telecommunications.mp3',
                feedback: 'Pay attention to the stress pattern in "telecommuNIcations" and clear articulation of "infrastructure"'
              },
              {
                type: 'pronunciation',
                text: 'Virtual reality creates immersive digital environments',
                audio: '/audio/virtual_reality.mp3',
                feedback: 'Focus on the "v" sound in "virtual" and stress on "immersive"'
              },
              {
                type: 'pronunciation',
                text: 'The spacecraft will traverse the solar system collecting valuable data',
                audio: '/audio/spacecraft.mp3',
                feedback: 'Pay attention to the "sp" sound in "spacecraft" and clear pronunciation of "traverse"'
              },
              {
                type: 'pronunciation',
                text: 'Technological obsolescence is accelerating in the digital era',
                audio: '/audio/obsolescence.mp3',
                feedback: 'Focus on the stress pattern in "obsoLEScence" and clear articulation of "accelerating"'
              },
              {
                type: 'pronunciation',
                text: 'The research paper analyzes the correlation between variables',
                audio: '/audio/correlation.mp3',
                feedback: 'Pay attention to the "r" sound in "research" and stress on "correlation"'
              },
              {
                type: 'pronunciation',
                text: 'Blockchain technology ensures transparent and secure transactions',
                audio: '/audio/blockchain.mp3',
                feedback: 'Focus on the clear pronunciation of "blockchain" and linking between "transparent" and "and"'
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              // #1
              {
                type: 'sentence-building',
                words: ['scientists', 'are', 'developing', 'new', 'technologies', 'to', 'combat', 'climate', 'change'],
                correct: 'Scientists are developing new technologies to combat climate change.'
              },
              // #2
              {
                type: 'short-essay',
                topic: 'Discuss the ethical implications of artificial intelligence in healthcare and how it might change patient care in the future (150 words)',
                wordLimit: 150
              },
              // #3
              {
                type: 'sentence-building',
                words: ['renewable', 'energy', 'sources', 'are', 'becoming', 'increasingly', 'important', 'worldwide'],
                correct: 'Renewable energy sources are becoming increasingly important worldwide.'
              },
              // #4
              {
                type: 'short-essay',
                topic: 'Explain how quantum computing differs from traditional computing and its potential applications in solving complex problems (150 words)',
                wordLimit: 150
              },
              // #5
              {
                type: 'sentence-building',
                words: ['the', 'researchers', 'have', 'published', 'their', 'findings', 'in', 'a', 'scientific', 'journal'],
                correct: 'The researchers have published their findings in a scientific journal.'
              },
              // #6
              {
                type: 'short-essay',
                topic: 'Describe the role of biotechnology in modern agriculture and its impact on food production and sustainability (150 words)',
                wordLimit: 150
              },
              // #7
              {
                type: 'sentence-building',
                words: ['blockchain', 'technology', 'is', 'revolutionizing', 'the', 'way', 'we', 'conduct', 'transactions'],
                correct: 'Blockchain technology is revolutionizing the way we conduct transactions.'
              },
              // #8
              {
                type: 'short-essay',
                topic: 'Discuss the benefits and challenges of implementing smart city technologies in urban environments (150 words)',
                wordLimit: 150
              },
              // #9
              {
                type: 'sentence-building',
                words: ['autonomous', 'vehicles', 'use', 'advanced', 'sensors', 'to', 'navigate', 'safely'],
                correct: 'Autonomous vehicles use advanced sensors to navigate safely.'
              },
              // #10
              {
                type: 'short-essay',
                topic: 'Explain how virtual reality technology is being used in education and training across different industries (150 words)',
                wordLimit: 150
              },
              // #11
              {
                type: 'sentence-building',
                words: ['genetic', 'engineering', 'has', 'raised', 'important', 'ethical', 'and', 'social', 'concerns'],
                correct: 'Genetic engineering has raised important ethical and social concerns.'
              },
              // #12
              {
                type: 'short-essay',
                topic: 'Discuss the impact of social media algorithms on how information and news are shared and consumed online (150 words)',
                wordLimit: 150
              },
              // #13
              {
                type: 'sentence-building',
                words: ['data', 'scientists', 'are', 'analyzing', 'large', 'datasets', 'to', 'identify', 'patterns'],
                correct: 'Data scientists are analyzing large datasets to identify patterns.'
              },
              // #14
              {
                type: 'short-essay',
                topic: 'Describe how 3D printing technology is transforming manufacturing and its potential future applications (150 words)',
                wordLimit: 150
              },
              // #15
              {
                type: 'sentence-building',
                words: ['cybersecurity', 'experts', 'are', 'developing', 'new', 'methods', 'to', 'protect', 'sensitive', 'information'],
                correct: 'Cybersecurity experts are developing new methods to protect sensitive information.'
              },
              // #16
              {
                type: 'short-essay',
                topic: 'Explain the concept of the Internet of Things (IoT) and how it is changing our daily lives and homes (150 words)',
                wordLimit: 150
              },
              // #17
              {
                type: 'sentence-building',
                words: ['space', 'exploration', 'has', 'led', 'to', 'numerous', 'technological', 'advancements'],
                correct: 'Space exploration has led to numerous technological advancements.'
              },
              // #18
              {
                type: 'short-essay',
                topic: 'Discuss the challenges and opportunities of renewable energy adoption in developing countries (150 words)',
                wordLimit: 150
              },
              // #19
              {
                type: 'sentence-building',
                words: ['nanotechnology', 'operates', 'at', 'the', 'molecular', 'and', 'atomic', 'scale'],
                correct: 'Nanotechnology operates at the molecular and atomic scale.'
              },
              // #20
              {
                type: 'short-essay',
                topic: 'Explain how machine learning algorithms are being used to improve healthcare diagnostics and treatment (150 words)',
                wordLimit: 150
              },
              // #21
              {
                type: 'sentence-building',
                words: ['wearable', 'devices', 'can', 'monitor', 'various', 'aspects', 'of', 'physical', 'health'],
                correct: 'Wearable devices can monitor various aspects of physical health.'
              },
              // #22
              {
                type: 'short-essay',
                topic: 'Discuss the environmental impact of electronic waste and potential technological solutions (150 words)',
                wordLimit: 150
              },
              // #23
              {
                type: 'sentence-building',
                words: ['cloud', 'computing', 'enables', 'access', 'to', 'data', 'from', 'anywhere', 'in', 'the', 'world'],
                correct: 'Cloud computing enables access to data from anywhere in the world.'
              },
              // #24
              {
                type: 'short-essay',
                topic: 'Describe how robotics is changing manufacturing industries and the implications for the workforce (150 words)',
                wordLimit: 150
              },
              // #25
              {
                type: 'sentence-building',
                words: ['gene', 'therapy', 'offers', 'promising', 'treatments', 'for', 'previously', 'incurable', 'diseases'],
                correct: 'Gene therapy offers promising treatments for previously incurable diseases.'
              }
            ]
          }
        ]
      },
      {
        id: 'b2-6',
        title: 'Global Issues',
        description: 'Discuss complex global challenges',
        icon: 'bx-globe',
        learningMethods: [
          {
            id: 'grammar',
            name: 'Grammar',
            icon: 'bx-book-content',
            description: 'Learn the grammar rules and structures',
            exercises: [
              // #1 - Opción múltiple sobre efecto invernadero
              {
                type: 'multiple-choice',
                question: 'Which term describes the process where greenhouse gases trap heat in the Earth\'s atmosphere?',
                options: ['global cooling', 'greenhouse effect', 'ozone depletion', 'acid rain'],
                correct: 'greenhouse effect'
              },
              // #2 - Opción múltiple sobre neutralidad de carbono
              {
                type: 'multiple-choice',
                question: 'What does the term "carbon neutral" mean?',
                options: [
                  'having zero carbon atoms in a molecule', 
                  'balancing carbon dioxide emissions with an equivalent amount of carbon removal', 
                  'using only carbon-free energy sources', 
                  'being located in a carbon-free zone'
                ],
                correct: 'balancing carbon dioxide emissions with an equivalent amount of carbon removal'
              },
              // #3 - Opción múltiple sobre deforestación
              {
                type: 'multiple-choice',
                question: 'Which of the following is considered a major driver of deforestation?',
                options: ['urban gardening', 'organic farming', 'commercial agriculture', 'renewable energy'],
                correct: 'commercial agriculture'
              },
              
              // #4 - Opción múltiple sobre ONG
              {
                type: 'multiple-choice',
                question: 'What does the acronym NGO stand for in the context of global development?',
                options: ['National Geographic Organization', 'New Global Order', 'Non-Governmental Organization', 'Next Generation Operation'],
                correct: 'Non-Governmental Organization'
              },
              
              // #5 - Opción múltiple sobre acuerdos internacionales
              {
                type: 'multiple-choice',
                question: 'Which international agreement aims to reduce global carbon emissions?',
                options: ['Geneva Convention', 'Paris Agreement', 'NAFTA', 'Kyoto Protocol'],
                correct: 'Paris Agreement'
              },
              
              // #6 - Opción múltiple sobre recursos energéticos
              {
                type: 'multiple-choice',
                question: 'Which of the following is NOT a renewable energy source?',
                options: ['solar power', 'wind energy', 'natural gas', 'geothermal energy'],
                correct: 'natural gas'
              },
              
              // #7 - Opción múltiple sobre desarrollo sostenible
              {
                type: 'multiple-choice',
                question: 'What is "sustainable development"?',
                options: [
                  'economic growth at any environmental cost', 
                  'development that meets present needs without compromising future generations', 
                  'rapid industrialization to improve living standards', 
                  'government-controlled economic planning'
                ],
                correct: 'development that meets present needs without compromising future generations'
              },
              
              // #8 - Opción múltiple sobre polución plástica
              {
                type: 'multiple-choice',
                question: 'Which of the following contributes most to marine plastic pollution?',
                options: ['fishing nets', 'single-use plastic bottles', 'microbeads in cosmetics', 'plastic bags'],
                correct: 'single-use plastic bottles'
              },
              
              // #9 - Opción múltiple sobre refugiados
              {
                type: 'multiple-choice',
                question: 'Which organization is primarily responsible for addressing global refugee crises?',
                options: ['WHO', 'UNESCO', 'UNHCR', 'WTO'],
                correct: 'UNHCR'
              },
              
              // #10 - Opción múltiple sobre escasez de agua
              {
                type: 'multiple-choice',
                question: 'What percentage of the world\'s population faces water scarcity issues?',
                options: ['around 10%', 'around 25%', 'around 40%', 'more than 50%'],
                correct: 'around 40%'
              },
              
              // #11 - Opción múltiple sobre greenwashing
              {
                type: 'multiple-choice',
                question: 'What is "greenwashing"?',
                options: [
                  'a technique for cleaning industrial waste', 
                  'when companies falsely claim their products are environmentally friendly', 
                  'a process for filtering water in natural habitats', 
                  'planting trees to offset carbon emissions'
                ],
                correct: 'when companies falsely claim their products are environmentally friendly'
              },
              
              // #12 - Opción múltiple sobre seguridad alimentaria
              {
                type: 'multiple-choice',
                question: 'Which global issue refers to ensuring all people have access to sufficient, safe, and nutritious food?',
                options: ['food security', 'nutritional autonomy', 'sustainable diet', 'agricultural independence'],
                correct: 'food security'
              },
              
              // #13 - Opción múltiple sobre biodiversidad
              {
                type: 'multiple-choice',
                question: 'What is biodiversity?',
                options: [
                  'a type of sustainable farming', 
                  'the variety of plant and animal life in a particular habitat', 
                  'a governmental environmental policy', 
                  'an international conservation organization'
                ],
                correct: 'the variety of plant and animal life in a particular habitat'
              },
              
              // #14 - Completar espacio sobre activismo
              {
                type: 'fill-blank',
                question: 'Environmental activists are _______ for stronger regulations on plastic production.',
                answer: 'advocating',
                hint: 'Verb that means to publicly support a policy'
              },
              
              // #15 - Completar espacio sobre energía renovable
              {
                type: 'fill-blank',
                question: 'Renewable energy sources have become more _______ in recent years, making them more competitive with fossil fuels.',
                answer: 'affordable',
                hint: 'Adjective describing something that can be paid for without difficulty'
              },
              
              // #16 - Completar espacio sobre especies en peligro
              {
                type: 'fill-blank',
                question: 'Many species are facing _______ due to habitat loss and climate change.',
                answer: 'extinction',
                hint: 'Noun describing when a species dies out completely'
              },
              
              // #17 - Completar espacio sobre contaminación
              {
                type: 'fill-blank',
                question: 'The _______ of plastic waste in our oceans is having devastating effects on marine life.',
                answer: 'accumulation',
                hint: 'Noun referring to the gradual gathering of something'
              },
              
              // #18 - Completar espacio sobre advertencias científicas
              {
                type: 'fill-blank',
                question: 'Scientists have _______ that we need to take immediate action to prevent catastrophic climate change.',
                answer: 'warned',
                hint: 'Past tense verb meaning to alert someone about a potential danger'
              },
              
              // #19 - Completar espacio sobre acción internacional
              {
                type: 'fill-blank',
                question: 'International _______ is essential to address global challenges like climate change effectively.',
                answer: 'cooperation',
                hint: 'Noun that means working together toward a common goal'
              },
              
              // #20 - Completar espacio sobre consumo sostenible
              {
                type: 'fill-blank',
                question: 'Consumers can make more _______ choices by selecting products with minimal environmental impact.',
                answer: 'sustainable',
                hint: 'Adjective describing practices that can be maintained long-term without depleting resources'
              },
              
              // #21 - Completar espacio sobre impacto ambiental
              {
                type: 'fill-blank',
                question: 'The environmental _______ of fast fashion includes water pollution, textile waste, and carbon emissions.',
                answer: 'impact',
                hint: 'Noun describing the effect or influence of something'
              },
              
              // #22 - Completar espacio sobre niveles del mar
              {
                type: 'fill-blank',
                question: 'Rising sea levels _______ coastal communities and could displace millions of people.',
                answer: 'threaten',
                hint: 'Verb meaning to cause danger to someone or something'
              },
              
              // #23 - Completar espacio sobre conservación
              {
                type: 'fill-blank',
                question: 'Wildlife _______ efforts aim to protect endangered species and their habitats.',
                answer: 'conservation',
                hint: 'Noun referring to protection of natural resources'
              },
              
              // #24 - Completar espacio sobre cambio climático
              {
                type: 'fill-blank',
                question: 'Climate change _______ such as extreme weather events are becoming more frequent worldwide.',
                answer: 'consequences',
                hint: 'Noun meaning the results or effects of an action or condition'
              },
              
              // #25 - Completar espacio sobre desigualdad global
              {
                type: 'fill-blank',
                question: 'Economic _______ between nations affects their ability to respond to global environmental challenges.',
                answer: 'inequality',
                hint: 'Noun describing the uneven distribution of resources or opportunities'
              }
            ]
          },
          {
            id: 'speaking',
            name: 'Speaking',
            icon: 'bx-microphone',
            description: 'Practice pronunciation and speaking skills',
            exercises: [
              {
                type: 'pronunciation',
                text: 'Climate change has accelerated dramatically in recent decades',
                audio: '/audio/climate-change.mp3',
                feedback: 'Focus on clear articulation of "climate" and proper stress in "draMAticallY"'
              },

              // #2
              {
                type: 'pronunciation',
                text: 'Renewable energy sources are essential for a sustainable future',
                audio: '/audio/renewable-energy.mp3',
                feedback: 'Pay attention to the word "renewable" /rɪˈnjuːəbl/ and the rhythm of "sustainable future"'
              },

              // #3
              {
                type: 'pronunciation',
                text: 'Deforestation contributes significantly to biodiversity loss',
                audio: '/audio/deforestation.mp3',
                feedback: 'Practice the long word "deforestation" and the stress pattern in "biodiversity" (bio-di-VER-sity)'
              },

              // #4
              {
                type: 'pronunciation',
                text: 'Ocean acidification threatens marine ecosystems worldwide',
                audio: '/audio/ocean-acidification.mp3',
                feedback: 'Focus on linking between "ocean" and "acidification" and correct pronunciation of "ecosystems" /ˈiːkəʊsɪstəmz/'
              },

              // #5
              {
                type: 'pronunciation',
                text: 'Governments must implement effective carbon reduction policies',
                audio: '/audio/carbon-reduction.mp3',
                feedback: 'Work on the rhythm of this sentence and proper stress on "implement" (im-PLE-ment)'
              },

              // #6
              {
                type: 'pronunciation',
                text: 'Environmental degradation affects vulnerable communities disproportionately',
                audio: '/audio/environmental-degradation.mp3',
                feedback: 'Practice the difficult word "disproportionately" and clear articulation of "vulnerable"'
              },

              // #7
              {
                type: 'pronunciation',
                text: 'Sustainable development balances economic growth with environmental protection',
                audio: '/audio/sustainable-development.mp3',
                feedback: 'Mind the stress in "sustainable" (sus-TAIN-able) and try to maintain smooth rhythm through this long sentence'
              },

              // #8
              {
                type: 'pronunciation',
                text: 'Extreme weather events have become increasingly frequent and severe',
                audio: '/audio/extreme-weather.mp3',
                feedback: 'Practice the /ks/ sound in "extreme" and the stress pattern of "increasingly" (in-CREAS-ing-ly)'
              },

              // #9
              {
                type: 'pronunciation',
                text: 'Global cooperation is necessary to address transboundary pollution',
                audio: '/audio/global-cooperation.mp3',
                feedback: 'Focus on the challenging word "transboundary" and the linking between words'
              },

              // #10
              {
                type: 'pronunciation',
                text: 'The circular economy aims to eliminate waste and promote continuous resource use',
                audio: '/audio/circular-economy.mp3',
                feedback: 'Practice the smooth transition between "eliminate" and "waste" and the stress in "continuous" (con-TIN-u-ous)'
              },

              // #11
              {
                type: 'pronunciation',
                text: 'Rising sea levels threaten coastal cities and island nations',
                audio: '/audio/rising-sea-levels.mp3',
                feedback: 'Pay attention to the /z/ sound in "rising" and clear pronunciation of "coastal"'
              },

              // #12
              {
                type: 'pronunciation',
                text: 'Conservation efforts must prioritize endangered species and habitats',
                audio: '/audio/conservation-efforts.mp3',
                feedback: 'Focus on the word "prioritize" (PRI-or-i-tize) and the rhythm of the full sentence'
              },

              // #13
              {
                type: 'pronunciation',
                text: 'Indigenous communities often possess valuable environmental knowledge',
                audio: '/audio/indigenous-communities.mp3',
                feedback: 'Practice clear pronunciation of "indigenous" (in-DI-ge-nous) and the stress in "valuable" (VA-lu-able)'
              },

              // #14
              {
                type: 'pronunciation',
                text: 'Technological innovation plays a crucial role in addressing climate challenges',
                audio: '/audio/technological-innovation.mp3',
                feedback: 'Work on the rhythm of "technological innovation" and proper stress on "crucial" (CRU-cial)'
              },

              // #15
              {
                type: 'pronunciation',
                text: 'International agreements establish frameworks for environmental collaboration',
                audio: '/audio/international-agreements.mp3',
                feedback: 'Focus on the word "frameworks" and maintaining the correct intonation pattern'
              },

              // #16
              {
                type: 'pronunciation',
                text: 'Desertification threatens agricultural productivity in many regions',
                audio: '/audio/desertification.mp3',
                feedback: 'Practice the long word "desertification" and the stress pattern in "agricultural" (a-gri-CUL-tu-ral)'
              },

              // #17
              {
                type: 'pronunciation',
                text: 'Responsible consumption reduces unnecessary waste and pollution',
                audio: '/audio/responsible-consumption.mp3',
                feedback: 'Pay attention to the /s/ sound in "responsible" and linking between "waste" and "and"'
              },

              // #18
              {
                type: 'pronunciation',
                text: 'Environmental justice ensures equitable distribution of both benefits and burdens',
                audio: '/audio/environmental-justice.mp3',
                feedback: 'Practice the rhythm of this sentence and the pronunciation of "equitable" (E-qui-ta-ble)'
              },

              // #19
              {
                type: 'pronunciation',
                text: 'Greenhouse gas emissions must be substantially reduced to mitigate climate change',
                audio: '/audio/greenhouse-gas.mp3',
                feedback: 'Focus on the compound word "greenhouse" and the stress in "substantially" (sub-STAN-tial-ly)'
              },

              // #20
              {
                type: 'pronunciation',
                text: 'Plastic pollution in oceans threatens marine life and human health',
                audio: '/audio/plastic-pollution.mp3',
                feedback: 'Work on the linking between words and clear articulation of "threatens"'
              },

              // #21
              {
                type: 'pronunciation',
                text: 'Multinational corporations must adopt environmentally responsible practices',
                audio: '/audio/multinational-corporations.mp3',
                feedback: 'Practice the challenging phrase "multinational corporations" with correct word stress'
              },

              // #22
              {
                type: 'pronunciation',
                text: 'Urbanization creates challenges for sustainable infrastructure development',
                audio: '/audio/urbanization.mp3',
                feedback: 'Focus on the word "urbanization" (ur-ba-ni-ZA-tion) and the rhythm of "infrastructure development"'
              },

              // #23
              {
                type: 'pronunciation',
                text: 'Atmospheric pollution contributes to respiratory diseases worldwide',
                audio: '/audio/atmospheric-pollution.mp3',
                feedback: 'Pay attention to the word "atmospheric" (at-mos-FE-ric) and clear pronunciation of "respiratory"'
              },

              // #24
              {
                type: 'pronunciation',
                text: 'Interdisciplinary approaches are needed to solve complex environmental problems',
                audio: '/audio/interdisciplinary.mp3',
                feedback: 'Practice the long word "interdisciplinary" (in-ter-dis-CI-pli-na-ry) and maintain good rhythm'
              },

              // #25
              {
                type: 'pronunciation',
                text: 'Overpopulation exacerbates resource scarcity and environmental degradation',
                audio: '/audio/overpopulation.mp3',
                feedback: 'Focus on the challenging words "exacerbates" (eg-ZA-cer-bates) and maintaining smooth delivery'
              }
            ]
          },
          {
            id: 'writing',
            name: 'Writing',
            icon: 'bx-pen',
            description: 'Practice writing skills and sentence structure',
            exercises: [
              // #1
              {
                type: 'sentence-building',
                words: ['climate', 'change', 'threatens', 'biodiversity', 'and', 'ecological', 'systems', 'worldwide'],
                correct: 'Climate change threatens biodiversity and ecological systems worldwide.'
              },
              
              // #2
              {
                type: 'short-essay',
                topic: 'Discuss how plastic pollution affects marine ecosystems and potential solutions to this global problem (150 words)',
                wordLimit: 150
              },
              
              // #3
              {
                type: 'sentence-building',
                words: ['renewable', 'energy', 'sources', 'are', 'becoming', 'increasingly', 'affordable', 'and', 'accessible'],
                correct: 'Renewable energy sources are becoming increasingly affordable and accessible.'
              },
              
              // #4
              {
                type: 'short-essay',
                topic: 'Explain how deforestation contributes to climate change and its impact on indigenous communities (150 words)',
                wordLimit: 150
              },
              
              // #5
              {
                type: 'sentence-building',
                words: ['international', 'cooperation', 'is', 'essential', 'for', 'addressing', 'global', 'environmental', 'challenges'],
                correct: 'International cooperation is essential for addressing global environmental challenges.'
              },
              
              // #6
              {
                type: 'short-essay',
                topic: 'Discuss the relationship between poverty and access to clean water in developing nations (150 words)',
                wordLimit: 150
              },
              
              // #7
              {
                type: 'sentence-building',
                words: ['sustainable', 'agriculture', 'practices', 'can', 'help', 'reduce', 'food', 'insecurity', 'globally'],
                correct: 'Sustainable agriculture practices can help reduce food insecurity globally.'
              },
              
              // #8
              {
                type: 'short-essay',
                topic: 'Analyze how fast fashion contributes to environmental degradation and labor exploitation (150 words)',
                wordLimit: 150
              },
              
              // #9
              {
                type: 'sentence-building',
                words: ['rising', 'sea', 'levels', 'threaten', 'coastal', 'communities', 'and', 'island', 'nations'],
                correct: 'Rising sea levels threaten coastal communities and island nations.'
              },
              
              // #10
              {
                type: 'short-essay',
                topic: 'Examine the challenges and opportunities of transitioning to renewable energy sources worldwide (150 words)',
                wordLimit: 150
              },
              
              // #11
              {
                type: 'sentence-building',
                words: ['overpopulation', 'puts', 'pressure', 'on', 'natural', 'resources', 'and', 'urban', 'infrastructure'],
                correct: 'Overpopulation puts pressure on natural resources and urban infrastructure.'
              },
              
              // #12
              {
                type: 'short-essay',
                topic: 'Discuss the role of international organizations in responding to refugee crises around the world (150 words)',
                wordLimit: 150
              },
              
              // #13
              {
                type: 'sentence-building',
                words: ['carbon', 'emissions', 'must', 'be', 'reduced', 'to', 'mitigate', 'global', 'warming'],
                correct: 'Carbon emissions must be reduced to mitigate global warming.'
              },
              
              // #14
              {
                type: 'short-essay',
                topic: 'Explain how technology can be used to address global health challenges and improve healthcare access (150 words)',
                wordLimit: 150
              },
              
              // #15
              {
                type: 'sentence-building',
                words: ['biodiversity', 'loss', 'accelerates', 'as', 'habitats', 'are', 'destroyed', 'by', 'human', 'activities'],
                correct: 'Biodiversity loss accelerates as habitats are destroyed by human activities.'
              },
              
              // #16
              {
                type: 'short-essay',
                topic: 'Analyze the impacts of air pollution on public health in rapidly industrializing countries (150 words)',
                wordLimit: 150
              },
              
              // #17
              {
                type: 'sentence-building',
                words: ['extreme', 'weather', 'events', 'are', 'becoming', 'more', 'frequent', 'due', 'to', 'climate', 'change'],
                correct: 'Extreme weather events are becoming more frequent due to climate change.'
              },
              
              // #18
              {
                type: 'short-essay',
                topic: 'Discuss the ethical considerations surrounding climate justice between developed and developing nations (150 words)',
                wordLimit: 150
              },
              
              // #19
              {
                type: 'sentence-building',
                words: ['sustainable', 'development', 'goals', 'provide', 'a', 'framework', 'for', 'global', 'progress'],
                correct: 'Sustainable development goals provide a framework for global progress.'
              },
              
              // #20
              {
                type: 'short-essay',
                topic: 'Examine how gender inequality affects economic development and access to education worldwide (150 words)',
                wordLimit: 150
              },
              
              // #21
              {
                type: 'sentence-building',
                words: ['plastic', 'waste', 'accumulates', 'in', 'oceans', 'and', 'threatens', 'marine', 'ecosystems'],
                correct: 'Plastic waste accumulates in oceans and threatens marine ecosystems.'
              },
              
              // #22
              {
                type: 'short-essay',
                topic: 'Analyze the effectiveness of international agreements in combating climate change so far (150 words)',
                wordLimit: 150
              },
              
              // #23
              {
                type: 'sentence-building',
                words: ['water', 'scarcity', 'affects', 'billions', 'of', 'people', 'around', 'the', 'world'],
                correct: 'Water scarcity affects billions of people around the world.'
              },
              
              // #24
              {
                type: 'short-essay',
                topic: 'Discuss the role of consumer choices in promoting sustainability and reducing environmental impact (150 words)',
                wordLimit: 150
              },
              
              // #25
              {
                type: 'sentence-building',
                words: ['indigenous', 'knowledge', 'contributes', 'to', 'sustainable', 'environmental', 'management', 'practices'],
                correct: 'Indigenous knowledge contributes to sustainable environmental management practices.'
              }
            ]
          }
        ]
      }
    ]
  }
]; 