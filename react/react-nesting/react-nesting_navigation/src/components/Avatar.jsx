import Image from "./Image";
import Link from "./Link";
import avatar from "../img/avatar.jpg";

export default function Avatar() {
  return (
    <Link>
      <Image scr={avatar} alt={"Avatar"} />
    </Link>
  );
}
