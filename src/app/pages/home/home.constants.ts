export class HomeConstants {

   // Step 2: Financial budget
   public static FINANCIALBUDGET = [
      {
         TITLE: 'Income',
         SUBTITLE: '',
         PROGRESS: 25,
         QUESTIONS: [
            {
               QUESTIONTEXT: 'What’s your wage/salary?',
               SUBTEXT: 'Annual Income',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'How much is your savings?',
               SUBTEXT: 'Total Savings',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'Do you have passive income?',
               SUBTEXT: 'Income from Rent',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
         ]
      },
      {
         TITLE: 'Personal Assets',
         SUBTITLE: '',
         PROGRESS: 50,
         QUESTIONS: [
            {
               QUESTIONTEXT: 'How much is your home worth?',
               SUBTEXT: 'Value of my Home',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'Do you own vehicle(s)?',
               SUBTEXT: 'Value of my Vehicle(s)',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'Do you own valuables?',
               SUBTEXT: 'Total Value of my Valuables',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
         ]
      },
      {
         TITLE: 'Home Expenses',
         SUBTITLE: '',
         PROGRESS: 75,
         QUESTIONS: [
            {
               QUESTIONTEXT: 'Monthly rent/mortgage?',
               SUBTEXT: 'House payments',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'Utilities',
               SUBTEXT: 'Home Utilities',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'Monthly home maintenance fees',
               SUBTEXT: 'Fees',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'Property Tax',
               SUBTEXT: 'Home tax',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
         ]
      },
      {
         TITLE: 'Monthly Living Expenses',
         SUBTITLE: '',
         PROGRESS: 100,
         QUESTIONS: [
            {
               QUESTIONTEXT: 'Groceries',
               SUBTEXT: 'Weekly meals',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'Car loan / lease payment',
               SUBTEXT: 'Car Payment',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'Gas / Oil',
               SUBTEXT: 'Fuel for vehicles',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'Child Daycare',
               SUBTEXT: 'Kids',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'Child Activities / Sports',
               SUBTEXT: 'Kids',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
         ]
      }
   ];

   public static BUDGET_HEADER = 'Budget Calculator';
   public static BUDGET_SUB_HEADER = 'Let us help you calculate Your budget!';
   public static BTN = {
      SUBMIT: 'Submit',
      CALCULATE: 'Calculate',
      GET_QUOTE: 'Get Quote'
   };

   public static BUDGET_CALCULATOR = {
      PAGE_HEADER: 'Total Amount Left',
      PAGE_SUB_TEXT: 'Excellent! You have a good amount to set aside for one of our term plans.',
      PAGE_SUB_HEADER: 'Fine Tune your budget',
      TOTAL_TEXT: 'Totals',
      TOTALS: [
         {
            TITLE: 'Monthly income',
            AMOUNT: 0
         },
         {
            TITLE: 'Monthly expenses',
            AMOUNT: 0
         },
         {
            TITLE: 'Total assets',
            AMOUNT: 0
         },
         {
            TITLE: 'Total liabilities',
            AMOUNT: 0
         },

      ],
      BUDGET: [
         {
            TEXT: 'Monthly income',
            MIN: 10000,
            MAX: 100000,
            STEP: 10000,
            VALUE: 50000,
         },
         {
            TEXT: 'Monthly expenses',
            MIN: 10000,
            MAX: 100000,
            STEP: 10000,
            VALUE: 50000,
         },
         {
            TEXT: 'Assets',
            MIN: 10000,
            MAX: 100000,
            STEP: 10000,
            VALUE: 50000,
         },
         {
            TEXT: 'Liabilities',
            MIN: 10000,
            MAX: 100000,
            STEP: 10000,
            VALUE: 50000,
         },
      ]
   };

   // Step 4: Health Questions
   public static HEALTHQUESTIONS = [
      { 
         TITLE: 'Basic Health',
         PROGRESS: 25,
         QUESTIONS: [
            {
               QUESTIONTEXT: 'Height',
               INPUT_TYPE: 'Slider',
               MIN: 1,
               MAX: 8,
               STEP: 1,
               VALUE: 5.11,
            },
            {
               QUESTIONTEXT: 'Weight',
               INPUT_TYPE:'Slider',
               MIN: 0,
               MAX: 500,
               STEP: 1,
               VALUE: 210,
            },
            {
               QUESTIONTEXT: 'Have you used any tobacco products in the last 5 years?',
               INPUT_TYPE:'Button'
            },
            {
               QUESTIONTEXT: 'Have you used any marijuana products in the last 5 years?',
               INPUT_TYPE:'Button'
            }
         ]
      },
      { 
         TITLE: 'Treatments and Medications',
         QUESTIONS: [
            {
               QUESTIONTEXT: 'Have you ever been treated for and/or taken medication for any of the following?',
               INPUT_TYPE:'Button',
               // DISEASES: ['Alchol Abuse', 'Anxiety','Asthma','Cancer','Depression','Diabetes','Drug Abuse','Heart Attack','High Blood Pressure','High Cholesterol','Sleep apenea','Stroke','Other serious Conditions' ]
            },
            {
               QUESTIONTEXT:'Alchol Abuse',
               INPUT_TYPE:'Button'
            },
            {
               QUESTIONTEXT:'Anxiety',
               INPUT_TYPE:'Button'
            },
            {
               QUESTIONTEXT:'Asthma',
               INPUT_TYPE:'Button'
            },
            {
               QUESTIONTEXT:'Cancer',
               INPUT_TYPE:'Button'
            },
            {
               QUESTIONTEXT:'Depression',
               INPUT_TYPE:'Button'
            },
            {
               QUESTIONTEXT:'Diabetes',
               INPUT_TYPE:'Button'
            },
            {
               QUESTIONTEXT:'Drug Abuse',
               INPUT_TYPE:'Button'
            },
            {
               QUESTIONTEXT:'Heart Attack',
               INPUT_TYPE:'Button'
            },
            {
               QUESTIONTEXT:'High Blood Pressure',
               INPUT_TYPE:'Button'
            },
            {
               QUESTIONTEXT:'High Cholesterol',
               INPUT_TYPE:'Button'
            },
            {
               QUESTIONTEXT:'Sleep Apnea',
               INPUT_TYPE:'Button'
            },
            {
               QUESTIONTEXT:'Stroke', 
               INPUT_TYPE:'Button'
            },
            {
               QUESTIONTEXT:'Other serious Conditions',
               INPUT_TYPE:'Button'
            },
         ]
      },
      { 
         TITLE: 'Additional Background Information',
         QUESTIONS: [
            {
               QUESTIONTEXT: 'Do you have any parents or siblings who had heart attacks, strokes, cancer, diabetes, or kidney disease before age 70?',
               INPUT_TYPE:'Button'
            },
            {
               QUESTIONTEXT: 'Has your driver’s license been suspended or revoked, or had more than one traffic ticket or accident in the past five years?',
               INPUT_TYPE:'Button'
            }
         ]
      },
      { 
         TITLE: 'Notes',
         QUESTIONS: [
            {
               QUESTIONTEXT: 'If you answered yes to any of these questions, please explain.',
               INPUT_TYPE:'Textarea'
            }
            
         ]
      }
   ]

   public static HEALTH_HEADER = ' LIFE INSURENCE Medical Questions';
   public static HEALTH_SUB_HEADER = 'Answer a few health Qs';
   public static HEALTH_LINE = 'In order to process your examine we need to';
}
