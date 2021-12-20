
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <DashboardCard></DashboardCard>
            </div>
        </div>
    );
}

export default Dashboard;