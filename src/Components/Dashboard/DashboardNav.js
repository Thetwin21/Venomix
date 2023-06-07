import bank from "../../assets/Bank.svg";
import home from "../../assets/Home.svg";
import stats from "../../assets/Stats.svg";
import travel from "../../assets/Travel.svg";
import settings from "../../assets/settings.svg";

const DashboardNav = () => {
  return (
      <div>
          <div className='md:w-auto w-80 flex md:flex-col flex-row justify-between items-center bg-gray-100 rounded-full mb-5 md:p-5 p-2 md:space-y-12 space-y-0 md:space-x-0 space-x-2'>
              <img src={home} alt=""/>
              <img src={travel} alt="" />
              <img src={stats} alt="" />
              <img src={bank} alt="" />
              <img src={settings} alt="" />
          </div>
    </div>
  )
}

export default DashboardNav