export class HomeConstants {

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
      CREATE_ACCOUNT: 'create',
      STEP_THREE: 'Step Three',
      INS_CAL: 'INSURANCE CALCULATOR',
      INSURANCE: 'CALCULATE',
      READ_MORE: 'Read More',


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
   public static HEALTH_HEADER = ' LIFE INSURENCE Medical Questions';
   public static HEALTH_SUB_HEADER = 'ANSWER A FEW HEALTH Q s';
   public static HEALTH_LINE = 'In order to provide yout with quotes. we need to ask a few questions. about your health.';

   // Step 3: Choose Plan

   public static CHOOSE_PLANS = {
      PLAN_HEADER: 'Term vs. Perm ',
      PLAN_SUB_HEADER: 'Let us help you learn what insurance works best for you and your family.',
      COVG_HEADER: 'Ready to figure out how much coverage you need?',
      COMP_TBL_HEADER: 'Insurance Coverage Comparison Tool',
      PLANS: [
         {
            EXP_HEADER: 'What is term life insurance?',
            EXP_BODY: `<p>Term life insurance a popular form of life insurance.
         You can buy life insurance that will last anywhere between 1-30 years.
         If you pass away before the policy has expired, your beneficiaries will
         be paid out the death benefit. If you wish to continue having life insurance
         after the policy expires, you could either renew your policy or switch
         roviders entirely, at a new higher age adjusted premium rate. It is also
         important to keep in mind that some policies have a 10-year policy cap restriction
         past the age of 50.</p>
         <p>Term life insurance is a more affordable option than other forms of insurance
         because of its fixed time. It is suitable if you are looking to protect dependents
         for a limited period of time.</p>
         <p>Term life insurance is an appropriate option if you are not seeking a savings
         component and would like straight-forward protection at a lower premium.</p>`,
         },
         {
            EXP_HEADER: 'What is permanent life insurance?',
            EXP_BODY: `<p>Permanent life insurance provides you with lifelong
      protection as long as you pay your set premium every month. Each time you pay
      the monthly premium, a portion goes to your death benefit and a portion is set aside
      to your cash value account. The cash value functions as a savings account. When you pass
      away, your family will receive the full un-taxed death benefit. Even though permanent life
      insurance guarantees coverage for life, it is less popular because it is more expensive
      than term life insurance.</p><p>The advantage of a cash value component is the option
      to use that money for personal expenses or take a loan from that amount. If you withdraw,
      that money may be taxed, and if you take out a loan, that amount will be deducted from the
      death benefit if the loan is not paid back.</p><p>If you have living dependents, are looking
       to build a tax-advantaged inheritance and/or have outlived your term life policy,
       permanent life insurance may be for you.</p>`
         },
         {
            EXP_HEADER: 'What is variable life insurance?',
            EXP_BODY: `<p>Like permanent life insurance, variable life insurance provides
      lifelong coverage, and the premium consists of contributions for the death benefit
      and cash value. In the case of variable life insurance, the cash value operates similar
      to a mutual fund. The cash value is invested by professional fund managers; over time
      the cash value will fluctuate based on your investment options. The cash invested grows
      tax-free. However, if you withdraw from the cash value, you may incur taxes and fees.</p>
      <p>Variable life insurance is suitable for those seeking an additional investment
      component in addition to life insurance.</p>`
         },
         {
            EXP_HEADER: 'How is Life+ different?',
            EXP_BODY: `<p>Life+ insurance is a hybrid of term life and permanent life insurance.
      insurance of Life+ provides you term life insurance, plus an option to save money that
      will stay with you even after your term expires. If you pass away before the term expires,
      the cash value will be dispersed to your beneficiaries in addition to the term life
      policy. If you pass away after the term expires, the cash value will be dispersed
      but you will not be paid any amount from the term life policy. That way, you have
      some financial safety for end of life expenses.</p><p>Similar to permanent life
      insurance, you have the option to contribute to your cash value every month, and
      you have the flexibility to decide how much to contribute every month. That way,
      you are not subject to the exorbitant prices of permanent life insurance.</p>
      <p>At Life+, you will not have access to the cash value. It will only be dispersed
      at the time of your passing, or upon the term expiration (whichever comes first).</p>`
         }
      ]
   };


   // Insurance calculator
   public static PAGE_BOTTOM1 ='By Our calculations you will need this total coverage';
   public static PAGE_SUBTITLE = 'LIFE INSURANCE CALCULATORS';
   public static LIFE_INSURANCE_HEADER = 'Calculate the coverage you need for your family furure';
   public static LIFE_INSURANCE_SUB_HEADER = `By calculating you long term financial obligations.
and subtracting your assets you an estimate what your loved ones will need in coming years take a few minutes to help start `;
   public static BTTN = {
      SUBMIT: 'Submit',
      INSURANCE: 'CALCULATE',
      READ_MORE: 'Read More',
      CLOSE: 'Close',
      INS_CAL: 'INSURANCE CALCULATOR',

};


   public  static STEP1_BOTTOM = 'Ready to figure out your budget ?';
   public static INSURANCE_CALCULATOR =
      {
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

   // Step4 : Quote

   public static QUOTE = {
      QUOTE_HEADER: 'Quote Results',
      QUOTE_SUB_HEADER: 'The actual cost for you may be different after your application is processed.',
      CUST_HEADER: 'Customer Rating'
   };

   // Facial scan
   public static FACIAL_SCAN = {
      PAGE_HEADER: 'Facial Recognition',
      PAGE_SUB_TEXT: 'Additional Health Check',
      PAGE_SUB_HEADER: 'Look directly at the camera, and let us do the rest!',
   };

   // Compliance
   public static COMPLIANCE = {
      PAGE_HEADER: 'Contract',
      PAGE_SUB_TEXT: ` <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Nisl vel pretium lectus quam id Leo in vitae turpis. Pellentesque sit amet porttitor eget dolor
      morbi non. Tellus at urna condimentum mattis pellentesque id nibh tortor. Fermentum odio eu feugiat pretium nibh
      ipsum consequat nisl.&nbsp;</p>
    <p>Massa sed elementum tempus egestas sed sed risus pretium quam. Sed enim ut sem viverra aliquet eget sit amet
      tellus. Dignissim diam quis enim lobortis scelerisque fermentum. Tellus rutrum tellus pellentesque eu tincidunt.
      Duis at tellus at urna condimentum. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Integer eget
      aliquet nibh praesent tristique. Tristique et egestas quis ipsum suspendisse ultrices gravida.</p>
    <p>Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Tellus in hac habitasse platea. Sagittis nisl
      rhoncus mattis rhoncus urna neque viverra justo. Lacus sed turpis tincidunt id aliquet risus. Sit amet cursus
      sit amet dictum sit amet justo donec. Malesuada pellentesque elit eget gravida cum.</p>
    <p>Condimentum id venenatis a condimentum vitae sapien. Diam in arcu cursus euismod quis viverra nibh. Pharetra
      diam sit amet nisl suscipit adipiscing bibendum est. Ornare quam viverra orci sagittis eu. Arcu dui vivamus arcu
      felis bibendum ut. Elementum pulvinar etiam non quam. Massa tempor nec feugiat nisl pretium fusce id. Consequat
      mauris nunc congue nisi vitae. Tortor dignissim convallis aenean et tortor. Integer malesuada nunc vel risus
      commodo. Ultrices eros in cursus turpis massa tincidunt dui ut. Ut tortor pretium viverra suspendisse. Non
      blandit massa enim nec dui nunc mattis enim. Ornare aenean euismod elementum nisi quis eleifend quam. Tortor
      aliquam nulla facilisi cras. Eget nulla facilisi etiam dignissim. Purus in massa tempor nec feugiat. Sit amet
      luctus venenatis lectus magna fringilla. Enim nec dui nunc mattis enim ut tellus elementum.</p>
`,
      SIGN_TXT: 'eSignature'
   };

}
