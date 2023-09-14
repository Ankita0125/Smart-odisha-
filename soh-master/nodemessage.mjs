// Find your Service Plan ID and API Token at dashboard.sinch.com/sms/api/rest
// Find your Sinch numbers at dashboard.sinch.com/numbers/your-numbers/numbers
const SERVICE_PLAN_ID = '2f7297d1a89d415d8f3ba487874d53d7';
const API_TOKEN = '2c689255b4aa4b6384b4f269f933e004';
const SINCH_NUMBER = '+447520651766';
const TO_NUMBER = '+919122472169';

import fetch from 'node-fetch';

async function run() {
    const resp = await fetch(
        'https://us.sms.api.sinch.com/xms/v1/' + SERVICE_PLAN_ID + '/batches', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + API_TOKEN
            },
            body: JSON.stringify({
                from: SINCH_NUMBER,
                to: [TO_NUMBER],
                body: 'Thankyou for contacting us,we provide immediate garbage pickup.We have Recieved your location.Reply With Ok to confirm.'
            })
        }
    );

    const data = await resp.json();
    console.log(data);
}

run();