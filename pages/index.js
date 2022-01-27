import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Here is basic Next JS app, please imagine that you are building an IMDB clone. Please do the following;</p>
                <ul>
                    <li>Render a list of available movies (found in the /public/movieList dir) then center and style the content</li>
                    <li>Redesign the landing page (this page), add some photos, and make it look more appealing</li>
                </ul>

                <Link href="/movies">Movie List</Link>
            </section>
        </Layout>
    );
}
