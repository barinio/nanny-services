import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBq7lt5JK8T_hrBighxjGX7MgqGf5pWmOA',
  authDomain: 'fir-babysitters.firebaseapp.com',
  databaseURL:
    'https://fir-babysitters-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'fir-babysitters',
  storageBucket: 'fir-babysitters.appspot.com',
  messagingSenderId: '168392521459',
  appId: '1:168392521459:web:a2afa1502509c028ece986',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
