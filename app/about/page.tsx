"use client"

import AboutSection from "../component/AboutSection"
import FounderMessage from "../component/FounderMessage"
import TeamSection from "../component/TeamSection"


export default function About() {
    return (
        <section className="bg-white">
            <AboutSection/>
            <FounderMessage/>
            <TeamSection/>
        </section>
    )
}