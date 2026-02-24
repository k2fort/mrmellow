import Client from 'shopify-buy';

// חיבור לחנות הבדיקה שלך
export const client = Client.buildClient({
    domain: 'my-test-store-123456789132.myshopify.com',
    storefrontAccessToken: '0ffa1035682956d46a9f8e20f6612791'
});

