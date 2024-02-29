import Link from "next/link";

const page = ({params}) => {

    // params.vegid = undefined;
    return (
        <>


            <h1>Veg Items {params.vegid}</h1>
            <hr/>
            <button><Link href={'/products/vegies'}>Back To Vegetable Page</Link></button>

        </>
    )
}
export default page;