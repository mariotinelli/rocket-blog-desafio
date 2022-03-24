import { Image, PostComponent, PostDate, Subtitle, Title } from "./styled"


const Post = ({src, date, title, subtitle, width, height}) => (

    <>
        <PostComponent width={width} height={height}>
            <Image src={src}/>
            <PostDate> {date} </PostDate>
            <Title> {title} </Title>
            <Subtitle> {subtitle} </Subtitle>
        </PostComponent>
    </>
 
)

export default Post
