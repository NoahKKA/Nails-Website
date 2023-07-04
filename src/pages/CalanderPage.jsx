import Cal1 from "../componets/Calendar";
import Default from "./DefaultPage";

export default function CalendarPage() {
    return (
        <div>
            <Default>
                <div className="max-w-7xl mx-auto">
                    <Cal1 />
                </div>
            </Default>
        </div>
    );
}
