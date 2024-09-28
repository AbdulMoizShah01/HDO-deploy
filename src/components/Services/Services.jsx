import React from 'react';
import styled from 'styled-components';
import TopBar from '../TopBar';
import Header from '../Header';
import img32 from '.././assets/imageCarousel/32.jpg';
import img58 from '.././assets/imageCarousel/2.jpeg';
import img17 from '.././assets/imageCarousel/17.jfif';

// Define color variables
const primaryColor = '#0d3b66'; // Dark Blue
const secondaryColor = '#faa916'; // Golden Yellow
const lightColor = '#f4f4f4'; // Light Grey
const darkTextColor = '#333';
const lightTextColor = '#555';

// Styled components
const Container = styled.div`
  padding: 2rem;
  background-color: ${lightColor};
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: ${primaryColor};
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

const Subtitle = styled.h3`
  font-size: 2.2rem;
  color: ${secondaryColor};
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${lightTextColor};
  margin-bottom: 1.5rem;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 2rem;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${lightTextColor};
  margin-bottom: 0.5rem;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin: 2rem 0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Image import placeholder, update the path accordingly
const imagePlaceholder = "https://via.placeholder.com/1200x500";

const Services = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Container>
        <Section>
          <Title>HDO’s Rehabilitation Services</Title>
          <Paragraph>
          Under the international and domestic legal and human rights instruments every torture survivor has the inherent right to medical, psychological and social rehabilitation. Persons Deprived of Liberty (PDLs) after suffering cruel, inhuman and degrading treatment or punishment, complain of different physiological, psychological after affects together with multiple socio-economic complications. 
          For their reintegration in society as normal person, HDO’s clinicians provide medical care, psychotherapeutic support, socio-economic reintegration and legal assistance to both primary and secondary victims of torture. 
          </Paragraph>
          <Image src={img32} alt="Rehabilitation Services" />
        </Section>

        <Section>
          <Subtitle>Medical Assistance</Subtitle>
          <Paragraph>
          Registered victims (both inside prisons and outside) are offered free of cost medical examination and treatment for the medical complications to start with. For chronic and serious medical complications, the victims are referred to other service providers/public sector hospitals for tertiary care.   
          Together with medication (if needed) the victims are offered physiotherapy and helped taking part in different physical relaxation exercises and sports after initial treatment that serves as therapy both for their physical as well as psychological rehabilitation. 
          </Paragraph>
          <Image src={img58} alt="Medical Assistance" />
        </Section>

        <Section>
          <Subtitle>Psychotherapeutic Support</Subtitle>
          <Paragraph>
          The persons deprived of liberty (PDLs), a majority of who from poor background, after undergoing maltreatment during custody either for investigation purpose or otherwise suffer from different psychological complications. The untreated and unattended victims serve as one of the contributing factors to offenses like drug peddling & addiction, domestic violence, child abuse and survival crime and some time serious nature felonies.
          To help them regaining their lost positive strengths and human dignity, HDO’s psychologists and trained counselors provide them psycho-therapeutic support by applying different technique and therapies <strong>in line with Global Standards on Rehabilitation of Torture Victims (GSR) and globally time-tested mental health related approaches. Psychiatric and referral support for tertiary care is also offered. Online psycho social and legal counseling are also part of HDO’s rehab services.</strong>

          </Paragraph>
          <Image src={img17} alt="Psychotherapeutic Support" />
        </Section>

        <Section>
          <Subtitle>Socio-Economic Reintegration</Subtitle>
          <Paragraph>
          Majority of registered victims become economically inactive after suffering from different psychological consequences, psychosomatic problems which contribute to rising poverty index within their families and society as well. The untreated mental health problems as a result of inhuman and degrading treatment also encourage criminal tendencies and recidivism that again expose them to custodial abuses. The registered torture victims (TVs) are imparted different vocational skills during their detention period.
          Dress making and designing, beads craft are the common skills they are taught to achieve economic empowerment during and post detention life. 
          Women incarcerators are provided training of embroidery work, dress making, beautician courses. They are connected to the credit lending organizations for post detention start ups and also linked with local market, enabling to support their expenses incurring on litigation, medication and nutritious food of their choice during jail stay. 
          </Paragraph>
          <Image src='/imageCarousel/52.jfif' alt="Socio-Economic Reintegration" />
        </Section>

        <Section>
          <Subtitle>Legal Aid/Counseling</Subtitle>
          <Paragraph>
          Entering into a tiresomely long legal battle either for taking a perpetrator to justice or pleading oneself not guilty is always a costly, distressing and depression prone exercise for the poor torture victims. The victims suffer from double trauma after landing in the jail and criminal litigation especially when they find themselves hapless to bear the cost of treatment and contesting their cases. HDO’s legal teams, volunteers and paraprofessional guide them about legal matters, extend them free legal aid in securing bails, filing appeals at the next higher judicial forums and file complaints of torture against the LEA’s personnel. 
          </Paragraph>
          <Image src='/imageCarousel/38.jpg' alt="Legal Aid" />
        </Section>

        <Section>
          <Subtitle>Formal and Non-Formal Education Services</Subtitle>
          <Paragraph>
          Keeping in mind the importance of education for rehabilitation of jail based TVs, the HDO launched Non-Formal Formal Education Program from Haripur jail in 2006 and later extended to other prisons in the working area. Following the approval of district government and Education department, the “NFE School for Prisoners” has been since its launch helping the torture survivors reentering their families and society with rejuvenated spirit and rebuilt life through engagement in positive activities.
          HDO’s team of literacy experts skillfully designed the education program in a way that both non-formal and formal education syllabus have been interlinked. The juveniles, adolescent, adult men and women inmates and accompanying minor children of mother prisoners are equally benefiting from this program. They are also engaged in computer literacy program. 

          </Paragraph>
          <Image src='/imageCarousel/27.jpg' alt="Education Services" />
        </Section>

        <Section>
          <Subtitle>Sport Activities</Subtitle>
          <Paragraph>
          HDO also encourage and facilitate different sports activities for making the juvenile and adolescent inmates, engaged in constructive activities as part of rehabilitation program. Besides encouraging Physical fitness and health counseling, Cricket, football, volleyball and table tennis matches between the inmates are arranged inside the jail.
          </Paragraph>
          <Image src='/imageCarousel/33.jpg' alt="Sport Activities" />
        </Section>

        <Section>
          <Subtitle>Educational, Recreational Services for Minor Children</Subtitle>
          <Paragraph>
            As the accompanying minor children of mother inmates are another highly vulnerable group with chances of becoming recipients of trauma, stigma and behaviors their parents and fellow inmates carry, the HDO from the very outset focused its attention on the education, health and moral wellbeing of these children. Both formal and non formal education services and basic level know how of computer, are provided to these minors.
            While for their physical and recreational development HDO has installed play land facilities like seesaw, slides, swings etc, so that they could use their spare time enjoying recreational facilities rather than spending time with women prisoners.     
            The women psychologist and trained teachers take daily classes and educate them about religious & moral practices. Like other registered survivors/needy inmates these children are also provided with hygiene kits quarterly besides occasional support in the shape of nutritious food.
          </Paragraph>
          <Image src='/imageCarousel/54.jfif' alt="Recreational Services for Children" />
        </Section>

        <Section>
          <Subtitle>Prevention Strategy</Subtitle>
          <Paragraph>
            For prevention/denunciation of custodial abuses and advocating for the rights of detainees, HDO has devised three pronged strategy, <br/>1) Sensitizing/educating key stakeholders of society including police, prison staff, parliamentarians , lawyers , judicial officers/magistrates, medical practitioners, teachers, students, journalists, political activists, religious leaders and human rights defenders for playing their role in torture free detention in line with provisions of UNCAT, Istanbul Protocol, and domestic laws, <br/>2) Educating general public and detainees about the rights of persons in conflict with law enshrined in domestic and international instruments of human rights including UNCAT, ICCPR, CRC, UN standard Minimum Rules for the Treatment of Prisoners through, IEC material, sessions, seminars, discussions, walks, print and electronic media and theatrical performances,<br/>3) Lobbying for implementation of anti torture laws, putting in place district based monitoring mechanism aimed at protection of human rights of persons deprived of liberty.
            Advocacy for implementation of Torture and Custodial Death (prevention & punishment) Act 2022, ratification of OPCAT, integrating GSR and Istanbul Protocol in medical/legal investigation and reparation system-equipping investigation staff with non-torturous methods of investigation, documentation and investigation of torture complaints, ban on manufacturing and trade of weapons used in torture, are the key activities aiming to eradication of custodial abuses. 
          </Paragraph>
          <Image src='/imageCarousel/45.jpg' alt="Prevention Strategy" />
        </Section>

        <Section>
          <Subtitle>Gender-Based Violence & Rehabilitation</Subtitle>
          <Paragraph>
          Discrimination based on gender is a crime most common in our society and the women are denied of their rights from family to society one or the other way. Their deprivation from inviolable rights to equal respect and human dignity often expose them to physical and mental harms that prove detrimental to their socio-economic mainstreaming and development. Forced and child marriages, domestic violence, honor killing, rape, abductions, deprivation from right of inheritance and other marital/family nature disputes are few to name among the gross human rights violations that the women folk of this region frequently face.  
          HDO’s caregivers provide free of cost medical and psychological treatments and help the women victims of GBV to reintegrate into society with enhanced self esteem.
          Besides advocating for the rights of women at different forums the HDO offer free of cost services to survivors of Gender Based Violence. Together with educating them about their legal rights these women are helped in challenging their perpetrators and securing their legal rights through the court of law with the help of HDO’s lawyers group.
          </Paragraph>
          <Image src='/imageCarousel/26.jpg' alt="Gender-Based Violence" />
        </Section>

        <Section>
          <Subtitle>Child Abuse & Rehabilitation</Subtitle>
          <Paragraph>
          Child abuse is also widespread and the children are vulnerable to abuses of different kinds and nature. Corporal punishment in school setting, child labor & trafficking, under age marriages, sexual assaults are the rampant crime against children. Being member of district based Child Rights Committee and District Vigilance Committee, HDO’s team in collaboration of district administration identify the cases of child labor, help them recover and prosecute the violators.   HDO offer psycho-medical rehabilitation facilities to the child victims of sexual abuse, trafficking in person, kidnapping and child labor. The lawyers’ group provide free of cost legal services to the victims.
          </Paragraph>
          <Image src='https://media.mehrnews.com/d/2018/01/08/4/2683514.jpg' alt="Child Abuse & Rehabilitation" />
        </Section>
      </Container>
    </>
  );
};

export default Services;
