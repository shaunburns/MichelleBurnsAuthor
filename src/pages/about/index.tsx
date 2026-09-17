import React from 'react';
import Layout from '@theme/Layout';

import styles from './styles.module.css';

export default function About() {
  return (
    <Layout title="About" description="About Me" wrapperClassName={styles.aboutLayout}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
          flexDirection: 'column', 
          width: '50vw',
        }}>
        <p>
          Michelle is a lifelong enthusiast of fantasy literature whose passion for immersive storytelling has inspired her to contribute her own voice to the genre she has loved for decades. In 2025, she made the bold decision to pursue a new career path as an author, embarking on the creation of The Psycharium, the first novel in a planned three-book fantasy series.
        </p>
        <p>
          An avid reader and dedicated storyteller, Michelle believes in the transformative power of books to spark imagination, curiosity, and connection. Her love of literature extends beyond her own writing, as she shares that passion with her children through a cherished nightly tradition of reading together. By fostering a love of books in the next generation, she hopes to inspire the same sense of wonder and adventure that has shaped her own life.
        </p>
        <p>
          Through her writing, Michelle aims to craft compelling worlds, memorable characters, and meaningful stories that resonate with readers while honoring the genre that first ignited her imagination.
        </p>
      </div>
    </Layout>
  );
}
