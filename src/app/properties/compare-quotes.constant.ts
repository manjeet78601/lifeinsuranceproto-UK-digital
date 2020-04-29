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
                        value: '',
                        tooltip:'Rates go up as you get older, so insurance companies require us to ask this.'
                    },
                    {
                        QUESTIONTEXT: 'Sex',
                        INPUT_TYPE: 'GENDERBTN',
                        ICON: true,
                        value: '',
                        tooltip:'Go by your sex assigned at birth. Insurance rates vary by sex.'
                    },
                    {
                        QUESTIONTEXT: 'Height',
                        INPUT_TYPE: 'HEIGHTSLIDER',
                        HEIGHTVALUE: 1,
                        HEIGHTUNIT_FT: 'ft',
                        HEIGHTUNIT_INCH: 'in',
                        ICON: false,
                        value: '',
                        tooltip:'Insurance companies derive your BMI (body-mass index) from your height and weight. BMI is used as a rough estimate of body fat.'
                    },
                    {
                        QUESTIONTEXT: 'Weight',
                        INPUT_TYPE: 'WEIGHTSLIDER',
                        WEIGHTVALUE: 1,
                        WEIGHTUNIT: 'lbs',
                        ICON: false,
                        value: '',
                        tooltip:'Insurance companies derive your BMI (body-mass index) from your height and weight. BMI is used as a rough estimate of body fat.'
                    },
                    {
                        QUESTIONTEXT: 'Have you used any tobacco products in the last 5 years?',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        tooltip:'Vaping products containing nicotine is a tobacco product. Insurance companies have different rates for tobacco users.'
                    },
                    {
                        QUESTIONTEXT: 'Have you used any marijuana products in the last 5 years?',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        tooltip:'Most insurance companies will have different rates for marijuana users.'
                    },

                ]
            },
            {
                TITLE: 'Treatments and Medications',
                QUESTIONS: [
                    {
                        QUESTIONTEXT: 'Have you ever been treated for and/or taken medication for any of the following?',
                    },
                    {
                        QUESTIONTEXT: 'Alchol Abuse',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: '',
                        tooltip:'Active alcoholics will unlikely be approved for life insurance. Those who have abused alcohol in the past may be required to complete a program and must wait a prescribed period of time before becoming eligible for approval.'
                    },
                    {
                        QUESTIONTEXT: 'Anxiety',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: '',
                        tooltip:'Insurance rates depend your state of health and foreseeable health risks. Anxiety poses health risks, such as weakened immunity, eating disorders, depression, IBS, high blood pressure, and more.'
                    },
                    {
                        QUESTIONTEXT: 'Asthma',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: '',
                        tooltip:'Insurance rates depend your state of health and foreseeable health risks. Uncontrolled asthma could lead to high blood pressure and problems with lungs.'
                    },
                    {
                        QUESTIONTEXT: 'Cancer',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: '',
                        tooltip:'Patients undergoing treatments will likely not be covered, but former cancer patients with a declared remission may be eligible for life insurance.'
                    },
                    {
                        QUESTIONTEXT: 'Depression',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: '',
                        tooltip:'Insurance rates depend your state of health and foreseeable health risks. Depression poses health risks, such as weakened immunity, high blood pressure, cardiovascular issues, and more.'
                    },
                    {
                        QUESTIONTEXT: 'Diabetes',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: '',
                        tooltip:'People with have their diabetes under control will most likely be approved for life insurance, but rates may be affected. However, diabetics may have difficulty obtaining approval if they have additional health conditions.'
                    },
                    {
                        QUESTIONTEXT: 'Drug Abuse',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: '',
                        tooltip:'People who are actively abusing drugs will not get approval for life insurance. Those who have abused drugs in the past may be required to complete a program and must wait a prescribed period of time before becoming eligible for approval.'
                    },
                    {
                        QUESTIONTEXT: 'Heart Attack',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: '',
                        tooltip:'Rating depends on your current state of health, how many years it’s been since the heart attack(s), the severity of the heart attack(s), and what treatments you took since the heart attack(s).'
                    },
                    {
                        QUESTIONTEXT: 'High Blood Pressure',
                        INPUT_TYPE: 'TOGGLEBTN',
                        value: '',
                        ICON: true,
                        note: '',
                        tooltip:'Ratings depend your current state of health, the age of onset, the severity of symptoms, and what treatments you are taking.'
                    },
                    {
                        QUESTIONTEXT: 'High Cholesterol',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: '',
                        tooltip:'Ratings depend on your total cholesterol and your total cholesterol-to-HDL ratio. The ratings will also depend on the age of onset.'
                    },
                    {
                        QUESTIONTEXT: 'Sleep Apnea',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: '',
                        tooltip:'Ratings depend on the Apnea-hypopnea index, the age of onset, and what treatments you are taking.'
                    },
                    {
                        QUESTIONTEXT: 'Stroke',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: '',
                        tooltip:'Rating depends on your current state of health, how many years it’s been since the stroke(s), the severity of the stroke(s), and what treatments you took since the stroke(s).'
                    },
                    {
                        QUESTIONTEXT: 'Other serious Conditions',
                        INPUT_TYPE: 'TOGGLEBTN',
                        ICON: true,
                        value: '',
                        note: '',
                        tooltip:'Other health conditions may impact insurance rating.'
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
                        ICON: true,
                        tooltip:'Your rating may be impacted by complicated family history. '
                    },
                    {
                        QUESTIONTEXT: 'Has your driver’s license been suspended or revoked,' +
                        ' or had more than one traffic ticket or accident in the past five years?',
                        INPUT_TYPE: 'TOGGLEBTN',
                        value: '',
                        ICON: true,
                        tooltip:'Insurance companies assess your risk of injury or death.'
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


