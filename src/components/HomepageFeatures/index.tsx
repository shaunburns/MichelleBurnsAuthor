import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'About Me',
    Svg: require('@site/static/img/about.svg').default,
    description: (
      <>
        Find out more about Michelle Burns.
      </>
    ),
    link: '/about',
  },
  {
    title: 'Books',
    Svg: require('@site/static/img/books-stack-of-three.svg').default,
    description: (
      <>
        Discover the books that have been published or coming soon.
      </>
    ),
    link: '/docs/the-psycharium',
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/blog-writing.svg').default,
    description: (
      <>
        Latest news.
      </>
    ),
    link: '/blog',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureParent)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--lg"
          to={link}>
          {title}
        </Link>
      </div>
    </div>
    
  );
}

export default function HomepageFeatures(): ReactNode {
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
