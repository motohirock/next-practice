import Layout from '../components/MyLayout'

const Page = () => <p>Hello Next.js</p>

const indexPageContent = <p>Hello Next.js</p>

export default function Index() {
    return <Layout content={indexPageContent} />
}
