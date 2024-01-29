'use client'

import Page from '@/Components/Organism/Page/Page';
import {ThemeProvider} from '../contexts/themes';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <main style={{overflowX: 'hidden'}}>
      <ThemeProvider >
        <Page />
      </ThemeProvider>
    </main>
  );
}
