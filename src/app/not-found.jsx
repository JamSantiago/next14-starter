import Link from "next/link";

const NotFound = () => {
    return ( 
        <>
            <h2>Not Found</h2>
            <p>Página não encontrada</p>
            <Link href="/">Return Homepage</Link>
        </>
     );
}
 
export default NotFound;