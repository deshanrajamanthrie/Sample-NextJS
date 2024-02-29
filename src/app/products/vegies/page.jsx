import {linkGc} from "next/dist/client/app-link-gc";
import Link from "next/link";

const page = () => {
    const veges = [
        {
            id: 1,
            veginame: "Carrot"
        },
        {
            id: 2,
            veginame: "Beetrut"
        },
        {
            id: 3,
            veginame: "Potataoes"
        },
        {
            id: 4,
            veginame: "gova"
        },
        {
            id: 5,
            veginame: "Bellpapers"
        },
        {
            id: 6,
            veginame: "Goraka"
        }
    ];

    return (
        <>
            <h1>vegetable Page </h1>
            <br/><br/>
            <ul>
                {veges.map((v) => {
                    return (
                        <li><Link href={`/products/vegies/${v.veginame}`}>{v.veginame}</Link></li>
                    )

                })}
            </ul>
        </>
    )
}
export default page;