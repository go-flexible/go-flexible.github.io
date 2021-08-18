import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Flexible',
    Svg: require('../../static/img/iana-lettering.svg').default,
    description: (
      <>
        "My way or the highway!" - Not with flex!<br></br>
        There is no "flex way", continue building your applications the way you
        prefer.
      </>
    ),
  },
  {
    title: 'Simple',
    Svg: require('../../static/img/undraw_programmer_imem.svg').default,
    description: (
      <>
        Flex focuses on providing you with simple primitives to help you build
        Go services.
      </>
    ),
  },
  {
    title: 'Extensible',
    Svg: require('../../static/img/undraw_monitor_iqpq.svg').default,
    description: (
      <>
        Create your own Flex workers and extend to behaviour to create whatever
        you need.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
