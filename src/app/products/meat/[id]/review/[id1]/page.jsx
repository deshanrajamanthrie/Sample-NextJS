
/*http://localhost:3000/products/meat/100/review/200*/


const page = ({params}) => {

    return (
        <>
            <h1>meat Item is {params.id} and it has {params.id1}</h1>
        </>
    );

}
export default page;