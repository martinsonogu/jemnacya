import React from 'react'
import Header from '../../components/SmallHeader'
import Title from '../../components/Title'
import { companyServices } from '../../components/constants'
import Card from '../../components/Card'

const Services = () => {
  return (
      <div className='w-full mt-10 lg:mt-36 '>
          <div className='flex flex-col items-center'>
          <Header text="Services"/>
          <Title className='text-primary_color text-center mt-4 '>We Provide  Professional <br/>
            Business Solutions.
            </Title>
          <p className=' lg:mt-[70px] mt-[30px] lg:w-2/3 w-full lg:font-barlow font-montserrat text-header_color_black lg:font-medium font-normal lg:text-2xl font-lg'>
          At JEMNACYA Services Limited, we offer a comprehensive range of tailored solutions to meet
           your needs. From IT consultation and real estate services to energy management and beyond,
            we're committed to delivering excellence in every aspect of our work. Explore our services
             to discover how we can empower your business to thrive.
          </p>
          <div className='flex items-center flex-col lg:flex-row lg:justify-between  w-full mt-4 lg:mt-10 '>
            {companyServices.map(service => (
              <Card
                key={service.title}
                icon={service.icon}
                title={service.title}
                paragraph={service.paragraph}
                link={service.link}
              />
            ))}
          </div>
          </div>
          
      </div>
  )
}

export default Services