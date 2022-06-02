import styles from "./Card.module.css";

export enum CardBackgroundFill {
  DEFAULT,
  AVATAR,
  COMPACT,
  FILL,
}

export enum CardType {
  DEFAULT,
  HOVERING,
  VERTICAL,
  SKEWLEFT,
  SKEWRIGHT,
  SQUARE,
}

interface CardConfig {
  background?: { fill?: CardBackgroundFill };
  type?: CardType;
}

interface CardProps {
  header: string | JSX.Element;
  imageBase64: string;
  info: string | JSX.Element;
  footer: string | JSX.Element;
  config?: CardConfig;
}

/**
 * @todo: extract header,image,information & footer into own component
 * @returns A Card component
 */
export default function Card(props: CardProps) {
  var type: CardType = CardType.DEFAULT;
  var background: CardBackgroundFill = CardBackgroundFill.DEFAULT;
  if (props.config?.type) type = props.config.type;
  if (props.config?.background?.fill) background = props.config.background.fill;

  return (
    <div className={styles.card__wrapper}>
      <div className={styles.card__header}>{props.header}</div>
      <div className={styles.card__image}>
        <input src={props.imageBase64} />
      </div>
      <div className={styles.card__information}>{props.info}</div>
      <div className={styles.card__footer}>{props.footer}</div>
    </div>
  );
}
