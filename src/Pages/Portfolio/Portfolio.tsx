import CreditCardAnimation from "./Components/CreditCardAnimation/CreditCardAnimation";
import PhoneAnimation from "./Components/PhoneAnimation/PhoneAnimation";

export default function Portfolio() {
    document.title = "Robert Skaar | Portfolio";
  return (
    <>
      <PhoneAnimation
        style={{
          transform: "scale(5)",
          position: "absolute",
          top: "25%",
          left: "25%",
        }}
      ></PhoneAnimation>
      <CreditCardAnimation
        style={{
          transform: "scale(5)",
          position: "absolute",
          top: "50%",
          left: "75%",
        }}
      ></CreditCardAnimation>
    </>
  );
}
