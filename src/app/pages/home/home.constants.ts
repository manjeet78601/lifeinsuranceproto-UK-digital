export class HomeConstants {

   public static HOME_PAGE = {
      PLAN_HEADER1: `<p class="col-blk">Life Insurance For The </br>Morden Family.</p>`,
      PLAN_BODY: `<p>To help protect your family and prepare your
                      family for life’s events, you need coverage that
                      fits comfortably in your budget and adapts to
                      your changing lifestyle, income and needs.</p>`,
      PLAN_HEADER2: 'WE GOT YOU COVERED',
      PLAN_SUB_HEADER2: 'Holistic Financial Planning',
      PLAN_BODY2: `<p>We’ll help you budget for your real life,
                          support you to develop a holistic view of your
                          finances, and prepare you for the worst-case
                          scenario.</p>`,
      PLAN_BODY_2: `<p>We help all families: single-parent homes, two-
                          parent homes, multigenerational families and
                          empty nesters. No matter your circumstances,
                          we got you covered. </p>`,

      PLAN_HEADER3: 'SIMPLIFIED, PERSONALIZED',
      PLAN_SUB_HEADER3: `<p class="col-blk">Let Us Help You Plan Your
                           Family’s Future.</p>`,
      PLAN_BODY3: `<p>We’ll walk you through the process and help
                       you prioritze what’s best for you and
                       yours.Our plans are flexible, afforadble
                      and as easy to understand as 1, 2, 3, 4.</p>`,


      PLAN_HEADER4: 'EVERY FAMILY IS DIFFERENT',
      PLAN_SUB_HEADER4: `<p class="col-blk">See How We've Helped
                            Families Like Yours.</p>`,
      PLAN_HEADER_4: 'I am a : ',
      PLAN_SUB_HEADER_4: 'Select Marital/Parental Status',

      PLAN_GETTING_STARTED: {
         TITLE: 'GETTING STARTED',
      },
      PLAN_STEP_ONE: {
         TITLE: 'STEP ONE',
         CONTENT: `<p class="col-blk">Insurance 101</p>`,
      },
      PLAN_STEP_TWO: {
         TITLE: 'STEP TWO',
         CONTENT: `<p class="col-blk">Insurance</br> Calculator</p>`,
      },
      PLAN_STEP_THREE: {
         TITLE: 'STEP THREE',
         CONTENT: `<p class="col-blk">Financial Budget</p>`,
      },
      PLAN_STEP_FOUR: {
         TITLE: 'STEP FOUR',
         CONTENT: `<p class="col-blk">Compare Quotes
                      </p>`,
      },
      PLAN_READ_MORE: {
         TITLE: ' READ MORE',
      },
   };

   // Step 2: Financial budget
   public static FINANCIALBUDGET = [
      {
         ID: 1,
         TITLE: 'Housing Expenses',
         SUBTITLE: '',
         PROGRESS: 25,
         TOTAL_TEXT: 'Total Liabilities',
         isAllQuestionsAnswered: false,
         TYPE: 'Expense',
         QUESTIONS: [
            {
               QUESTIONTEXT: 'Monthly rent/mortgage?',
               SUBTEXT: 'House payments',
               NAME: 'houseRent',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: '',
               placeholder: '00.00',
               isVisited: false,
               toolTipContent: 'Your most recent monthly amount.'
            },
            {
               QUESTIONTEXT: 'Monthly utilities (water, electricity, etc.) ',
               SUBTEXT: 'Home Utilities',
               NAME: 'monthlyUtilities',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: '',
               placeholder: '00.00',
               isVisited: false,
               toolTipContent: 'Considering the cost fluctuates throughout the year, estimate the average cost.'
            },
            {
               QUESTIONTEXT: 'Monthly home maintenance fees',
               SUBTEXT: 'Fees',
               NAME: 'maintainanceFees',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: '',
               placeholder: '00.00',
               isVisited: false,
               toolTipContent: 'Considering the cost fluctuates throughout the year, estimate the average cost.'
            },
            {
               QUESTIONTEXT: 'Monthly property tax',
               SUBTEXT: 'Home tax',
               NAME: 'propertyTax',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: '',
               placeholder: '00.00',
               isVisited: false,
               toolTipContent: 'This number is important because property taxes vary locally.'
            },
         ]
      },
      {
         ID: 2,
         TITLE: 'Living Expenses',
         SUBTITLE: '',
         PROGRESS: 50,
         TOTAL_TEXT: 'Monthly Expenses',
         isAllQuestionsAnswered: false,
         TYPE: 'Expense',
         QUESTIONS: [
            {
               QUESTIONTEXT: 'Monthly groceries',
               SUBTEXT: 'Weekly meals',
               NAME: 'groceries',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: '',
               placeholder: '00.00',
               isVisited: false,
               toolTipContent: 'Considering the cost fluctuates throughout the year, estimate the average total cost. Include how much you normally spend on alcohol on a monthly basis.'
            },
            {
               QUESTIONTEXT: 'Monthly lease, car payments, insurance',
               SUBTEXT: 'Car Payment',
               NAME: 'carPayment',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: '',
               placeholder: '00.00',
               isVisited: false,
               toolTipContent: 'Include all car-related expenses, except for gas/oil'
            },
            {
               QUESTIONTEXT: 'Monthly gas / oil',
               SUBTEXT: 'Fuel for vehicles',
               NAME: 'gasOrOil',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: '',
               placeholder: '00.00',
               isVisited: false,
               toolTipContent: 'Considering the cost fluctuates throughout the year, estimate the average cost.'
            },
            {
               QUESTIONTEXT: 'Monthly entertainment bills (cell phone, internet, etc.)',
               SUBTEXT: '',
               NAME: 'monthlyEntertainment',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: '',
               placeholder: '00.00',
               isVisited: false,
               toolTipContent: 'Include recurring payments for entertainment, such as Hulu, Netflix, Amazon, etc.'
            },
            {
               QUESTIONTEXT: 'Additional expected monthly expenses',
               SUBTEXT: '',
               NAME: 'additionalExpenses',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: '',
               placeholder: '00.00',
               isVisited: false,
               toolTipContent: 'Include all other recurring payments, such as LinkedIn, online courses, professional memberships, etc.'
            },
         ]
      },
      {
         ID: 3,
         TITLE: 'Sources of Income',
         SUBTITLE: '',
         PROGRESS: 75,
         TOTAL_TEXT: 'Monthly Income',
         isAllQuestionsAnswered: false,
         TYPE: 'Income',
         QUESTIONS: [
            {
               QUESTIONTEXT: 'Do you own a business? What is your profit?',
               SUBTEXT: 'Annual Income',
               NAME: 'businessProfit',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: '',
               placeholder: '00.00',
               isVisited: false,
               toolTipContent: 'Estimate your profits for the year. Profits is how much money you take home after all business-related expenses.'
            },
            {
               QUESTIONTEXT: 'What is your yearly income/salary?',
               SUBTEXT: 'Total Savings',
               NAME: 'totalSavings',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: '',
               placeholder: '00.00',
               isVisited: false,
               toolTipContent: 'Your annual take-home after taxes, and pre-tax benefit deductions such as health insurance, transportation, etc.'
            },
            {
               QUESTIONTEXT: 'Additional sources of annual income (side job, rental, stipends, passive income, etc.)',
               SUBTEXT: 'Income from Rent',
               NAME: 'additionalSourceIncome',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: '',
               placeholder: '00.00',
               isVisited: false,
               toolTipContent: 'Money you take home after taxes for side gigs, side jobs, any other form of supplemental income.'
            },
            {
               QUESTIONTEXT: 'Expected annual bonuses',
               SUBTEXT: 'Annual Bonus',
               NAME: 'annualBonus',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: '',
               placeholder: '00.00',
               isVisited: false,
               toolTipContent: 'Approximate how much you would take home this year after taxes.'
            },
         ]
      },
      {
         ID: 4,
         TITLE: 'Debts',
         SUBTITLE: '',
         PROGRESS: 100,
         TOTAL_TEXT: 'Total assets',
         isAllQuestionsAnswered: false,
         TYPE: 'Liabillities',
         QUESTIONS: [
            {
               QUESTIONTEXT: 'Outstanding credit card debt',
               SUBTEXT: 'Outstanding credit card debt',
               NAME: 'outstandingDebt',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: '',
               placeholder: '00.00',
               isVisited: false,
               toolTipContent: 'Include debt from all personal cards, including debt from retail credit cards.'
            },
            {
               QUESTIONTEXT: 'Outstanding student loan debt',
               SUBTEXT: 'Outstanding student loan debt',
               NAME: 'loanDebt',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: '',
               placeholder: '00.00',
               isVisited: false,
               toolTipContent: 'Include all federal and private loans student loans.'
            },
            {
               QUESTIONTEXT: 'Other outstanding loans',
               SUBTEXT: 'Other outstanding loans',
               NAME: 'otherOutstandingLoans',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: '',
               placeholder: '00.00',
               isVisited: false,
               toolTipContent: 'Include all other loans subject to interest.'
            },
         ]
      },
   ];

   public static BUDGET_HEADER = 'Budget Calculator';
   public static BUDGET_SUB_HEADER = 'Let us help you calculate Your budget!';
   public static BTN = {
      SUBMIT: 'Submit',
      CALCULATE: 'Calculate',
      GET_QUOTE: 'Get Quote',
      STEP_THREE: 'Next',
      CREATE_ACCOUNT: 'Create Account'
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

   // Insurance calculator
   public static PAGE_SUBTITLE = 'LIFE INSURANCE CALCULATOR';
   public static LIFE_INSURANCE_HEADER = `Calculate the coverage you need for your family's future.`;
   public static LIFE_INSURANCE_SUB_HEADER = `By calculating your long-term financial obligations
   , and subtracting your assets, you can estimate what your loved ones will need in coming years
   . Take a few minutes to help start your planning journey.`;
   public static PAGE_CONTENT_QUERIES = `Does anyone in your family depend on you financially`;

   public static BTTN = {
      SUBMIT: 'Submit',
      INSURANCE: 'Next',
      BACK: 'Back'
   };
   public static INSURANCE_RECOMENDATION = 'Our Recommendation';
   public static BUTTON_CONTENT = `you can probably do without Life insurance right now however.
 \if you think you have a unique circumstance that requires it. it costsnothing to compare rates `;
   public static PAGE_CONTENT_US = 'Are You a US Citizen or Residents';
   public static PAGE_CONTENT_US1 = 'Are You a US Citizen or Residents';
   public static LETS_GETS_TARTED = 'Great let s get Started ';
   public static PAGE_BOTTOM1 = 'By our calculations, you will need this total coverage:';
   public static STEP1_BOTTOM = 'Ready to figure out your budget ?';
   public static INSURANCE_CALCULATOR = {
      TITLE: 'Basic Health',
      PROGRESS: 25,
      QUESTIONS: [
         {
            INPUT_TYPE: '1. How much annual income would you need to replace if something were to happen to you?',
            VALUE: 0,
            isVisited: false,
            isAmt: true,
            toolTipContent: 'Your annual income (include salary, estimated 1099 wages, etc.'
         },
         {
            INPUT_TYPE: '2. How many years would your family need to ' +
               'replace your income and the services you provide if you died suddenly?',
            VALUE: 0,
            isVisited: false,
            isAmt: false,
            toolTipContent: 'Estimate how many years your family would rely on you financially?'
         },
         {
            INPUT_TYPE: '3. How debt do you have?',
            VALUE: 0,
            isVisited: false,
            isAmt: true,
            toolTipContent: 'This estimate is determined using app integration with mint.com'
         },
         {
            INPUT_TYPE: '4. How much money do you want to provide for your children’s education or future needs?',
            VALUE: 0,
            isVisited: false,
            isAmt: true,
            toolTipContent: 'Include education, camps, family activities, anticipated family medical expenses, etc.'
         },
         {
            INPUT_TYPE: '5. How much would your family need to pay for your funeral?',
            VALUE: 0,
            isVisited: false,
            isAmt: true,
            toolTipContent: 'The average cost is $7,000-$12,000, depending on your locale and the services you choose.'
         },
         {
            INPUT_TYPE: '6. How much money do you have in savings and investment accounts? ',
            VALUE: 0,
            isVisited: false,
            isAmt: true,
            toolTipContent: 'This includes personal savings accounts, investments, bonds, etc.'
         },

         {
            INPUT_TYPE: '7. How much life insurance do you already have? ',
            VALUE: 0,
            isVisited: false,
            isAmt: true,
            toolTipContent: 'This includes previously purchased life insurance policies outside of Life+.'
         },
         {
            INPUT_TYPE: '8. How much after-tax income does your family have annually in addition to your income?',
            VALUE: 0,
            isVisited: false,
            isAmt: true,
            toolTipContent: 'This includes income from part-time jobs, income from rent, etc.'
         },
      ]
   };
}
