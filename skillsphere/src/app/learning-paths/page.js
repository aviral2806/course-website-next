import LearningPathLandingPage from "../../components/page/LearningPathLandingPage"
import { sanityClient } from "../../../lib/sanity"
import { getAllLPQuery } from "@/sanity/queries"

export const page = async () => {
    const learningPaths = await sanityClient.fetch(getAllLPQuery)
    console.log(learningPaths, "learningPaths")
    return <LearningPathLandingPage learningPaths={learningPaths} />
}

export default page

