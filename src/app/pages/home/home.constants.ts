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

   // Step 3: Choose Plan

   public static CHOOSE_PLAN = {
      PLAN_HEADER: 'Term vs. Perm ',
      PLAN_SUB_HEADER: 'Let us help you learn what insurance works best for you and your family.',
      TERM_INS_HEADER: 'TERM INSURANCE',
      TERM_INS__EXPANSION_HEADER: 'What is term life insurance?',
      TERM_INS__EXPANSION_BODY: '<p>Term life insurance is the most popular form of life insurance. You can buy life insurance that will last 5, 10, 15, 20, or 30 years. If you pass away <strong>before </strong>the term has expired, your beneficiaries will be paid out the <strong>full amount</strong>. If you pass away <strong>after </strong>the term has expired, your beneficiaries <strong>will not be paid any amount</strong>.</p><p> <br></p><p>Keep in mind that some term life policies have an <strong>age limit</strong>. For example, some companies will only cover you up to age 60. If you are 50, you are <strong>ineligible</strong> to purchase a term life policy for more than 10 years. This is an important consideration, given that the average life expectancy for <strong>men is 76.3 years</strong> and for <strong>women is 81.4 years</strong> in 2019.</p>',
      PLAN_BTN: {
         READ_MORE: 'Read More',
         MINIMIZE: 'Minimize',
         STEP_FOUR: ' STEP FOUR'
      },
      PERM_INS_HEADER: 'PERMANENT INSURANCE',
      PERM_INS__EXPANSION_HEADER: 'What is permanent life insurance?',
      PERM_INS__EXPANSION_BODY: '<p>Permanent life insurance has multiple options, some of which are based in the market. Essentially, permanent life insurance also functions as a savings account <strong>(cash value)</strong>. Each month, you contribute a portion to the premium and a portion to the cash value. Permanent life insurance is much less popular because the cost can be <strong>5x-15x&nbsp;</strong>the cost of term life insurance.</p><p>The advantage of a cash value component is the <strong>option to use that money for personal expenses&nbsp;</strong>or <strong>take a loan</strong> from that amount. If you withdraw, that <strong>money may be taxed</strong>, and if you take out a loan, that amount will be <strong>deducted from the death benefit</strong> if that loan is not paid back.&nbsp;</p><p>Permanent life insurance is best for people with <strong>special needs children</strong> and <strong>lifelong dependents,</strong> high net-worth individuals who are looking to build tax-free inheritance, and <strong>seniors&nbsp;</strong>who have outlived term life insurance or <strong>don’t have enough savings</strong> for final expenses.</p>',
      LIFE_PLUS_HEADER: 'How is Life+',
      LIFE_PLUS_SUB_HEADER: 'Life+ insurance is a hybrid of term life and permanent life insurance. ',
      LIFE_PLUS_EXPANSION_BODY: '<p>Life+ insurance is a hybrid of term life and permanent life insurance. insurance of Life+ provides you <strong>term life insurance</strong>, plus an option to save money that will <strong>stay with you</strong> even <strong>after your term expires</strong>. If you pass away before the term expires, the <strong>cash value&nbsp;</strong>will be dispersed to your beneficiaries <strong>in addition to the term life policy</strong>. If you pass away <strong>after</strong> the term expires, the <strong>cash value will be dispersed</strong> but you <strong>will not be paid any amount from the term life policy</strong>. That way, you have some financial safety for end of life expenses.</p><p>Similar to permanent life insurance, you have the option to contribute to your cash value every month, and you have the flexibility to decide how much to contribute every month. That way, you are not subject to the exorbitant prices of permanent life insurance.</p><p>At Life+, you will not have access to the cash value. It will only be dispersed at the time of your passing, or upon the term expiration (whichever comes first).</p>',
      COMP_TBL_HEADER: 'Insurance Coverage Comparison Tool',
      STEP_FOUR_HEADER: 'Ready to figure out your budget?',

   };


}
