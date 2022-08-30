import * as functions from 'firebase-functions';
import { gettingAllUsers } from './zone/parse';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest(
  async (request, response) => {
    try {
      const u = await gettingAllUsers();
      if (u) {
        console.log('THe u:', u);
        // functions.logger.info('Hello logs!', { structuredData: true });
        // response.send('Hello from Firebase!').json({ sup: u });
        response.json({ sup: u });
      }
    } catch (error) {
      // response.send('Task failed').json({ error: error });
      console.log('ERROR occured:', error);
    }
  }
);
