import RealEstateIcon from '../../src/assets/icons/real-estate.svg'
import ConsultationIcon from '../../src/assets/icons/consultation.svg'
import EnergyIcon from '../../src/assets/icons/energy.svg'
import { REGULAR_PATHS } from '../routes/paths'

export const companyServices = [
    {
        icon: ConsultationIcon,
        title: "IT Consultation",
        paragraph: "Boost your business with our IT solutions: software development, cybersecurity, cloud services, and consulting.",
        link: REGULAR_PATHS.IT_CONSULTATION,
    },
    {
        icon: RealEstateIcon,
        title: "Real Estate",
        paragraph: "Explore our real estate services: residential sales, commercial properties, investments, and management.",
        link: REGULAR_PATHS.REAL_ESTATE,
    },
    {
        icon: EnergyIcon,
        title: "Energy",
        paragraph: "Optimize energy with our renewable solutions, expert consulting, and comprehensive management services.",
        link: REGULAR_PATHS.ENERGY,
    }
]