import React from 'react';

import Main from '../layouts/Main';

import Photo from '../components/Gallery/Photo';
import data from '../data/photos';

const Gallery = () => (
  <Main
    title="Gallery"
    description="Some of my favorite photos"
  >
    <article className="post" id="gallery">
      <header>
        <div className="title">
          <h2 data-testid="heading">Gallery</h2>
          <p>Some of my favorite photos and memories</p>
        </div>
      </header>
      {data.map((photo) => (
        <Photo data={photo} />
      ))}
    </article>
  </Main>
);

export default Gallery;
