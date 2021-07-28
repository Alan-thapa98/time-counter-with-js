  Qizdata = [{
          quistions: 'how old are you ?',
          a: '10',
          b: '15',
          c: '17',
          d: '20',
          correct: 'b'

      },
      {
          quistions: 'What si the best programming language in 2019 ?',
          a: 'Java',
          b: 'Python',
          c: 'C',
          d: 'java Script',
          correct: 'a'

      },
      {
          quistions: 'what is the hight of Mt.Everst ?',
          a: '10,202 meters',
          b: '8,848 meters',
          c: '8,867 meters',
          d: '8,8,90 meters',
          correct: 'b'

      },
      {
          quistions: 'what is the hight of Mt.Everst ?',
          a: '10,202 meters',
          b: '8,848 meters',
          c: '8,867 meters',
          d: '8,8,90 meters',
          correct: 'b'

      },
      {
          quistions: 'what is the hight of Mt.Everst ?',
          a: '10,202 meters',
          b: '8,848 meters',
          c: '8,867 meters',
          d: '8,8,90 meters',
          correct: 'b'

      },
      {
          quistions: 'Youtube has been linched ?',
          a: '2004',
          b: '2006',
          c: '2005',
          d: '2021',
          correct: 'c'

      },
      {
          quistions: 'who is the father of computer  ?',
          a: 'lay augasta',
          b: 'Dr.jon',
          c: 'Charlis babbage',
          d: 'pascal',
          correct: 'c'

      },
      {
          quistions: 'what is the full form of cpu ?',
          a: 'control unit procrsser',
          b: 'control  unit ',
          c: 'control unnit system profemer',
          d: 'centeral processing unit',
          correct: 'c'

      },
  ];

  questionE1 = document.getElementById('question');
  atext = document.getElementById('atext');
  btext = document.getElementById('btext');
  ctext = document.getElementById('ctext');
  dtext = document.getElementById('dtext');
  submitbtn = document.getElementById('submint');
  currentQuiz = 0;


  lodQuiz();

  function lodQuiz() {
      currentQuizData = Qizdata[currentQuiz];
      questionE1.innertext = currentQuizData.question;
      atext.innertext = currentQuizData.a;
      btext.innertext = currentQuizData.b;
      ctext.innertext = currentQuizData.c;
      dtext.innertext = currentQuizData.d;
      currentQuiz++;
  }
  //  function submin.addElementListner(
  //       "click",
  //       () => {
  //           currentQuiz;
  //           if (currentQuiz < currentQuizData.lenght) {
  //               lodQuiz();
  //           } else {
  //               alert("you have fineshed the test ")
  //           }



  //       }

  //   );