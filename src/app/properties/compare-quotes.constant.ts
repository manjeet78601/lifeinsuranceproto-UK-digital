export class CompareQuotesConstant {

    // Step 4: Health Questions

    public static HEALTH_PAGE = {
        PAGE_HEADER: 'Compare Quotes',
        PAGE_SUB_HEADER: 'Answer a few health Q’s',
        PAGE_LINE: 'In order to provide you with quotes, we need to ask a few questions about your health.',
        HEALTHQUESTIONS: [
            {
                TITLE: 'Basic Health',
                PROGRESS: 25,
                QUESTIONS: [
                    {
                        QUESTIONTEXT: 'Date of Birth',
                        INPUT_TYPE: 'Datepicker',
                        ICON: false,
                        value: ''
                    },
                    {
                        QUESTIONTEXT: 'Sex',
                        INPUT_TYPE: 'GENDERBTN',
                        ICON: true,
                        value: ''
                    },
                    {
                        QUESTIONTEXT: 'Height',
                        INPUT_TYPE: 'HEIGHTSLIDER',
                        HEIGHTVALUE: 1,
                        HEIGHTUNIT_FT: 'ft',
                        HEIGHTUNIT_INCH: 'in',
                        ICON: false,
                        value: ''
                    },
                    {
                        QUESTIONTEXT: 'Weight',
                        INPUT_TYPE: 'WEIGHTSLIDER',
                        WEIGHTVALUE: 1,
                        WEIGHTUNIT: 'lbs',
                        ICON: false,
                        value: ''
                    },
                    {
                        QUESTIONTEXT: 'Have you used any tobacco products in the last 5 years?',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: ''
                    },
                    {
                        QUESTIONTEXT: 'Have you used any marijuana products in the last 5 years?',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: ''
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
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: ''
                    },
                    {
                        QUESTIONTEXT: 'Anxiety',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: ''
                    },
                    {
                        QUESTIONTEXT: 'Asthma',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: ''
                    },
                    {
                        QUESTIONTEXT: 'Cancer',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: ''
                    },
                    {
                        QUESTIONTEXT: 'Depression',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: ''
                    },
                    {
                        QUESTIONTEXT: 'Diabetes',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: ''
                    },
                    {
                        QUESTIONTEXT: 'Drug Abuse',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: ''
                    },
                    {
                        QUESTIONTEXT: 'Heart Attack',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: ''
                    },
                    {
                        QUESTIONTEXT: 'High Blood Pressure',
                        INPUT_TYPE: 'TOGGLEBTN',
                        value: '',
                        ICON: true,
                        note: ''
                    },
                    {
                        QUESTIONTEXT: 'High Cholesterol',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: ''
                    },
                    {
                        QUESTIONTEXT: 'Sleep Apnea',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: ''
                    },
                    {
                        QUESTIONTEXT: 'Stroke',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: ''
                    },
                    {
                        QUESTIONTEXT: 'Other serious Conditions',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: ''
                    },
                ]
            },
            {
                TITLE: 'Additional Background Information',
                QUESTIONS: [
                    {
                        QUESTIONTEXT: 'Do you have any parents or siblings who had heart attacks,' +
                        'strokes, cancer, diabetes, or kidney disease before age 70?',
                        INPUT_TYPE: 'TOGGLEBTN',
                        value: '',
                        ICON: true
                    },
                    {
                        QUESTIONTEXT: 'Has your driver’s license been suspended or revoked,' +
                        ' or had more than one traffic ticket or accident in the past five years?',
                        INPUT_TYPE: 'TOGGLEBTN',
                        value: '',
                        ICON: true
                    }
                ]
            }
        ]
    };

    // Step 4 : Quote
    public static QUOTE = {
        QUOTE_COMP: 'Quote Comparison Chart',
        QUOTE_HEADER: 'Quote Results',
        QUOTE_SUB_HEADER: 'The actual cost for you may be different after your application is processed.',
        CUST_HEADER: 'Customer Rating'
    };
    public static BTTN = {
        READ_MORE: 'Read More',
        NEXT: 'NEXT',
        CLOSE: 'Close',
        GET_QUOTE: 'GET QUOTE',
        BACK: 'BACK',
        FINISH: 'FINISH',
        DOC: 'Resend documentation',
        SUBMIT: 'SUBMIT',
    };
    public static EMAIL_APPT = {
        APPT_HEADER: 'You’re All Set!',
        APPT_SUB_HEADER: 'Thank you for working with us! <br/>We sent you an email.',
    };
}


