import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'The Coffee is Not What it Seems',
    image: require('@site/static/img/coffee.png').default,
    description: (
      <>
        "Damn good coffee" isn't just a phrase - it's a vital resource. 
        Keep your FBI agent alert with the finest cup of joe this side 
        of Twin Peaks. Just remember: every cup comes with its own secrets.
      </>
    ),
  },
  {
    title: 'Through the Darkness of Future Past',
    image: require('@site/static/img/nap.png').default,
    description: (
      <>
        Navigate through the mysterious world of resource management. 
        Like Agent Cooper's dreams, every decision you make will affect 
        your agent's fate. The owls are watching, and so are we.
      </>
    ),
  },
  {
    title: 'The Donuts Will Show You the Way',
    image: require('@site/static/img/donut.png').default,
    description: (
      <>
        In the words of Agent Cooper: "Every day, once a day, give yourself 
        a present." Boost your agent's mood with donuts from the Double R Diner. 
        Just don't let the Log Lady catch you slacking!
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} src={image} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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