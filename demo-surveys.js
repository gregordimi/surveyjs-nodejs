const surveys = [{
  "id": "1",
  "name": "Product Feedback Survey",
  "json": {
    "pages": [{
      "elements": [{
        "type": "matrix",
        "name": "Quality",
        "title": "Please indicate if you agree or disagree with the following statements",
        "columns": [{
          "value": 1,
          "text": "Strongly disagree" 
        }, {
          "value": 2,
          "text": "Disagree"
        }, {
          "value": 3,
          "text": "Neutral"
        }, {
          "value": 4,
          "text": "Agree"
        }, {
          "value": 5,
          "text": "Strongly agree"
        }],
        "rows": [{
          "value": "affordable",
          "text": "Product is affordable"
        }, {
          "value": "does what it claims",
          "text": "Product does what it claims"
        }, {
          "value": "better then others",
          "text": "Product is better than other products on the market"
        }, {
          "value": "easy to use",
          "text": "Product is easy to use"
        }]
      }, {
        "type": "rating",
        "name": "satisfaction",
        "title": "How satisfied are you with the product?",
        "mininumRateDescription": "Not satisfied",
        "maximumRateDescription": "Completely satisfied"
      }, {
        "type": "rating",
        "name": "recommend friends",
        "visibleIf": "{satisfaction} > 3",
        "title": "How likely are you to recommend the product to a friend or colleague?",
        "mininumRateDescription": "Won't recommend",
        "maximumRateDescription": "Will recommend"
      }, {
        "type": "comment",
        "name": "suggestions",
        "title": "What would make you more satisfied with the product?"
      }]
    }, {
      "elements": [{
        "type": "radiogroup",
        "name": "price to competitors",
        "title": "Compared to our competitors, do you feel the product is",
        "choices": [
          "Less expensive",
          "Priced about the same",
          "More expensive",
          "Not sure"
        ]
      }, {
        "type": "radiogroup",
        "name": "price",
        "title": "Do you feel our current price is merited by our product?",
        "choices": [
          "correct|Yes, the price is about right",
          "low|No, the price is too low",
          "high|No, the price is too high"
        ]
      }, {
        "type": "multipletext",
        "name": "pricelimit",
        "title": "What is the... ",
        "items": [{
          "name": "mostamount",
          "title": "Most amount you would pay for a product like ours"
        }, {
          "name": "leastamount",
          "title": "The least amount you would feel comfortable paying"
        }]
      }]
    }, {
      "elements": [{
        "type": "text",
        "name": "email",
        "title": 'Thank you for taking our survey. Please enter your email address and press the "Submit" button.'
      }]
    }]
  }
}, {
  "id": "2",
  "name": "Customer and their partner income survey",
  "json": {
    "completeText": "Finish",
    "pageNextText": "Continue",
    "pagePrevText": "Previous",
    "pages": [{
      "elements": [{
        "type": "panel",
        "elements": [{
          "type": "html",
          "name": "income_intro",
          "html":
            "Income. In this section, you will be asked about your current employment status and other ways you and your partner receive income. It will be handy to have the following in front of you: payslip (for employment details), latest statement from any payments (from Centrelink or other authority), a current Centrelink Schedule for any account-based pension from super, annuities, or other income stream products that you may own. If you don't have a current one, you can get these schedules by contacting your income stream provider."
        }],
        "name": "panel1"
      }],
      "name": "page0"
    }, {
      "elements": [{
        "type": "panel",
        "elements": [{
          "type": "radiogroup",
          "choices": [
            "Married",
            "In a registered relationship",
            "Living with my partner",
            "Widowed",
            "Single"
          ],
          "name": "maritalstatus_c",
          "title": " "
        }],
        "name": "panel13",
        "title": "What is your marital status?"
      }],
      "name": "page1"
    }, {
      "elements": [{
        "type": "panel",
        "elements": [{
          "type": "panel",
          "elements": [{
            "type": "radiogroup",
            "choices": [{
              "value": "1",
              "text": "Yes"
            }, {
              "value": "0",
              "text": "No"
            }],
            "colCount": 2,
            "isRequired": true,
            "name": "member_receives_income_from_employment",
            "title": " "
          }, {
            "type": "checkbox",
            "name": "member_type_of_employment",
            "visible": false,
            "visibleIf": "{member_receives_income_from_employment} =1",
            "title": "  ",
            "isRequired": true,
            "choices": [
              "Self-employed",
              "Other types of employment"
            ]
          }],
          "name": "panel2",
          "title": "You"
        }, {
          "type": "panel",
          "elements": [{
            "type": "radiogroup",
            "choices": [{
              "value": "1",
              "text": "Yes"
            }, {
              "value": "0",
              "text": "No"
            }],
            "colCount": 2,
            "isRequired": true,
            "name": "partner_receives_income_from_employment",
            "title": " "
          }, {
            "type": "checkbox",
            "name": "partner_type_of_employment",
            "visible": false,
            "visibleIf": "{partner_receives_income_from_employment} =1",
            "title": " ",
            "isRequired": true,
            "choices": [
              "Self-employed",
              "Other types of employment"
            ]
          }],
          "name": "panel1",
          "startWithNewLine": false,
          "title": "Your Partner",
          "visibleIf":
            "{maritalstatus_c} = 'Married' or {maritalstatus_c} = 'In a registered relationship' or {maritalstatus_c} = 'Living with my partner'"
        }],
        "name": "panel5",
        "title": "Do you and/or your partner currently receive income from employment?"
      }],
      "name": "page2"
    }, {
      "elements": [{
        "type": "panel",
        "elements": [{
          "type": "panel",
          "elements": [{
            "type": "paneldynamic",
            "minPanelCount": 1,
            "name": "member_array_employer_names",
            "valueName": "member_array_employer",
            "title": "Enter information about your employers",
            "panelAddText": "Add another employer",
            "panelCount": 1,
            "templateElements": [{
              "type": "text",
              "name": "member_employer_name",
              "valueName": "name",
              "title": "Employer name"
            }]
          }],
          "name": "panel2",
          "title": "You",
          "visible": false,
          "visibleIf": "{member_type_of_employment} contains 'Other types of employment'"
        }, {
          "type": "panel",
          "elements": [{
            "type": "paneldynamic",
            "minPanelCount": 1,
            "name": "partner_array_employer_names",
            "valueName": "partner_array_employer",
            "title": "Enter information about employers of your partner",
            "panelAddText": "Add another employer",
            "panelCount": 1,
            "templateElements": [{
              "type": "text",
              "name": "partner_employer_name",
              "valueName": "name",
              "title": "Employer name"
            }]
          }],
          "name": "panel8",
          "startWithNewLine": false,
          "title": "Your Partner",
          "visible": false,
          "visibleIf":
            "{partner_type_of_employment} contains 'Other types of employment'"
        }],
        "name": "panel6",
        "title": "Employers"
      }],
      "name": "page3.1",
      "visible": false,
      "visibleIf":
        "{member_type_of_employment} contains 'Other types of employment' or {partner_type_of_employment} contains 'Other types of employment'"
    }, {
      "elements": [{
        "type": "panel",
        "elements": [{
          "type": "panel",
          "elements": [{
            "type": "paneldynamic",
            "renderMode": "progressTop",
            "allowAddPanel": false,
            "allowRemovePanel": false,
            "name": "member_array_employer_info",
            "title": "Your employers",
            "valueName": "member_array_employer",
            "panelCount": 1,
            "templateElements": [{
              "type": "panel",
              "name": "panel_member_employer_address",
              "title": "Contacts",
              "elements": [{
                "type": "text",
                "name": "member_employer_address",
                "valueName": "address",
                "title": "Address:"
              }, {
                "type": "text",
                "name": "member_employer_phone",
                "valueName": "phone",
                "title": "Phone number:"
              }, {
                "type": "text",
                "name": "member_employer_abn",
                "valueName": "abn",
                "title": "ABN:"
              }]
            }, {
              "type": "panel",
              "name": "panel_member_employer_role",
              "title": "Are you a full time worker?",
              "elements": [{
                "type": "radiogroup",
                "choices": [
                  "Full-time",
                  "Part-time",
                  "Casual",
                  "Seasonal"
                ],
                "name": "member_employer_role",
                "title": " ",
                "valueName": "role"
              }]
            }, {
              "type": "panel",
              "name": "panel_member_employer_hours_work",
              "title": "How many hours do you work?",
              "elements": [{
                "type": "text",
                "inputType": "number",
                "name": "member_employer_hours_worked",
                "valueName": "hours_worked",
                "title": "Hours:"
              }, {
                "type": "dropdown",
                "name": "member_employer_hours_worked_frequency",
                "title": "Work frequency:",
                "valueName": "hours_worked_frequency",
                "startWithNewLine": false,
                "defaultValue": "Day",
                "choices": [
                  "Day",
                  "Week",
                  "Fortnight",
                  "Month",
                  "Year"
                ]
              }]
            }, {
              "type": "panel",
              "name": "panel_member_employer_income",
              "title": "What is your income?",
              "elements": [{
                "type": "text",
                "inputType": "number",
                "name": "member_employer_income",
                "valueName": "income",
                "title": "Income:"
              }, {
                "type": "dropdown",
                "name": "member_employer_income_frequency",
                "title": "Income frequency:",
                "valueName": "income_frequency",
                "startWithNewLine": false,
                "defaultValue": "Month",
                "choices": [
                  "Day",
                  "Week",
                  "Fortnight",
                  "Month",
                  "Year"
                ]
              }]
            }],
          "templateTitle": "Employer name: {panel.name}"
        }],
        "name": "panel17",
        "title": "You",
        "visibleIf": "{member_type_of_employment} contains 'Other types of employment'"
      }, {
        "type": "panel",
        "elements": [{
          "type": "paneldynamic",
          "renderMode": "progressTop",
          "allowAddPanel": false,
          "allowRemovePanel": false,
          "name": "partner_array_employer_info",
          "title": "Employers",
          "valueName": "partner_array_employer",
          "panelCount": 1,
          "templateElements": [{
            "type": "panel",
            "name": "panel_partner_employer_address",
            "title": "Contacts",
            "elements": [{
              "type": "text",
              "name": "partner_employer_address",
              "valueName": "address",
              "title": "Address:"
            }, {
              "type": "text",
              "name": "partner_employer_phone",
              "valueName": "phone",
              "title": "Phone number:"
            }, {
              "type": "text",
              "name": "partner_employer_abn",
              "valueName": "abn",
              "title": "ABN:"
            }]
          }, {
            "type": "panel",
            "name": "panel_partner_employer_role",
            "title": "Are you a full time worker?",
            "elements": [{
              "type": "radiogroup",
              "choices": [
                "Full-time",
                "Part-time",
                "Casual",
                "Seasonal"
              ],
              "name": "partner_employer_role",
              "title": "Your role",
              "valueName": "role"
            }]
          }, {
            "type": "panel",
            "name": "panel_partner_employer_hours_work",
            "title": "How many hours do you work?",
            "elements": [{
              "type": "text",
              "inputType": "number",
              "name": "partner_employer_hours_worked",
              "valueName": "hours_worked",
              "title": "Hours:"
            }, {
              "type": "dropdown",
              "name": "partner_employer_hours_worked_frequency",
              "valueName": "hours_worked_frequency",
              "title": "Work frequency:",
              "startWithNewLine": false,
              "defaultValue": "Day",
              "choices": [
                "Day",
                "Week",
                "Fortnight",
                "Month",
                "Year"
              ]
            }]
          }, {
            "type": "panel",
            "name": "panel_partner_employer_income",
            "title": "What is your income?",
            "elements": [{
              "type": "text",
              "inputType": "number",
              "name": "partner_employer_income",
              "valueName": "income",
              "title": "Income:"
            }, {
              "type": "dropdown",
              "name": "partner_employer_income_frequency",
              "valueName": "income_frequency",
              "title": "Income frequency:",
              "startWithNewLine": false,
              "defaultValue": "Month",
              "choices": [
                "Day",
                "Week",
                "Fortnight",
                "Month",
                "Year"
              ]
            }]
          }],
          "templateTitle": "Employer name: {panel.name}"
        }],
        "name": "panel18",
        "startWithNewLine": false,
        "title": "You partner",
        "visibleIf": "{partner_type_of_employment} contains 'Other types of employment'"
      }],
      "name": "panel16",
      "title": "Enter information about your employers"
    }],
    "name": "page3.2",
    "visibleIf":
      "{member_type_of_employment} contains 'Other types of employment' or {partner_type_of_employment} contains 'Other types of employment'"
  }, {
    "elements": [{
      "type": "panel",
      "elements": [{
        "type": "panel",
        "elements": [{
          "type": "radiogroup",
          "choices": [{
            "value": "1",
            "text": "Yes"
          }, {
            "value": "0",
            "text": "No"
          }],
          "colCount": 2,
          "isRequired": true,
          "name": "member_receive_fringe_benefits",
          "title": " "
        }, {
          "type": "panel",
          "elements": [{
            "type": "text",
            "name": "member_fringe_benefits_type"
          }, {
            "type": "text",
            "name": "member_fringe_benefits_value"
          }, {
            "type": "radiogroup",
            "choices": ["Grossed up", "Not grossed up"],
            "name": "member_fringe_benefits_grossing"
          }],
          "name": "panel11",
          "visible": false,
          "visibleIf": "{member_receive_fringe_benefits} = 1"
        }],
        "name": "panel2",
        "title": "You",
        "visible": false,
        "visibleIf": "{member_type_of_employment} contains 'Other types of employment'"
      }, {
        "type": "panel",
        "elements": [{
          "type": "radiogroup",
          "choices": [{
            "value": "1",
            "text": "Yes"
          }, {
            "value": "0",
            "text": "No"
          }],
          "colCount": 2,
          "isRequired": true,
          "name": "partner_receive_fringe_benefits",
          "title": " "
        }, {
          "type": "panel",
          "elements": [{
            "type": "text",
            "name": "partner_fringe_benefits_type"
          }, {
            "type": "text",
            "name": "partner_fringe_benefits_value"
          }, {
            "type": "radiogroup",
            "choices": ["Grossed up", "Not grossed up"],
            "name": "partner_fringe_benefits_grossing"
          }],
          "name": "panel12",
          "visible": false,
          "visibleIf": "{partner_receive_fringe_benefits} = 1"
        }],
        "name": "panel1",
        "startWithNewLine": false,
        "title": "Your Partner",
        "visible": false,
        "visibleIf": "{partner_type_of_employment} contains 'Other types of employment'"
      }],
      "name": "panel9",
      "title": "Do any of your employers provide you with fringe benefits?"
    }],
      "name": "page4",
      "visible": false,
      "visibleIf":
        "{member_type_of_employment} contains 'Other types of employment' or {partner_type_of_employment} contains 'Other types of employment'"
    }, {
      "elements": [{
        "type": "panel",
        "elements": [{
          "type": "panel",
          "elements": [{
            "type": "radiogroup",
            "choices": [{
              "value": "1",
              "text": "Yes"
            }, {
              "value": "0",
              "text": "No"
            }],
            "colCount": 2,
            "isRequired": true,
            "name": "member_seasonal_intermittent_or_contract_work",
            "title": " "
          }],
          "name": "panel2",
          "title": "You",
          "visible": false,
          "visibleIf": "{member_receives_income_from_employment} = 1"
        }, {
          "type": "panel",
          "elements": [{
            "type": "radiogroup",
            "choices": [{
              "value": "1",
              "text": "Yes"
            }, {
              "value": "0",
              "text": "No"
            }],
            "colCount": 2,
            "isRequired": true,
            "name": "partner_seasonal_intermittent_or_contract_work",
            "title": " "
          }],
          "name": "panel1",
          "startWithNewLine": false,
          "title": "Your Partner",
          "visible": false,
          "visibleIf": "{partner_receives_income_from_employment} =1 "
        }],
        "name": "panel10",
        "title": "In the last 6 months, have you done any seasonal, intermittent or contract work?"
      }],
      "name": "page5",
      "visible": false,
      "visibleIf": "{member_receives_income_from_employment} = 1 or {partner_receives_income_from_employment} =1 "
    }],
    "requiredText": "",
    "showQuestionNumbers": "off",
    "storeOthersAsComment": false
  }
  
},
{
  "id": "3",
  "name": "Producte test 123",
  "json": {
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "GDPR",
        "title": {
         "default": "Do you agree with the GDPR statement?",
         "de": "test"
        },
        "hideNumber": true,
        "isRequired": true,
        "choices": [
         {
          "value": "1",
          "text": {
           "default": "Yes",
           "de": "test"
          }
         },
         {
          "value": "2",
          "text": {
           "default": "No",
           "de": "test"
          }
         }
        ]
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "radiogroup",
        "name": "Gender",
        "title": "To which gender do you most identify?",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
         "Male",
         "Female",
         "Non-binary",
         "Other"
        ]
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "text",
        "name": "Age",
        "title": "What is your age?",
        "hideNumber": true,
        "isRequired": true,
        "inputType": "number",
        "min": 0,
        "max": 100
       }
      ]
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "checkbox",
        "name": "PurchasedCategories",
        "title": "Which of the following products have you purchased personally in the past 3 months?",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
         "Clothes (e.g. jeans, t-shirts, jackets, etc)",
         "Accessories (e.g. jewelry, watches, etc)",
         "Shoes (e.g. sneakers, boots, sandals, etc)",
         "Skin care products (e.g. face cream, face wash, etc)",
         "Hair care products (e.g. shampoos, hair oils, etc)",
         "Fine fragrances (e.g. perfumes, eau de toilette, etc)",
         "Make-up (e.g. mascara, eye-shadows, etc) [show only to women]",
         "Grooming products (e.g. razor, beard oil, etc) [show only to men]"
        ],
        "choicesOrder": "random",
        "hasNone": true,
        "noneText": "None of the above"
       }
      ]
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "checkbox",
        "name": "PurchasedClothing",
        "title": "And which of the following clothing products have you bought in the past 3 months?",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
         {
          "value": "1",
          "text": "Jumpers"
         },
         {
          "value": "2",
          "text": "Sweaters"
         },
         {
          "value": "3",
          "text": "Blouses"
         },
         {
          "value": "4",
          "text": "T-Shirts"
         },
         {
          "value": "5",
          "text": "Shirts"
         },
         {
          "value": "6",
          "text": "Trousers"
         },
         {
          "value": "7",
          "text": "Jeans"
         },
         {
          "value": "8",
          "text": "Dresses [show only to women]"
         },
         {
          "value": "9",
          "text": "Skirts [show only to women]"
         },
         {
          "value": "10",
          "text": "Coats"
         },
         {
          "value": "11",
          "text": "Jackets"
         }
        ],
        "choicesOrder": "random",
        "hasOther": true,
        "hasNone": true,
        "noneText": "None of the above",
        "otherText": "Other, please specify:"
       }
      ]
     },
     {
      "name": "page6",
      "elements": [
       {
        "type": "checkbox",
        "name": "PurchasedShoes",
        "title": "And which of the following shoe types have you bought in the past 3 months?",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
         "Sneakers",
         "Ankle boots",
         "Boots",
         "Flat shoes",
         "Lace-up shoes",
         "Loafers",
         "Sandals",
         "Mules [show only to women]",
         "Pumps [show only to women]",
         "High-heels [show only to women]",
         "Outdoor shoes",
         "Other, please specify"
        ]
       }
      ]
     },
     {
      "name": "page7",
      "elements": [
       {
        "type": "checkbox",
        "name": "PurchaseLocation",
        "title": "Please indicate where you have purchased each of the following products: Clothing Shoes",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
         "Online retailer",
         "Online brand website",
         "Clothing",
         "Shoes",
         "Department store",
         "Retailer store",
         "Brand store",
         "Other"
        ]
       }
      ]
     },
     {
      "name": "page8",
      "elements": [
       {
        "type": "checkbox",
        "name": "BrandAwareness",
        "title": "Which of the following clothing / shoes brands do you know?",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
         "[insert relevant brand list per country - maximum 30 items]",
         "None of the above"
        ]
       }
      ]
     },
     {
      "name": "page9",
      "elements": [
       {
        "type": "checkbox",
        "name": "BrandConsideration",
        "title": "And which brands would you consider buying from  the next time you are buying clothes / shoes?",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
         "[insert brands selected in S7]",
         "None of the above"
        ]
       }
      ]
     },
     {
      "name": "page10",
      "elements": [
       {
        "type": "checkbox",
        "name": "BrandPurchase",
        "title": "And which of the following brands have you bought?",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
         "[insert brands selected in S7]",
         "None of the above"
        ]
       }
      ]
     },
     {
      "name": "page11",
      "elements": [
       {
        "type": "expression",
        "name": "InfoWelcome",
        "title": "Awesome, you have qualified for the survey! It is about evaluating different clothing / shoes pieces and it should take you around 10 minutes to complete. Please keep in mind there are no right or wrong answers - we value your opinion and your preferences. Have fun!",
        "hideNumber": true,
        "isRequired": true
       }
      ]
     },
     {
      "name": "page12",
      "elements": [
       {
        "type": "expression",
        "name": "LastPurchase",
        "title": "Before we proceed, can you tell us more about the last time you bought [insert relevant product category as selected in S5]?",
        "hideNumber": true,
        "isRequired": true
       }
      ]
     },
     {
      "name": "page13",
      "elements": [
       {
        "type": "expression",
        "name": "InfoPurchase",
        "title": "Think about your need to buy that particular piece, the store, its ambiance, what you do like and dislike about the product, anything that comes to mind.",
        "hideNumber": true,
        "isRequired": true
       }
      ]
     },
     {
      "name": "page14",
      "elements": [
       {
        "type": "expression",
        "name": "InfoMaxDiff",
        "title": "In this exercise, we will show you clothing / shoes pieces one by one, and we will ask you to indicate whether you would like the product or not. Simply click “Yes” if you like the product and “No” if you wouldn’t.",
        "hideNumber": true,
        "isRequired": true
       }
      ]
     },
     {
      "name": "page15",
      "elements": [
       {
        "type": "radiogroup",
        "name": "MaxDiffSwipe",
        "title": "Do you like this product?",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
         "Yes",
         "No"
        ]
       }
      ]
     },
     {
      "name": "page16",
      "elements": [
       {
        "type": "checkbox",
        "name": "MaxDiff1",
        "title": "Which of these products are you most likely to buy?",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
         "Product 1",
         "Product 2",
         "Product 3",
         "Product 4"
        ]
       }
      ]
     },
     {
      "name": "page17",
      "elements": [
       {
        "type": "expression",
        "name": "Intermezzo",
        "title": "Great work, you are almost done! [insert number of remaining screens] to go!",
        "hideNumber": true,
        "isRequired": true
       }
      ]
     },
     {
      "name": "page18",
      "elements": [
       {
        "type": "checkbox",
        "name": "MaxDiff2",
        "title": "Which of these products are you most likely to buy?",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
         "Product 1",
         "Product 2",
         "Product 3",
         "Product 4"
        ]
       }
      ]
     },
     {
      "name": "page19",
      "elements": [
       {
        "type": "expression",
        "name": "InfoMaxDiffEnd",
        "title": "Great, you are more than half-ready with the survey. In the next few questions, we will ask you more detailed feedback about some of the products you evaluated before. Again, please give your honest opinion and have fun!",
        "hideNumber": true,
        "isRequired": true
       }
      ]
     },
     {
      "name": "page20",
      "elements": [
       {
        "type": "checkbox",
        "name": "ProductDeepDive",
        "title": "Could you tell us, what do you like about this product?",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
         "It looks premium",
         "It looks of higher quality",
         "It looks sustainable",
         "It has a nice cut",
         "It has a nice fabric",
         "It is fashionable",
         "It is timeless",
         "It can match well other pieces I have",
         "Something else, please specify:"
        ]
       }
      ]
     },
     {
      "name": "page21",
      "elements": [
       {
        "type": "expression",
        "name": "Info",
        "title": "You are almost done, in the last few questions we just want to understand a little bit more about you and your fashion attitude in general! Thank you for your time and effort on this one!",
        "hideNumber": true,
        "isRequired": true
       }
      ]
     },
     {
      "name": "page22",
      "elements": [
       {
        "type": "matrix",
        "name": "FashionAttitude",
        "title": "Please indicate to what extent you agree or disagree about the following statements:",
        "hideNumber": true,
        "isRequired": true,
        "columns": [
         "Strongly Disagree",
         "Disagree",
         "Neutral",
         "Agree",
         "Strongly Agree"
        ],
        "rows": [
         "I buy clothes I like, regardless of fashion trends",
         "I buy clothes considering the latest fashion trends",
         "I prefer to buy well-established designer labels",
         "I like to experiment and buy from a variety of designers",
         "I like buying new clothes",
         "I prefer to buy clothes when needed",
         "It is important to me to dress nicely all the time",
         "Dressing nicely depends on the occasion"
        ]
       }
      ]
     },
     {
      "name": "page23",
      "elements": [
       {
        "type": "matrix",
        "name": "FashionImage",
        "title": "Please indicate to what extent you agree or disagree about the following statements:",
        "hideNumber": true,
        "isRequired": true,
        "columns": [
         "Strongly Disagree",
         "Disagree",
         "Neutral",
         "Agree",
         "Strongly Agree"
        ],
        "rows": [
         "My friends come to me for fashion advice",
         "I do not follow fashion trends",
         "I would spend money for high-quality garments",
         "I think it doesn't make sense spending a lot of money for clothing",
         "I am considered a trend-setter"
        ]
       }
      ]
     },
     {
      "name": "page24",
      "elements": [
       {
        "type": "radiogroup",
        "name": "FashionStyle",
        "title": "Which of these words describes you best when it comes to fashion?",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
         "Bold",
         "Adventurous",
         "Timeless",
         "Glamourous",
         "Comfortable",
         "Timid",
         "Cautious",
         "Trendy",
         "Plain",
         "Format"
        ]
       }
      ]
     }
    ],
    "showPageTitles": false,
    "showProgressBar": "top",
    "questionTitlePattern": "numTitle",
    "widthMode": "responsive"
   }
}];

const results = [{
  "id": "1",
  "data": [
    { "Quality": { "affordable": "5", "better then others": "5", "does what it claims": "5", "easy to use": "5" }, "satisfaction": 5, "recommend friends": 5, "suggestions": "I am happy!", "price to competitors": "Not sure", "price": "low", "pricelimit": { "mostamount": "100", "leastamount": "100" } },
    { "Quality": { "affordable": "3", "does what it claims": "2", "better then others": "2", "easy to use": "3" }, "satisfaction": 3, "suggestions": "better support", "price to competitors": "Not sure", "price": "high", "pricelimit": { "mostamount": "60", "leastamount": "10" } }
  ]
}, {
  "id": "2",
  "data": [
    { "member_array_employer": [{}], "partner_array_employer": [{}], "maritalstatus_c": "Married", "member_receives_income_from_employment": "0", "partner_receives_income_from_employment": "0" },
    { "member_array_employer": [{}], "partner_array_employer": [{}], "maritalstatus_c": "Single", "member_receives_income_from_employment": "1", "member_type_of_employment": ["Self-employed"], "member_seasonal_intermittent_or_contract_work": "0" }
  ]
}];

module.exports = {
  surveys: surveys,
  results: results,
  defaultName: "New Survey"
};
