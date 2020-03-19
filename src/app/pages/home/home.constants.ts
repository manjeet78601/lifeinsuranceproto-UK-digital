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
}
