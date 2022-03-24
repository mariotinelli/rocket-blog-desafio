import Post from "./Post"
import { Container, SectionComponent } from "./styled"
import post1 from '../../images/post-1.png'


const Section = () => (

    <>
        <SectionComponent>
            <Container marginInline="auto" justifyContent="space-between">
                <Post 
                    width="35.5625rem"
                    height="21.4019rem"
                    src={post1}
                    date="Janeiro 04, 2022"
                    title="Começando no ReactJS em 2022"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean."
                />
                <Container width="29.4375rem" flexDirection="column" justifyContent="flex-start">
                    <Post 
                        width="29.5rem"
                        height="13.6875rem"
                        date="Janeiro 04, 2022"
                        title="Conheça as principais técnicas para conseguir uma vaga internacional em programação"
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique."
                    />
                    <Post 
                        width="29.5rem"
                        height="9.1875rem"
                        date="Janeiro 04, 2022"
                        title="Veja a evolução do Front-end na prática"
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. "
                    />
                </Container>                
            </Container>
        </SectionComponent>
    </>
 
)

export default Section
