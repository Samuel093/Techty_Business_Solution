"use client"

import EmpowerBusiness from "../component/EmpowerBusiness"
import PricingCard from "../component/PricingCard"
import ServicesSection from "../component/ServicesSection"



export default function Services() {
    return (
        <section className="bg-white">
            <ServicesSection/>
            <EmpowerBusiness/>
            <PricingCard/>
        </section>
    )
}