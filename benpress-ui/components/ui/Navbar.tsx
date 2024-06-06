import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import logo from "/img/logo.png";

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 text-white py-4 px-4 flex justify-between">
      <Link href="/">
        <Image src={logo} alt="Benpress" width={40} />
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none w-[40px] h-[40px]">
          <Avatar>
            <AvatarFallback className="text-black">BK</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/accountinfo">Account Info</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/billing">Billing</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/subscription">Subscription</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
