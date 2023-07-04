import Cal1 from "../componets/Calendar";
import Default from "./DefaultPage";
<<<<<<< HEAD

export default function CalendarPage() {
    return (
        <div>
            <Default>
                <div className="max-w-7xl mx-auto">
                    <Cal1 />
                </div>
=======
import EmailForm from "../componets/EmailForm";

export default function CalendarPage(){
    return (
        <div>
            <Default>
                <Cal1/>
                <EmailForm/>
>>>>>>> 49286c94c65cf086fbddcf0eb1b8e70cc29b6fb5
            </Default>
        </div>
    );
}
