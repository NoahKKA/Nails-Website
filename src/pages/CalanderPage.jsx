import Cal1 from "../componets/Calendar";
import Default from "./DefaultPage";
import EmailForm from "../componets/EmailForm";

export default function CalendarPage() {
    return (
        <div>
            <Default>
                <div className="max-w-7xl mx-auto">
                    <Cal1 />
                    <EmailForm/>
                </div>
            </Default>
        </div>
    );
}
