namespace akhilasiripurapu_1_d02;
using { cuid } from '@sap/cds/common';

@assert.unique: { customerMessageID: [customerMessageID] }
entity CustomerMessages : cuid {
  customerMessageID: Integer @mandatory;
  titleEnglish: String(100);
  customerName: String(100);
  productName: String(100);
  summaryEnglish: String(500);
  messageCategory: String(50);
  messageUrgency: String(20);
  messageSentiment: String(20);
  titleCustomerLanguage: String(100);
  customerId: String(20);
  productId: String(20);
  summaryCustomerLanguage: String(500);
  originatingCountry: String(50);
  sourceLanguage: String(20);
  fullMessageCustomerLanguage: String(5000);
  fullMessageEnglish: String(5000);
  suggestedResponseEnglish: String(5000);
  suggestedResponseCustomerLanguage: String(5000);
}

