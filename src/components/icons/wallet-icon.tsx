import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from "react-native-svg";

type WalletIconProps = {
  size?: number;
  active?: boolean;
};

export default function WalletIcon({
  size = 48,
  active = true,
}: WalletIconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      opacity={active ? 1 : 0.5}
    >
      <Defs>
        <LinearGradient id="front" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#E0E7FF" />
          <Stop offset="100%" stopColor="#8B9DDC" />
        </LinearGradient>
      </Defs>

      {/* Purple card */}
      <Rect x={12} y={6} width={40} height={30}
        rx={6} fill="#555375" />

      {/* Red card */}
      <Rect x={10} y={12} width={44} height={30}
        rx={6} fill="#784651" />

      {/* Green card */}
      <Rect x={8} y={18} width={48} height={30}
        rx={6} fill="#3B675E" />

      {/* Blue card */}
      <Rect x={6} y={24} width={52} height={30}
        rx={6} fill="#365578" />

      {/* Front identity card */}
      <Rect x={4} y={30} width={56} height={30}
        rx={6} fill="url(#front)"
        stroke="#E0E7FF" strokeWidth={0.8} />

      {/* Profile head */}
      <Circle cx={18} cy={40} r={5} fill="#465584" />

      {/* Profile body */}
      <Path
        d="M9 54V51Q18 41 27 51V54Z"
        fill="#465584"
      />

      {/* Identity information */}
      <Path
        d="M33 40H51 M33 46H47 M33 52H43"
        stroke="#465584"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </Svg>
  );
}