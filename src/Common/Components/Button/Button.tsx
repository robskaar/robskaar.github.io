export enum ButtonState {
  DISABLED,
  FOCUSED,
  HOVER,
  ACTIVE,
}

export enum ButtonUsage {
  CTA,
  NORMAL,
  LINK,
}
interface ButtonProps {
  config: { usage: ButtonUsage; state: ButtonState };
}

export default function Button(props: ButtonProps) {
  return props.config.usage === ButtonUsage.CTA ? (
    <CTAButton></CTAButton>
  ) : props.config.usage === ButtonUsage.LINK ? (
    <LinkButton></LinkButton>
  ) : (
    <NormalButton></NormalButton>
  );
}

function CTAButton() {
  return <div></div>;
}

function LinkButton() {
  return <div></div>;
}
function NormalButton() {
  return <div></div>;
}
