
import DataFetch from "./component/DataFetch"
import EmpowerBusiness from "./component/EmpowerBusiness"
import Hero from "./component/Hero"
import HeroSolutions from "./component/HeroSolutions"
import NewsUpdates from "./component/NewsUpdates"
import PersonalizeBusinessSection from "./component/Personalize Business Section"
import UnleashSection from "./component/UnleashSection"




export default function Home(){
  return (
    <main className="bg-white">
     <Hero/>
     <EmpowerBusiness/>
     <UnleashSection/>
     <HeroSolutions/>
     <PersonalizeBusinessSection/>
     <DataFetch/>
     <NewsUpdates/>
     

    </main>
  )
}