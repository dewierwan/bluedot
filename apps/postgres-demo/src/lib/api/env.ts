import { validateEnv } from '@bluedot/utils';

const env = validateEnv({
  required: [
    'APP_NAME',
    'AIRTABLE_PERSONAL_ACCESS_TOKEN',
    'PG_URL',
    'ALERTS_SLACK_CHANNEL_ID',
    'ALERTS_SLACK_BOT_TOKEN',
  ],
});

export default env;
