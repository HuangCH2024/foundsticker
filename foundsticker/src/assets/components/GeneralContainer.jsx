import '/public/css/components_main.css';

function GeneralContainer({children}) {

    return (
        <>
            <div className="inline-block">{children}</div>
        </>
    )
}

export default GeneralContainer;