import { getServerSession } from "next-auth";
import Container from "../ui/container"; 
import { authOption } from "@/libs/next-auth";
import UserAvatar from "./user-avatar/user-avatar";
const Navbar = async () => {

    const session = await getServerSession(authOption)

    return ( 
    <nav className="border-b py-3">
        <Container isFullHeight className="flex items-center justify-between">
            <div></div>
            <div className="flex items-center justify-normal gap-x-6">
                <UserAvatar session={session} />
            </div>
        </Container>
    </nav>
    
    );
}
 
export default Navbar;