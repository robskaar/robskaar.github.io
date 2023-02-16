import ScrollPrompt from "../../../Pages/Portfolio/Components/ScrollPrompt/ScrollPrompt";
import styles from "./SnappyScroll.module.css";

export interface ScrollItem {
  id: string;
  item: JSX.Element;
}
export enum ScrollDirection {
  Vertical,
}

interface SnappyScrollProps {
  hasPrompt?: boolean;
  scrollItems: ScrollItem[];
  scrollDirection: ScrollDirection;
}

export default function SnappyScroll(props: SnappyScrollProps) {
  document.title = "Robert Skaar | Portfolio";

  return (
    <div
      id="scrollCon"
      className={`${styles.scrollContainer} `}
    >
      {props.hasPrompt ? (
        <section className={`${styles.scrollPromptContainer}`}>
          <ScrollPrompt scrollToId="#phone"></ScrollPrompt>
        </section>
      ) : undefined}

      {props.scrollItems.map((scrollItem) => {
        return (
          <div
            key={scrollItem.id}
            id={scrollItem.id}
            className={`${styles.scrollItem} `}
          >
            {scrollItem.item}
          </div>
        );
      })}
    </div>
  );
}
