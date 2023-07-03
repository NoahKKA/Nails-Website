import Cal1 from "../componets/Calendar";
import Default from "./DefaultPage";
import EmailForm from "../componets/EmailForm";

export default function CalendarPage(){
    return (
        <div>
            <Default>
                <Cal1/>
                <EmailForm/>
            </Default>
        </div>
        
    )
}