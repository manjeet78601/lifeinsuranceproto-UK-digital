export class HomeConstants {

   public static HOME_PAGE = {
      PLAN_HEADER1: `<p>Life Insurance For The </br>Morden Family.</p>`,
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
      PLAN_SUB_HEADER3: `<p>Let Us Help You Plan Your
                           Family’s Future.</p>`,
      PLAN_BODY3: `<p>We’ll walk you through the process and help
                       you prioritze what’s best for you and
                       yours.Our plans are flexible, afforadble
                      and as easy to understand as 1, 2, 3, 4.</p>`,


      PLAN_HEADER4: 'EVERY FAMILY IS DIFFERENT',
      PLAN_SUB_HEADER4: `<p>SEE How We've Helped
                            Families Like Yours.</p>`,
      PLAN_HEADER_4: 'I am a : ',
      PLAN_SUB_HEADER_4: 'Select Marital/Parental Status',

      PLAN_GETTING_STARTED: {
         TITLE: 'GETTING STARTED',
      },
      PLAN_STEP_ONE: {
         TITLE: 'STEP ONE',
         CONTENT: `<p>Insurance 101</p>`,
      },
      PLAN_STEP_TWO: {
         TITLE: 'STEP TWO',
         CONTENT: `<p>Insurance</br> Calculator.</p>`,
      },
      PLAN_STEP_THREE: {
         TITLE: 'STEP THREE',
         CONTENT: `<p>Financial Budget</p>`,
      },
      PLAN_STEP_FOUR: {
         TITLE: 'STEP FOUR',
         CONTENT: `<p>Compare Quotess
                      </p>`,
      },
      PLAN_READ_MORE: {
         TITLE: ' READ MORE',
      },
   };

   // Step 2: Financial budget
   public static FINANCIALBUDGET = [
      {
         TITLE: 'Income',
         SUBTITLE: '',
         PROGRESS: 25,
         TOTAL_TEXT: 'Monthly Income',
         QUESTIONS: [
            {
               QUESTIONTEXT: 'What’s your yearly wage/salary?',
               SUBTEXT: 'Annual Income',
               NAME: 'aanualIncome',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'How much are your total savings?',
               SUBTEXT: 'Total Savings',
               NAME: 'totalSavings',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'Do you have monthly rental income?',
               SUBTEXT: 'Income from Rent',
               NAME: 'incomeFromRent',
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
         TOTAL_TEXT: 'Total assets',
         QUESTIONS: [
            {
               QUESTIONTEXT: 'How much is your home worth?',
               SUBTEXT: 'Value of my Home',
               NAME: 'valueOfHome',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'How much are your vehicle(s) worth?',
               SUBTEXT: 'Value of my Vehicle(s)',
               NAME: 'valueOfVehicle',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'How much are your valuables worth?',
               SUBTEXT: 'Total Value of my Valuables',
               NAME: 'valueOfvaluables',
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
         TOTAL_TEXT: 'Total Liabilities',
         QUESTIONS: [
            {
               QUESTIONTEXT: 'Monthly rent/mortgage?',
               SUBTEXT: 'House payments',
               NAME: 'houseRent',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'Monthly Utilities',
               SUBTEXT: 'Home Utilities',
               NAME: 'monthlyUtilities',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'Monthly home maintenance fees',
               SUBTEXT: 'Fees',
               NAME: 'maintainanceFees',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'Monthly property tax',
               SUBTEXT: 'Home tax',
               NAME: 'propertyTax',
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
         TOTAL_TEXT: 'Monthly Expenses',
         QUESTIONS: [
            {
               QUESTIONTEXT: 'Monthly groceries',
               SUBTEXT: 'Weekly meals',
               NAME: 'groceries',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'Monthly Car loan / lease payment',
               SUBTEXT: 'Car Payment',
               NAME: 'carPayment',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'Monthly Gas / Oil',
               SUBTEXT: 'Fuel for vehicles',
               NAME: 'gasOrOil',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'Monthly Child Daycare',
               SUBTEXT: 'Kids',
               NAME: 'childDaycare',
               MIN: 10000,
               MAX: 100000,
               STEP: 10000,
               VALUE: 50000,
            },
            {
               QUESTIONTEXT: 'Monthly Child Activities / Sports',
               SUBTEXT: 'Kids',
               NAME: 'kidsActivities',
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

   // Step 4: Health Questions
   public static HEALTHQUESTIONS = [
      {
         TITLE: 'Basic Health',
         PROGRESS: 25,
         QUESTIONS: [
            {
               QUESTIONTEXT: 'Date of Birth',
               INPUT_TEXT1: 'Textbox',
               ICON: false
            },
            {
               QUESTIONTEXT: 'Sex',
               INPUT_TEXT: 'Button',
               ICON: true
            },
            {
               QUESTIONTEXT: 'Height',
               INPUT_TEXT12: 'Textbox',
               INPUT_TEXT001: 'DROPDOWN',
               ICON: false
            },
            {
               QUESTIONTEXT: 'Weight',
               INPUT_TEXT01: 'Textbox',
               INPUT_TEXT002: 'DROPDOWN',
               ICON: false
            },
            {
               QUESTIONTEXT: 'Have you used any tobacco products in the last 5 years?',
               INPUT_TYPE: 'Button',
               ICON: true
            },
            {
               QUESTIONTEXT: 'Have you used any marijuana products in the last 5 years?',
               INPUT_TYPE: 'Button',
               ICON: true
            },

         ]
      },
      {
         TITLE: 'Treatments and Medications',
         QUESTIONS: [
            {
               QUESTIONTEXT: 'Have you ever been treated for and/or taken medication for any of the following?',
               ICON: true
            },
            {
               QUESTIONTEXT: 'Alchol Abuse',
               INPUT_TYPE: 'Button',
               ICON: true
            },
            {
               QUESTIONTEXT: 'Anxiety',
               INPUT_TYPE: 'Button',
               ICON: true
            },
            {
               QUESTIONTEXT: 'Asthma',
               INPUT_TYPE: 'Button',
               ICON: true
            },
            {
               QUESTIONTEXT: 'Cancer',
               INPUT_TYPE: 'Button',
               ICON: true
            },
            {
               QUESTIONTEXT: 'Depression',
               INPUT_TYPE: 'Button',
               ICON: true
            },
            {
               QUESTIONTEXT: 'Diabetes',
               INPUT_TYPE: 'Button',
               ICON: true
            },
            {
               QUESTIONTEXT: 'Drug Abuse',
               INPUT_TYPE: 'Button',
               ICON: true
            },
            {
               QUESTIONTEXT: 'Heart Attack',
               INPUT_TYPE: 'Button',
               ICON: true
            },
            {
               QUESTIONTEXT: 'High Blood Pressure',
               INPUT_TYPE: 'Button',
               ICON: true
            },
            {
               QUESTIONTEXT: 'High Cholesterol',
               INPUT_TYPE: 'Button',
               ICON: true
            },
            {
               QUESTIONTEXT: 'Sleep Apnea',
               INPUT_TYPE: 'Button',
               ICON: true
            },
            {
               QUESTIONTEXT: 'Stroke',
               INPUT_TYPE: 'Button',
               ICON: true
            },
            {
               QUESTIONTEXT: 'Other serious Conditions',
               INPUT_TYPE: 'Button',
               ICON: true
            },
         ]
      },
      {
         TITLE: 'Additional Background Information',
         QUESTIONS: [
            {
               QUESTIONTEXT: 'Do you have any parents or siblings who had heart attacks,' +
                  'strokes, cancer, diabetes, or kidney disease before age 70?',
               INPUT_TYPE: 'Button',
               ICON: true
            },
            {
               QUESTIONTEXT: 'Has your driver’s license been suspended or revoked,' +
                  ' or had more than one traffic ticket or accident in the past five years?',
               INPUT_TYPE: 'Button',
               ICON: true
            }
         ]
      },
      {
         TITLE: 'Notes',
         QUESTIONS: [
            {
               QUESTIONTEXT: 'If you answered yes to any of these questions, please explain.',
               INPUT_TYPE: 'Textarea',
               ICON: false
            }

         ]
      }
   ];
   public static Weight = 'Weight';
   public static HEALTH_HEADER = 'LIFE INSURANCE Medical Questions';
   public static HEALTH_SUB_HEADER = 'Answer a few health Qs';
   public static HEALTH_LINE = 'In order to process your examine we need to ask a few question about your health';

   // Insurance calculator
   public static PAGE_SUBTITLE = 'LIFE INSURANCE CALCULATORS';
   public static LIFE_INSURANCE_HEADER = 'Calculate the coverage you need for your family future.';
   public static LIFE_INSURANCE_SUB_HEADER = `By calculating you long term financial obligations.
and subtracting your assets you an estimate what your loved ones will need in coming years take a few minutes to help start `;
   public static PAGE_CONTENT_QUERIES = `Does anyone in your family depend on you financially`;

   public static BTTN = {
      SUBMIT: 'Submit',
      INSURANCE: 'Next',
   };
   public static INSURANCE_RECOMENDATION = 'Our Recommendation';
   public static BUTTON_CONTENT = `you can probably do without Life insurance right now however.
 \if you think you have a unique circumstance that requires it. it costsnothing to compare rates `;
   public static PAGE_CONTENT_US = 'Are You a US Citizen or Residents';
   public static PAGE_CONTENT_US1 = 'Are You a US Citizen or Residents';
   public static LETS_GETS_TARTED = 'Great let s get Started ';
   public static PAGE_BOTTOM1 = 'By our calculation You will need this total coverage';
   public static STEP1_BOTTOM = 'Ready to figure out your budget ?';
   public static INSURANCE_CALCULATOR = {
      TITLE: 'Basic Health',
      PROGRESS: 25,
      QUESTIONS: [
         {
            INPUT_TYPE: '1. How much annual income would you need to replace if something were to happen to you?',
            VALUE: 0,
            isAmt: true
         },
         {
            INPUT_TYPE: '2. How many years would your family need to' +
               'replace your income and the services you provide if you died suddenly?',
            VALUE: 0,
            isAmt: false
         },

         {
            INPUT_TYPE: '3. How debt do you have?',
            VALUE: 0,
            isAmt: true

         },
         {
            INPUT_TYPE: '4. How much money do you want to provide for your children’s education or future needs?',
            VALUE: 0,
            isAmt: true

         },
         {
            INPUT_TYPE: '5. How much would your family need to pay for your funeral?',
            VALUE: 0,
            isAmt: true
         },
         {
            INPUT_TYPE: '6. How much money do you have in savings and investment accounts? ',
            VALUE: 0,
            isAmt: true
         },

         {
            INPUT_TYPE: '7. How much life insurance do you already have? ',
            VALUE: 0,
            isAmt: true

         },
         {
            INPUT_TYPE: '8. How much after-tax income does your family have annually in addition to your income?',
            VALUE: 0,
            isAmt: true

         },
      ]
   };
}
