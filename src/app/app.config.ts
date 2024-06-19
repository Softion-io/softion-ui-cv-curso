import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'mi-primer-proyecto-en-fi-cadb8',
        appId: '1:599910641502:web:b639d3aeb303ad8901e9cf',
        storageBucket: 'mi-primer-proyecto-en-fi-cadb8.appspot.com',
        apiKey: 'AIzaSyBoBUvVcms5iiFfjaQsDpLw6gm8JkGF8Qg',
        authDomain: 'mi-primer-proyecto-en-fi-cadb8.firebaseapp.com',
        messagingSenderId: '599910641502',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
};
