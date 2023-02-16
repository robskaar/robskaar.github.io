import SnappyScroll, {
  ScrollDirection,
  ScrollItem,
} from "../../Common/Components/SnappyScroll/SnappyScroll";
import CreditCardAnimation from "./Components/CreditCardAnimation/CreditCardAnimation";
import PhoneAnimation from "./Components/PhoneAnimation/PhoneAnimation";

export default function Portfolio() {
  document.title = "Robert Skaar | Portfolio";

  var scrollItems: ScrollItem[] = [];
  scrollItems.push({
    id: "#phone",
    item: <PhoneAnimation></PhoneAnimation>,
  });
  scrollItems.push({
    id: "#creditcard",
    item: <CreditCardAnimation></CreditCardAnimation>,
  });

  return (
    <SnappyScroll
      scrollDirection={ScrollDirection.Vertical}
      hasPrompt={true}
      scrollItems={scrollItems}
    ></SnappyScroll>
  );
}
