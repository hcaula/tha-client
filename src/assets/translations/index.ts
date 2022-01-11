const translations = {
  en: {
    common: {
      Footer: {
        encryptionDisclaimer:
          "Your financial information is encrypted and secure. We'll never share or sell any of your personal data."
      },
      Wizard: {
        continueButton: 'Continue',
        returnButton: 'Return'
      }
    },
    App: {
      Wizard: {
        HomeScreen: {
          title: "Let's find out your <1>financial wellness score</1>.",
          Title: {
            main: 'Financial wellness test',
            description: 'Enter your financial information below'
          },
          Inputs: {
            annualIncome: 'Annual income',
            monthlyCosts: 'Monthly costs'
          }
        },
        ResultScreen: {
          title: "Here's your <1>financial wellness score</1>:",
          Results: {
            'title-HEALTHY': 'Congratulations!',
            'title-MEDIUM': 'There is room for improvement.',
            'title-LOW': 'Caution!',
            description:
              'Your financial wellness score is <1>{{healthScore}}</1>.'
          },
          HealthScore: {
            HEALTHY: 'Healthy',
            MEDIUM: 'Average',
            LOW: 'Unhealthy'
          }
        }
      }
    }
  }
}

export default translations
