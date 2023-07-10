import Cal1 from "../componets/Calendar";
import Default from "./DefaultPage";
import EmailForm from "../componets/EmailForm";

export default function CalendarPage() {
    return (
        <div className="bg-green-100">
            <Default>
                <div className="max-w-7xl mx-auto ">
                <h1 className="my-20 text-center">See When We Free!</h1>
                    <Cal1 />
                    <EmailForm/>
                </div>
            </Default>
        </div>
    );
}
