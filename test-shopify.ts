import Client from 'shopify-buy';
import fetch from 'node-fetch';

global.fetch = fetch as any;

const client = Client.buildClient({
    domain: 'my-test-store-123456789132.myshopify.com',
    storefrontAccessToken: '0ffa1035682956d46a9f8e20f6612791'
});

client.product.fetchAll().then((products) => {
    products.forEach(p => {
        console.log(`Title: ${p.title}`);
        console.log(`ProductType: ${p.productType}`);
        console.log(`Vendor: ${p.vendor}`);
        console.log(`Tags: ${JSON.stringify(p.tags)}`);
        console.log('---');
    });
}).catch(console.error);
