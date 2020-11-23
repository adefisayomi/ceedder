import Head from 'next/head'
const Header = ({title}) => {
return (
    <Head>
        <title>DevelopedByClace | {title}</title>
        <meta name = 'Author' content = 'Adefisayomi oluwole' />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0" />
    </Head>
)
}

export default Header