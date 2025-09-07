import TestGetSite from "@/components/tests/site-display";
import SitesList from "../../components/tests/sites-list";

export default function Page() {
    return (
        <main className="mx-auto">
            <TestGetSite />
            <SitesList />
        </main>
    )
}