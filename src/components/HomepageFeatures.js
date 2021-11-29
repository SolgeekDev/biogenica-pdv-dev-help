import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Electron + React',
    Svg: require('../../static/img/react.svg').default,
    description: (
      <>
        Aplicación desarrollada en <strong>Electron</strong> junto a todas las ventajas que proporciona una librería como <strong>React</strong>.
      </>
    ),
  },
  {
    title: 'Electron Builder',
    Svg: require('../../static/img/build.svg').default,
    description: (
      <>
        Solución para empaquetar, construir y distribuir aplicaciones de <strong>Electron</strong> para MacOs, Windows o Linux.
      </>
    ),
  },
  {
    title: 'Actualizaciones automáticas',
    Svg: require('../../static/img/release.svg').default,
    description: (
      <>
        Los usuarios reciben las actualizaciones con base en los <strong>releases</strong> de <strong>GitHub</strong>.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
