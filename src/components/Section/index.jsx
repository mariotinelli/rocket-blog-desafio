import Post from "./Post"
import { Container, SectionComponent } from "./styled"
import post1 from '../../images/post-1.png'
import post2 from '../../images/post-2.png'
import post3 from '../../images/post-3.png'
import post4 from '../../images/post-4.png'


const Section = () => (

    <>
        <SectionComponent>
            <Container marginInline="auto" justifyContent="space-between">
                <Post 
                    width="35.5625rem"
                    height="34.1306rem"
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
            <Container marginInline="auto" justifyContent="space-between">
                <Post 
                    src={post2}
                    date="Janeiro 04, 2022"
                    title="10 dicas para conseguir a vaga desejada"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
                />
                <Post 
                    src={post3}
                    date="Janeiro 04, 2022"
                    title="Deixe seu código mais semântico com essas dicas"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
                />
                <Post 
                    src={post4}
                    date="Janeiro 04, 2022"
                    title="Use essas dicas nas suas aplicações mobile"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
                />
            </Container>
        </SectionComponent>
    </>
 
)

export default Section
